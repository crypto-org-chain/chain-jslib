import { Secp256k1KeyPair } from './secp256k1';
import { PublicKey } from './types';

export const anyValidSecp256k1PublicKey: () => PublicKey = () => {
    const keyPair = Secp256k1KeyPair.generateRandom();
    return keyPair.getPubKey();
};
