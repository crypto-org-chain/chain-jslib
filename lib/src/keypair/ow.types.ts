import ow from 'ow';
import secp256k1 from 'secp256k1';
import { owOptionalStrictObject, owStrictObject } from '../ow.types';
import { Bytes } from '../utils/bytes/bytes';
import { owBytes } from '../utils/bytes/ow.types';
import { Secp256k1KeyPair } from './secp256k1';

export const owSecp256k1PrivKey = owBytes().validate((val: Bytes) => {
    if (val.length !== 32) {
        return {
            validator: false,
            message: (label: string) =>
                `Expected ${label} to be an instance of \`Bytes\` of byte length in 32, got ${val.length}`,
        };
    }
    try {
        secp256k1.publicKeyCreate(val.toUint8Array());
    } catch (err) {
        return {
            validator: false,
            message: err.toString(),
        };
    }

    return {
        validator: true,
        message: '',
    };
});

export const owOptionalSecp256k1KeyPairToPubKeyOptions = owOptionalStrictObject().exactShape({
    compressed: ow.boolean,
});

export const owSecp256k1KeyPair = () =>
    owStrictObject().validate((val: object) => ({
        validator: val instanceof Secp256k1KeyPair,
        message: (label: string) => `Expected ${label} to be an instance of \`Secp256k1KeyPair\``,
    }));
