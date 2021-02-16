/// <reference types="node" />
export declare class Bytes {
    private readonly value;
    private static readonly PREFIX_OX;
    constructor(value: Uint8Array);
    static fromUint8Array(value: Uint8Array): Bytes;
    static fromBuffer(value: Buffer): Bytes;
    static fromHexString(value: string): Bytes;
    private static clean0x;
    static fromBase64String(value: string): Bytes;
    isEqual(anotherBytes: Bytes): boolean;
    toUint8Array(): Uint8Array;
    toBuffer(): Buffer;
    toHexString(): string;
    toBase64String(): string;
    clone(): Bytes;
    get length(): number;
}
//# sourceMappingURL=bytes.d.ts.map