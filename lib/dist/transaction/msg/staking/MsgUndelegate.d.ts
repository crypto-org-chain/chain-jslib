import { Msg } from '../../../cosmos/v1beta1/types/msg';
import { InitConfigurations } from '../../../core/cro';
import { ICoin } from '../../../coin/coin';
import * as legacyAmino from '../../../cosmos/amino';
export declare const msgUndelegate: (config: InitConfigurations) => {
    new (options: IMsgUndelegate): {
        delegatorAddress: string;
        validatorAddress: string;
        amount: ICoin;
        toRawAminoMsg(): legacyAmino.Msg;
        toRawMsg(): Msg;
        validateAddresses(): void;
    };
};
export declare type IMsgUndelegate = {
    delegatorAddress: string;
    validatorAddress: string;
    amount: ICoin;
};
//# sourceMappingURL=MsgUndelegate.d.ts.map