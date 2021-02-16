import { Msg } from '../../../cosmos/v1beta1/types/msg';
import { InitConfigurations } from '../../../core/cro';
import * as legacyAmino from '../../../cosmos/amino';
export declare const msgWithdrawDelegateReward: (config: InitConfigurations) => {
    new (options: MsgWithdrawDelegatorRewardOptions): {
        readonly delegatorAddress: string;
        readonly validatorAddress: string;
        toRawAminoMsg(): legacyAmino.Msg;
        toRawMsg(): Msg;
        validateAddresses(): void;
    };
};
export declare type MsgWithdrawDelegatorRewardOptions = {
    delegatorAddress: string;
    validatorAddress: string;
};
//# sourceMappingURL=MsgWithdrawDelegatorReward.d.ts.map