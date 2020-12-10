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
    readonly timeout_height: string;
}

/** Returns a JSON string with objects sorted by key */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function sortedJsonStringify(obj: any): string {
    return JSON.stringify(sortedObject(obj));
}

function sortedObject(obj: any): any {
    if (typeof obj !== 'object' || obj === null) {
        return obj;
    }
    if (Array.isArray(obj)) {
        return obj.map(sortedObject);
    }
    const sortedKeys = Object.keys(obj).sort();
    const result = sortedKeys.reduce(
        (accumulator, key) => ({
            ...accumulator,
            [key]: sortedObject(obj[key]),
        }),
        {},
    );
    return result;
}
