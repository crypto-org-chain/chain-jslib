import 'mocha';
import Big from 'big.js';
import { expect } from 'chai';
import { HDKey } from '../hdkey/hdkey';
import { Secp256k1KeyPair } from '../keypair/secp256k1';
import { CroNetwork, CroSDK } from '../core/cro';
import { Units } from '../coin/coin';

// TODO: to be removed/replaced by more proper integration tests
describe('Integration tests (to be removed)', function () {
    it('transaction integration test', function () {
        const hdKey = HDKey.fromMnemonic(
            'cattle brisk menu chat roast asthma brisk seat whisper prevent town bomb test minimum coconut rent orbit wish caught embody clever turtle track duck',
        );
        const hdKey2 = HDKey.fromMnemonic(
            'curtain maid fetch push pilot frozen speak motion island pigeon habit suffer gap purse royal hollow among orange pluck mutual eager cement void panther',
        );
        const privKey = hdKey.derivePrivKey("m/44'/1'/0'/0/0");
        const privKey2 = hdKey2.derivePrivKey("m/44'/1'/0'/0/0");
        const keyPair = Secp256k1KeyPair.fromPrivKey(privKey);
        const keyPair2 = Secp256k1KeyPair.fromPrivKey(privKey2);

        const cro = CroSDK({ network: CroNetwork.Testnet });
        const rawTx = new cro.RawTransaction();

        const msgSend1 = new cro.bank.MsgSend({
            fromAddress: 'tcro165tzcrh2yl83g8qeqxueg2g5gzgu57y3fe3kc3',
            toAddress: 'tcro184lta2lsyu47vwyp2e8zmtca3k5yq85p6c4vp3',
            amount: new cro.Coin('1000', Units.BASE),
        });

        const msgSend2 = new cro.bank.MsgSend({
            fromAddress: 'tcro184lta2lsyu47vwyp2e8zmtca3k5yq85p6c4vp3',
            toAddress: 'tcro165tzcrh2yl83g8qeqxueg2g5gzgu57y3fe3kc3',
            amount: new cro.Coin('2000', Units.BASE),
        });

        const signableTx = rawTx
            .appendMessage(msgSend1)
            .appendMessage(msgSend2)
            .addSigner({
                publicKey: keyPair.getPubKey(),
                accountNumber: new Big(20),
                accountSequence: new Big(8378),
            })
            .addSigner({
                publicKey: keyPair2.getPubKey(),
                accountNumber: new Big(21),
                accountSequence: new Big(8369),
            })
            .toSignable();

        const signedTx = signableTx
            .setSignature(0, keyPair.sign(signableTx.toSignDoc(0)))
            .setSignature(1, keyPair2.sign(signableTx.toSignDoc(1)))
            .toSigned();

        expect(signedTx.getTxHash()).to.eq('D42D7CB6370AC4BD82B105CCE01493A0E7E46E8B55B986816CDC380AF57414E3');
        expect(signedTx.hexEncoded()).to.eq(
            '0a9e020a8c010a1c2f636f736d6f732e62616e6b2e763162657461312e4d736753656e64126c0a2b7463726f313635747' +
                'a63726832796c3833673871657178756567326735677a6775353779336665336b6333122b7463726f3138346c7461326c73797534' +
                '37767779703265387a6d746361336b3579713835703663347670331a100a08626173657463726f1204313030300a8c010a1c2f636' +
                'f736d6f732e62616e6b2e763162657461312e4d736753656e64126c0a2b7463726f3138346c7461326c7379753437767779703265' +
                '387a6d746361336b357971383570366334767033122b7463726f313635747a63726832796c3833673871657178756567326735677' +
                'a6775353779336665336b63331a100a08626173657463726f12043230303012ac010a510a460a1f2f636f736d6f732e6372797074' +
                '6f2e736563703235366b312e5075624b657912230a2102088b7a7f6ec29becade6226f082742dceea6297b932349978a131b75a5e' +
                'a820412040a02080118ba410a510a460a1f2f636f736d6f732e63727970746f2e736563703235366b312e5075624b657912230a21' +
                '03c3d281a28592adce81bee3094f00eae26932cbc682fba239b90f47dac9fe703612040a02080118b141120410c09a0c1a40983bf' +
                '504aec4af8bc8bc8b13a68e461747d40a19f4342a152dc553fc3b99174f7b78c0c75491cfd7b13a8506a4f65054468b6c5909987a' +
                'ea6d71579a7f687cfb1a40dd97007fa4345cd3d8f9b2ba0611689ff4da1396264e312520e5bc9cc0dfec09540d16b2c3107fea458' +
                '90b5cc2fbe8f1f2162391689170e4de45d8b7d3ed3659',
        );
    });
});
