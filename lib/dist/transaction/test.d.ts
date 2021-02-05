import { Secp256k1KeyPair } from '../keypair/secp256k1';
import { Network } from '../network/network';
import { TransactionSigner } from './raw';
import { SignableTransactionParams } from './signable';
import { TxRaw } from '../cosmos/v1beta1/types/tx';
import { CosmosMsg } from './msg/cosmosMsg';
export declare type MessageSuite = {
    network: Network;
    keyPair: Secp256k1KeyPair;
    toAddress: string;
    message: CosmosMsg;
};
export declare const CosmosMsgSuiteFactory: import("rosie").IFactory<MessageSuite>;
export declare const TransactionSignerFactory: import("rosie").IFactory<TransactionSigner & {
    keyPair: Secp256k1KeyPair;
}>;
export declare type SignableTransactionParamsSuite = {
    network: Network;
    keyPair: Secp256k1KeyPair;
    params: SignableTransactionParams;
};
export declare const SignableTransactionParamsSuiteFactory: import("rosie").IFactory<SignableTransactionParamsSuite>;
export declare const txRawFactory: {
    build: () => TxRaw;
};
//# sourceMappingURL=test.d.ts.map