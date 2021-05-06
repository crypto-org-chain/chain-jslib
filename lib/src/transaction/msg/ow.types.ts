import ow from 'ow';
import { owCoin } from '../../coin/ow.types';
import { owBig, owStrictObject } from '../../ow.types';
import { VoteOption } from './gov/MsgVote';
import { isMsgProposalContent } from './gov/IMsgProposalContent';

const voteOptionValidator = (val: number) => ({
    validator: Object.values(VoteOption).includes(val as any),
    message: (label: string) => `Expected ${label} to be one of the Vote options, got \`${val}\``,
});

export const owVoteOption = () => ow.number.validate(voteOptionValidator);

export const owMsgSendOptions = owStrictObject().exactShape({
    fromAddress: ow.string,
    toAddress: ow.string,
    amount: owCoin(),
});

const proposalContentValidatorFn = (val: object) => ({
    validator: isMsgProposalContent(val),
    message: (label: string) => `Expected ${label} to be an instance of \`IMsgProposalContent\`, got \`${val}\``,
});

const owContent = () => owStrictObject().validate(proposalContentValidatorFn);

export const owMsgSubmitProposalOptions = owStrictObject().exactShape({
    proposer: ow.string,
    initialDeposit: owCoin(),
    content: owContent(),
});

export const owMsgDepositOptions = owStrictObject().exactShape({
    depositor: ow.string,
    proposalId: owBig(),
    amount: owCoin(),
});

export const owMsgVoteOptions = owStrictObject().exactShape({
    voter: ow.string,
    proposalId: owBig(),
    option: owVoteOption(),
});

export const owMsgCreateValidatorOptions = owStrictObject().exactShape({
    description: {
        moniker: ow.string,
        identity: ow.optional.string,
        website: ow.optional.string,
        securityContact: ow.optional.string,
        details: ow.optional.string,
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
        moniker: ow.optional.string,
        identity: ow.optional.string,
        website: ow.optional.string,
        securityContact: ow.optional.string,
        details: ow.optional.string,
    },
    validatorAddress: ow.string,
    commissionRate: ow.any(ow.string, ow.null),
    minSelfDelegation: ow.any(ow.string, ow.null),
});

export const owMsgWithdrawDelegatorRewardOptions = owStrictObject().exactShape({
    delegatorAddress: ow.string,
    validatorAddress: ow.string,
});

export const owMsgSetWithdrawAddressOptions = owStrictObject().exactShape({
    delegatorAddress: ow.string,
    withdrawAddress: ow.string,
});

export const owMsgFundCommunityPoolOptions = owStrictObject().exactShape({
    depositor: ow.string,
    amount: owCoin(),
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

/**
 * nft ow types here
 */
export const owMsgIssueDenomOptions = owStrictObject().exactShape({
    id: ow.string,
    name: ow.string,
    schema: ow.string,
    sender: ow.string,
});

export const owMsgMintNFTOptions = owStrictObject().exactShape({
    id: ow.string,
    denomId: ow.string,
    name: ow.string,
    uri: ow.string,
    data: ow.string,
    sender: ow.string,
    recipient: ow.string,
});

export const owMsgEditNFTOptions = owStrictObject().exactShape({
    id: ow.string,
    denomId: ow.string,
    name: ow.string,
    uri: ow.string,
    data: ow.string,
    sender: ow.string,
});
