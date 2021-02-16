import { InitConfigurations } from '../../../core/cro';
import { Msg } from '../../../cosmos/v1beta1/types/msg';
import * as legacyAmino from '../../../cosmos/amino';
export declare const msgWithdrawValidatorCommission: (config: InitConfigurations) => {
    new (options: MsgWithdrawValidatorCommissionOptions): {
        readonly validatorAddress: string;
        toRawAminoMsg(): legacyAmino.Msg;
        toRawMsg(): Msg;
        validateAddresses(): void;
    };
};
export declare type MsgWithdrawValidatorCommissionOptions = {
    validatorAddress: string;
};
//# sourceMappingURL=MsgWithdrawValidatorCommission.d.ts.map