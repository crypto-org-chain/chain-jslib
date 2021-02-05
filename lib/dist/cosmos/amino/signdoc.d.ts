import { StdFee } from './fee';
import { Msg } from './msg';
export interface StdSignDoc {
    readonly chain_id: string;
    readonly account_number: string;
    readonly sequence: string;
    readonly fee: StdFee;
    readonly msgs: readonly Msg[];
    readonly memo: string;
    readonly timeout_height?: string;
}
export declare function sortedJsonStringify(obj: any): string;
//# sourceMappingURL=signdoc.d.ts.map