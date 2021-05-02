import ow from 'ow';
import Big from 'big.js';

import { cosmos } from '../cosmos/v1beta1/codec';
import { AuthInfo, TxBody } from '../cosmos/v1beta1/types/tx';
import { owRawTransactionSigner, owTimeoutHeight } from './ow.types';
import { Bytes } from '../utils/bytes/bytes';
import { isValidSepc256k1PublicKey } from '../utils/secp256k1';
import { isBigInteger } from '../utils/big';
import { Network } from '../network/network';
import { SignerAccount, SIGN_MODE } from './types';
import { SignableTransaction } from './signable';
import { cloneDeep } from '../utils/clone';
import { CosmosMsg, owCosmosMsg } from './msg/cosmosMsg';
import { InitConfigurations } from '../core/cro';
import { ICoin } from '../coin/coin';
import { owCoin } from '../coin/ow.types';

export const rawTransaction = function (config: InitConfigurations) {
    return class RawTransaction {
        public readonly txBody: TxBody = {
            typeUrl: '/cosmos.tx.v1beta1.TxBody',
            value: {
                messages: [],
                memo: '',
                timeoutHeight: '0',
            },
        };

        public readonly authInfo: AuthInfo = {
            signerInfos: [],
            fee: {
                gasLimit: new Big(200000),
            },
        };

        public readonly network: Network;

        public readonly signerAccounts: SignerAccount[] = [];

        /**
         * Constructor to create a new Transaction
         * @returns {RawTransaction}
         * @throws {Error} when options is invalid
         */
        public constructor() {
            this.network = config.network;
        }

        /**
         * Add Cosmos message to transaction. The message orders will follow the add order.
         * @param {CosmosMsg} message one of the supported Cosmos message
         * @returns {RawTransaction}
         * @throws {Error} when message is invalid
         * @memberof Transaction
         */
        public addMessage(message: CosmosMsg): RawTransaction {
            ow(message, 'message', owCosmosMsg());

            this.txBody.value.messages.push(message);

            return this;
        }

        /**
         * Append Cosmos MsgSend to transaction
         * @param {CosmosMsg} message one of the supported Cosmos message
         * @returns {RawTransaction}
         * @throws {Error} when message is invalid
         * @memberof Transaction
         */
        public appendMessage(message: CosmosMsg): RawTransaction {
            return this.addMessage(message);
        }

        /**
         * Set a memo value to the raw tx body
         * @param {string} memo to be set to the raw tx body
         * @returns {RawTransaction}
         * @throws {Error} when memo is invalid
         * @memberof Transaction
         */
        public setMemo(memo: string): RawTransaction {
            ow(memo, 'memo', ow.string);
            this.txBody.value.memo = memo;

            return this;
        }

        /**
         * Set gas limit value to tx
         * @param {string} gasLimit to be set to the raw tx body, default value is 200_000
         * @returns {RawTransaction}
         * @throws {Error} when gasLimit set is invalid
         * @memberof Transaction
         */
        public setGasLimit(gasLimit: string): RawTransaction {
            ow(gasLimit, 'gasLimit', ow.string);
            try {
                this.authInfo.fee.gasLimit = new Big(gasLimit);
            } catch (err) {
                throw new TypeError(
                    `Expected gasLimit value to be a base10 number represented as string, got \`${gasLimit}\``,
                );
            }

            return this;
        }

        /**
         * Set fee to the raw tx
         * @param {ICoin} fee to be set to the raw tx body
         * @returns {RawTransaction}
         * @throws {Error} when fee set is invalid
         * @memberof Transaction
         */
        public setFee(fee: ICoin): RawTransaction {
            ow(fee, 'fee', owCoin());
            this.authInfo.fee.amount = fee;

            return this;
        }

        /**
         * Set a timeout param to tx body
         * @param {string} timeoutHeight to best to the broad-casted tx
         * @returns {RawTransaction}
         * @throws {Error} when timeoutHeight is invalid
         * @memberof Transaction
         */
        public setTimeOutHeight(timeoutHeight: string): RawTransaction {
            ow(timeoutHeight, 'timeoutHeight', owTimeoutHeight);
            this.txBody.value.timeoutHeight = timeoutHeight;

            return this;
        }

        /**
         * Add a signer to the transaction. The signer orders will follow the add order.
         * @param {TransactionSigner} signer
         * @param {Bytes} signer.publicKey signer public key
         * @param {Big} signer.accountNumber  account number of the signer address
         * @param {Big} signer.accountSequence account sequence of the signer address
         * @returns {RawTransaction}
         * @throws {Error} when argument is invalid
         * @memberof Transaction
         */
        public addSigner(signer: TransactionSigner): RawTransaction {
            ow(signer, 'signer', owRawTransactionSigner);

            const publicKeyResult = isValidSepc256k1PublicKey(signer.publicKey);
            if (!publicKeyResult.ok) {
                throw new TypeError(publicKeyResult.err('signer'));
            }

            if (!isBigInteger(signer.accountNumber) && signer.accountNumber.gte(0)) {
                throw new TypeError(
                    `Expected accountNumber to be of positive integer, got \`${signer.accountNumber}\``,
                );
            }
            if (!isBigInteger(signer.accountSequence) && signer.accountSequence.gte(0)) {
                throw new TypeError(
                    `Expected accountNumber to be of positive integer, got \`${signer.accountSequence}\``,
                );
            }

            let { signMode } = signer;
            if (typeof signMode === 'undefined') {
                signMode = SIGN_MODE.DIRECT;
            }

            let cosmosSignMode: cosmos.tx.signing.v1beta1.SignMode;
            switch (signMode) {
                case SIGN_MODE.DIRECT:
                    cosmosSignMode = cosmos.tx.signing.v1beta1.SignMode.SIGN_MODE_DIRECT;
                    break;
                case SIGN_MODE.LEGACY_AMINO_JSON:
                    cosmosSignMode = cosmos.tx.signing.v1beta1.SignMode.SIGN_MODE_LEGACY_AMINO_JSON;
                    break;
                default:
                    throw new Error(`Unsupported sign mode: ${signMode}`);
            }
            this.authInfo.signerInfos.push({
                publicKey: signer.publicKey,
                // TODO: support multisig
                modeInfo: {
                    single: {
                        mode: cosmosSignMode,
                    },
                },
                sequence: signer.accountSequence,
            });
            this.signerAccounts.push({
                publicKey: signer.publicKey,
                accountNumber: signer.accountNumber,
                signMode,
            });

            return this;
        }

        /**
         * Returns signable transaction
         * @returns {SignableTransaction}
         * @throws {Error} when the transaction is incompleted
         * @memberof RawTransaction
         */
        public toSignable(): SignableTransaction {
            if (this.txBody.value.messages.length === 0) {
                throw new Error('Expected message in transaction, got none');
            }
            if (this.authInfo.signerInfos.length === 0) {
                throw new Error('Expected signer in transaction, got none');
            }
            return new SignableTransaction({
                txBody: cloneDeep(this.txBody),
                authInfo: cloneDeep(this.authInfo),
                network: cloneDeep(this.network),
                signerAccounts: cloneDeep(this.signerAccounts),
            });
        }

        /**
         * Returns TxBody
         * @returns {TxBody}
         * @memberof Transaction
         */
        public getTxBody(): Readonly<TxBody> {
            return this.txBody;
        }

        /**
         * Returns AuthInfo
         * @returns {AuthInfo}
         * @memberof Transaction
         */
        public getAuthInfo(): Readonly<AuthInfo> {
            return this.authInfo;
        }

        /**
         * Return network of the transaction
         * @returns {string}
         * @memberof Transaction
         */
        public getNetwork(): Readonly<Network> {
            return this.network;
        }

        /**
         * Return signer account numbers array
         * @returns {SignerAccount[]}
         * @memberof Transaction
         */
        public getSignerAccounts(): Readonly<SignerAccount[]> {
            return this.signerAccounts;
        }
    };
};

export type TransactionSigner = {
    publicKey: Bytes;
    accountNumber: Big;
    accountSequence: Big;
    signMode?: SIGN_MODE;
};
