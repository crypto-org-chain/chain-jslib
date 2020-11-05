import ow from 'ow';
import { Message } from './Message';
import { Msg } from '../../cosmos/v1beta1/types/msg';
import { InitConfigurations } from '../../core/cro';
import { AddressType, isValidAddress } from '../../utils/address';
import { owMsgWithdrawDelegatorRewardOptions } from './ow.types';

export const msgWithdrawDelegateReward = function (config: InitConfigurations) {
    return class MsgWithdrawDelegatorReward implements Message {
        // Normal user addresses with (t)cro prefix
        public readonly delegatorAddress: string;

        // Addresses with the (t)crocncl1 prefix
        public readonly validatorAddress: string;

        constructor(options: MsgWithdrawDelegatorRewardOptions) {
            ow(options, 'rewardOptions', owMsgWithdrawDelegatorRewardOptions);

            this.delegatorAddress = options.delegatorAddress;
            this.validatorAddress = options.validatorAddress;

            this.validateAddresses();
        }

        toRawMsg(): Msg {
            return {
                typeUrl: '/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward',
                value: {
                    delegatorAddress: this.delegatorAddress,
                    validatorAddress: this.validatorAddress,
                },
            };
        }

        validateAddresses() {
            if (
                !isValidAddress({
                    address: this.delegatorAddress,
                    network: config.network,
                    addressType: AddressType.NORMAL,
                })
            ) {
                throw new TypeError('Provided `delegatorAddress` doesnt match network selected');
            }

            if (
                !isValidAddress({
                    address: this.validatorAddress,
                    network: config.network,
                    addressType: AddressType.VALIDATOR,
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
