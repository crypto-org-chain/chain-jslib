import ow from 'ow';
import { Msg } from '../../cosmos/v1beta1/types/msg';
import { Message } from './Message';
import { ICoin } from '../../coin/coin';
import { owMsgCreateValidatorOptions } from './ow.types';
import { InitConfigurations } from '../../core/cro';
import { isValidAddress, isValidValidatorAddress } from '../../utils/address';

export const msgCreateValidator = function (config: InitConfigurations) {
    return class MsgCreateValidator implements Message {
        public readonly description: CreateValidatorDescription;

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
                    value:
                    {
                        denom: cosmosCoin.denom,
                        amount: cosmosCoin.amount,
                    }
                },
            };
        }

        validateAddresses(): void {
            const network = config.network;
            console.log(
                network.addressPrefix, network.validatorAddressPrefix, network.validatorPubKeyPrefix,
                this.delegatorAddress, this.validatorAddress, this.pubkey)


            if (!this.delegatorAddress.startsWith(network.addressPrefix) || !this.validatorAddress.startsWith(network.validatorAddressPrefix) || !this.pubkey.startsWith(network.validatorPubKeyPrefix)) {
                throw new TypeError('Provided keys does not belong to same network');
            }

            if (!isValidAddress(this.delegatorAddress, network)) {
                throw new TypeError('Provided `delegatorAddress` doesnt match network selected');
            }

            if (!isValidValidatorAddress(this.validatorAddress, network)) {
                throw new TypeError('Provided `validatorAddress` doesnt match network selected');
            }
        }
    }
}

/// TODO: Should now only take amount as raw value and its denom since Coin is not anymore top level accessible

export type MsgCreateValidatorOptions = {
    description: CreateValidatorDescription,
    commission: CreateValidatorCommission,
    minSelfDelegation: string,
    delegatorAddress: string,
    validatorAddress: string,
    pubkey: string,
    value: ICoin
};

export type CreateValidatorDescription = {
    moniker: string,
    identity?: string,
    website?: string,
    securityContact?: string,
    details?: string
}

export type CreateValidatorCommission = {
    rate: string,
    maxRate: string,
    maxChangeRate: string
}