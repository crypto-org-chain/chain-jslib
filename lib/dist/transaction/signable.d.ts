import { AuthInfo, TxBody, TxRaw } from '../cosmos/v1beta1/types/tx';
import { Network } from '../network/network';
import { Bytes } from '../utils/bytes/bytes';
import { SignerAccount } from './types';
import { SignedTransaction } from './signed';
export declare class SignableTransaction {
    private txBody;
    private authInfo;
    private network;
    private signerAccounts;
    private txRaw;
    constructor(params: SignableTransactionParams);
    toSignDocument(index: number): Bytes;
    toSignDocumentHash(index: number): Bytes;
    toSignDoc(index: number): Bytes;
    setSignature(index: number, signature: Bytes): SignableTransaction;
    private getSignerSignMode;
    isIndexSigned(index: number): boolean;
    private owIndex;
    getTxRaw(): Readonly<TxRaw>;
    getNetwork(): Readonly<Network>;
    toSigned(): SignedTransaction;
    isCompletelySigned(): boolean;
}
export declare type SignableTransactionParams = {
    txBody: TxBody;
    authInfo: AuthInfo;
    signerAccounts: SignerAccount[];
    network: Network;
};
//# sourceMappingURL=signable.d.ts.map