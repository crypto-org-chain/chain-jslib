import { Msg } from '../../../cosmos/v1beta1/types/msg';
import { ICoin } from '../../../coin/coin';
import { InitConfigurations } from '../../../core/cro';
import * as legacyAmino from '../../../cosmos/amino';
export declare const msgSend: (config: InitConfigurations) => {
    new (options: MsgSendOptions): {
        readonly fromAddress: string;
        readonly toAddress: string;
        amount: ICoin;
        toRawMsg(): Msg;
        toRawAminoMsg(): legacyAmino.Msg;
        validateAddresses(): void;
    };
};
export declare type MsgSendOptions = {
    fromAddress: string;
    toAddress: string;
    amount: ICoin;
};
//# sourceMappingURL=msgsend.d.ts.map