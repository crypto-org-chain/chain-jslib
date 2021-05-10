export const COSMOS_MSG_TYPEURL = {
    MsgBeginRedelegate: '/cosmos.staking.v1beta1.MsgBeginRedelegate',
    Coin: '/cosmos.base.v1beta1.Coin',
    MsgSend: '/cosmos.bank.v1beta1.MsgSend',
    MsgWithdrawDelegatorReward: '/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward',
    MsgCreateValidator: '/cosmos.staking.v1beta1.MsgCreateValidator',
    MsgEditValidator: '/cosmos.staking.v1beta1.MsgEditValidator',
    MsgDelegate: '/cosmos.staking.v1beta1.MsgDelegate',
    MsgUndelegate: '/cosmos.staking.v1beta1.MsgUndelegate',
    MsgWithdrawValidatorCommission: '/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission',
    MsgDeposit: '/cosmos.gov.v1beta1.MsgDeposit',
    MsgVote: '/cosmos.gov.v1beta1.MsgVote',
    MsgSubmitProposal: '/cosmos.gov.v1beta1.MsgSubmitProposal',
    PubKey: {
        ed25519: '/cosmos.crypto.ed25519.PubKey',
    },
    upgrade: {
        CancelSoftwareUpgradeProposal: '/cosmos.upgrade.v1beta1.CancelSoftwareUpgradeProposal',
        SoftwareUpgradeProposal: '/cosmos.upgrade.v1beta1.SoftwareUpgradeProposal',
    },
    distribution: {
        MsgSetWithdrawAddress: '/cosmos.distribution.v1beta1.MsgSetWithdrawAddress',
        MsgFundCommunityPool: '/cosmos.distribution.v1beta1.MsgFundCommunityPool',
    },
    gov: {
        TextProposal: '/cosmos.gov.v1beta1.TextProposal',
    },
    nft: {
        MsgIssueDenom: '/chainmain.nft.v1.MsgIssueDenom',
        MsgMintNFT: '/chainmain.nft.v1.MsgMintNFT',
        MsgEditNFT: '/chainmain.nft.v1.MsgEditNFT',
        MsgTransferNFT: '/chainmain.nft.v1.MsgTransferNFT',
        MsgBurnNFT: '/chainmain.nft.v1.MsgBurnNFT',
    },
};
