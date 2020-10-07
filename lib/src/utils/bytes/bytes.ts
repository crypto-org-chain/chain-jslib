import ow from 'ow';
import { cloneUint8Array } from '../typed-array';
import { owHexString } from './ow.types';

/**
 * Immutable Bytes value
 */
export class Bytes {
    private value: Uint8Array;

    /**
     * Constructor to create Bytes from Uint8Array value
     * @param {Uint8Array} value
     * @throws {Error} value is invalid
     * @returns {Bytes}
     */
    constructor(value: Uint8Array) {
        ow(value, 'value', ow.uint8Array);

        this.value = cloneUint8Array(value);
    }

    /**
     * Create Bytes from Buffer value
     * @param {Buffer} buf the buffer
     * @throws {Error} value is invalid
     * @returns {Bytes}
     */
    public static fromBuffer(value: Buffer): Bytes {
        ow(value, 'value', ow.buffer);

        const arr = new Uint8Array(value.length);
        arr.set(value);
        return new Bytes(arr);
    }

    /**
     * Create Bytes from hexadecimal string
     * @param {Buffer} buf the buffer
     * @throws {Error} value is invalid
     * @returns {Bytes}
     */
    public static fromHexString(value: string): Bytes {
        ow(value, 'value', owHexString);

        if (value.length === 0) {
            return new Bytes(new Uint8Array());
        }
        const arr = new Uint8Array(value.match(/.{2}/g)!.map((v) => parseInt(v, 16)));
        return new Bytes(arr);
    }

    /**
     * Returns Uint8Array representation of the Bytes
     * @returns {Uint8Array}
     */
    public toUint8Array(): Uint8Array {
        return cloneUint8Array(this.value);
    }

    /**
     * Returns Buffer representation of the Bytes
     * @returns {Buffer}
     */
    public toBuffer(): Buffer {
        return Buffer.from(this.value);
    }

    /**
     * Returns hexadecimal string representation of the Bytes
     * @returns {string}
     */
    public toHexString(): string {
        return Array.from(this.value)
            .map((i) => `0${i.toString(16)}`.slice(-2))
            .join('');
    }

    public get length(): number {
        return this.value.length;
    }
}
