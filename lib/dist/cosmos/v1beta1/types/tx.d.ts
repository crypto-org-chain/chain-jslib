import Big from 'big.js';
import { Bytes } from '../../../utils/bytes/bytes';
import { cosmos } from '../codec';
import { ICoin } from '../../../coin/coin';
import { CosmosMsg } from '../../../transaction/msg/cosmosMsg';
export declare type TxBody = {
    typeUrl: '/cosmos.tx.v1beta1.TxBody';
    value: {
        messages: CosmosMsg[];
        memo?: string;
        timeoutHeight?: string;
    };
};
export declare type AuthInfo = {
    signerInfos: SignerInfo[];
    fee: {
        amount?: ICoin;
        gasLimit?: Big;
        payer?: string;
        granter?: string;
    };
};
export declare type SignerInfo = {
    publicKey: Bytes;
    modeInfo: {
        single: {
            mode: cosmos.tx.signing.v1beta1.SignMode;
        };
    };
    sequence: Big;
};
export declare type TxRaw = {
    bodyBytes: Bytes;
    authInfoBytes: Bytes;
    signatures: Bytes[];
};
//# sourceMappingURL=tx.d.ts.map