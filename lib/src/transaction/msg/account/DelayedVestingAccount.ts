/* eslint-disable camelcase */
import ow from 'ow';
import Long from 'long';
import { Msg } from '../../../cosmos/v1beta1/types/msg';
import { owDelayedVestingAccountOptions } from '../ow.types';
import { CosmosMsg } from '../cosmosMsg';
import { COSMOS_MSG_TYPEURL } from '../../common/constants/typeurl';
import * as legacyAmino from '../../../cosmos/amino';
import { ICoin } from '../../../coin/v2.coin/v2.coin';
import { IGoogleAny } from '../ibc/IGoogleAny';
import { CroSDK, InitConfigurations } from '../../../core/cro';

export const delayedVestingAccount = function (config: InitConfigurations) {
    return class DelayedVestingAccount implements CosmosMsg {
        /** BaseVestingAccount baseAccount. */
        public baseAccount?: IBaseAccount | null;

        /** BaseVestingAccount originalVesting. */
        public originalVesting: ICoin[];

        /** BaseVestingAccount delegatedFree. */
        public delegatedFree: ICoin[];

        /** BaseVestingAccount delegatedVesting. */
        public delegatedVesting: ICoin[];

        /** BaseVestingAccount endTime. */
        public endTime: Long;

        /**
         * Constructor to create a new DelayedVestingAccount
         * @param {DelayedVestingAccountOptions} options
         * @returns {DelayedVestingAccount}
         * @throws {Error} when options is invalid
         */
        constructor(options: DelayedVestingAccountOptions) {
            ow(options, 'options', owDelayedVestingAccountOptions);
            this.baseAccount = options.baseAccount;
            this.originalVesting = options.originalVesting;
            this.delegatedFree = options.delegatedFree;
            this.delegatedVesting = options.delegatedVesting;
            this.endTime = options.endTime;
        }

        /**
         * Returns an instance of DelayedVestingAccount
         * @param {string} msgJsonStr
         * @param {Network} network
         * @returns {DelayedVestingAccount}
         */
        public static fromCosmosMsgJSON(msgJsonStr: string): DelayedVestingAccount {
            const parsedMsg = JSON.parse(msgJsonStr) as DelayedVestingAccountRaw;
            const cro = CroSDK({ network: config.network });

            if (parsedMsg['@type'] !== COSMOS_MSG_TYPEURL.account.DelayedVestingAccount) {
                throw new Error(
                    `Expected ${COSMOS_MSG_TYPEURL.account.DelayedVestingAccount} but got ${parsedMsg['@type']}`,
                );
            }
            if (
                parsedMsg.base_vesting_account.delegated_vesting.length < 1 ||
                parsedMsg.base_vesting_account.original_vesting.length < 1 ||
                parsedMsg.base_vesting_account.delegated_free.length < 1
            ) {
                throw new Error('Invalid Amount fields in the Msg.');
            }

            return new DelayedVestingAccount({
                baseAccount: {
                    address: parsedMsg.base_vesting_account.base_account?.address!,
                    accountNumber: Long.fromString(parsedMsg.base_vesting_account.base_account?.account_number || '0'),
                    sequence: Long.fromString(parsedMsg.base_vesting_account.base_account?.sequence || '0'),
                },
                originalVesting: parsedMsg.base_vesting_account.original_vesting.map((coin) =>
                    cro.v2.CoinV2.fromCustomAmountDenom(coin.amount, coin.denom),
                ),
                delegatedFree: parsedMsg.base_vesting_account.delegated_free.map((coin) =>
                    cro.v2.CoinV2.fromCustomAmountDenom(coin.amount, coin.denom),
                ),
                delegatedVesting: parsedMsg.base_vesting_account.delegated_vesting.map((coin) =>
                    cro.v2.CoinV2.fromCustomAmountDenom(coin.amount, coin.denom),
                ),
                endTime: Long.fromString(parsedMsg.base_vesting_account.end_time || '0'),
            });
        }

        /**
         * Returns the raw Msg representation of DelayedVestingAccount
         * @returns {Msg}
         */
        toRawMsg(): Msg {
            return {
                typeUrl: COSMOS_MSG_TYPEURL.account.DelayedVestingAccount,
                value: {
                    baseVestingAccount: {
                        baseAccount: {
                            address: this.baseAccount?.address,
                            // pubKey: this.baseAccount?.pubKey?.getEncoded(),
                            accountNumber: this.baseAccount?.accountNumber,
                            sequence: this.baseAccount?.sequence,
                        },
                        originalVesting: this.originalVesting.map((amt) => amt.toCosmosCoin()),
                        delegatedFree: this.delegatedFree.map((amt) => amt.toCosmosCoin()),
                        delegatedVesting: this.delegatedVesting.map((amt) => amt.toCosmosCoin()),
                        endTime: this.endTime,
                    },
                },
            };
        }

        // eslint-disable-next-line class-methods-use-this
        toRawAminoMsg(): legacyAmino.Msg {
            throw new Error("DelayedVestingAccount isn't supported for Amino encoding.");
        }
    };
};

export type DelayedVestingAccountOptions = {
    baseAccount?: IBaseAccount | null;
    originalVesting: ICoin[];
    delegatedFree: ICoin[];
    delegatedVesting: ICoin[];
    endTime: Long;
};

export interface IBaseAccount {
    address: string;
    pubKey?: IGoogleAny | null;
    accountNumber: Long;
    sequence: Long;
}

/**
 * JSON Type definitions
 * */

export interface DelayedVestingAccountRaw {
    '@type': string;
    base_vesting_account: BaseVestingAccountRaw;
}

export interface BaseVestingAccountRaw {
    base_account?: BaseAccountRaw;
    original_vesting: AmountRaw[];
    delegated_free: AmountRaw[];
    delegated_vesting: AmountRaw[];
    end_time: string;
}

export interface BaseAccountRaw {
    address: string;
    pub_key: PubKey;
    account_number: string;
    sequence: string;
}

export interface AmountRaw {
    denom: string;
    amount: string;
}

export interface PubKey {
    '@type': string;
    key: string;
}
