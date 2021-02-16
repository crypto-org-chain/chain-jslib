import { Bytes } from '../utils/bytes/bytes';
export declare class HDKey {
    private innerSeed;
    constructor(seed: Bytes);
    static fromMnemonic(mnemonic: string, passphrase?: string): HDKey;
    get seed(): Readonly<Bytes>;
    static generateMnemonic(wordsLength?: 12 | 15 | 18 | 21 | 24): string;
    derivePrivKey(path: string): Bytes;
}
//# sourceMappingURL=hdkey.d.ts.map