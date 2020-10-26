import ow from 'ow';
import { owSecp256k1KeyPair } from '../keypair/ow.types';
import { owOptionalStrictObject } from '../ow.types';
import { owBytes } from '../utils/bytes/ow.types';

export const owAccountPubKeySource = ow.any(owSecp256k1KeyPair(), owBytes());

export const owAccountOptions = owOptionalStrictObject().exactShape({
    prefix: ow.string,
});
