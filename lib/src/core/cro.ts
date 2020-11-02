import ow from 'ow';

import { Network } from '../network/network';
import { coin } from '../coin/coin';
import { owCroSDKInitParams } from './ow.types';

export const CroSDK = function (configs: InitConfigurations) {
    ow(configs, 'configs', owCroSDKInitParams);

    return {
        coin: coin(configs),
        options: configs,
    };
};

export class CroNetwork {
    public static Testnet: Network = {
        chainId: 'testnet-croeseid-1',
        addressPrefix: 'tcro',
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
