import bech32 from 'bech32';
import { Network } from '../network/network';

export type AddressValidationProperties = {
    address: string;
    network: Network;
    isValidator: boolean;
};

export function isValidAddress(props: AddressValidationProperties): boolean {
    // the decode call is done to check checksum validity, it will throw in case of invalidity
    bech32.decode(props.address);
    const { network } = props;
    const prefix = props.isValidator ? network.addressPrefix : network.validatorAddressPrefix;
    return props.address.startsWith(prefix);
}
