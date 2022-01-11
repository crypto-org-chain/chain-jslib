/* eslint-disable camelcase */
import ow from 'ow';
import Long from 'long';
import { Msg } from '../../../cosmos/v1beta1/types/msg';
import { owMsgCreateVestingAccountOptions } from '../ow.types';
import { InitConfigurations, CroSDK } from '../../../core/cro';
import { AddressType, validateAddress } from '../../../utils/address';
import { CosmosMsg } from '../cosmosMsg';
import { COSMOS_MSG_TYPEURL } from '../../common/constants/typeurl';
import * as legacyAmino from '../../../cosmos/amino';
import { ICoin } from '../../../coin/v2.coin/v2.coin';

export interface MsgCreateVestingAccountRaw {
    '@type': string;
    amount: Amount;
    from_address: string;
    to_address: string;
    end_time: string;
    delayed: boolean;
}

export interface Amount {
    denom: string;
    amount: string;
}

export const msgCreateVestingAccount = function (config: InitConfigurations) {
    return class MsgCreateVestingAccount implements CosmosMsg {
        /** MsgCreateVestingAccount fromAddress. */
        public fromAddress: string;

        /** MsgCreateVestingAccount toAddress. */
        public toAddress: string;

        /** MsgCreateVestingAccount amount. */
        public amount: ICoin;

        /** MsgCreateVestingAccount endTime. */
        public endTime: Long;

        /** MsgCreateVestingAccount delayed. */
        public delayed: boolean;

        /**
         * Constructor to create a new MsgCreateVestingAccount
         * @param {MsgCreateVestingAccountOptions} options
         * @returns {MsgCreateVestingAccount}
         * @throws {Error} when options is invalid
         */
        constructor(options: MsgCreateVestingAccountOptions) {
            ow(options, 'options', owMsgCreateVestingAccountOptions);

            this.fromAddress = options.fromAddress;
            this.toAddress = options.toAddress;
            this.amount = options.amount;
            this.endTime = options.endTime;
            this.delayed = options.delayed;
            this.validateAddresses();
        }

        /**
         * Returns an instance of MsgCreateVestingAccount
         * @param {string} msgJsonStr
         * @param {Network} network
         * @returns {MsgCreateVestingAccount}
         */
        public static fromCosmosMsgJSON(msgJsonStr: string): MsgCreateVestingAccount {
            const parsedMsg = JSON.parse(msgJsonStr) as MsgCreateVestingAccountRaw;
            const cro = CroSDK({ network: config.network });
            if (parsedMsg['@type'] !== COSMOS_MSG_TYPEURL.account.MsgCreateVestingAccount) {
                throw new Error(
                    `Expected ${COSMOS_MSG_TYPEURL.account.MsgCreateVestingAccount} but got ${parsedMsg['@type']}`,
                );
            }
            if (!parsedMsg.amount) {
                throw new Error('Invalid amount in the Msg.');
            }

            return new MsgCreateVestingAccount({
                fromAddress: parsedMsg.from_address,
                toAddress: parsedMsg.to_address,
                amount: cro.v2.CoinV2.fromCustomAmountDenom(parsedMsg.amount.amount, parsedMsg.amount.denom),
                endTime: Long.fromString(parsedMsg.end_time),
                delayed: parsedMsg.delayed,
            });
        }

        /**
         * Returns the raw Msg representation of MsgCreateVestingAccount
         * @returns {Msg}
         */
        toRawMsg(): Msg {
            return {
                typeUrl: COSMOS_MSG_TYPEURL.account.MsgCreateVestingAccount,
                value: {
                    fromAddress: this.fromAddress,
                    toAddress: this.toAddress,
                    amount: this.amount.toCosmosCoin(),
                    endTime: this.endTime,
                    delayed: this.delayed,
                },
            };
        }

        // eslint-disable-next-line class-methods-use-this
        toRawAminoMsg(): legacyAmino.Msg {
            throw new Error("MsgCreateVestingAccount isn't supported for Amino encoding.");
        }

        validateAddresses() {
            if (
                !validateAddress({
                    address: this.fromAddress,
                    network: config.network,
                    type: AddressType.USER,
                })
            ) {
                throw new TypeError('Provided `fromAddress` does not match network selected');
            }

            if (
                !validateAddress({
                    address: this.toAddress,
                    network: config.network,
                    type: AddressType.USER,
                })
            ) {
                throw new TypeError('Provided `toAddress` does not match network selected');
            }
        }
    };
};

export type MsgCreateVestingAccountOptions = {
    fromAddress: string;
    toAddress: string;
    amount: ICoin;
    endTime: Long;
    delayed: boolean;
};
