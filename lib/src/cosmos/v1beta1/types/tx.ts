import Big from 'big.js';
import { Coin } from '../../../coin/coin';
import { Bytes } from '../../../utils/bytes/bytes';
import { cosmos } from '../codec';
import { Msg } from './msg';

export type TxBody = {
    typeUrl: '/cosmos.tx.v1beta1.TxBody';
    value: {
        messages: Msg[];
    };
};

export type AuthInfo = {
    signerInfos: SignerInfo[];
    fee: {
        amount?: Coin;
        gasLimit?: Big;
        payer?: string;
        granter?: string;
    };
};

export type SignerInfo = {
    publicKey: Bytes;
    // TODO: support multisig
    modeInfo: {
        single: {
            mode: cosmos.tx.signing.v1beta1.SignMode.SIGN_MODE_DIRECT;
        };
    };
    sequence: Big;
};

export type TxRaw = {
    bodyBytes: Bytes;
    authInfoBytes: Bytes;
    signatures: Bytes[];
};
