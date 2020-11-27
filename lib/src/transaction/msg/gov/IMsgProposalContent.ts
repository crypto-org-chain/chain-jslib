import { google } from '../../../cosmos/v1beta1/codec';

// Different types of proposal contents to support
// cancel-software-upgrade Cancel the current software upgrade proposal
// community-pool-spend    Submit a community pool spend proposal
// param-change            Submit a parameter change proposal
// software-upgrade        Submit a software upgrade proposal

export interface IMsgProposalContent {
    getEncoded(): google.protobuf.Any;
}

// https://stackoverflow.com/questions/14425568/interface-type-check-with-typescript
export function isMsgProposalContent(object: Object): boolean {
    // eslint-disable-next-line no-prototype-builtins
    return 'getEncoded' in object;
}
