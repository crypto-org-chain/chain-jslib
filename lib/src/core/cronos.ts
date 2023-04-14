import ow from 'ow';

import { croClient } from '../client/client';
import { Network } from '../network/network';
import { cronosCoin } from '../coin/cronos_coin';
import { owCroSDKInitParams } from './ow.types';
import { rawTransaction } from '../transaction/raw';
import { msgSend } from '../transaction/msg/bank/msgsend';
import { userAddress } from '../address/address';
import { msgDeposit } from '../transaction/msg/gov/MsgDeposit';
import { msgVote } from '../transaction/msg/gov/MsgVote';
import { msgSubmitProposal } from '../transaction/msg/gov/MsgSubmitProposal';
import { communityPoolSpendProposal } from '../transaction/msg/gov/proposal/CommunityPoolSpendProposal';
import { paramChangeProposal } from '../transaction/msg/gov/proposal/ParamChangeProposal';
import { cancelSoftwareUpgradeProposal } from '../transaction/msg/gov/proposal/CancelSoftwareUpgradeProposal';
import { softwareUpgradeProposal } from '../transaction/msg/gov/proposal/SoftwareUpgradeProposal';
import { textProposal } from '../transaction/msg/gov/proposal/TextProposal';
import { msgTransferIBC } from '../transaction/msg/ibc/applications/MsgTransfer';
import { msgCreateClientIBC } from '../transaction/msg/ibc/core/MsgCreateClient';
import { msgSendV2 } from '../transaction/msg/v2/bank/v2.msgsend';
import { msgDepositV2 } from '../transaction/msg/v2/gov/v2.MsgDeposit';
import { communityPoolSpendProposalV2 } from '../transaction/msg/v2/gov/proposal/v2.CommunityPoolSpendProposal';
import { msgSubmitProposalV2 } from '../transaction/msg/v2/gov/v2.MsgSubmitProposal';
import { msgUpdateClientIBC } from '../transaction/msg/ibc/core/MsgUpdateClient';
import { msgUpgradeClientIBC } from '../transaction/msg/ibc/core/MsgUpgradeClient';
import { msgSubmitMisbehaviourIBC } from '../transaction/msg/ibc/core/MsgSubmitMisbehaviour';
import { rawTransactionV2 } from '../transaction/v2.raw';
import { coinv2 } from '../coin/v2.coin/v2.coin';
import { msgClientState } from '../transaction/msg/ibc/lightclients/ClientState';
import { msgConsensusState } from '../transaction/msg/ibc/lightclients/ConsensusState';
import { msgHeader } from '../transaction/msg/ibc/lightclients/Header';
import { MsgConnectionOpenConfirmIBC } from '../transaction/msg/ibc/core/connection/MsgConnectionOpenConfirm';
import { MsgConnectionOpenTryIBC } from '../transaction/msg/ibc/core/connection/MsgConnectionOpenTry';
import { msgUnjailV2 } from '../transaction/msg/slashing/MsgUnjail';
import { InitConfigurations } from './cro';

export const CronosSDK = function (configs: InitConfigurations) {
    ow(configs, 'configs', owCroSDKInitParams);

    return {
        CroClient: croClient(configs),
        Coin: cronosCoin(configs),
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
            },
        },
        bank: {
            MsgSend: msgSend(configs),
        },
        ibc: {
            MsgTransfer: msgTransferIBC(configs),
            MsgCreateClient: msgCreateClientIBC(configs),
            MsgUpdateClient: msgUpdateClientIBC(configs),
            MsgUpgradeClient: msgUpgradeClientIBC(configs),
            MsgSubmitMisbehaviour: msgSubmitMisbehaviourIBC(configs),
            lightclient: {
                ClientState: msgClientState(),
                ConsensusState: msgConsensusState(),
                Header: msgHeader(),
            },
            connection: {
                MsgConnectionOpenConfirm: MsgConnectionOpenConfirmIBC(configs),
                MsgConnectionOpenTry: MsgConnectionOpenTryIBC(configs),
            },
        },
        v2: {
            bank: {
                MsgSendV2: msgSendV2(configs),
            },
            gov: {
                MsgDepositV2: msgDepositV2(configs),
                MsgSubmitProposalV2: msgSubmitProposalV2(configs),
                proposal: {
                    CommunityPoolSpendProposalV2: communityPoolSpendProposalV2(configs),
                },
            },
            slashing: {
                MsgUnjailV2: msgUnjailV2(configs),
            },
            RawTransactionV2: rawTransactionV2(configs),
            CoinV2: coinv2(configs),
        },
        Options: configs,
    };
};

export class CronosNetwork {
    public static Mainnet: Network = {
        defaultNodeUrl: 'https://rpc.cronos.org',
        chainId: 'cronosmainnet_25-1',
        addressPrefix: 'crc',
        validatorAddressPrefix: 'crccncl',
        validatorPubKeyPrefix: 'crccnclconspub',
        coin: {
            baseDenom: 'basecro',
            croDenom: '',
        },
        bip44Path: {
            coinType: 1,
            account: 0,
        },
        rpcUrl: 'https://rpc.cronos.org',
    };

    public static Testnet: Network = {
        defaultNodeUrl: 'https://rpc-t3.cronos.org',
        chainId: 'cronostestnet_338-3',
        addressPrefix: 'tcro',
        validatorAddressPrefix: 'tcrocncl',
        validatorPubKeyPrefix: 'tcrocnclconspub',
        coin: {
            baseDenom: 'basetcro',
            croDenom: '',
        },
        bip44Path: {
            coinType: 1,
            account: 0,
        },
        rpcUrl: 'https://rpc-t3.cronos.org',
    };

    public static TestnetP11: Network = {
        defaultNodeUrl: 'https://rpc-p11.cronos.org',
        chainId: 'pioneereleventestnet_340-1',
        addressPrefix: 'tcrc',
        validatorAddressPrefix: 'tcrccncl',
        validatorPubKeyPrefix: 'tcrccnclconspub',
        coin: {
            baseDenom: 'basetcro',
            croDenom: '',
        },
        bip44Path: {
            coinType: 1,
            account: 0,
        },
        rpcUrl: 'https://rpc-p11.cronos.org:443',
    };
}
