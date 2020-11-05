export type Network = {
    chainId: string;
    addressPrefix: string;
    validatorAddressPrefix: string;
    coin: {
        baseDenom: string;
        croDenom: string;
    };
    bip44Path: {
        coinType: number;
        account: number;
    };
};
