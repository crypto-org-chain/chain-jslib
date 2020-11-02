import { Network } from '../network/network';
import { coin } from '../coin/coin';

export const croSDK = function (config: InitConfigurations) {
    return {
        coin: coin(config),
    };
};

export class CroSDK {
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
