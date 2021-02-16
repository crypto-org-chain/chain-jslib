import { Msg } from '../../../cosmos/v1beta1/types/msg';
import { ICoin } from '../../../coin/coin';
import { InitConfigurations } from '../../../core/cro';
import { IDescription } from '../../common/interface/IDescription';
import { ICommissionRates } from '../../common/interface/ICommissionRates';
import { google } from '../../../cosmos/v1beta1/codec';
import { Bytes } from '../../../utils/bytes/bytes';
import * as legacyAmino from '../../../cosmos/amino';
export declare const msgCreateValidator: (config: InitConfigurations) => {
    new (options: MsgCreateValidatorParams): {
        readonly description: IDescription;
        readonly commission: ICommissionRates;
        minSelfDelegation: string;
        delegatorAddress: string;
        validatorAddress: string;
        pubkey: string;
        value: ICoin;
        toRawAminoMsg(): legacyAmino.Msg;
        toRawMsg(): Msg;
        validateAddresses(): void;
    };
};
export declare type MsgCreateValidatorParams = {
    description: IDescription;
    commission: ICommissionRates;
    minSelfDelegation: string;
    delegatorAddress: string;
    validatorAddress: string;
    pubkey: string;
    value: ICoin;
};
export declare const protoEncodeEd25519PubKey: (pubKey: Bytes) => google.protobuf.IAny;
//# sourceMappingURL=MsgCreateValidator.d.ts.map