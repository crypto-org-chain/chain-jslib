import { owStrictObject } from '../ow.types';
import { owNetwork } from '../network/ow.types';

export const owCroSDKInitParams = owStrictObject().exactShape({
    network: owNetwork(),
});
