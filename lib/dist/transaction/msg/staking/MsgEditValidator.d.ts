import { Msg } from '../../../cosmos/v1beta1/types/msg';
import { InitConfigurations } from '../../../core/cro';
import { IDescription } from '../../common/interface/IDescription';
import * as legacyAmino from '../../../cosmos/amino';
export declare const msgEditValidator: (config: InitConfigurations) => {
    new (options: MsgCreateEditOptions): {
        readonly description: IDescription;
        minSelfDelegation: string | null;
        commissionRate: string | null;
        validatorAddress: string;
        toRawAminoMsg(): legacyAmino.Msg;
        toRawMsg(): Msg;
        validateAddresses(): void;
    };
};
export declare type MsgCreateEditOptions = {
    description: IDescription;
    commissionRate: string | null;
    minSelfDelegation: string | null;
    validatorAddress: string;
};
//# sourceMappingURL=MsgEditValidator.d.ts.map