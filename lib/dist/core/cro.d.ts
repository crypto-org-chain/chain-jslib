import { Network } from '../network/network';
export declare const CroSDK: (configs: InitConfigurations) => {
    Coin: {
        new (amount: string, unit: import("../coin/coin").Units): {
            readonly baseAmount: import("big.js").Big;
            readonly network: Network;
            getNetwork(): Network;
            add(anotherCoin: any): any;
            sub(anotherCoin: any): any;
            toBig(): import("big.js").Big;
            toCosmosCoin(): import("../cosmos/coins").Coin;
            toCosmosCoins(): import("../cosmos/coins").Coin[];
            toString(unit?: import("../coin/coin").Units): string;
        };
        TOTAL_SUPPLY_STRING: string;
        TOTAL_SUPPLY: {
            readonly baseAmount: import("big.js").Big;
            readonly network: Network;
            getNetwork(): Network;
            add(anotherCoin: any): any;
            sub(anotherCoin: any): any;
            toBig(): import("big.js").Big;
            toCosmosCoin(): import("../cosmos/coins").Coin;
            toCosmosCoins(): import("../cosmos/coins").Coin[];
            toString(unit?: import("../coin/coin").Units): string;
        };
        ONE_CRO_IN_BASE_UNIT: import("big.js").Big;
        UNIT_BASE: import("../coin/coin").Units;
        UNIT_CRO: import("../coin/coin").Units;
        parseBaseAmount(baseAmount: import("big.js").Big): import("big.js").Big;
        parseCROAmount(croAmount: import("big.js").Big): import("big.js").Big;
        fromBaseUnit(baseValue: string): {
            readonly baseAmount: import("big.js").Big;
            readonly network: Network;
            getNetwork(): Network;
            add(anotherCoin: any): any;
            sub(anotherCoin: any): any;
            toBig(): import("big.js").Big;
            toCosmosCoin(): import("../cosmos/coins").Coin;
            toCosmosCoins(): import("../cosmos/coins").Coin[];
            toString(unit?: import("../coin/coin").Units): string;
        };
        fromCRO(croValue: string): {
            readonly baseAmount: import("big.js").Big;
            readonly network: Network;
            getNetwork(): Network;
            add(anotherCoin: any): any;
            sub(anotherCoin: any): any;
            toBig(): import("big.js").Big;
            toCosmosCoin(): import("../cosmos/coins").Coin;
            toCosmosCoins(): import("../cosmos/coins").Coin[];
            toString(unit?: import("../coin/coin").Units): string;
        };
    };
    RawTransaction: {
        new (): {
            readonly txBody: import("../cosmos/v1beta1/types/tx").TxBody;
            readonly authInfo: import("../cosmos/v1beta1/types/tx").AuthInfo;
            readonly network: Network;
            readonly signerAccounts: import("../transaction/types").SignerAccount[];
            addMessage(message: import("../transaction/msg/cosmosMsg").CosmosMsg): any;
            appendMessage(message: import("../transaction/msg/cosmosMsg").CosmosMsg): any;
            setMemo(memo: string): any;
            setGasLimit(gasLimit: string): any;
            setFee(fee: import("../coin/coin").ICoin): any;
            setTimeOutHeight(timeoutHeight: string): any;
            addSigner(signer: import("../transaction/raw").TransactionSigner): any;
            toSignable(): import("../transaction/signable").SignableTransaction;
            getTxBody(): Readonly<import("../cosmos/v1beta1/types/tx").TxBody>;
            getAuthInfo(): Readonly<import("../cosmos/v1beta1/types/tx").AuthInfo>;
            getNetwork(): Readonly<Network>;
            getSignerAccounts(): readonly import("../transaction/types").SignerAccount[];
        };
    };
    Address: {
        new (pubKeySource: import("../address/address").AccountPubKeySource): {
            readonly pubKeyDigest: import("../utils/bytes/bytes").Bytes;
            account(): string;
            validator(): string;
        };
    };
    gov: {
        MsgDeposit: {
            new (options: import("../transaction/msg/gov/MsgDeposit").MsgDepositOptions): {
                proposalId: import("big.js").Big;
                depositor: string;
                amount: import("../coin/coin").ICoin;
                toRawAminoMsg(): import("../cosmos/amino").Msg;
                toRawMsg(): import("../cosmos/v1beta1/types/msg").Msg;
                validate(): void;
            };
        };
        MsgVote: {
            new (options: import("../transaction/msg/gov/MsgVote").MsgVoteOptions): {
                proposalId: import("big.js").Big;
                voter: string;
                option: string;
                toRawAminoMsg(): import("../cosmos/amino").Msg;
                toRawMsg(): import("../cosmos/v1beta1/types/msg").Msg;
                validate(): void;
            };
        };
        MsgSubmitProposal: {
            new (options: import("../transaction/msg/gov/MsgSubmitProposal").ProposalOptions): {
                readonly proposer: string;
                readonly initialDeposit: import("../coin/coin").ICoin;
                readonly content: import("../transaction/msg/gov/IMsgProposalContent").IMsgProposalContent;
                toRawAminoMsg(): import("../cosmos/amino").Msg;
                toRawMsg(): import("../cosmos/v1beta1/types/msg").Msg;
                validate(): void;
            };
        };
        proposal: {
            CommunityPoolSpendProposal: {
                new (options: import("../transaction/msg/gov/CommunityPoolSpendProposal").CommunityPoolSpendProposalOptions): {
                    title: string;
                    description: string;
                    recipient: string;
                    amount: import("../coin/coin").ICoin;
                    getEncoded(): import("../cosmos/v1beta1/codec").google.protobuf.Any;
                    validate(): void;
                };
            };
            ParamChangeProposal: {
                new (options: import("../transaction/msg/gov/ParamChangeProposal").ParamChangeProposalOptions): {
                    readonly title: string;
                    readonly description: string;
                    readonly paramChanges: import("../transaction/msg/gov/ParamChangeProposal").ParamChange[];
                    getEncoded(): import("../cosmos/v1beta1/codec").google.protobuf.Any;
                };
            };
        };
    };
    bank: {
        MsgSend: {
            new (options: import("../transaction/msg/bank/msgsend").MsgSendOptions): {
                readonly fromAddress: string;
                readonly toAddress: string;
                amount: import("../coin/coin").ICoin;
                toRawMsg(): import("../cosmos/v1beta1/types/msg").Msg;
                toRawAminoMsg(): import("../cosmos/amino").Msg;
                validateAddresses(): void;
            };
        };
    };
    staking: {
        MsgCreateValidator: {
            new (options: import("../transaction/msg/staking/MsgCreateValidator").MsgCreateValidatorParams): {
                readonly description: import("../transaction/common/interface/IDescription").IDescription;
                readonly commission: import("../transaction/common/interface/ICommissionRates").ICommissionRates;
                minSelfDelegation: string;
                delegatorAddress: string;
                validatorAddress: string;
                pubkey: string;
                value: import("../coin/coin").ICoin;
                toRawAminoMsg(): import("../cosmos/amino").Msg;
                toRawMsg(): import("../cosmos/v1beta1/types/msg").Msg;
                validateAddresses(): void;
            };
        };
        MsgEditValidator: {
            new (options: import("../transaction/msg/staking/MsgEditValidator").MsgCreateEditOptions): {
                readonly description: import("../transaction/common/interface/IDescription").IDescription;
                minSelfDelegation: string | null;
                commissionRate: string | null;
                validatorAddress: string;
                toRawAminoMsg(): import("../cosmos/amino").Msg;
                toRawMsg(): import("../cosmos/v1beta1/types/msg").Msg;
                validateAddresses(): void;
            };
        };
        MsgDelegate: {
            new (options: import("../transaction/msg/staking/MsgDelegate").IMsgDelegate): {
                delegatorAddress: string;
                validatorAddress: string;
                amount: import("../coin/coin").ICoin;
                toRawAminoMsg(): import("../cosmos/amino").Msg;
                toRawMsg(): import("../cosmos/v1beta1/types/msg").Msg;
                validateAddresses(): void;
            };
        };
        MsgUndelegate: {
            new (options: import("../transaction/msg/staking/MsgUndelegate").IMsgUndelegate): {
                delegatorAddress: string;
                validatorAddress: string;
                amount: import("../coin/coin").ICoin;
                toRawAminoMsg(): import("../cosmos/amino").Msg;
                toRawMsg(): import("../cosmos/v1beta1/types/msg").Msg;
                validateAddresses(): void;
            };
        };
        MsgBeginRedelegate: {
            new (options: import("../transaction/msg/staking/MsgBeginRedelegate").IMsgBeginRedelgate): {
                delegatorAddress: string;
                validatorSrcAddress: string;
                validatorDstAddress: string;
                amount: import("../coin/coin").ICoin;
                toRawAminoMsg(): import("../cosmos/amino").Msg;
                toRawMsg(): import("../cosmos/v1beta1/types/msg").Msg;
                validateAddresses(): void;
            };
        };
    };
    distribution: {
        MsgWithdrawValidatorCommission: {
            new (options: import("../transaction/msg/distribution/MsgWithdrawValidatorCommission").MsgWithdrawValidatorCommissionOptions): {
                readonly validatorAddress: string;
                toRawAminoMsg(): import("../cosmos/amino").Msg;
                toRawMsg(): import("../cosmos/v1beta1/types/msg").Msg;
                validateAddresses(): void;
            };
        };
        MsgWithdrawDelegatorReward: {
            new (options: import("../transaction/msg/distribution/MsgWithdrawDelegatorReward").MsgWithdrawDelegatorRewardOptions): {
                readonly delegatorAddress: string;
                readonly validatorAddress: string;
                toRawAminoMsg(): import("../cosmos/amino").Msg;
                toRawMsg(): import("../cosmos/v1beta1/types/msg").Msg;
                validateAddresses(): void;
            };
        };
    };
    Options: InitConfigurations;
};
export declare class CroNetwork {
    static Testnet: Network;
    static Mainnet: Network;
}
export declare type InitConfigurations = {
    network: Network;
};
//# sourceMappingURL=cro.d.ts.map