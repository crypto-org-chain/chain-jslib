import ow from 'ow';
import { owBig, owStrictObject } from '../ow.types';
import { owBytes } from '../utils/bytes/ow.types';

export const owOptions = owStrictObject().exactShape({
    chainId: ow.string,
});

export const owSigner = owStrictObject().exactShape({
    publicKey: owBytes(),
    accountNumber: owBig(),
    accountSequence: owBig(),
});
