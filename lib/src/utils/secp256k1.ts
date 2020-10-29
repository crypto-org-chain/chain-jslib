import secp256k1 from 'secp256k1';

import { Bytes } from './bytes/bytes';
import { Result } from './result.types';

export const isValidSecp256k1PrivKey = (val: Bytes): Result => {
    if (val.length !== 32) {
        return {
            ok: false,
            err: (label: string) =>
                `Expected ${label} to be an instance of \`Bytes\` of byte length in 32, got ${val.length}`,
        };
    }
    try {
        secp256k1.publicKeyCreate(val.toUint8Array());
    } catch (err) {
        return {
            ok: false,
            err: () => err.toString(),
        };
    }

    return {
        ok: true,
    };
};

export const isValidSepc256k1PublicKey = (val: Bytes): Result => {
    if (!secp256k1.publicKeyVerify(val.toUint8Array())) {
        return {
            ok: false,
            err: (label: string) => `Expected ${label} to be an instance of \`Bytes\` of valid public key`,
        };
    }

    return {
        ok: true,
    };
};
