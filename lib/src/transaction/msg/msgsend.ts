import ow from 'ow';
import { Msg } from '../../cosmos/v1beta1/types/msg';
import { cosmos } from '../../cosmos/v1beta1/codec';
import Coin = cosmos.base.v1beta1.Coin;

export class MsgSend {
    private readonly fromAddress: string;

    private readonly toAddress: string;

    private value: Coin;

    /**
     * Constructor to create a new MsgSend
     * @param {string} fromAddress
     * @param {string} toAddress
     * @param {Coin} amount
     * @returns {MsgSend}
     * @throws {Error} when options is invalid
     */
    constructor(fromAddress: string, toAddress: string, amount: Coin) {
        ow(fromAddress, ow.string);
        ow(toAddress, ow.string);

        this.fromAddress = fromAddress;
        this.toAddress = toAddress;
        this.value = amount;
    }

    /**
     * Returns the raw Msg representation of MsgSend
     * @returns {Msg}
     */
    public toMsg(): Msg {
        return {
            typeUrl: '/cosmos.bank.v1beta1.MsgSend',
            value: {
                fromAddress: this.fromAddress,
                toAddress: this.toAddress,
                amount: [
                    {
                        denom: this.value.denom,
                        amount: this.value.amount,
                    },
                ],
            },
        };
    }
}
