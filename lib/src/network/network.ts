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
