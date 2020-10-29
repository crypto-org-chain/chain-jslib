import Big from 'big.js';
import { PublicKey } from '../keypair/types';
import { Bytes } from '../utils/bytes/bytes';

export type SignerAccount = {
    publicKey: PublicKey;
    accountNumber: Big;
};

export const EMPTY_SIGNATURE = Bytes.fromHexString('');
