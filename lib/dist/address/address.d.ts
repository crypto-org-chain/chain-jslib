import { Secp256k1KeyPair } from '../keypair/secp256k1';
import { Bytes } from '../utils/bytes/bytes';
import { InitConfigurations } from '../core/cro';
export declare const userAddress: (config: InitConfigurations) => {
    new (pubKeySource: AccountPubKeySource): {
        readonly pubKeyDigest: Bytes;
        account(): string;
        validator(): string;
    };
};
export declare type AccountPubKeySource = Secp256k1KeyPair | Bytes;
//# sourceMappingURL=address.d.ts.map