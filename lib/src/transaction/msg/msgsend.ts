import { Msg } from '../../cosmos/v1beta1/types/msg';
import { cosmos } from '../../cosmos/v1beta1/codec';
import Coin = cosmos.base.v1beta1.Coin;

export class MsgSend {
    private readonly fromAddress: string;

    private readonly toAddress: string;

    private value: Coin;

    constructor(fromAddress: string, toAddress: string, amount: Coin) {
        this.fromAddress = fromAddress;
        this.toAddress = toAddress;
        this.value = amount;
    }

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
