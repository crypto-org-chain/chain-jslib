import ow from 'ow';
import { owCoin } from '../../coin/ow.types';
import { owStrictObject } from '../../ow.types';

export const owMsgSendOptions = owStrictObject().exactShape({
    fromAddress: ow.string,
    toAddress: ow.string,
    amount: owCoin(),
});

export const owMsgCreateValidatorOptions = owStrictObject().exactShape({
    description: {
        moniker: ow.string,
        identity: ow.string,
        website: ow.string,
        securityContact: ow.string,
        details: ow.string,
    },
    commission: {
        rate: ow.string,
        maxRate: ow.string,
        maxChangeRate: ow.string,
    },
    minSelfDelegation: ow.string,
    delegatorAddress: ow.string,
    validatorAddress: ow.string,
    pubkey: ow.string,
    value: owCoin(),
});

export const owMsgEditValidatorOptions = owStrictObject().exactShape({
    description: {
        moniker: ow.string,
        identity: ow.string,
        website: ow.string,
        securityContact: ow.string,
        details: ow.string,
    },
    validatorAddress: ow.string,
    commissionRate: ow.string,
    minSelfDelegation: ow.string,
});

export const owMsgWithdrawDelegatorRewardOptions = owStrictObject().exactShape({
    delegatorAddress: ow.string,
    validatorAddress: ow.string,
});

export const owMsgDelegateOptions = owStrictObject().exactShape({
    delegatorAddress: ow.string,
    validatorAddress: ow.string,
    amount: owCoin(),
});

export const owMsgUndelegateOptions = owStrictObject().exactShape({
    delegatorAddress: ow.string,
    validatorAddress: ow.string,
    amount: owCoin(),
});

export const owMsgWithdrawValidatorCommissionOptions = owStrictObject().exactShape({
    validatorAddress: ow.string,
});

export const owMsgBeginRedelgateOptions = owStrictObject().exactShape({
    delegatorAddress: ow.string,
    validatorDstAddress: ow.string,
    validatorSrcAddress: ow.string,
    amount: owCoin(),
});
