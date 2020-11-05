import ow from 'ow';
import { InitConfigurations } from '../../core/cro';
import { Message } from './Message';
import { Msg } from '../../cosmos/v1beta1/types/msg';
import { AddressType, validateAddress } from '../../utils/address';
import { owMsgWithdrawValidatorCommissionOptions } from './ow.types';

export const msgWithdrawValidatorCommission = function (config: InitConfigurations) {
    return class MsgWithdrawValidatorCommission implements Message {
        public readonly validatorAddress: string;

        /**
         * Constructor to create a new MsgWithdrawValidatorCommission
         * @param {MsgWithdrawValidatorCommissionOptions} options
         * @returns {MsgWithdrawValidatorCommission}
         * @throws {Error} when options is invalid
         */
        constructor(options: MsgWithdrawValidatorCommissionOptions) {
            ow(options, 'commissionWithdrawalOptions', owMsgWithdrawValidatorCommissionOptions);
            this.validatorAddress = options.validatorAddress;
            this.validateAddresses();
        }

        /**
         * Returns the raw Msg representation of MsgWithdrawValidatorCommission
         * @returns {Msg}
         * @memberof MsgWithdrawValidatorCommission
         */
        public toRawMsg(): Msg {
            return {
                typeUrl: '/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission',
                value: {
                    validatorAddress: this.validatorAddress,
                },
            };
        }

        /**
         * Validate address
         * @throws {Error} when the validatorAddress is invalid
         */
        validateAddresses() {
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

export type MsgWithdrawValidatorCommissionOptions = {
    validatorAddress: string;
};
