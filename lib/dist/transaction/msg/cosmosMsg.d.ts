import { Msg } from '../../cosmos/v1beta1/types/msg';
import * as legacyAmino from '../../cosmos/amino';
export interface CosmosMsg {
    toRawMsg(): Msg;
    toRawAminoMsg(): legacyAmino.Msg;
}
export declare function isCosmosMsg(msg: CosmosMsg): boolean;
export declare const owCosmosMsg: () => import("ow/dist/source").ObjectPredicate;
//# sourceMappingURL=cosmosMsg.d.ts.map