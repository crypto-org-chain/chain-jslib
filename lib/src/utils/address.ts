import bech32 from 'bech32';
import { Network } from '../network/network';

export type AddressValidationProperties = {
    address: string;
    network: Network;
    type: AddressType;
};

export enum AddressType {
    USER,
    VALIDATOR,
}

export function isValidAddress(addressProps: AddressValidationProperties): boolean {
    const { network } = addressProps;
    let bech32Decoded = bech32.decode(addressProps.address);

    switch (addressProps.type) {
        case AddressType.USER:
            return bech32Decoded.prefix == network.addressPrefix
        case AddressType.VALIDATOR:
            return bech32Decoded.prefix == network.validatorAddressPrefix;
        default:
            return false;
    }
}
