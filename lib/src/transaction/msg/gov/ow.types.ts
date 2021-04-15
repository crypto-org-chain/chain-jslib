import ow from 'ow';
import { owStrictObject } from '../../../ow.types';
import { owCoin } from '../../../coin/ow.types';

export const owCommunityPoolSpendProposalOptions = owStrictObject().exactShape({
    title: ow.string,
    description: ow.string,
    recipient: ow.string,
    amount: owCoin(),
});

export const owParamChange = () =>
    owStrictObject().exactShape({
        subspace: ow.string,
        key: ow.string,
        value: ow.string,
    });

export const owParamChangeProposalOptions = owStrictObject().exactShape({
    title: ow.string,
    description: ow.string,
    paramChanges: ow.array.ofType(owParamChange()),
});

export const owCancelSoftwareUpgradeProposalOptions = owStrictObject().exactShape({
    title: ow.string,
    description: ow.string,
});
