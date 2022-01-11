// Copyright © 2018–2020 IOV SAS (licensed under the Apache License, Version 2.0)
// Copyright © 2020 Confio UO (licensed under the Apache License, Version 2.0)
// Copyright © 2020 Simon Warta (licensed under the Apache License, Version 2.0)
// Modifications Copyright (c) 2018 - 2020, Foris Limited (licensed under the Apache License, Version 2.0)
import protobuf from 'protobufjs';
import { cosmos, google, chainmain, ibc } from '../codec';

export const typeUrlMappings: {
    [key: string]: GeneratedType;
} = {
    '/cosmos.base.v1beta1.Coin': cosmos.base.v1beta1.Coin,
    '/cosmos.crypto.multisig.LegacyAminoPubKey': cosmos.crypto.multisig.LegacyAminoPubKey,
    '/cosmos.bank.v1beta1.MsgSend': cosmos.bank.v1beta1.MsgSend,
    '/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward': cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward,
    '/cosmos.staking.v1beta1.MsgCreateValidator': cosmos.staking.v1beta1.MsgCreateValidator,
    '/cosmos.staking.v1beta1.MsgBeginRedelegate': cosmos.staking.v1beta1.MsgBeginRedelegate,
    '/cosmos.staking.v1beta1.MsgEditValidator': cosmos.staking.v1beta1.MsgEditValidator,
    '/cosmos.staking.v1beta1.MsgDelegate': cosmos.staking.v1beta1.MsgDelegate,
    '/cosmos.staking.v1beta1.MsgUndelegate': cosmos.staking.v1beta1.MsgUndelegate,
    '/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission':
        cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission,
    '/cosmos.slashing.v1beta1.MsgUnjail': cosmos.slashing.v1beta1.MsgUnjail,
    '/cosmos.crypto.ed25519.PubKey': cosmos.crypto.ed25519.PubKey,
    '/cosmos.crypto.secp256k1.PubKey': cosmos.crypto.secp256k1.PubKey,
    '/cosmos.gov.v1beta1.MsgDeposit': cosmos.gov.v1beta1.MsgDeposit,
    '/cosmos.gov.v1beta1.MsgVote': cosmos.gov.v1beta1.MsgVote,
    '/cosmos.gov.v1beta1.MsgSubmitProposal': cosmos.gov.v1beta1.MsgSubmitProposal,
    '/cosmos.distribution.v1beta1.CommunityPoolSpendProposal': cosmos.distribution.v1beta1.CommunityPoolSpendProposal,
    '/cosmos.upgrade.v1beta1.CancelSoftwareUpgradeProposal': cosmos.upgrade.v1beta1.CancelSoftwareUpgradeProposal,
    '/cosmos.upgrade.v1beta1.SoftwareUpgradeProposal': cosmos.upgrade.v1beta1.SoftwareUpgradeProposal,
    '/cosmos.gov.v1beta1.TextProposal': cosmos.gov.v1beta1.TextProposal,
    '/cosmos.params.v1beta1.ParameterChangeProposal': cosmos.params.v1beta1.ParameterChangeProposal,
    '/google.protobuf.Any': google.protobuf.Any,
    '/cosmos.distribution.v1beta1.MsgSetWithdrawAddress': cosmos.distribution.v1beta1.MsgSetWithdrawAddress,
    '/cosmos.distribution.v1beta1.MsgFundCommunityPool': cosmos.distribution.v1beta1.MsgFundCommunityPool,
    '/chainmain.nft.v1.MsgIssueDenom': chainmain.nft.v1.MsgIssueDenom,
    '/chainmain.nft.v1.MsgMintNFT': chainmain.nft.v1.MsgMintNFT,
    '/chainmain.nft.v1.MsgEditNFT': chainmain.nft.v1.MsgEditNFT,
    '/chainmain.nft.v1.MsgTransferNFT': chainmain.nft.v1.MsgTransferNFT,
    '/chainmain.nft.v1.MsgBurnNFT': chainmain.nft.v1.MsgBurnNFT,
    '/ibc.applications.transfer.v1.MsgTransfer': ibc.applications.transfer.v1.MsgTransfer,
    '/ibc.core.channel.v1.MsgChannelOpenInit': ibc.core.channel.v1.MsgChannelOpenInit,
    '/ibc.core.channel.v1.MsgChannelOpenAck': ibc.core.channel.v1.MsgChannelOpenAck,
    '/ibc.core.channel.v1.MsgChannelOpenTry': ibc.core.channel.v1.MsgChannelOpenTry,
    '/ibc.core.channel.v1.MsgChannelOpenConfirm': ibc.core.channel.v1.MsgChannelOpenConfirm,
    '/ibc.core.channel.v1.MsgChannelCloseInit': ibc.core.channel.v1.MsgChannelCloseInit,
    '/ibc.core.channel.v1.MsgChannelCloseConfirm': ibc.core.channel.v1.MsgChannelCloseConfirm,
    '/ibc.core.connection.v1.MsgConnectionOpenInit': ibc.core.connection.v1.MsgConnectionOpenInit,
    '/ibc.core.connection.v1.MsgConnectionOpenAck': ibc.core.connection.v1.MsgConnectionOpenAck,
    '/ibc.core.connection.v1.MsgConnectionOpenTry': ibc.core.connection.v1.MsgConnectionOpenTry,
    '/ibc.core.connection.v1.MsgConnectionOpenConfirm': ibc.core.connection.v1.MsgConnectionOpenConfirm,
    '/ibc.core.channel.v1.MsgRecvPacket': ibc.core.channel.v1.MsgRecvPacket,
    '/ibc.core.channel.v1.MsgTimeout': ibc.core.channel.v1.MsgTimeout,
    '/ibc.core.channel.v1.MsgTimeoutOnClose': ibc.core.channel.v1.MsgTimeoutOnClose,
    '/ibc.core.channel.v1.MsgAcknowledgement': ibc.core.channel.v1.MsgAcknowledgement,
    '/ibc.core.client.v1.MsgCreateClient': ibc.core.client.v1.MsgCreateClient,
    '/ibc.core.client.v1.MsgUpdateClient': ibc.core.client.v1.MsgUpdateClient,
    '/ibc.core.client.v1.MsgUpgradeClient': ibc.core.client.v1.MsgUpgradeClient,
    '/ibc.core.client.v1.MsgSubmitMisbehaviour': ibc.core.client.v1.MsgSubmitMisbehaviour,
    '/ibc.lightclients.tendermint.v1.ClientState': ibc.lightclients.tendermint.v1.ClientState,
    '/ibc.lightclients.tendermint.v1.ConsensusState': ibc.lightclients.tendermint.v1.ConsensusState,
    '/ibc.lightclients.tendermint.v1.Header': ibc.lightclients.tendermint.v1.Header,
    '/cosmos.vesting.v1beta1.MsgCreateVestingAccount': cosmos.vesting.v1beta1.MsgCreateVestingAccount,
    '/cosmos.vesting.v1beta1.DelayedVestingAccount': cosmos.vesting.v1beta1.DelayedVestingAccount,
};

export interface GeneratedType {
    readonly create: (properties?: { [k: string]: any }) => any;
    readonly encode: (message: any | { [k: string]: any }, writer?: protobuf.Writer) => protobuf.Writer;
    readonly decode: (reader: protobuf.Reader | Uint8Array, length?: number) => any;
}
