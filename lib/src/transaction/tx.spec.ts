import 'mocha';
import Big from 'big.js';
import { expect } from 'chai';
import { HDKey } from '../hdkey/hdkey';
import { Secp256k1KeyPair } from '../keypair/secp256k1';
import { CroNetwork, CroSDK } from '../core/cro';
import { Units } from '../coin/coin';

describe('Testing Tx signing with more parameters', function () {
    it('test tx when memo and timeout height were set', function () {
        const hdKey = HDKey.fromMnemonic(
            'cattle brisk menu chat roast asthma brisk seat whisper prevent town bomb test minimum coconut rent orbit wish caught embody clever turtle track duck',
        );

        const privKey = hdKey.derivePrivKey("m/44'/1'/0'/0/0");
        const keyPair = Secp256k1KeyPair.fromPrivKey(privKey);

        const cro = CroSDK({ network: CroNetwork.Testnet });
        const rawTx = new cro.RawTransaction();

        rawTx.setMemo('24598001234');
        rawTx.setTimeOutHeight(50);

        const msgSend1 = new cro.bank.MsgSend({
            fromAddress: 'tcro165tzcrh2yl83g8qeqxueg2g5gzgu57y3fe3kc3',
            toAddress: 'tcro184lta2lsyu47vwyp2e8zmtca3k5yq85p6c4vp3',
            amount: new cro.Coin('1000', Units.BASE),
        });

        const signableTx = rawTx
            .appendMessage(msgSend1)
            .addSigner({
                publicKey: keyPair.getPubKey(),
                accountNumber: new Big(20),
                accountSequence: new Big(8378),
            })
            .toSignable();

        const signedTx = signableTx.setSignature(0, keyPair.sign(signableTx.toSignDoc(0))).toSigned();
        expect(signedTx.getTxHash()).to.eq('0837A9EBB5B4FBE608894D9C69685F2998C47847ABC56297ED465C978E81D5EF');
        expect(signedTx.getHexEncoded()).to.eq(
            '0a9e010a8c010a1c2f636f736d6f732e62616e6b2e763162657461312e4d736753656e64126c0a2b7463726f313635747a63726832796c3833673871657178756567326735677a6775353779336665336b6333122b7463726f3138346c7461326c7379753437767779703265387a6d746361336b3579713835703663347670331a100a08626173657463726f120431303030120b3234353938303031323334183212590a510a460a1f2f636f736d6f732e63727970746f2e736563703235366b312e5075624b657912230a2102088b7a7f6ec29becade6226f082742dceea6297b932349978a131b75a5ea820412040a02080118ba41120410c09a0c1a406d8e7fd9216108b369a03d382fc819fef8ddde1bcb26c96128ba44c28a5b3a471bd8938fe2e26499b65d33f56402a767f7e8ae03acf353c87eb4408aa26cf90b',
        );
    });
});
