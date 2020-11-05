import ow from 'ow';
import { Msg } from '../../cosmos/v1beta1/types/msg';
import { Message } from './Message';
import { owMsgEditValidatorOptions } from './ow.types';
import { InitConfigurations } from '../../core/cro';
import { isValidAddress, AddressType } from '../../utils/address';
import { IDescription } from '../common/interface/IDescription';

export const msgEditValidator = function (config: InitConfigurations) {
    return class MsgEditValidator implements Message {
        public readonly description: IDescription;

        public minSelfDelegation: string;

        public commissionRate: string;

        public validatorAddress: string;

        /**
         * Constructor to create a new MsgSend
         * @param {MsgCreateEditOptions} options
         * @returns {MsgEditValidator}
         * @throws {Error} when options is invalid
         */
        constructor(options: MsgCreateEditOptions) {
            ow(options, 'options', owMsgEditValidatorOptions);
            this.description = options.description;
            this.commissionRate = options.commissionRate;
            this.minSelfDelegation = options.minSelfDelegation;
            this.validatorAddress = options.validatorAddress;
            this.validateAddresses();
        }

        /**
         * Returns the raw Msg representation of MsgCreateValidator
         * @returns {Msg}
         */
        toRawMsg(): Msg {
            return {
                typeUrl: '/cosmos.staking.v1beta1.MsgEditValidator',
                value: {
                    description: this.description,
                    commissionRate: this.commissionRate,
                    minSelfDelegation: this.minSelfDelegation,
                    validatorAddress: this.validatorAddress,
                },
            };
        }

        validateAddresses(): void {
            const { network } = config;

            if (!isValidAddress({network: network, address: this.validatorAddress, type: AddressType.VALIDATOR})) {
                throw new TypeError('Provided `validatorAddress` doesnt match network selected');
            }
        }
    };
};

export type MsgCreateEditOptions = {
    description: IDescription;
    commissionRate: string;
    minSelfDelegation: string;
    validatorAddress: string;
};
