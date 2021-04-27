import ow from 'ow';

import { croClient } from '../client/client';
import { Network } from '../network/network';
import { coin } from '../coin/coin';
import { owCroSDKInitParams } from './ow.types';
import { rawTransaction } from '../transaction/raw';
import { msgSend } from '../transaction/msg/bank/msgsend';
import { msgCreateValidator } from '../transaction/msg/staking/MsgCreateValidator';
import { msgWithdrawDelegateReward } from '../transaction/msg/distribution/MsgWithdrawDelegatorReward';
import { msgDelegate } from '../transaction/msg/staking/MsgDelegate';
import { msgEditValidator } from '../transaction/msg/staking/MsgEditValidator';
import { msgUndelegate } from '../transaction/msg/staking/MsgUndelegate';
import { msgBeginRedelegate } from '../transaction/msg/staking/MsgBeginRedelegate';
import { userAddress } from '../address/address';
import { msgWithdrawValidatorCommission } from '../transaction/msg/distribution/MsgWithdrawValidatorCommission';
import { msgDeposit } from '../transaction/msg/gov/MsgDeposit';
import { msgVote } from '../transaction/msg/gov/MsgVote';
import { msgSubmitProposal } from '../transaction/msg/gov/MsgSubmitProposal';
import { communityPoolSpendProposal } from '../transaction/msg/gov/CommunityPoolSpendProposal';
import { paramChangeProposal } from '../transaction/msg/gov/ParamChangeProposal';
import { cancelSoftwareUpgradeProposal } from '../transaction/msg/gov/proposal/CancelSoftwareUpgradeProposal';
import { softwareUpgradeProposal } from '../transaction/msg/gov/proposal/SoftwareUpgradeProposal';
import { textProposal } from '../transaction/msg/gov/proposal/TextProposal';

export const CroSDK = function (configs: InitConfigurations) {
    ow(configs, 'configs', owCroSDKInitParams);

    return {
        CroClient: croClient(configs),
        Coin: coin(configs),
        RawTransaction: rawTransaction(configs),
        Address: userAddress(configs),
        gov: {
            MsgDeposit: msgDeposit(configs),
            MsgVote: msgVote(configs),
            MsgSubmitProposal: msgSubmitProposal(configs),
            proposal: {
                CommunityPoolSpendProposal: communityPoolSpendProposal(configs),
                ParamChangeProposal: paramChangeProposal(),
                CancelSoftwareUpgradeProposal: cancelSoftwareUpgradeProposal(),
                SoftwareUpgradeProposal: softwareUpgradeProposal(),
                TextProposal: textProposal(),
                // TODO : More type of proposals to be added here
            },
        },
        bank: {
            MsgSend: msgSend(configs),
        },
        staking: {
            MsgCreateValidator: msgCreateValidator(configs),
            MsgEditValidator: msgEditValidator(configs),
            MsgDelegate: msgDelegate(configs),
            MsgUndelegate: msgUndelegate(configs),
            MsgBeginRedelegate: msgBeginRedelegate(configs),
        },
        distribution: {
            MsgWithdrawValidatorCommission: msgWithdrawValidatorCommission(configs),
            MsgWithdrawDelegatorReward: msgWithdrawDelegateReward(configs),
        },
        Options: configs,
    };
};

export class CroNetwork {
    public static Testnet: Network = {
        defaultNodeUrl: 'https://testnet-croeseid.crypto.org',
        chainId: 'testnet-croeseid-2',
        addressPrefix: 'tcro',
        validatorAddressPrefix: 'tcrocncl',
        validatorPubKeyPrefix: 'tcrocnclconspub',
        coin: {
            baseDenom: 'basetcro',
            croDenom: 'tcro',
        },
        bip44Path: {
            coinType: 1,
            account: 0,
        },
        rpcUrl: 'https://testnet-croeseid.crypto.org:26657',
    };

    public static Mainnet: Network = {
        defaultNodeUrl: 'https://mainnet.crypto.org',
        chainId: 'crypto-org-chain-mainnet-1',
        addressPrefix: 'cro',
        validatorAddressPrefix: 'crocncl',
        validatorPubKeyPrefix: 'crocnclconspub',
        coin: {
            baseDenom: 'basecro',
            croDenom: 'cro',
        },
        bip44Path: {
            coinType: 394,
            account: 0,
        },
        rpcUrl: 'https://mainnet.crypto.org:26657',
    };
}

export type InitConfigurations = {
    network: Network;
    // More sdk configs to be added in the future
};
