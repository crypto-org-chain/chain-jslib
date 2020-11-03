import { Message } from './Message';
import { Msg } from '../../cosmos/v1beta1/types/msg';

export class MsgWithdrawDelegatorReward implements Message {
    public readonly delegatorAddress: string;

    public readonly validatorAddress: string;

    constructor(delegatorAddress: string, validatorAddress: string) {
        this.delegatorAddress = delegatorAddress;
        this.validatorAddress = validatorAddress;
    }

    toRawMsg(): Msg {
        return {
            typeUrl: '/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward',
            value: {
                delegatorAddress: this.delegatorAddress,
                validatorAddress: this.validatorAddress,
            },
        };
    }
}
