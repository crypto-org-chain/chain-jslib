import { Bytes } from '../../utils/bytes/bytes';

export const ANY_VALID_PRIV_KEY = new Bytes(new Uint8Array(32).fill(1));

export const ANY_INVALID_PRIV_KEY = new Bytes(new Uint8Array(32).fill(0));

export const ANY_VALID_KEY_PAIR: {
    privKey: Bytes;
    pubKey: Bytes;
    compressedPubKey: Bytes;
} = {
    privKey: new Bytes(new Uint8Array(32).fill(1)),
    pubKey: (() => {
        const arr = new Uint8Array(65);
        arr.set(
            Buffer.from(
                '041b84c5567b126440995d3ed5aaba0565d71e1834604819ff9c17f5e9d5dd078f70beaf8f588b541507fed6a642c5ab42dfdf8120a7f639de5122d47a69a8e8d1',
                'hex',
            ),
        );
        return new Bytes(arr);
    })(),
    compressedPubKey: (() => {
        const arr = new Uint8Array(33);
        arr.set(Buffer.from('031b84c5567b126440995d3ed5aaba0565d71e1834604819ff9c17f5e9d5dd078f', 'hex'));
        return new Bytes(arr);
    })(),
};
