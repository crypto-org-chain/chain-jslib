import { Message } from './Message';
import { Msg } from '../../cosmos/v1beta1/types/msg';
import { InitConfigurations } from '../../core/cro';
import { isValidAddress } from '../../utils/address';

export const msgWithdrawDelegateReward = function (config: InitConfigurations) {
    return class MsgWithdrawDelegatorReward implements Message {
        // Normal user addresses with (t)cro prefix
        public readonly delegatorAddress: string;

        // Addresses with the (t)crocncl1 prefix
        public readonly validatorAddress: string;

        constructor(delegatorAddress: string, validatorAddress: string) {
            this.delegatorAddress = delegatorAddress;
            this.validatorAddress = validatorAddress;

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
            if (!isValidAddress({ address: this.delegatorAddress, network: config.network, isValidator: false })) {
                throw new TypeError('Provided `delegatorAddress` doesnt match network selected');
            }

            if (!isValidAddress({ address: this.validatorAddress, network: config.network, isValidator: true })) {
                throw new TypeError('Provided `validatorAddress` doesnt match network selected');
            }
        }
    };
};
