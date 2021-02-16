import { Network } from '../network/network';
export interface AddressValidationProperties {
    address: string;
    network: Network;
    type: AddressType;
}
export declare enum AddressType {
    USER = 0,
    VALIDATOR = 1
}
export declare function validateAddress(addressProps: AddressValidationProperties): boolean | never;
export declare class AddressValidator {
    readonly params: AddressValidationProperties;
    constructor(params: AddressValidationProperties);
    validate(): boolean | never;
    isValid(): boolean;
}
//# sourceMappingURL=address.d.ts.map