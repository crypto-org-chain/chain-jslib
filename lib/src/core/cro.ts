import ow from 'ow';

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

export const CroSDK = function (configs: InitConfigurations) {
    ow(configs, 'configs', owCroSDKInitParams);

    return {
        Coin: coin(configs),
        RawTransaction: rawTransaction(configs),
        bank: {
            MsgSend: msgSend(configs),
        },
        staking: {
            MsgCreateValidator: msgCreateValidator(configs),
            MsgEditValidator: msgEditValidator(configs),
            MsgDelegate: msgDelegate(configs),
            MsgUndelegate: msgUndelegate(configs),
        },
        distribution: {
            MsgWithdrawDelegatorReward: msgWithdrawDelegateReward(configs),
        },
        Options: configs,
    };
};

export class CroNetwork {
    public static Testnet: Network = {
        chainId: 'testnet-croeseid-1',
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
    };
}

export type InitConfigurations = {
    network: Network;
    // More sdk configs to be added in the future
};
