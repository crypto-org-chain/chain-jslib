import Big from 'big.js';
import { InitConfigurations } from '../../../core/cro';
import { Msg } from '../../../cosmos/v1beta1/types/msg';
import { ICoin } from '../../../coin/coin';
import * as legacyAmino from '../../../cosmos/amino';
export declare const msgDeposit: (config: InitConfigurations) => {
    new (options: MsgDepositOptions): {
        proposalId: Big;
        depositor: string;
        amount: ICoin;
        toRawAminoMsg(): legacyAmino.Msg;
        toRawMsg(): Msg;
        validate(): void;
    };
};
export declare type MsgDepositOptions = {
    proposalId: Big;
    depositor: string;
    amount: ICoin;
};
//# sourceMappingURL=MsgDeposit.d.ts.map