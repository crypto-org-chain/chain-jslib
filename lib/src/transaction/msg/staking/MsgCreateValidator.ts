import ow from 'ow';
import { Msg } from '../../../cosmos/v1beta1/types/msg';
import { Message } from '../Message';
import { ICoin } from '../../../coin/coin';
import { owMsgCreateValidatorOptions } from '../ow.types';
import { InitConfigurations } from '../../../core/cro';
import { validateAddress, AddressType } from '../../../utils/address';
import { IDescription } from '../../common/interface/IDescription';

export const msgCreateValidator = function (config: InitConfigurations) {
    return class MsgCreateValidator implements Message {
        public readonly description: IDescription;

        public readonly commission: CreateValidatorCommission;

        public minSelfDelegation: string;

        public delegatorAddress: string;

        public validatorAddress: string;

        public pubkey: string;

        public value: ICoin;

        /**
         * Constructor to create a new MsgSend
         * @param {MsgCreateValidatorOptions} options
         * @returns {MsgCreateValidator}
         * @throws {Error} when options is invalid
         */
        constructor(options: MsgCreateValidatorOptions) {
            ow(options, 'options', owMsgCreateValidatorOptions);
            this.description = options.description;
            this.commission = options.commission;
            this.minSelfDelegation = options.minSelfDelegation;
            this.delegatorAddress = options.delegatorAddress;
            this.validatorAddress = options.validatorAddress;
            this.pubkey = options.pubkey;
            this.value = options.value;
            this.validateAddresses();
        }

        /**
         * Returns the raw Msg representation of MsgCreateValidator
         * @returns {Msg}
         */
        toRawMsg(): Msg {
            const cosmosCoin = this.value.toCosmosCoin();
            return {
                typeUrl: '/cosmos.staking.v1beta1.MsgCreateValidator',
                value: {
                    description: this.description,
                    commission: this.commission,
                    minSelfDelegation: this.minSelfDelegation,
                    delegatorAddress: this.delegatorAddress,
                    validatorAddress: this.validatorAddress,
                    pubkey: this.pubkey,
                    value: {
                        denom: cosmosCoin.denom,
                        amount: cosmosCoin.amount,
                    },
                },
            };
        }

        validateAddresses(): void {
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

/// TODO: Should now only take amount as raw value and its denom since Coin is not anymore top level accessible

export type MsgCreateValidatorOptions = {
    description: IDescription;
    commission: CreateValidatorCommission;
    minSelfDelegation: string;
    delegatorAddress: string;
    validatorAddress: string;
    pubkey: string;
    value: ICoin;
};

export type CreateValidatorCommission = {
    rate: string;
    maxRate: string;
    maxChangeRate: string;
};
