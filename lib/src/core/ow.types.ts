import { owStrictObject } from '../ow.types';
import { owNetwork } from '../network/ow.types';

export const owCroInitParams = owStrictObject().exactShape({
    network: owNetwork(),
});
