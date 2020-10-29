import 'mocha';
import { expect } from 'chai';
import Big from 'big.js';
import { MsgSend } from './msgsend';
import { Msg } from '../../cosmos/v1beta1/types/msg';
import { Secp256k1KeyPair } from '../../keypair/secp256k1';
import { Bytes } from '../../utils/bytes/bytes';
import { Transaction } from '../transaction';

describe('Testing MsgSend', function () {
    it('Test MsgSend conversion', function () {
        const coin = {
            denom: 'tcro',
            amount: '12000500',
        };

        const msgSend = new MsgSend(
            'tcro165tzcrh2yl83g8qeqxueg2g5gzgu57y3fe3kc3',
            'tcro184lta2lsyu47vwyp2e8zmtca3k5yq85p6c4vp3',
            coin,
        );

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

        expect(msgSend.toMsg()).to.eq(rawMsg);
    });

    it('Test appendTxBody MsgSend Tx signing', function () {
        const anyKeyPair = Secp256k1KeyPair.fromPrivKey(
            Bytes.fromHexString('66633d18513bec30dd11a209f1ceb1787aa9e2069d5d47e590174dc9665102b3'),
        );
        const msgSend = new MsgSend(
            'tcro165tzcrh2yl83g8qeqxueg2g5gzgu57y3fe3kc3',
            'tcro184lta2lsyu47vwyp2e8zmtca3k5yq85p6c4vp3',
            {
                denom: 'tcro',
                amount: '12000500',
            },
        );
        const anySigner = {
            publicKey: anyKeyPair.getPubKey(),
            accountNumber: new Big(0),
            accountSequence: new Big(2),
        };

        const tx = new Transaction({
            chainId: 'chain-maind',
        });
        const transaction = tx.appendTxBodyMsgSend(msgSend).addSigner(anySigner).sign(0, anyKeyPair);
        const signature = transaction.getTxRaw()!.signatures[0].toHexString();
        expect(signature).to.be.eql(
            '5ff01d60897df3e6ede18abb320df06131442fd15839f221d6bc38fa607bf2de0c162566ed931d91f0dcce20fa898dd932200bbd6373b7862b864ebe3e976566',
        );
    });
});
