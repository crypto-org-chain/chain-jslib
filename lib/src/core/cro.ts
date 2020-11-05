import ow from 'ow';

import { Network } from '../network/network';
import { coin } from '../coin/coin';
import { owCroSDKInitParams } from './ow.types';
import { rawTransaction } from '../transaction/raw';
import { msgSend } from '../transaction/msg/msgsend';
import { msgCreateValidator } from '../transaction/msg/MsgCreateValidator';
import { msgEditValidator } from '../transaction/msg/MsgEditValidator';
import { msgWithdrawDelegateReward } from '../transaction/msg/MsgWithdrawDelegatorReward';
import { msgDelegate } from '../transaction/msg/MsgDelegate';
import { msgUndelegate } from '../transaction/msg/MsgUndelegate';

export const CroSDK = function (configs: InitConfigurations) {
    ow(configs, 'configs', owCroSDKInitParams);

    return {
        Coin: coin(configs),
        RawTransaction: rawTransaction(configs),
        bank: {
            MsgSend: msgSend(configs),
            MsgCreateValidator: msgCreateValidator(configs),
            MsgEditValidator: msgEditValidator(configs),
            MsgWithdrawDelegatorReward: msgWithdrawDelegateReward(configs),
            MsgDelegate: msgDelegate(configs),
            MsgUndelegate: msgUndelegate(configs), // TODO: Move to `staking` namespace
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
