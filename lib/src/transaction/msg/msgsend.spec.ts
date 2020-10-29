import 'mocha';
import { expect } from 'chai';
import Big from 'big.js';
import { MsgSend } from './msgsend';
import { Msg } from '../../cosmos/v1beta1/types/msg';
import { Secp256k1KeyPair } from '../../keypair/secp256k1';
import { Bytes } from '../../utils/bytes/bytes';
import { RawTransaction } from '../raw';
import { Testnet } from '../../network/network';

describe('Testing MsgSend', function () {
    it('Test MsgSend conversion', function () {
        const coin = {
            denom: 'tcro',
            amount: '12000500',
        };

        const msgSend = new MsgSend({
            fromAddress: 'tcro165tzcrh2yl83g8qeqxueg2g5gzgu57y3fe3kc3',
            toAddress: 'tcro184lta2lsyu47vwyp2e8zmtca3k5yq85p6c4vp3',
            amount: coin,
        });

        const rawMsg: Msg = {
            typeUrl: '/cosmos.bank.v1beta1.MsgSend',
            value: {
                fromAddress: 'tcro165tzcrh2yl83g8qeqxueg2g5gzgu57y3fe3kc3',
                toAddress: 'tcro184lta2lsyu47vwyp2e8zmtca3k5yq85p6c4vp3',
                amount: [
                    {
                        denom: 'tcro',
                        amount: '12000500',
                    },
                ],
            },
        };

        expect(msgSend.toRawMsg()).to.eqls(rawMsg);
    });

    it('Test appendTxBody MsgSend Tx signing', function () {
        const anyKeyPair = Secp256k1KeyPair.fromPrivKey(
            Bytes.fromHexString('66633d18513bec30dd11a209f1ceb1787aa9e2069d5d47e590174dc9665102b3'),
        );
        const coin = {
            denom: 'cro',
            amount: '12000500',
        };
        const msgSend = new MsgSend({
            fromAddress: 'tcro165tzcrh2yl83g8qeqxueg2g5gzgu57y3fe3kc3',
            toAddress: 'tcro184lta2lsyu47vwyp2e8zmtca3k5yq85p6c4vp3',
            amount: coin,
        });
        const anySigner = {
            publicKey: anyKeyPair.getPubKey(),
            accountNumber: new Big(0),
            accountSequence: new Big(2),
        };

        const rawTx = new RawTransaction({ network: Testnet });

        const signableTx = rawTx.appendMessage(msgSend).addSigner(anySigner).toSignable();

        const signedTx = signableTx.setSignature(0, anyKeyPair.sign(signableTx.toSignDoc(0))).toSigned();

        const signature = signedTx.encode().toHexString();
        expect(signature).to.be.eql(
            '0a8e010a8b010a1c2f636f736d6f732e62616e6b2e763162657461312e4d736753656e64126b0a2b7463726f3136357' +
                '47a63726832796c3833673871657178756567326735677a6775353779336665336b6333122b7463726f3138346c7461326c73' +
                '79753437767779703265387a6d746361336b3579713835703663347670331a0f0a0363726f1208313230303035303012580a5' +
                '00a460a1f2f636f736d6f732e63727970746f2e736563703235366b312e5075624b657912230a2103fd0d560b6c4aa1ca16721' +
                'd039a192867c3457e19dad553edb98e7ba88b159c2712040a0208011802120410c09a0c1a40e38f878916143a04e03704a3328' +
                '9802b697b941551b0d903aeb61697cb5537087bbe230ca9734eb52098c58f5b98862485c3461ce0088330e3f7af4bd0e302a2',
        );
    });
});
