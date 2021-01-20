import 'mocha';
import Big from 'big.js';
import { expect } from 'chai';
import { Network } from '../network/network';
import { HDKey } from '../hdkey/hdkey';
import { CroSDK } from '../core/cro';
import { Secp256k1KeyPair } from '../keypair/secp256k1';
import { Units } from '../coin/coin';
import { SIGN_MODE } from './types';

const PystaportTestNet: Network = {
    chainId: 'chainmaind',
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
};

const TestNetwork: Network = {
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
};

describe('Testing edge case Txs with 0 account numbers or 0 sequence', function () {
    it('test tx with 0 account number', function () {
        const hdKey = HDKey.fromMnemonic(
            'ramp sock spice enrich exhibit skate empower process kit pudding olive mesh friend camp labor coconut devote shell argue system pig then provide nose',
        );
        const cro = CroSDK({ network: PystaportTestNet });

        const privKey = hdKey.derivePrivKey("m/44'/1'/0'/0/0");
        const keyPair = Secp256k1KeyPair.fromPrivKey(privKey);
        const rawTx = new cro.RawTransaction();

        rawTx.setMemo('Hello Test Memo');

        const msgSend1 = new cro.bank.MsgSend({
            fromAddress: 'tcro15rsn69ze9r7g52tk0u6cyhu4edep88dxgtzm65',
            toAddress: 'tcro1l4gxejy8qxl3vxcxv7vpk4cqu8qhrz2nfxxr2p',
            amount: new cro.Coin('1210', Units.BASE),
        });

        const signableTx = rawTx
            .appendMessage(msgSend1)
            .addSigner({
                publicKey: keyPair.getPubKey(),
                accountNumber: new Big(0),
                accountSequence: new Big(1),
            })
            .toSignable();

        const signedTx = signableTx.setSignature(0, keyPair.sign(signableTx.toSignDocumentHash(0))).toSigned();
        expect(signedTx.getTxHash()).to.eq('5481CCE07ACEF891F701AFEDC746C3478DDFEBFE524F5161ED09BB396F045B46');
        expect(signedTx.getHexEncoded()).to.eq(
            '0aa0010a8c010a1c2f636f736d6f732e62616e6b2e763162657461312e4d736753656e64126c0a2b7463726f313572736e36397a65397237673532746b3075366379687534656465703838647867747a6d3635122b7463726f316c346778656a793871786c3376786378763776706b34637175387168727a326e6678787232701a100a08626173657463726f120431323130120f48656c6c6f2054657374204d656d6f12580a500a460a1f2f636f736d6f732e63727970746f2e736563703235366b312e5075624b657912230a21028dc6ea491defbae760b9cf97b513208942816be5efdc28d3959e6994dfcc458b12040a0208011801120410c09a0c1a40c212f25dfc6758ae42c78079cba83f5d7bedf0dc5e03261e2ee67ee46e55eb6a5820e4c865b0a18c28ee838f5da3dac2e7b84e67dc8fb3449e83597a995da6da',
        );
    });

    it('test tx when sequence is 0', function () {
        const hdKey = HDKey.fromMnemonic(
            'team school reopen cave banner pass autumn march immune album hockey region baby critic insect armor pigeon owner number velvet romance flight blame tone',
        );
        const cro = CroSDK({ network: PystaportTestNet });

        const privKey = hdKey.derivePrivKey("m/44'/1'/0'/0/0");
        const keyPair = Secp256k1KeyPair.fromPrivKey(privKey);
        const rawTx = new cro.RawTransaction();

        rawTx.setMemo('Hello Test Memo');

        const msgSend1 = new cro.bank.MsgSend({
            fromAddress: 'tcro1l4gxejy8qxl3vxcxv7vpk4cqu8qhrz2nfxxr2p',
            toAddress: 'tcro12z3awt3kkh0u58hmw85lhtdg67d44pwu62x8sa',
            amount: new cro.Coin('2210', Units.BASE),
        });

        const signableTx = rawTx
            .appendMessage(msgSend1)
            .addSigner({
                publicKey: keyPair.getPubKey(),
                accountNumber: new Big(6),
                accountSequence: new Big(0),
            })
            .toSignable();

        const signedTx = signableTx.setSignature(0, keyPair.sign(signableTx.toSignDocumentHash(0))).toSigned();
        expect(signedTx.getTxHash()).to.eq('D0F76CAF5FBB7CCE330FC32EA86905994FE18730A4A00505474B5E62570B73A0');
        expect(signedTx.getHexEncoded()).to.eq(
            '0aa0010a8c010a1c2f636f736d6f732e62616e6b2e763162657461312e4d736753656e64126c0a2b7463726f316c346778656a793871786c3376786378763776706b34637175387168727a326e667878723270122b7463726f31327a33617774336b6b6830753538686d7738356c6874646736376434347077753632783873611a100a08626173657463726f120432323130120f48656c6c6f2054657374204d656d6f12580a500a460a1f2f636f736d6f732e63727970746f2e736563703235366b312e5075624b657912230a21030bf28c5f92c336db4703791691fa650fee408690b0a22c5ee4afb7e2508d32a712040a0208011800120410c09a0c1a40f7a03f0510596020b41b3ba7729a248b357a7ab857cf9c7956b2a20d750a859e36f2254829151cbb986f42b0cce1eb0ac17805ffb34b0de860b36062a4338441',
        );
    });

    it('test tx when sequence is 0 in legacy amino json sign mode', function () {
        const mnemonic =
            'reflect bean panda cost actor arrest speed brave attend finish picnic hundred essay hen bulb cash relax wrist tank claim glide combine notable roof';
        const hdKey = HDKey.fromMnemonic(mnemonic);
        const privKey = hdKey.derivePrivKey("m/44'/1'/0'/0/0");
        const keyPair = Secp256k1KeyPair.fromPrivKey(privKey);

        const cro = CroSDK({ network: TestNetwork });
        const msg = new cro.bank.MsgSend({
            fromAddress: new cro.Address(keyPair).account(),
            toAddress: 'tcro1ca066afeuj52k3r29je25q0auyr32k4plkh33r',
            amount: cro.Coin.fromBaseUnit('1000'),
        });

        const rawTx = new cro.RawTransaction();
        const signableTx = rawTx
            .appendMessage(msg)
            .addSigner({
                publicKey: keyPair.getPubKey(),
                accountNumber: new Big('182'),
                accountSequence: new Big('0'),
                signMode: SIGN_MODE.LEGACY_AMINO_JSON,
            })
            .setFee(cro.Coin.fromBaseUnit('10000'))
            .setGasLimit('100000')
            .setMemo('amino test')
            .setTimeOutHeight('800000')
            .toSignable();

        const signature = keyPair.sign(signableTx.toSignDocumentHash(0));
        const expectedSignature =
            'SvhVHQf6OgHLQtzIGgDX9+u1Y5CiV9UZWVqkw+T+QNZn724s4mRs/+MvNoxKpxi5AqLzoxmh62AwezJIrIQmwA==';
        expect(signature.toBase64String()).to.eq(expectedSignature);

        const signedTx = signableTx.setSignature(0, signature).toSigned();

        const expectedTxHex =
            '0a9f010a8c010a1c2f636f736d6f732e62616e6b2e763162657461312e4d736753656e64126c0a2b7463726f316361303636616665756a35326b337232396a65323571306175797233326b34706c6b68333372122b7463726f316361303636616665756a35326b337232396a65323571306175797233326b34706c6b683333721a100a08626173657463726f120431303030120a616d696e6f20746573741880ea30126b0a500a460a1f2f636f736d6f732e63727970746f2e736563703235366b312e5075624b657912230a2102a412df6c9f0709b5c73b3f35927f6924ca24fb11f8a9c3bf78aacabd81db091612040a02087f180012170a110a08626173657463726f1205313030303010a08d061a404af8551d07fa3a01cb42dcc81a00d7f7ebb56390a257d519595aa4c3e4fe40d667ef6e2ce2646cffe32f368c4aa718b902a2f3a319a1eb60307b3248ac8426c0';
        expect(signedTx.getHexEncoded()).to.eq(expectedTxHex);

        const expectedTxHash = 'D101675818C82B4C083F9B60EC7532A9CF80B8535D98D2A7C9F215EF1D04DF06';
        expect(signedTx.getTxHash()).to.eq(expectedTxHash);
    });
});
