import { Msg } from '../../../cosmos/v1beta1/types/msg';
import { ICoin } from '../../../coin/coin';
import { InitConfigurations } from '../../../core/cro';
import * as legacyAmino from '../../../cosmos/amino';
export declare const msgBeginRedelegate: (config: InitConfigurations) => {
    new (options: IMsgBeginRedelgate): {
        delegatorAddress: string;
        validatorSrcAddress: string;
        validatorDstAddress: string;
        amount: ICoin;
        toRawAminoMsg(): legacyAmino.Msg;
        toRawMsg(): Msg;
        validateAddresses(): void;
    };
};
export interface IMsgBeginRedelgate {
    delegatorAddress: string;
    validatorSrcAddress: string;
    validatorDstAddress: string;
    amount: ICoin;
}
//# sourceMappingURL=MsgBeginRedelegate.d.ts.map