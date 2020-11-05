import bech32 from 'bech32';
import { Network } from '../network/network';

export function isValidAddress(address: string, network: Network): boolean {
    // the decode call is done to check checksum validity, it will throw in case of invalidity
    bech32.decode(address);
    const prefix = network.addressPrefix;
    return address.startsWith(prefix);
}

export function isValidValidatorAddress(address: string, network: Network): boolean {
    // the decode call is done to check checksum validity, it will throw in case of invalidity
    bech32.decode(address);
    const prefix = network.addressPrefix;
    return address.startsWith(prefix);
}
