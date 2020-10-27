import { Secp256k1KeyPair } from '../../keypair/secp256k1';
import { ANY_VALID_PRIV_KEY } from './crypto';

export const ANY_VALID_SECP256K1_KEY_PAIR = Secp256k1KeyPair.fromPrivKey(ANY_VALID_PRIV_KEY);
