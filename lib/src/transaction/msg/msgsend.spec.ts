import 'mocha';
import { expect } from 'chai';
import { MsgSend } from './msgsend';
import { Msg } from '../../cosmos/v1beta1/types/msg';

describe('Testing MsgSend', function () {
    it('Test MsgSend conversion', function () {
        const msgSend = new MsgSend(
            'tcro165tzcrh2yl83g8qeqxueg2g5gzgu57y3fe3kc3',
            'tcro184lta2lsyu47vwyp2e8zmtca3k5yq85p6c4vp3',
            {
                denom: 'tcro',
                amount: '12000500',
            },
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

        expect(msgSend.toMsg()).to.be.eqls(rawMsg);
    });
});
