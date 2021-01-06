import { Msg } from '../../cosmos/v1beta1/types/msg';
import * as legacyAmino from '../../cosmos/amino';
import { owStrictObject } from '../../ow.types';

export interface CosmosMsg {
    /**
     * Returns the raw Msg representation of any implementation of Message
     * @returns {Msg}
     */
    toRawMsg(): Msg;

    /**
     * Returns the raw legacy amino Msg representation of any implementation of Message
     * @returns {legacyAmino.Msg}
     */
    toRawAminoMsg(): legacyAmino.Msg;
}

export function isCosmosMsg(msg: CosmosMsg): boolean {
    return typeof msg.toRawMsg === 'function' && typeof msg.toRawAminoMsg === 'function';
}

export const owCosmosMsg = () =>
    owStrictObject().validate((value) => ({
        validator: isCosmosMsg(value as CosmosMsg),
        message: 'Expected value to be `CosmosMsg`, but it is not',
    }));
