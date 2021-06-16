import 'mocha';
import { expect } from 'chai';
import Big from 'big.js';

import { CroSDK } from '../core/cro';
import { HDKey } from '../hdkey/hdkey';
import { Secp256k1KeyPair } from '../keypair/secp256k1';
import { SIGN_MODE } from './types';

describe('Amino JSON sign mode', function () {
    it('should work', function () {
        const mnemonic =
            'source knee choice chef exact recall craft satoshi coffee intact fun eternal sudden client quote recall sausage injury return duck bottom security like title';
        const hdKey = HDKey.fromMnemonic(mnemonic);
        const privKey = hdKey.derivePrivKey("m/44'/1'/0'/0/0");
        const keyPair = Secp256k1KeyPair.fromPrivKey(privKey);

        const cro = CroSDK({
            network: {
                defaultNodeUrl: '',
                chainId: 'testnet-croeseid-1',
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
                rpcUrl: '',
            },
        });
        const msg = new cro.bank.MsgSend({
            fromAddress: new cro.Address(keyPair).account(),
            toAddress: 'tcro1fzcrza3j4f2677jfuxulkg33z6852qsqs8hx50',
            amount: [cro.Coin.fromBaseUnit('1000')],
        });

        const rawTx = new cro.RawTransaction();
        const signableTx = rawTx
            .appendMessage(msg)
            .addSigner({
                publicKey: keyPair.getPubKey(),
                accountNumber: new Big('179'),
                accountSequence: new Big('1'),
                signMode: SIGN_MODE.LEGACY_AMINO_JSON,
            })
            .setFee(cro.Coin.fromBaseUnit('10000'))
            .setGasLimit('100000')
            .setMemo('amino test')
            .setTimeOutHeight('800000')
            .toSignable();

        const signature = keyPair.sign(signableTx.toSignDocumentHash(0));
        const expectedSignature =
            'RwttPpxKNy7t1ZIUubckiUKexQ/mDZQ4nSpICdUWtrggtyMK22E31+FVWsdrYWT/r0hBaA4FBAWTqMs/TU1utw==';
        expect(signature.toBase64String()).to.eq(expectedSignature);

        const signedTx = signableTx.setSignature(0, signature).toSigned();

        const expectedTxHex =
            '0a9f010a8c010a1c2f636f736d6f732e62616e6b2e763162657461312e4d736753656e64126c0a2b7463726f31667a63727a61336a3466323637376a667578756c6b6733337a36383532717371733868783530122b7463726f31667a63727a61336a3466323637376a667578756c6b6733337a363835327173717338687835301a100a08626173657463726f120431303030120a616d696e6f20746573741880ea30126b0a500a460a1f2f636f736d6f732e63727970746f2e736563703235366b312e5075624b657912230a210223c9395d41013e6470c8d27da8b75850554faada3fe3e812660cbdf4534a85d712040a02087f180112170a110a08626173657463726f1205313030303010a08d061a40470b6d3e9c4a372eedd59214b9b72489429ec50fe60d94389d2a4809d516b6b820b7230adb6137d7e1555ac76b6164ffaf4841680e05040593a8cb3f4d4d6eb7';
        expect(signedTx.getHexEncoded()).to.eq(expectedTxHex);

        const expectedTxHash = 'E9B8FCAB8ED3ECD9F8E2746D8740FCC45E2B49B61A6D5999540DB2C66ECF85CF';
        expect(signedTx.getTxHash()).to.eq(expectedTxHash);
    });
});
