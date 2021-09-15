//@ts-check
/* eslint-disable */
import 'mocha';
import Big from 'big.js';
import { expect } from 'chai';
import { assertIsBroadcastTxSuccess } from '@cosmjs/stargate';
import axios from 'axios';

import { HDKey } from '../src/hdkey/hdkey';
import { Secp256k1KeyPair } from '../src/keypair/secp256k1';
import { CroSDK } from '../src/core/cro';
import { Network } from '../src/network/network';
import { SIGN_MODE } from '../src/transaction/types';
import Long from 'long';

const customNetwork: Network = {
    defaultNodeUrl: 'http://localhost',
    chainId: 'testnet',
    addressPrefix: 'tcro',
    validatorAddressPrefix: 'tcrocncl',
    validatorPubKeyPrefix: 'tcrocnclconspub',
    coin: {
        baseDenom: 'basetcro',
        croDenom: 'tcro',
    },
    bip44Path: {
        coinType: 1,
        account: 0,
    },
    rpcUrl: 'http://localhost:26657',
};

const testNode = {
    httpEndpoint: 'localhost',
    httpPort: '26657',
};

const axiosConfig = {
    method: 'get',
    url: `http://${testNode.httpEndpoint}:${testNode.httpPort}`,
};
const env = {
    validatorOperatorAddress: process.env.VALIDATOR_OPERATOR_ADDRESS || '',
    mnemonic: {
        communityAccount:
            process.env.COMMUNITY_ACCOUNT_MNEMONIC ||
            'play release domain walnut sword reason few fish sketch radio fancy since zebra exhibit boring army green suggest behind correct neither useful cruel type',
        reserveAccount:
            process.env.RESERVE_ACCOUNT_MNEMONIC ||
            'improve speak symbol relax eyebrow vintage load grief huge wild doctor novel use borrow inch sweet symptom script nuclear drastic green corn phrase razor',
        ecosystemAccount:
            process.env.ECOSYSTEM_ACCOUNT_MNEMONIC ||
            'rubber rocket snack author mad ship core physical arrange language enrich story lamp move dynamic into game marine ramp trap anchor beyond mystery gun',
        validatorAccount:
            process.env.VALIDATOR_ACCOUNT_MNEMONIC ||
            'whale dry improve icon perfect sauce lesson wire oblige gadget exhaust toast spin enforce labor logic giraffe feed project weasel absent build reject life',
        randomEmptyAccount: HDKey.generateMnemonic(12),
    },
};

describe('e2e tests for IBC transactions', function () {
    it('[IBC] Creates, signs(protobuf) and broadcasts a `MsgTransfer` IBC Tx', async function () {
        const hdKey = HDKey.fromMnemonic(env.mnemonic.validatorAccount);
        const privKey = hdKey.derivePrivKey(`m/44'/${customNetwork.bip44Path.coinType}'/0'/0/0`);

        const keyPair = Secp256k1KeyPair.fromPrivKey(privKey);

        const cro = CroSDK({ network: customNetwork });
        const address1 = new cro.Address(keyPair.getPubKey());
        const tokenAmount = cro.v2.CoinV2.fromCustomAmountDenom('123456789', 'denomone');
        const timeoutHeight = {
            revisionNumber: Long.fromString('0'),
            revisionHeight: Long.fromString('1708515'),
        };
        const msgTransferIBCProtobuf = new cro.ibc.MsgTransfer({
            sourcePort: 'transfer',
            sourceChannel: 'channel-0',
            token: tokenAmount,
            sender: 'tcro1rm0etys4apkaa4v3w462q72rr74he8trfchsfn',
            receiver: 'tcro1rm0etys4apkaa4v3w462q72rr74he8trfchsfn',
            timeoutHeight,
            timeoutTimestampInNanoSeconds: Long.fromString('1999620640362229420996'),
        });

        const client = await cro.CroClient.connect();

        expect(client).to.be.not.undefined;
        const account = await client.getAccount(address1.account());
        const anySigner = {
            publicKey: keyPair.getPubKey(),
            accountNumber: new Big(account!.accountNumber),
            accountSequence: new Big(account!.sequence),
        };
        const rawTx = new cro.RawTransaction();
        const signableTx = rawTx.appendMessage(msgTransferIBCProtobuf).addSigner(anySigner).toSignable();

        const signedTx = signableTx.setSignature(0, keyPair.sign(signableTx.toSignDocumentHash(0))).toSigned();

        const broadcast = await axios.get('broadcast_tx_commit', {
            baseURL: axiosConfig.url,
            params: { tx: `0x${signedTx.getHexEncoded()}` },
        });
        expect(broadcast.status).to.eq(200);
        expect(broadcast.data).to.be.not.undefined;
        assertIsBroadcastTxSuccess(broadcast.data);
    });
    it('[IBC] `MsgTransfer` IBC Tx using Amino', async function () {
        const hdKey = HDKey.fromMnemonic(env.mnemonic.validatorAccount);
        const privKey = hdKey.derivePrivKey(`m/44'/${customNetwork.bip44Path.coinType}'/0'/0/0`);

        const keyPair = Secp256k1KeyPair.fromPrivKey(privKey);

        const cro = CroSDK({ network: customNetwork });
        const address1 = new cro.Address(keyPair.getPubKey());
        const tokenAmount = cro.v2.CoinV2.fromCustomAmountDenom('123456789', 'denomone');
        const timeoutHeight = {
            revisionNumber: Long.fromString('0'),
            revisionHeight: Long.fromString('1708515'),
        };
        const msgTransferIBCProtobuf = new cro.ibc.MsgTransfer({
            sourcePort: 'transfer',
            sourceChannel: 'channel-0',
            token: tokenAmount,
            sender: 'tcro1rm0etys4apkaa4v3w462q72rr74he8trfchsfn',
            receiver: 'tcro1rm0etys4apkaa4v3w462q72rr74he8trfchsfn',
            timeoutHeight,
            timeoutTimestampInNanoSeconds: Long.fromString('1999620640362229420996'),
        });

        const client = await cro.CroClient.connect();

        expect(client).to.be.not.undefined;
        const account = await client.getAccount(address1.account());
        const anySigner = {
            publicKey: keyPair.getPubKey(),
            accountNumber: new Big(account!.accountNumber),
            accountSequence: new Big(account!.sequence),
            signMode: SIGN_MODE.LEGACY_AMINO_JSON,
        };
        const rawTx = new cro.RawTransaction();
        const signableTx = rawTx.appendMessage(msgTransferIBCProtobuf).addSigner(anySigner).toSignable();

        const signedTx = signableTx.setSignature(0, keyPair.sign(signableTx.toSignDocumentHash(0))).toSigned();

        const broadcast = await axios.get('broadcast_tx_commit', {
            baseURL: axiosConfig.url,
            params: { tx: `0x${signedTx.getHexEncoded()}` },
        });
        expect(broadcast.status).to.eq(200);
        expect(broadcast.data).to.be.not.undefined;
        assertIsBroadcastTxSuccess(broadcast.data);
    });
});
