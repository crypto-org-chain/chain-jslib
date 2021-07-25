/* eslint-disable no-console */
import 'mocha';
import { expect } from 'chai';
import { spawnSync, exec as childProcessExec } from 'child_process';
import { writeFileSync } from 'fs';
import { promisify } from 'util';
import stringify = require('json-stable-stringify');
import temp = require('temp');

/* eslint-disable import/first */
import Big from 'big.js';
import { CroNetwork, CroSDK } from '../../src/core/cro';
import { Network } from '../../src/network/network';
import { HDKey } from '../../src/hdkey/hdkey';
import { Secp256k1KeyPair } from '../../src/keypair/secp256k1';
import utils from '../../src/utils';
import { SignableTransactionV2 } from '../../src/transaction/v2.signable';
import { Bytes } from '../../src/utils/bytes/bytes';

const exec = promisify(childProcessExec);

const CHAIN_MAIND_PATH = process.env.OFFLINE_SIGNING_CHAIN_MAIND_PATH || './lib/e2e/offline-signing/chain-maind';
const CHAIN_MAIND_HOME_FOLDER = process.env.OFFLINE_SIGNING_CHAIN_MAIND_HOME_FOLDER || './lib/e2e/offline-signing/home';

const generateUnsignedTxWithChainMaind = async (command: string, network: Network): Promise<string> => {
    return (
        await exec(
            `${CHAIN_MAIND_PATH} \
            --home=${CHAIN_MAIND_HOME_FOLDER} \
            tx ${command} \
            --chain-id=${network.chainId} \
            --generate-only`,
        )
    ).stdout;
};

const restoreChainMaindKeySync = (name: string, mnemonics: string, hdPath: string): string => {
    const result = spawnSync(
        CHAIN_MAIND_PATH,
        [
            `--home=${CHAIN_MAIND_HOME_FOLDER}`,
            'keys',
            'add',
            name,
            '--keyring-backend=test',
            `--hd-path=${hdPath}`,
            '--recover',
        ],
        {
            input: `${mnemonics}\n`,
        },
    );
    if (result.error) {
        throw result.error;
    }
    if (result.status !== 0) {
        throw new Error(result.stderr.toString('utf8'));
    }
    console.log(result.stdout.toString('utf8'));
    return result.stdout.toString('utf8');
};

const generateAccount = (
    network: Network,
): {
    mnemonics: string;
    hdPath: string;
    keyPair: Secp256k1KeyPair;
    address: string;
} => {
    const cro = CroSDK({ network });

    const mnemonics = HDKey.generateMnemonic(12);
    const importedHDKey = HDKey.fromMnemonic(mnemonics);
    const hdPath = "m/44'/1'/0'/0/0";
    const privateKey = importedHDKey.derivePrivKey(hdPath);
    const keyPair = Secp256k1KeyPair.fromPrivKey(privateKey);
    const address = new cro.Address(keyPair).account();
    return {
        mnemonics,
        hdPath,
        keyPair,
        address,
    };
};

const signUnsignedTxWithChainMaind = async (
    unsignedTx: string,
    signer: {
        name: string;
        address: string;
        accountNumber: Big;
        accountSequence: Big;
    },
    chainId: string,
): Promise<string> => {
    const unsignTxTmpFile = temp.openSync();
    writeFileSync(unsignTxTmpFile.path, unsignedTx);
    const signedTx = (
        await exec(
            `${CHAIN_MAIND_PATH} \
                --home=${CHAIN_MAIND_HOME_FOLDER} \
                tx sign ${unsignTxTmpFile.path} \
                --offline \
                --from=${signer.address} \
                --account-number=${signer.accountNumber} \
                --sequence=${signer.accountSequence} \
                --chain-id=${chainId} \
                --keyring-backend=test`,
        )
    ).stdout;

    const signedTxTmpFile = temp.openSync();
    writeFileSync(signedTxTmpFile.path, signedTx);
    const signedTxHex = (
        await exec(
            `${CHAIN_MAIND_PATH} \
                --home=${CHAIN_MAIND_HOME_FOLDER} \
                tx encode ${signedTxTmpFile.path}`,
        )
    ).stdout;

    return Bytes.fromBase64String(signedTxHex.trim()).toHexString();
};

const unifyJSON = (anyContent: string): string => stringify(JSON.parse(anyContent));

describe('Offline Signing chain-maind vs JSlib', function () {
    it('MsgSend should be consistent', async function () {
        const network = CroNetwork.Mainnet;
        const cro = CroSDK({
            network,
        });
        const fromAccount = generateAccount(network);
        const toAccount = generateAccount(network);

        const walletName = Date.now().toString();
        restoreChainMaindKeySync(walletName, fromAccount.mnemonics, fromAccount.hdPath);

        let amount = new utils.Big(1);
        let timeoutHeight = new utils.Big(1);
        let memo = 'random memo !@#$%^&*()_+';
        let accountNumber = new utils.Big(1);
        let accountSequence = new utils.Big(1);

        // eslint-disable-next-line no-constant-condition
        for (let i = 0; i < 1000; i += 1) {
            console.log(`
Testing Parameters:
Amount: ${amount.toFixed(0)}
TimeoutHeight: ${timeoutHeight.toFixed(0)}
Memo: ${memo}
AccountNumber: ${accountNumber.toFixed(0)}
AccountSequence: ${accountSequence.toFixed(0)}`);
            // eslint-disable-next-line no-await-in-loop
            const unsignedTxWithChainMaind = await generateUnsignedTxWithChainMaind(
                `bank send ${fromAccount.address} ${toAccount.address} ${amount.toFixed(0)}${
                    network.coin.baseDenom
                } --fees=${amount.toFixed(0)}${
                    network.coin.baseDenom
                } --memo="${memo}" --timeout-height=${timeoutHeight.toFixed(0)} --from=${walletName}`,
                network,
            );
            // eslint-disable-next-line no-await-in-loop
            const signedTxWithChainMaind = await signUnsignedTxWithChainMaind(
                unsignedTxWithChainMaind,
                {
                    name: walletName,
                    address: fromAccount.address,
                    accountNumber,
                    accountSequence,
                },
                network.chainId,
            );

            const rawTx = new cro.v2.RawTransactionV2()
                .setFees([cro.v2.CoinV2.fromBaseUnit(amount.toFixed(0))])
                .setMemo(memo)
                .setTimeOutHeight(timeoutHeight.toFixed(0))
                .appendMessage(
                    new cro.v2.bank.MsgSendV2({
                        fromAddress: fromAccount.address,
                        toAddress: toAccount.address,
                        amount: [cro.v2.CoinV2.fromBaseUnit(amount.toFixed(0))],
                    }),
                );
            const unsignedTxWithJSLib = rawTx.toCosmosJSON();
            expect(unifyJSON(unsignedTxWithJSLib)).to.deep.eq(unifyJSON(unsignedTxWithChainMaind));

            rawTx.addSigner({
                publicKey: fromAccount.keyPair.getPubKey(),
                accountNumber,
                accountSequence,
            });
            const unsignedTx = rawTx.toCosmosJSON();
            const signerInfo = rawTx.exportSignerAccounts();

            const signableTx = new SignableTransactionV2({
                rawTxJSON: unsignedTx,
                network,
                signerAccounts: cro.v2.RawTransactionV2.parseSignerAccounts(signerInfo),
            });
            const signedTxWithJSLib = signableTx
                .setSignature(0, fromAccount.keyPair.sign(signableTx.toSignDoc(0)))
                .toSigned();
            expect(signedTxWithJSLib.getHexEncoded()).to.eq(signedTxWithChainMaind);

            amount = amount.add('1000000000000');
            timeoutHeight = timeoutHeight.add('1000000000000');
            memo = 'random memo !@#$%^&*()_+';
            accountNumber = accountNumber.add('1000000000000');
            accountSequence = accountSequence.add('1000000000000');
        }
    });
});
