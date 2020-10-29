import ow from 'ow';
import { cosmos } from '../cosmos/v1beta1/codec';
import { owTxRaw } from '../cosmos/v1beta1/types/ow.types';

import { TxRaw } from '../cosmos/v1beta1/types/tx';
import { Bytes } from '../utils/bytes/bytes';
import { sha256 } from '../utils/hash';

export class SignedTransaction {
    private txRaw: TxRaw;

    public constructor(txRaw: TxRaw) {
        ow(txRaw, 'txRaw', owTxRaw());

        this.txRaw = txRaw;
    }

    /**
     * Returns transaction hash in uppercase
     * @returns {string}
     * @throws {Error} when transaction is not completely signed
     * @memberof SignedTransaction
     */
    public getTxHash(): string {
        return sha256(this.encode()).toHexString().toUpperCase();
    }

    /**
     * Returns encoded signed transaction ready to be broadcasted
     * @returns {Bytes}
     * @memberof SignedTransaction
     */
    public encode(): Bytes {
        return encodeTxRaw(this.txRaw);
    }

    /**
     * Returns TxRaw
     * @returns {TxRaw}
     * @memberof SignedTransaction
     */
    public getTxRaw(): Readonly<TxRaw> {
        return this.txRaw;
    }
}

/**
 * Encode TxRaw to protobuf binary
 */
const encodeTxRaw = (txRaw: TxRaw): Bytes => {
    const encodableTxRaw = {
        bodyBytes: txRaw.bodyBytes.toUint8Array(),
        authInfoBytes: txRaw.authInfoBytes.toUint8Array(),
        signatures: txRaw.signatures.map((signature) => signature.toUint8Array()),
    };
    const txRawProto = cosmos.tx.v1beta1.TxRaw.create(encodableTxRaw);
    return Bytes.fromUint8Array(cosmos.tx.v1beta1.TxRaw.encode(txRawProto).finish());
};
