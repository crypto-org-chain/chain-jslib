import ow from 'ow';

import * as bip32 from 'bip32';
import * as bip39 from 'bip39';
import { Bytes } from '../utils/bytes/bytes';
import { owOptionalWordsLength } from './ow.types';
import { owBytes } from '../utils/bytes/ow.types';

export class HDWallet {
    private innerSeed: Bytes;

    /**
     * constructor to create a HDWallet from seed
     * @param {Bytes} seed seed of the HD wallet
     * @returns {HDWallet}
     */
    constructor(seed: Bytes) {
        ow(seed, 'seed', owBytes());

        this.innerSeed = seed;
    }

    /**
     * Create and return a HDWallet from mnemonic words
     * @param {string} mnemonic Mnemonic words
     * @param {string} passphrase passphrase to generate the seed
     * @returns {HDWallet}
     * @memberof HDWallet
     */
    public static fromMnemonic(mnemonic: string, passphrase?: string): HDWallet {
        ow(mnemonic, 'mnemonic', ow.string);
        ow(passphrase, 'passphrase', ow.optional.string);

        if (!bip39.validateMnemonic(mnemonic)) {
            throw new Error('Invalid mnemonic words');
        }

        const seed = bip39.mnemonicToSeedSync(mnemonic, passphrase);
        return new HDWallet(Bytes.fromBuffer(seed));
    }

    /**
     * Returns seed of the HD wallet
     * @returns {Bytes}
     * @memberof HDWallet
     */
    public get seed(): Readonly<Bytes> {
        return this.innerSeed;
    }

    /**
     * Generate random mnemonic words of specified length
     * @param {number} wordsLength number of words in the mnemonic. It has to be a multiple of 3
     * and at least 12 words long.
     * @returns {string} Mnemonic words separated by space
     * @memberof HDWallet
     */
    public static generateMnemonic(wordsLength: 12 | 15 | 18 | 21 | 24 = 24): string {
        ow(wordsLength, 'wordsLength', owOptionalWordsLength);

        const strength = (wordsLength / 3) * 32;
        return bip39.generateMnemonic(strength);
    }

    /**
     * Derive the private key of the HD wallet at specified path
     * @param {string} path derivation path
     * @returns {Bytes} private key derived
     */
    public derivePrivKey(path: string): Bytes {
        ow(path, 'path', ow.string);

        // TODO: Browser compatibility (Buffer)
        const root = bip32.fromSeed(this.innerSeed.toBuffer());
        const result = root.derivePath(path);
        return Bytes.fromBuffer(result.privateKey!);
    }
}
