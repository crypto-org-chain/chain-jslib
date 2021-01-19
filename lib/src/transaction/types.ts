import Big from 'big.js';
import { PublicKey } from '../keypair/types';
import { Bytes } from '../utils/bytes/bytes';

export type SignerAccount = {
    publicKey: PublicKey;
    accountNumber: Big;
    signMode: SIGN_MODE;
};

export enum SIGN_MODE {
    LEGACY_AMINO_JSON = 0,
    DIRECT = 1,
}

export const EMPTY_SIGNATURE = Bytes.fromHexString('');
