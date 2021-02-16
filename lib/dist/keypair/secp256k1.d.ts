import { Bytes } from '../utils/bytes/bytes';
export declare class Secp256k1KeyPair {
    private privKey;
    constructor(privKey: Bytes);
    static fromPrivKey(privKey: Bytes): Secp256k1KeyPair;
    static generateRandom(): Secp256k1KeyPair;
    getPrivKey(): Bytes;
    getPubKey(options?: PubKeyOptions): Bytes;
    sign(message: Bytes): Bytes;
}
export declare type PubKeyOptions = {
    compressed: boolean;
};
//# sourceMappingURL=secp256k1.d.ts.map