import ow from 'ow';
import { owCoin, owOptionalCoin } from '../../coin/ow.types';
import { owBig, owStrictObject, owOptionalStrictObject } from '../../ow.types';
import { VoteOption } from './gov/MsgVote';
import { isMsgProposalContent } from './gov/IMsgProposalContent';
import { owLong, owOptionalTimestamp } from './gov/ow.types';
import { ics23, tendermintV2 } from '../../cosmos/v1beta1/codec';

const voteOptionValidator = (val: number) => ({
    validator: Object.values(VoteOption).includes(val as any),
    message: (label: string) => `Expected ${label} to be one of the Vote options, got \`${val}\``,
});

const proposalContentValidatorFn = (val: object) => ({
    validator: isMsgProposalContent(val),
    message: (label: string) => `Expected ${label} to be an instance of \`IMsgProposalContent\`, got \`${val}\``,
});

const owContent = () => owStrictObject().validate(proposalContentValidatorFn);

export const owVoteOption = () => ow.number.validate(voteOptionValidator);

export const owMsgSendOptions = owStrictObject().exactShape({
    fromAddress: ow.string,
    toAddress: ow.string,
    amount: owCoin(),
});
export const v2 = {
    owMsgSendOptions: owStrictObject().exactShape({
        fromAddress: ow.string,
        toAddress: ow.string,
        amount: ow.array.ofType(owCoin()),
    }),
    owMsgFundCommunityPoolOptions: owStrictObject().exactShape({
        depositor: ow.string,
        amount: ow.array.ofType(owCoin()),
    }),
    owMsgDepositOptions: owStrictObject().exactShape({
        depositor: ow.string,
        proposalId: owBig(),
        amount: ow.array.ofType(owCoin()),
    }),
    owCommunityPoolSpendProposalOptions: owStrictObject().exactShape({
        title: ow.string,
        description: ow.string,
        recipient: ow.string,
        amount: ow.array.ofType(owCoin()),
    }),
    owMsgSubmitProposalOptions: owStrictObject().exactShape({
        proposer: ow.string,
        initialDeposit: ow.array.ofType(owCoin()),
        content: owContent(),
    }),
};

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

export const owMsgUnjailOptions = owStrictObject().exactShape({
    validatorAddress: ow.string,
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

const owNFTStartWithAlphabetValidatorFn = (val: string) => ({
    validator: /^[a-z]/.test(val),
    message: (label: string) => `Expected ${label} to start with lowercase alphabets`,
});

const owNFTIsAlphaNumericValidatorFn = (val: string) => ({
    validator: /^[a-z0-9]+$/.test(val),
    message: (label: string) => `Expected ${label} to contain only lowercase alphanumeric characters`,
});

const owNFTId = ow.string
    .minLength(3)
    .maxLength(64)
    .validate(owNFTStartWithAlphabetValidatorFn)
    .validate(owNFTIsAlphaNumericValidatorFn);

const owNFTNameValidator = (val: string) => ({
    validator: val.replace(/\s/g, '').length > 0,
    message: (label: string) => `Expected ${label} to be non-empty string`,
});

const URI_MAX_LENGTH = 256;

export const owMsgIssueDenomOptions = owStrictObject().exactShape({
    id: owNFTId,
    name: ow.string.validate(owNFTNameValidator),
    schema: ow.string,
    sender: ow.string,
});

export const owMsgMintNFTOptions = owStrictObject().exactShape({
    id: owNFTId,
    denomId: owNFTId,
    name: ow.string.validate(owNFTNameValidator),
    uri: ow.string.maxLength(URI_MAX_LENGTH),
    data: ow.string,
    sender: ow.string,
    recipient: ow.string,
});

export const owMsgEditNFTOptions = owStrictObject().exactShape({
    id: owNFTId,
    denomId: owNFTId,
    name: ow.string.validate(owNFTNameValidator),
    uri: ow.string.maxLength(URI_MAX_LENGTH),
    data: ow.string,
    sender: ow.string,
});

export const owMsgTransferNFTOptions = owStrictObject().exactShape({
    id: owNFTId,
    denomId: owNFTId,
    sender: ow.string,
    recipient: ow.string,
});

export const owMsgBurnNFTOptions = owStrictObject().exactShape({
    id: owNFTId,
    denomId: owNFTId,
    sender: ow.string,
});

/**
 * IBC ow types
 */

const owIBCHeightOptional = () =>
    owOptionalStrictObject().exactShape({
        revisionHeight: owLong(),
        revisionNumber: owLong(),
    });

const owGoogleProtoAnyOptional = () =>
    owOptionalStrictObject().exactShape({
        type_url: ow.optional.string,
        value: ow.optional.uint8Array,
    });

export const owMsgTransferIBCOptions = owStrictObject().exactShape({
    sourcePort: ow.string,
    sourceChannel: ow.string,
    token: owOptionalCoin(),
    sender: ow.string,
    receiver: ow.string,
    timeoutHeight: owIBCHeightOptional(),
    timeoutTimestampInNanoSeconds: owLong(),
});

export const owMsgUpgradeClientOptions = owStrictObject().exactShape({
    clientId: ow.string,
    clientState: ow.optional.any(owGoogleProtoAnyOptional(), ow.optional.null),
    consensusState: ow.optional.any(owGoogleProtoAnyOptional(), ow.optional.null),
    proofUpgradeClient: ow.uint8Array,
    proofUpgradeConsensusState: ow.uint8Array,
    signer: ow.string,
});
export const owMsgSubmitMisbehaviourOptions = owStrictObject().exactShape({
    clientId: ow.string,
    misbehaviour: ow.optional.any(owGoogleProtoAnyOptional(), ow.optional.null),
    signer: ow.string,
});

export const owOptionalFraction = owOptionalStrictObject().exactShape({
    numerator: owLong(),
    denominator: owLong(),
});

export const owHashOp = ow.number.validate((val) => ({
    validator: Object.values(ics23.HashOp).includes(val as any),
    message: (label) => `Expected ${label} to be one of enum ics23.HashOp, got \`${val}\``,
}));

export const owLengthOp = ow.number.validate((val) => ({
    validator: Object.values(ics23.LengthOp).includes(val as any),
    message: (label) => `Expected ${label} to be one of enum ics23.LengthOp, got \`${val}\``,
}));

export const owOptionalLeafSpec = owOptionalStrictObject().exactShape({
    hash: owHashOp,
    prehashKey: owHashOp,
    prehashValue: owHashOp,
    length: owLengthOp,
    prefix: ow.uint8Array,
});
export const owOptionalInnerSpec = owOptionalStrictObject().exactShape({
    childOrder: ow.array.ofType(ow.number),
    childSize: ow.number,
    minPrefixLength: ow.number,
    maxPrefixLength: ow.number,
    emptyChild: ow.uint8Array,
    hash: owHashOp,
});

export const owOptionalProofSpec = owOptionalStrictObject().exactShape({
    leafSpec: owOptionalLeafSpec,
    innerSpec: owOptionalInnerSpec,
    maxDepth: ow.number,
    minDepth: ow.number,
});

export const owOptionalMerkleRoot = owOptionalStrictObject().exactShape({
    hash: ow.any(ow.uint8Array, ow.null),
});

export const owClientStateOptions = owStrictObject().exactShape({
    chainId: ow.string,
    trustLevel: owOptionalFraction,
    trustingPeriod: owOptionalTimestamp(),
    unbondingPeriod: owOptionalTimestamp(),
    maxClockDrift: owOptionalTimestamp(),
    frozenHeight: owIBCHeightOptional(),
    latestHeight: owIBCHeightOptional(),
    proofSpecs: ow.array.ofType(owOptionalProofSpec),
    upgradePath: ow.array.ofType(ow.string),
    allowUpdateAfterExpiry: ow.boolean,
    allowUpdateAfterMisbehaviour: ow.boolean,
});

export const owConsensusStateOptions = owStrictObject().exactShape({
    timestamp: ow.any(owOptionalTimestamp(), ow.null),
    root: ow.any(owOptionalMerkleRoot, ow.null),
    nextValidatorsHash: ow.uint8Array,
});

export const owMsgCreateClientOptions = owStrictObject().exactShape({
    signer: ow.string,
    clientState: ow.optional.any(owClientStateOptions, ow.null),
    consensusState: ow.optional.any(owConsensusStateOptions, ow.null),
});

export const owOptionalPublicKey = owOptionalStrictObject().exactShape({
    ed25519: ow.optional.uint8Array,
    secp256k1: ow.optional.uint8Array,
    sum: ow.optional.string,
});
export const owOptionalTendermintValidator = owOptionalStrictObject().exactShape({
    address: ow.uint8Array,
    pubKey: ow.optional.any(owOptionalPublicKey, ow.null),
    votingPower: owLong(),
    proposerPriority: owLong(),
});
export const owOptionalLightClientValidatorSet = owOptionalStrictObject().exactShape({
    validators: ow.array.ofType(owOptionalTendermintValidator),
    proposer: ow.optional.any(owOptionalTendermintValidator, ow.null),
    totalVotingPower: owLong(),
});

export const owOptionalTendermintTypesPartSetHeader = owOptionalStrictObject().exactShape({
    total: ow.number,
    hash: ow.uint8Array,
});

export const owOptionalTendermintBlockID = owOptionalStrictObject().exactShape({
    hash: ow.uint8Array,
    partSetHeader: ow.optional.any(owOptionalTendermintTypesPartSetHeader, ow.null),
});
export const owOptionalTendermintConsensus = owOptionalStrictObject().exactShape({
    block: owLong(),
    app: owLong(),
});
export const validateBlockIDFlag = (val: number) => ({
    validator: Object.values(tendermintV2.types.BlockIDFlag).includes(val as any),
    message: (label: any) => `Expected ${label} to be one of enum 'tendermintV2.types.BlockIDFlag', got \`${val}\``,
});
export const owTendermintTypesBlockIDFlag = ow.number.validate(validateBlockIDFlag);

export const owTendermintTypesCommitSig = owStrictObject().exactShape({
    blockIdFlag: owTendermintTypesBlockIDFlag,
    validatorAddress: ow.uint8Array,
    timestamp: ow.optional.any(owOptionalTimestamp(), ow.null),
    signature: ow.uint8Array,
});

export const owOptionalSignedHeaderParamsHeader = () =>
    owOptionalStrictObject().exactShape({
        version: ow.optional.any(owOptionalTendermintConsensus, ow.null),
        chainId: ow.string,
        height: owLong(),
        time: ow.optional.any(owOptionalTimestamp(), ow.null),
        lastBlockId: ow.optional.any(owOptionalTendermintBlockID, ow.null),
        lastCommitHash: ow.uint8Array,
        dataHash: ow.uint8Array,
        validatorsHash: ow.uint8Array,
        nextValidatorsHash: ow.uint8Array,
        consensusHash: ow.uint8Array,
        appHash: ow.uint8Array,
        lastResultsHash: ow.uint8Array,
        evidenceHash: ow.uint8Array,
        proposerAddress: ow.uint8Array,
    });

export const owOptionalSignedHeaderParamsCommit = () =>
    owOptionalStrictObject().exactShape({
        height: owLong(),
        round: ow.number,
        blockId: ow.any(owOptionalTendermintBlockID, ow.null),
        signatures: ow.array.ofType(owTendermintTypesCommitSig),
    });

export const owOptionalSignedHeader = () =>
    owOptionalStrictObject().exactShape({
        header: owOptionalSignedHeaderParamsHeader(),
        commit: owOptionalSignedHeaderParamsCommit(),
    });

export const owHeaderOptions = owStrictObject().exactShape({
    signedHeader: owOptionalSignedHeader(),
    validatorSet: ow.any(owOptionalLightClientValidatorSet, ow.optional.null),
    trustedHeight: owIBCHeightOptional(),
    trustedValidators: ow.optional.any(owOptionalLightClientValidatorSet, ow.null),
});

export const owMsgUpdateClientOptions = owStrictObject().exactShape({
    signer: ow.string,
    clientId: ow.string,
    header: ow.optional.any(owHeaderOptions, ow.optional.null),
});

export const owMsgConnectionOpenConfirmOptions = owStrictObject().exactShape({
    signer: ow.string,
    connectionId: ow.string,
    proofAck: ow.uint8Array,
    proofHeight: ow.any(owIBCHeightOptional(), ow.null),
});

export const owCounterPartyVersion = owStrictObject().exactShape({
    identifier: ow.string,
    features: ow.array.ofType(ow.string),
});

export const owCounterPartyOptional = owOptionalStrictObject().exactShape({
    clientId: ow.string,
    connectionId: ow.string,
    prefix: owStrictObject().exactShape({
        keyPrefix: ow.string,
    }),
});

export const owMsgConnectionOpenTryOptions = owStrictObject().exactShape({
    clientId: ow.string,
    previousConnectionId: ow.string,
    clientState: ow.optional.any(owClientStateOptions),
    counterparty: ow.any(owCounterPartyOptional, ow.null),
    delayPeriod: owLong(),
    counterpartyVersions: ow.array.ofType(owCounterPartyVersion),
    proofHeight: ow.any(owIBCHeightOptional(), ow.null),
    proofInit: ow.uint8Array,
    proofClient: ow.uint8Array,
    proofConsensus: ow.uint8Array,
    consensusHeight: ow.any(owIBCHeightOptional(), ow.null),
    signer: ow.string,
});

export const owMsgCreateVestingAccountOptions = owStrictObject().exactShape({
    fromAddress: ow.string,
    toAddress: ow.string,
    amount: owCoin(),
    endTime: owLong(),
    delayed: ow.boolean,
});

export const owOptionalBaseAccount = () =>
    owOptionalStrictObject().exactShape({
        address: ow.string,
        pubKey: ow.any(owGoogleProtoAnyOptional(), ow.null),
        accountNumber: owLong(),
        sequence: owLong(),
    });

export const owDelayedVestingAccountOptions = owStrictObject().exactShape({
    baseAccount: owOptionalBaseAccount(),
    originalVesting: ow.array.ofType(owCoin()),
    delegatedFree: ow.array.ofType(owCoin()),
    delegatedVesting: ow.array.ofType(owCoin()),
    endTime: owLong(),
});
