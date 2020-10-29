import secp256k1 from 'secp256k1';
import ow from 'ow';
import randomBytes from 'randombytes';

import { owSecp256k1PrivKey, owOptionalPubKeyOptions } from './ow.types';
import { Bytes } from '../utils/bytes/bytes';
import { owBytes } from '../utils/bytes/ow.types';
import { isValidSecp256k1PrivKey } from '../utils/secp256k1';

export class Secp256k1KeyPair {
    private privKey: Bytes;

    /**
     * Constructor to create a KeyPair
     * @param {Bytes} privKey private key
     * @throws {Error} private key is invalid
     * @returns {Secp256k1KeyPair}
     * @memberof KeyPair
     */
    constructor(privKey: Bytes) {
        ow(privKey, owSecp256k1PrivKey);

        // `Bytes` is immutable, so no clone is needed
        this.privKey = privKey;
    }

    /**
     * Create a KeyPair from private key
     * @param {Bytes} privKey private key
     * @throws {Error} private key is invalid
     * @returns {Secp256k1KeyPair}
     * @memberof KeyPair
     */
    public static fromPrivKey(privKey: Bytes): Secp256k1KeyPair {
        ow(privKey, 'privKey', owSecp256k1PrivKey);

        const result = isValidSecp256k1PrivKey(privKey);
        if (!result.ok) {
            throw new TypeError(result.err('privKey'));
        }

        return new Secp256k1KeyPair(privKey);
    }

    /**
     * generates random private key and returns KeyPair of it
     * @returns {Secp256k1KeyPair} generated KeyPair
     * @memberof KeyPair
     */
    public static generateRandom(): Secp256k1KeyPair {
        let privKey: Buffer;
        do {
            privKey = randomBytes(32);
        } while (!secp256k1.privateKeyVerify(privKey));

        return new Secp256k1KeyPair(Bytes.fromUint8Array(privKey));
    }

    /**
     * Return the private key of the KeyPair
     * @returns {Bytes}
     * @memberof KeyPair
     */
    public getPrivKey(): Bytes {
        return this.privKey;
    }

    /**
     * Return the public key of the KeyPair in compressed or uncompressed form
     * @param {PubKeyOptions} [options] public key options
     * @param {boolean} options.compressed=true Whether public is compressed or not
     * @throws {Error} compressed argument is invalid
     * @returns {Bytes} public key in compressed or uncompressed form
     * @memberof KeyPair
     */
    public getPubKey(options?: PubKeyOptions): Bytes {
        ow(options, owOptionalPubKeyOptions as any);

        const compressed = typeof options?.compressed === 'undefined' ? true : options.compressed;
        return Bytes.fromUint8Array(secp256k1.publicKeyCreate(this.privKey.toUint8Array(), compressed));
    }

    /**
     * Sign a message using the private key in KeyPair
     * @param {Bytes} message message to sign
     * @throws {Error} message is invalid
     * @returns {Bytes} signature
     * @memberof KeyPair
     */
    public sign(message: Bytes): Bytes {
        ow(message, owBytes());

        // secp256k1 uses RFC6979 for nonce generation
        // https://github.com/cryptocoinjs/secp256k1-node/issues/10
        const { signature } = secp256k1.ecdsaSign(message.toUint8Array(), this.privKey.toUint8Array());
        return Bytes.fromUint8Array(signature);
    }
}

export type PubKeyOptions = {
    compressed: boolean;
};
