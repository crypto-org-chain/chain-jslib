import ow from 'ow';
import secp256k1 from 'secp256k1';
import { owOptionalStrictObject } from '../ow.types';
import { Bytes } from '../utils/bytes/bytes';
import { owBytes } from '../utils/bytes/ow.types';

export const owPrivKey = owBytes().validate((val: Bytes) => {
    if (val.length !== 32) {
        return {
            validator: false,
            message: (label: string) => `Expected ${label} to be an instance of \`Bytes\` with length 32`,
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

export const owOptionalToPubKeyOptions = owOptionalStrictObject().exactShape({
    compressed: ow.boolean,
});
