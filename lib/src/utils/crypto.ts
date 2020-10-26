import createHash from 'create-hash';
import { Bytes } from './bytes/bytes';

export function hash160(input: Bytes): Buffer {
    const sha256Hash = createHash('sha256').update(input.toUint8Array()).digest();
    try {
        return createHash('rmd160').update(sha256Hash).digest();
    } catch (err) {
        return createHash('ripemd160').update(sha256Hash).digest();
    }
}
