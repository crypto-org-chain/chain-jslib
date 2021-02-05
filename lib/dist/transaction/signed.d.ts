import { TxRaw } from '../cosmos/v1beta1/types/tx';
import { Bytes } from '../utils/bytes/bytes';
export declare class SignedTransaction {
    private txRaw;
    constructor(txRaw: TxRaw);
    getTxHash(): string;
    encode(): Bytes;
    getHexEncoded(): string;
    getTxRaw(): Readonly<TxRaw>;
}
//# sourceMappingURL=signed.d.ts.map