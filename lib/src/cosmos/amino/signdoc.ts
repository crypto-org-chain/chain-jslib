/* eslint-disable camelcase */

import { StdFee } from './fee';
import { Msg } from './msg';

/**
 * The document to be signed
 *
 * @see https://docs.cosmos.network/master/modules/auth/03_types.html#stdsigndoc
 */
export interface StdSignDoc {
    readonly chain_id: string;
    readonly account_number: string;
    readonly sequence: string;
    readonly fee: StdFee;
    readonly msgs: readonly Msg[];
    readonly memo: string;
}
