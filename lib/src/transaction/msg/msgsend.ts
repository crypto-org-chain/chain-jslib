import ow from 'ow';
import { Msg } from '../../cosmos/v1beta1/types/msg';
import { Message } from './Message';
import { Coin } from '../../coin/coin';
import { owMsgSendOptions } from './ow.types';

export class MsgSend implements Message {
    private readonly fromAddress: string;

    private readonly toAddress: string;

    private amount: Coin;

    /**
     * Constructor to create a new MsgSend
     * @param {MsgSendOptions} options
     * @returns {MsgSend}
     * @throws {Error} when options is invalid
     */
    constructor(options: MsgSendOptions) {
        ow(options, 'options', owMsgSendOptions);

        this.fromAddress = options.fromAddress;
        this.toAddress = options.toAddress;
        this.amount = options.amount;
    }

    /**
     * Returns the raw Msg representation of MsgSend
     * @returns {Msg}
     */
    toRawMsg(): Msg {
        const cosmosCoin = this.amount.toCosmosCoin();
        return {
            typeUrl: '/cosmos.bank.v1beta1.MsgSend',
            value: {
                fromAddress: this.fromAddress,
                toAddress: this.toAddress,
                amount: [
                    {
                        denom: cosmosCoin.denom,
                        amount: cosmosCoin.amount,
                    },
                ],
            },
        };
    }
}

export type MsgSendOptions = {
    fromAddress: string;
    toAddress: string;
    amount: Coin;
};
