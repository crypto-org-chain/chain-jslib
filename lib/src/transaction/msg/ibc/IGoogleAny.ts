import { google } from '../../../cosmos/v1beta1/codec';

export interface IGoogleAny {
    /**
     * Returns the proto encoding representation of any IGoogleAny implementation
     * @returns {google.protobuf.Any}
     */
    getEncoded(): google.protobuf.Any;
}

// https://stackoverflow.com/questions/14425568/interface-type-check-with-typescript
export function isMsgGoogleAny(object: Object): boolean {
    // eslint-disable-next-line no-prototype-builtins
    return 'getEncoded' in object;
}
