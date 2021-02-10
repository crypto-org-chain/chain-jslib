import 'mocha';
import Big from 'big.js';
import { expect } from 'chai';
import { HDKey } from '../hdkey/hdkey';
import { Secp256k1KeyPair } from '../keypair/secp256k1';
import { CroSDK } from '../core/cro';
import { Units } from '../coin/coin';
import { SIGN_MODE } from './types';
import { Network } from '../network/network';

const TestNetwork: Network = {
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
};

describe('Testing Tx signing with custom parameters', function () {
    it('test passing custom properties', function () {
        const cro = CroSDK({ network: TestNetwork });
        const rawTx = new cro.RawTransaction();

        expect(() => rawTx.setGasLimit('1234009AXS')).to.throw(
            'Expected gasLimit value to be a base10 number represented as string, got `1234009AXS`',
        );

        expect(() => rawTx.setFee(new cro.Coin('1-6500', Units.BASE))).to.throw(
            'Expected amount to be a base10 number represented as string, got `1-6500`',
        );
    });

    it('should work when timeout height is not specified', function () {
        const mnemonic =
            'source knee choice chef exact recall craft satoshi coffee intact fun eternal sudden client quote recall sausage injury return duck bottom security like title';
        const hdKey = HDKey.fromMnemonic(mnemonic);
        const privKey = hdKey.derivePrivKey("m/44'/1'/0'/0/0");
        const keyPair = Secp256k1KeyPair.fromPrivKey(privKey);

        const cro = CroSDK({ network: TestNetwork });
        const msg = new cro.bank.MsgSend({
            fromAddress: new cro.Address(keyPair).account(),
            toAddress: 'tcro1fzcrza3j4f2677jfuxulkg33z6852qsqs8hx50',
            amount: cro.Coin.fromBaseUnit('1000'),
        });

        const rawTx = new cro.RawTransaction();
        const signableTx = rawTx
            .appendMessage(msg)
            .addSigner({
                publicKey: keyPair.getPubKey(),
                accountNumber: new Big('179'),
                accountSequence: new Big('1'),
            })
            .setFee(cro.Coin.fromBaseUnit('10000'))
            .setGasLimit('100000')
            .setMemo('amino test')
            .toSignable();

        const signature = keyPair.sign(signableTx.toSignDocumentHash(0));
        const expectedSignature =
            'Zg0SO4Y8lpY1Fo7rBpF1DnxXB46m/EC/1n2BO/p1TDEFWN9zF5DYrvtdKcuLHh+o/lBQ3QJ9lyibsnmOdfy7kA==';
        expect(signature.toBase64String()).to.eq(expectedSignature);

        const signedTx = signableTx.setSignature(0, signature).toSigned();

        const expectedTxHex =
            '0a9b010a8c010a1c2f636f736d6f732e62616e6b2e763162657461312e4d736753656e64126c0a2b7463726f31667a63727a61336a3466323637376a667578756c6b6733337a36383532717371733868783530122b7463726f31667a63727a61336a3466323637376a667578756c6b6733337a363835327173717338687835301a100a08626173657463726f120431303030120a616d696e6f2074657374126b0a500a460a1f2f636f736d6f732e63727970746f2e736563703235366b312e5075624b657912230a210223c9395d41013e6470c8d27da8b75850554faada3fe3e812660cbdf4534a85d712040a020801180112170a110a08626173657463726f1205313030303010a08d061a40660d123b863c969635168eeb0691750e7c57078ea6fc40bfd67d813bfa754c310558df731790d8aefb5d29cb8b1e1fa8fe5050dd027d97289bb2798e75fcbb90';
        expect(signedTx.getHexEncoded()).to.eq(expectedTxHex);

        const expectedTxHash = '7055538EE819D20C8E26948B5EAA19278D2B1C7C7FDFF8ED5049A40C039322C0';
        expect(signedTx.getTxHash()).to.eq(expectedTxHash);
    });

    it('should work when timeout height is not specified in legacy amino JSON sign mode', function () {
        const mnemonic =
            'source knee choice chef exact recall craft satoshi coffee intact fun eternal sudden client quote recall sausage injury return duck bottom security like title';
        const hdKey = HDKey.fromMnemonic(mnemonic);
        const privKey = hdKey.derivePrivKey("m/44'/1'/0'/0/0");
        const keyPair = Secp256k1KeyPair.fromPrivKey(privKey);

        const cro = CroSDK({ network: TestNetwork });
        const msg = new cro.bank.MsgSend({
            fromAddress: new cro.Address(keyPair).account(),
            toAddress: 'tcro1fzcrza3j4f2677jfuxulkg33z6852qsqs8hx50',
            amount: cro.Coin.fromBaseUnit('1000'),
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
            .toSignable();

        const signature = keyPair.sign(signableTx.toSignDocumentHash(0));
        const expectedSignature =
            'yHxxmBZcL0FPPdCdDvDfhCJenHN0Fds5bnEd0Ilu/Ig6N1j1zmHt6tjMW+M/O4cf2k8kJoL0PUOE2jY+vRF3Bw==';
        expect(signature.toBase64String()).to.eq(expectedSignature);

        const signedTx = signableTx.setSignature(0, signature).toSigned();

        const expectedTxHex =
            '0a9b010a8c010a1c2f636f736d6f732e62616e6b2e763162657461312e4d736753656e64126c0a2b7463726f31667a63727a61336a3466323637376a667578756c6b6733337a36383532717371733868783530122b7463726f31667a63727a61336a3466323637376a667578756c6b6733337a363835327173717338687835301a100a08626173657463726f120431303030120a616d696e6f2074657374126b0a500a460a1f2f636f736d6f732e63727970746f2e736563703235366b312e5075624b657912230a210223c9395d41013e6470c8d27da8b75850554faada3fe3e812660cbdf4534a85d712040a02087f180112170a110a08626173657463726f1205313030303010a08d061a40c87c7198165c2f414f3dd09d0ef0df84225e9c737415db396e711dd0896efc883a3758f5ce61edead8cc5be33f3b871fda4f242682f43d4384da363ebd117707';
        expect(signedTx.getHexEncoded()).to.eq(expectedTxHex);

        const expectedTxHash = '119FB7E9A03C04B67179D0041694D43060E832A3A0C0BEF4595D0EDDCDA67125';
        expect(signedTx.getTxHash()).to.eq(expectedTxHash);
    });

    it('test tx when memo, timeout height, gasLimit and fee were set', function () {
        const hdKey = HDKey.fromMnemonic(
            'curtain maid fetch push pilot frozen speak motion island pigeon habit suffer gap purse royal hollow among orange pluck mutual eager cement void panther',
        );

        const privKey = hdKey.derivePrivKey("m/44'/1'/0'/0/0");
        const keyPair = Secp256k1KeyPair.fromPrivKey(privKey);

        const cro = CroSDK({ network: TestNetwork });
        const rawTx = new cro.RawTransaction();

        const feeAmount = new cro.Coin('6500', Units.BASE);

        // Custom properties set
        rawTx.setMemo('Hello Test Memo');
        rawTx.setGasLimit('280000');
        rawTx.setFee(feeAmount);
        rawTx.setTimeOutHeight('341910');

        const msgSend1 = new cro.bank.MsgSend({
            fromAddress: 'tcro165tzcrh2yl83g8qeqxueg2g5gzgu57y3fe3kc3',
            toAddress: 'tcro165tzcrh2yl83g8qeqxueg2g5gzgu57y3fe3kc3',
            amount: new cro.Coin('1210', Units.BASE),
        });

        const signableTx = rawTx
            .appendMessage(msgSend1)
            .addSigner({
                publicKey: keyPair.getPubKey(),
                accountNumber: new Big(41),
                accountSequence: new Big(13),
            })
            .toSignable();

        const signedTx = signableTx.setSignature(0, keyPair.sign(signableTx.toSignDocumentHash(0))).toSigned();
        expect(signedTx.getTxHash()).to.eq('02A10D9E8B8D3AFE69EC56B1FE6ECFE8478C82038452D6BA4E9B189D81FA9908');
        expect(signedTx.getHexEncoded()).to.eq(
            '0aa4010a8c010a1c2f636f736d6f732e62616e6b2e763162657461312e4d736753656e64126c0a2b7463726f313635747a63726832796c3833673871657178756567326735677a6775353779336665336b6333122b7463726f313635747a63726832796c3833673871657178756567326735677a6775353779336665336b63331a100a08626173657463726f120431323130120f48656c6c6f2054657374204d656d6f1896ef14126a0a500a460a1f2f636f736d6f732e63727970746f2e736563703235366b312e5075624b657912230a2103c3d281a28592adce81bee3094f00eae26932cbc682fba239b90f47dac9fe703612040a020801180d12160a100a08626173657463726f12043635303010c08b111a40fe9b30f29bb9a83df3685f5bf8b7e6c34bae9ee8ba93115af4136289354c5bf947698ef3a3c0a1f6092ba7a2069616c436f4bcf6f3ecef11b92ad4d319ec0347',
        );
    });

    it('test tx when memo, timeout height, gasLimit and fee were set in legacy amino JSON sign mode', function () {
        const mnemonic =
            'curtain maid fetch push pilot frozen speak motion island pigeon habit suffer gap purse royal hollow among orange pluck mutual eager cement void panther';
        const hdKey = HDKey.fromMnemonic(mnemonic);
        const privKey = hdKey.derivePrivKey("m/44'/1'/0'/0/0");
        const keyPair = Secp256k1KeyPair.fromPrivKey(privKey);

        const cro = CroSDK({ network: TestNetwork });
        const msg = new cro.bank.MsgSend({
            fromAddress: new cro.Address(keyPair).account(),
            toAddress: 'tcro18tk89ddr4lg32e58sp5kfrm0egldlcfu40ww80',
            amount: cro.Coin.fromBaseUnit('990227306075'),
        });

        const rawTx = new cro.RawTransaction();
        const signableTx = rawTx
            .appendMessage(msg)
            .addSigner({
                publicKey: keyPair.getPubKey(),
                accountNumber: new Big('21'),
                accountSequence: new Big('16692'),
                signMode: SIGN_MODE.LEGACY_AMINO_JSON,
            })
            .setFee(cro.Coin.fromBaseUnit('1000'))
            .setGasLimit('500000')
            .setMemo('legacy amino json')
            .setTimeOutHeight('100000000')
            .toSignable();

        const signature = keyPair.sign(signableTx.toSignDocumentHash(0));
        const expectedSignature =
            'rzYLb8TG7gEpsW8J2hehJhOMzKzyxcZ6nNWqeekR9LMMBpwHy9hjFk3sPfEC9cYiNR1Ik1TMRKXF8MblYU9YNQ==';
        expect(signature.toBase64String()).to.eq(expectedSignature);

        const signedTx = signableTx.setSignature(0, signature).toSigned();

        const expectedTxHex =
            '0aaf010a94010a1c2f636f736d6f732e62616e6b2e763162657461312e4d736753656e6412740a2b7463726f3138346c7461326c7379753437767779703265387a6d746361336b357971383570366334767033122b7463726f3138746b3839646472346c6733326535387370356b66726d3065676c646c6366753430777738301a180a08626173657463726f120c39393032323733303630373512116c656761637920616d696e6f206a736f6e1880c2d72f126c0a520a460a1f2f636f736d6f732e63727970746f2e736563703235366b312e5075624b657912230a2103c3d281a28592adce81bee3094f00eae26932cbc682fba239b90f47dac9fe703612040a02087f18b4820112160a100a08626173657463726f12043130303010a0c21e1a40af360b6fc4c6ee0129b16f09da17a126138cccacf2c5c67a9cd5aa79e911f4b30c069c07cbd863164dec3df102f5c622351d489354cc44a5c5f0c6e5614f5835';
        expect(signedTx.getHexEncoded()).to.eq(expectedTxHex);

        const expectedTxHash = '326CB4C2BCD36DE4B10369ADA5E30720413D4F17173CAAD110A54C2F24118578';
        expect(signedTx.getTxHash()).to.eq(expectedTxHash);
    });
});
