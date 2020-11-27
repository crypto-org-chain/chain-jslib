import ow from 'ow';
import { Buffer } from 'buffer';
import { cloneUint8Array } from '../typed-array';
import { owBase64String, owHexString } from './ow.types';

/**
 * Immutable Bytes value
 */
export class Bytes {
    private readonly value: Uint8Array;

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
     * Create Bytes from Uint8Array value
     * @param {Uint8Array} value
     * @throws {Error} value is invalid
     * @returns {Bytes}
     */
    public static fromUint8Array(value: Uint8Array): Bytes {
        ow(value, 'value', ow.uint8Array);

        return new Bytes(value);
    }

    /**
     * Create Bytes from Buffer value
     * @param {Buffer} value the buffer
     * @throws {Error} value is invalid
     * @returns {Bytes}
     */
    public static fromBuffer(value: Buffer): Bytes {
        ow(value, 'value', ow.buffer);

        const arr = new Uint8Array(value.length);
        arr.set(value);
        return Bytes.fromUint8Array(arr);
    }

    /**
     * Create Bytes from hexadecimal string
     * @param {Buffer} value the buffer
     * @throws {Error} value is invalid
     * @returns {Bytes}
     */
    public static fromHexString(value: string): Bytes {
        ow(value, 'value', owHexString);

        if (value.length === 0) {
            return Bytes.fromUint8Array(new Uint8Array());
        }
        const hexString = this.clean0x(value);
        const arr = new Uint8Array(hexString.match(/.{2}/g)!.map((v) => parseInt(v, 16)));
        return Bytes.fromUint8Array(arr);
    }

    private static clean0x(value: string) {
        let hexString = value;
        if (hexString.startsWith('0x')) {
            hexString = value.replace('0x', '');
        }
        return hexString;
    }

    /**
     * Create Bytes from base64 encoded string
     * @param {string} value Base64 encoded string
     * @throws {Error} value is invalid
     * @returns {Bytes}
     */
    public static fromBase64String(value: string): Bytes {
        ow(value, 'value', owBase64String);

        return Bytes.fromBuffer(Buffer.from(value, 'base64'));
    }

    /**
     * Return true when the provided bytes is the same
     * @param {Bytes} anotherBytes
     * @returns {boolean}
     */
    public isEqual(anotherBytes: Bytes): boolean {
        if (this.length !== anotherBytes.length) {
            return false;
        }

        const anotherBytesValue = anotherBytes.toUint8Array();
        return this.value.every((val, i) => val === anotherBytesValue[i]);
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

    /**
     * Returns hexadecimal string representation of the Bytes
     * @returns {string}
     */
    public toBase64String(): string {
        return this.toBuffer().toString('base64');
    }

    /**
     * Returns a cloned copy of the Bytes
     * @returns {Bytes}
     */
    public clone(): Bytes {
        return Bytes.fromUint8Array(cloneUint8Array(this.value));
    }

    public get length(): number {
        return this.value.length;
    }
}
