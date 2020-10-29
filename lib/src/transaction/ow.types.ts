import ow from 'ow';

import { owAuthInfo, owTxBody } from '../cosmos/v1beta1/types/ow.types';
import { owNetwork } from '../network/ow.types';
import { owBig, owStrictObject } from '../ow.types';
import { owBytes } from '../utils/bytes/ow.types';

export const owRawTransactionOptions = owStrictObject().exactShape({
    network: owNetwork(),
});

export const owRawTransactionSigner = owStrictObject().exactShape({
    publicKey: owBytes(),
    accountNumber: owBig(),
    accountSequence: owBig(),
});

export const owSignerAccount = () =>
    owStrictObject().exactShape({
        publicKey: owBytes(),
        accountNumber: owBig(),
    });

export const owSignableTransactionParams = owStrictObject().exactShape({
    txBody: owTxBody(),
    authInfo: owAuthInfo(),
    network: owNetwork(),
    signerAccounts: ow.array.ofType(owSignerAccount()),
});
