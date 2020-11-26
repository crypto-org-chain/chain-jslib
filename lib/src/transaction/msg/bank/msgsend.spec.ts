import 'mocha';
import { expect } from 'chai';
import Big from 'big.js';

import { fuzzyDescribe } from '../../../test/mocha-fuzzy/suite';
import { Msg } from '../../../cosmos/v1beta1/types/msg';
import { Secp256k1KeyPair } from '../../../keypair/secp256k1';
import { Bytes } from '../../../utils/bytes/bytes';
import { Units } from '../../../coin/coin';
import { CroNetwork, CroSDK } from '../../../core/cro';

const cro = CroSDK({ network: CroNetwork.Testnet });

describe('Testing MsgSend', function () {
    fuzzyDescribe('should throw Error when options is invalid', function (fuzzy) {
        const anyValidOptions = {
            fromAddress: 'tcro165tzcrh2yl83g8qeqxueg2g5gzgu57y3fe3kc3',
            toAddress: 'tcro184lta2lsyu47vwyp2e8zmtca3k5yq85p6c4vp3',
            amount: new cro.Coin('1000', Units.BASE),
        };
        const testRunner = fuzzy(fuzzy.ObjArg(anyValidOptions));

        testRunner(function (options) {
            if (options.valid) {
                return;
            }
            expect(() => new cro.bank.MsgSend(options.value)).to.throw('Expected `options` to be of type `object`');
        });
    });

    it('Test MsgSend conversion', function () {
        const coin = new cro.Coin('12000500', Units.BASE);

        const msgSend = new cro.bank.MsgSend({
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
                        denom: 'basetcro',
                        amount: '12000500',
                    },
                ],
            },
        };

        expect(msgSend.toRawMsg()).to.eqls(rawMsg);
    });

    it('Test appendTxBody MsgSend Tx signing', function () {
        const anyKeyPair = Secp256k1KeyPair.fromPrivKey(
            Bytes.fromHexString('0x66633d18513bec30dd11a209f1ceb1787aa9e2069d5d47e590174dc9665102b3'),
        );
        const coin = new cro.Coin('12000500', Units.CRO);

        const msgSend = new cro.bank.MsgSend({
            fromAddress: 'tcro165tzcrh2yl83g8qeqxueg2g5gzgu57y3fe3kc3',
            toAddress: 'tcro184lta2lsyu47vwyp2e8zmtca3k5yq85p6c4vp3',
            amount: coin,
        });

        const anySigner = {
            publicKey: anyKeyPair.getPubKey(),
            accountNumber: new Big(0),
            accountSequence: new Big(2),
        };

        const rawTx = new cro.RawTransaction();

        const signableTx = rawTx.appendMessage(msgSend).addSigner(anySigner).toSignable();

        const signedTx = signableTx.setSignature(0, anyKeyPair.sign(signableTx.toSignDoc(0))).toSigned();

        const signedTxHex = signedTx.encode().toHexString();
        expect(signedTxHex).to.be.eql(
            '0a9b010a98010a1c2f636f736d6f732e62616e6b2e763162657461312e4d736753656e6412780a2b7463726f313635747a63726832796c3833673871657178756567326735677a6775353779336665336b6333122b7463726f3138346c7461326c7379753437767779703265387a6d746361336b3579713835703663347670331a1c0a08626173657463726f12103132303030353030303030303030303012580a500a460a1f2f636f736d6f732e63727970746f2e736563703235366b312e5075624b657912230a2103fd0d560b6c4aa1ca16721d039a192867c3457e19dad553edb98e7ba88b159c2712040a0208011802120410c09a0c1a40b28cefb83735e05253f641d0bca790a6f95481bc857a7d57a493125af1804ed440dffc080950d6ff39dee4ea113e5e686f8235e98d34870d9b64b4a9a057f686',
        );
    });

    it('Should validate MsgSend provided addresses with network config', function () {
        const coin = new cro.Coin('12000500', Units.BASE);

        const params1 = {
            fromAddress: 'cro1pndm4ywdf4qtmupa0fqe75krmqed2znjyj6x8f',
            toAddress: 'tcro184lta2lsyu47vwyp2e8zmtca3k5yq85p6c4vp3',
            amount: coin,
        };

        const params2 = {
            fromAddress: 'tcro165tzcrh2yl83g8qeqxueg2g5gzgu57y3fe3kc3',
            toAddress: 'cro1pndm4ywdf4qtmupa0fqe75krmqed2znjyj6x8f',
            amount: coin,
        };

        const params3 = {
            fromAddress: 'tcro1pndm4ywdf4qtmupa0fqe75krmqed2znjyj6x8fzqa',
            toAddress: 'cro184lta2lsyu47vwyp2e8zmtca3k5yq85p6c4vp3',
            amount: coin,
        };

        expect(() => new cro.bank.MsgSend(params1)).to.throw('Provided `fromAddress` doesnt match network selected');
        expect(() => new cro.bank.MsgSend(params2)).to.throw('Provided `toAddress` doesnt match network selected');
        expect(() => new cro.bank.MsgSend(params3)).to.throw(
            'Invalid checksum for tcro1pndm4ywdf4qtmupa0fqe75krmqed2znjyj6x8fzqa',
        );
    });
});
