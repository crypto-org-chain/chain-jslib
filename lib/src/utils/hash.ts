import createHash from 'create-hash';
import { Bytes } from './bytes/bytes';

// TODO: browser compatibility (Buffer)
export function hash160(input: Bytes): Bytes {
    const sha256Hash = createHash('sha256').update(input.toUint8Array()).digest();
    let ripemd160Hash: Buffer;
    try {
        ripemd160Hash = createHash('rmd160').update(sha256Hash).digest();
    } catch (err) {
        ripemd160Hash = createHash('ripemd160').update(sha256Hash).digest();
    }
    return Bytes.fromBuffer(ripemd160Hash);
}

export function sha256(input: Bytes): Bytes {
    return Bytes.fromBuffer(createHash('sha256').update(input.toUint8Array()).digest());
}
