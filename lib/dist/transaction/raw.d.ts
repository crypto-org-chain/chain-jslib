import Big from 'big.js';
import { AuthInfo, TxBody } from '../cosmos/v1beta1/types/tx';
import { Bytes } from '../utils/bytes/bytes';
import { Network } from '../network/network';
import { SignerAccount, SIGN_MODE } from './types';
import { SignableTransaction } from './signable';
import { CosmosMsg } from './msg/cosmosMsg';
import { InitConfigurations } from '../core/cro';
import { ICoin } from '../coin/coin';
export declare const rawTransaction: (config: InitConfigurations) => {
    new (): {
        readonly txBody: TxBody;
        readonly authInfo: AuthInfo;
        readonly network: Network;
        readonly signerAccounts: SignerAccount[];
        addMessage(message: CosmosMsg): any;
        appendMessage(message: CosmosMsg): any;
        setMemo(memo: string): any;
        setGasLimit(gasLimit: string): any;
        setFee(fee: ICoin): any;
        setTimeOutHeight(timeoutHeight: string): any;
        addSigner(signer: TransactionSigner): any;
        toSignable(): SignableTransaction;
        getTxBody(): Readonly<TxBody>;
        getAuthInfo(): Readonly<AuthInfo>;
        getNetwork(): Readonly<Network>;
        getSignerAccounts(): Readonly<SignerAccount[]>;
    };
};
export declare type TransactionSigner = {
    publicKey: Bytes;
    accountNumber: Big;
    accountSequence: Big;
    signMode?: SIGN_MODE;
};
//# sourceMappingURL=raw.d.ts.map