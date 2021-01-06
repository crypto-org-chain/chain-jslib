import ow from 'ow';
import { CosmosMsg } from '../cosmosMsg';
import { Msg } from '../../../cosmos/v1beta1/types/msg';
import { InitConfigurations } from '../../../core/cro';
import { AddressType, validateAddress } from '../../../utils/address';
import { owMsgWithdrawDelegatorRewardOptions } from '../ow.types';
import { COSMOS_MSG_TYPEURL } from '../../common/constants/typeurl';
import * as legacyAmino from '../../../cosmos/amino';

export const msgWithdrawDelegateReward = function (config: InitConfigurations) {
    return class MsgWithdrawDelegatorReward implements CosmosMsg {
        // Normal user addresses with (t)cro prefix
        public readonly delegatorAddress: string;

        // Addresses with the (t)crocncl prefix
        public readonly validatorAddress: string;

        /**
         * Constructor to create a new MsgWithdrawDelegatorReward
         * @param {MsgWithdrawDelegatorRewardOptions} options
         * @returns {MsgWithdrawDelegatorReward}
         * @throws {Error} when options is invalid
         */
        constructor(options: MsgWithdrawDelegatorRewardOptions) {
            ow(options, 'rewardOptions', owMsgWithdrawDelegatorRewardOptions);

            this.delegatorAddress = options.delegatorAddress;
            this.validatorAddress = options.validatorAddress;

            this.validateAddresses();
        }

        // eslint-disable-next-line class-methods-use-this
        toRawAminoMsg(): legacyAmino.Msg {
            throw new Error('Method not implemented.');
        }

        /**
         * Returns the raw Msg representation of MsgWithdrawDelegatorReward
         * @returns {Msg}
         */
        toRawMsg(): Msg {
            return {
                typeUrl: COSMOS_MSG_TYPEURL.MsgWithdrawDelegatorReward,
                value: {
                    delegatorAddress: this.delegatorAddress,
                    validatorAddress: this.validatorAddress,
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
                    address: this.validatorAddress,
                    network: config.network,
                    type: AddressType.VALIDATOR,
                })
            ) {
                throw new TypeError('Provided `validatorAddress` doesnt match network selected');
            }
        }
    };
};

export type MsgWithdrawDelegatorRewardOptions = {
    delegatorAddress: string;
    validatorAddress: string;
};
