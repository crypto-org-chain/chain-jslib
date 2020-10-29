export const Testnet: Network = {
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

export type Network = {
    chainId: string;
    addressPrefix: string;
    coin: {
        baseDenom: string;
        croDenom: string;
    };
    bip44Path: {
        coinType: number;
        account: number;
    };
};
