import bech32 from 'bech32';
import { Network } from '../network/network';

export interface AddressValidationProperties {
    address: string;
    network: Network;
    type: AddressType;
}

export enum AddressType {
    USER,
    VALIDATOR,
}
// https://stackoverflow.com/questions/49434751/how-to-declare-a-function-that-throws-an-error-in-typescript
/**
 * Check address validity against its type and provided network
 * @param {AddressValidationProperties} addressProps
 * @returns {boolean}
 * @throws {Error} when Bech32 encoding is not correct
 */
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
