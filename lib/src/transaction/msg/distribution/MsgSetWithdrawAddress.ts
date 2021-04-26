import ow from 'ow';
import { CosmosMsg } from '../cosmosMsg';
import { Msg } from '../../../cosmos/v1beta1/types/msg';
import { InitConfigurations } from '../../../core/cro';
import { AddressType, validateAddress } from '../../../utils/address';
import { owMsgSetWithdrawAddressOptions } from '../ow.types';
import { COSMOS_MSG_TYPEURL } from '../../common/constants/typeurl';
import * as legacyAmino from '../../../cosmos/amino';

export const msgSetWithdrawAddress = function (config: InitConfigurations) {
    return class MsgSetWithdrawAddress implements CosmosMsg {
        // Normal user addresses with (t)cro prefix
        public readonly delegatorAddress: string;

        // Addresses with the (t)cro prefix
        public readonly withdrawAddress: string;

        /**
         * Constructor to create a new MsgSetWithdrawAddress
         * @param {MsgWithdrawDelegatorRewardOptions} options
         * @returns {MsgSetWithdrawAddress}
         * @throws {Error} when options is invalid
         */
        constructor(options: MsgSetWithdrawAddressOptions) {
            ow(options, 'setWithdrawOptions', owMsgSetWithdrawAddressOptions);

            this.delegatorAddress = options.delegatorAddress;
            this.withdrawAddress = options.withdrawAddress;

            this.validateAddresses();
        }

        // eslint-disable-next-line class-methods-use-this
        toRawAminoMsg(): legacyAmino.Msg {
            return {
                type: 'cosmos-sdk/MsgSetWithdrawAddress',
                value: {
                    delegator_address: this.delegatorAddress,
                    withdraw_address: this.withdrawAddress,
                },
            } as legacyAmino.MsgSetWithdrawAddress;
        }

        /**
         * Returns the raw Msg representation of MsgSetWithdrawAddress
         * @returns {Msg}
         */
        toRawMsg(): Msg {
            return {
                typeUrl: COSMOS_MSG_TYPEURL.distribution.MsgSetWithdrawAddress,
                value: {
                    delegatorAddress: this.delegatorAddress,
                    validatorAddress: this.withdrawAddress,
                },
            };
        }

        validateAddresses() {
            if (
                !validateAddress({
                    address: this.delegatorAddress,
                    network: config.network,
                    type: AddressType.USER,
                })
            ) {
                throw new TypeError('Provided `delegatorAddress` doesnt match network selected');
            }

            if (
                !validateAddress({
                    address: this.withdrawAddress,
                    network: config.network,
                    type: AddressType.USER,
                })
            ) {
                throw new TypeError('Provided `withdrawAddress` doesnt match network selected');
            }
        }
    };
};

export type MsgSetWithdrawAddressOptions = {
    delegatorAddress: string;
    withdrawAddress: string;
};
