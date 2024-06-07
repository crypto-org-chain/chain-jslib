import bech32 from 'bech32';
import { keccak256 } from 'ethereum-cryptography/keccak';
import { utf8ToBytes } from 'ethereum-cryptography/utils';
import { Network } from '../network/network';
import { Bytes } from './bytes/bytes';

export interface AddressValidationProperties {
    address: string;
    network: Network;
    type: AddressType;
}

export enum AddressType {
    USER,
    VALIDATOR,
}

export function isHexPrefixed(str: string): boolean {
    if (typeof str !== 'string') {
        throw new Error(`[isHexPrefixed] input must be type 'string', received type ${typeof str}`);
    }

    return str.startsWith('0x');
}

export function stripHexPrefix(str: string): string {
    if (typeof str !== 'string')
        throw new Error(`[stripHexPrefix] input must be type 'string', received ${typeof str}`);

    return isHexPrefixed(str) ? str.slice(2) : str;
}

export function isUint8Array(data: unknown | Uint8Array): data is Uint8Array {
    return (
        data instanceof Uint8Array ||
        (data as { constructor: { name: string } })?.constructor?.name === 'Uint8Array' ||
        (data as { constructor: { name: string } })?.constructor?.name === 'Buffer'
    );
}

export function uint8ArrayToHexString(uint8Array: Uint8Array): string {
    return uint8Array.reduce((hexString, e) => {
        const hex = e.toString(16);
        return hexString + (hex.length === 1 ? `0${hex}` : hex);
    }, '0x');
}

export function isHexStrict(hex: Uint8Array | bigint | string | number | boolean) {
    return typeof hex === 'string' && /^((-)?0x[0-9a-f]+|(0x))$/i.test(hex);
}

export function ensureIfUint8Array<T = any>(data: T) {
    if (
        !(data instanceof Uint8Array) &&
        (data as { constructor: { name: string } })?.constructor?.name === 'Uint8Array'
    ) {
        return Uint8Array.from((data as unknown) as Uint8Array);
    }
    return data;
}

export function checkAddressCheckSum(data: string): boolean {
    if (!/^(0x)?[0-9a-f]{40}$/i.test(data)) return false;
    const address = data.slice(2);
    const updatedData = utf8ToBytes(address.toLowerCase());

    const addressHash = uint8ArrayToHexString(keccak256(ensureIfUint8Array(updatedData))).slice(2);

    for (let i = 0; i < 40; i += 1) {
        // the nth letter should be uppercase if the nth digit of casemap is 1
        if (
            (parseInt(addressHash[i], 16) > 7 && address[i].toUpperCase() !== address[i]) ||
            (parseInt(addressHash[i], 16) <= 7 && address[i].toLowerCase() !== address[i])
        ) {
            return false;
        }
    }
    return true;
}

export const isAddress = (value: Uint8Array | bigint | string | number | boolean, checkChecksum = true) => {
    if (typeof value !== 'string' && !isUint8Array(value)) {
        return false;
    }

    let valueToCheck: string;

    if (isUint8Array(value)) {
        valueToCheck = uint8ArrayToHexString(value);
    } else if (typeof value === 'string' && !isHexStrict(value)) {
        valueToCheck = value.toLowerCase().startsWith('0x') ? value : `0x${value}`;
    } else {
        valueToCheck = value;
    }

    // check if it has the basic requirements of an address
    if (!/^(0x)?[0-9a-f]{40}$/i.test(valueToCheck)) {
        return false;
    }
    // If it's ALL lowercase or ALL upppercase
    if (/^(0x|0X)?[0-9a-f]{40}$/.test(valueToCheck) || /^(0x|0X)?[0-9A-F]{40}$/.test(valueToCheck)) {
        return true;
        // Otherwise check each case
    }
    return checkChecksum ? checkAddressCheckSum(valueToCheck) : true;
};

export function validateAddress(addressProps: AddressValidationProperties): boolean | never {
    const { network } = addressProps;
    const bech32Decoded = bech32.decode(addressProps.address);

    switch (addressProps.type) {
        case AddressType.USER:
            return bech32Decoded.prefix === network.addressPrefix;
        case AddressType.VALIDATOR:
            return bech32Decoded.prefix === network.validatorAddressPrefix;
        default:
            return false;
    }
}
export const isValidBech32Address = (addr: string): boolean => {
    try {
        bech32.decode(addr);
        // May be maintain a whitelist Array list of possible prefixes. Such as  [cosmos, cro, tcro] ..etc
        return true;
    } catch (error) {
        return false;
    }
};

export const assertAndReturnBech32AddressWordBytes = (addr: string): Bytes => {
    try {
        const { words } = bech32.decode(addr);
        // May be maintain a whitelist Array list of possible prefixes. Such as  [cosmos, cro, tcro] ..etc
        // TODO: Revisit this when working with IBC or custom network addresses
        return Bytes.fromUint8Array(new Uint8Array(bech32.fromWords(words)));
    } catch (error) {
        throw new Error('Invalid Bech32 address.');
    }
};

export const getBech32AddressFromEVMAddress = (evmAddress: string, bech32Prefix: string) => {
    if (!isAddress(evmAddress)) {
        throw new TypeError('Please provide a valid EVM compatible address.');
    }
    const evmAddrWithoutHexPrefix = stripHexPrefix(evmAddress);
    const evmAddressBytes = Bytes.fromHexString(evmAddrWithoutHexPrefix).toUint8Array();
    const words = bech32.toWords(evmAddressBytes);
    const cronosToBech32Address = bech32.encode(bech32Prefix, words);
    return cronosToBech32Address;
};

export class AddressValidator {
    public readonly params: AddressValidationProperties;

    constructor(params: AddressValidationProperties) {
        this.params = params;
    }

    public validate(): boolean | never {
        return validateAddress(this.params);
    }

    public isValid(): boolean {
        try {
            return validateAddress(this.params);
        } catch {
            return false;
        }
    }
}
