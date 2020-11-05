import bech32 from 'bech32';
import { Network } from '../network/network';

export type AddressValidationProperties = {
    address: string;
    network: Network;
    addressType: AddressType;
};

export enum AddressType {
    NORMAL,
    VALIDATOR,
}

export function isValidAddress(props: AddressValidationProperties): boolean {
    // the decode call is done to check checksum validity, it will throw in case of invalidity
    bech32.decode(props.address);
    const { network } = props;
    let prefix;
    switch (props.addressType) {
        case AddressType.NORMAL:
            prefix = network.addressPrefix;
            break;
        case AddressType.VALIDATOR:
            prefix = network.validatorAddressPrefix;
            break;
        default:
            prefix = network.addressPrefix;
    }
    return props.address.startsWith(prefix);
}
