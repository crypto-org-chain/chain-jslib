import { Bytes } from './bytes/bytes';
import { hash160, sha256 } from './hash';
import { AddressValidator, AddressType } from './address';
declare const _default: {
    cloneUint8Array: (arr: Uint8Array) => Uint8Array;
    hash160: typeof hash160;
    sha256: typeof sha256;
    AddressType: typeof AddressType;
    AddressValidator: typeof AddressValidator;
    Big: import("big.js").BigConstructor;
    Bytes: typeof Bytes;
};
export default _default;
//# sourceMappingURL=index.d.ts.map