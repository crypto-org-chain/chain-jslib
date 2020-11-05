import ow from 'ow';
import { Msg } from '../../cosmos/v1beta1/types/msg';
import { Message } from './Message';
import { ICoin } from '../../coin/coin';
import { owMsgBeginRedelgateOptions } from './ow.types';
import { InitConfigurations } from '../../core/cro';
import { isValidAddress, AddressType } from '../../utils/address';

export const msgBeginRedelegate = function (config: InitConfigurations) {
    return class MsgBeginRedelegate implements Message {
        /** MsgBeginRedelegate delegatorAddress. */
        public delegatorAddress: string;

        /** MsgBeginRedelegate validatorSrcAddress. */
        public validatorSrcAddress: string;

        /** MsgBeginRedelegate validatorDstAddress. */
        public validatorDstAddress: string;

        /** MsgBeginRedelegate amount. */
        public amount: ICoin;

        /**
         * Constructor to create a new MsgSend
         * @param {} options
         * @returns {}
         * @throws {Error} when options is invalid
         */
        constructor(options: IMsgBeginRedelgate) {
            ow(options, 'options', owMsgBeginRedelgateOptions);
            this.delegatorAddress = options.delegatorAddress;
            this.validatorDstAddress = options.validatorDstAddress;
            this.validatorSrcAddress = options.validatorSrcAddress;
            this.amount = options.amount;
            this.validateAddresses();
        }

        /**
         * Returns the raw Msg representation of MsgCreateValidator
         * @returns {Msg}
         */
        toRawMsg(): Msg {
            const cosmosCoin = this.amount?.toCosmosCoin();
            return {
                typeUrl: '/cosmos.staking.v1beta1.MsgBeginRedelegate',
                value: {
                    delegatorAddress: this.delegatorAddress,
                    validatorDstAddress: this.validatorDstAddress,
                    validatorSrcAddress: this.validatorSrcAddress,
                    amount: {
                        denom: cosmosCoin.denom,
                        amount: cosmosCoin.amount,
                    },
                },
            };
        }

        validateAddresses(): void {
            const { network } = config;
            if (
                !this.delegatorAddress.startsWith(network.addressPrefix) ||
                !this.validatorDstAddress.startsWith(network.validatorAddressPrefix) ||
                !this.validatorSrcAddress.startsWith(network.validatorAddressPrefix)
            ) {
                throw new TypeError('Provided keys does not belong to same network');
            }

            if (this.validatorDstAddress === this.validatorSrcAddress) {
                throw new TypeError('Source and destination validator addresses cannot be the same.');
            }

            if (
                !isValidAddress({
                    address: this.delegatorAddress,
                    network: config.network,
                    type: AddressType.USER,
                })
            ) {
                throw new TypeError('Provided `delegatorAddress` does not match with selected network');
            }

            if (
                !isValidAddress({
                    address: this.validatorSrcAddress,
                    network: config.network,
                    type: AddressType.VALIDATOR,
                })
            ) {
                throw new TypeError('Provided `validatorSrcAddress` does not match with selected network');
            }
            if (
                !isValidAddress({
                    address: this.validatorDstAddress,
                    network: config.network,
                    type: AddressType.VALIDATOR,
                })
            ) {
                throw new TypeError('Provided `validatorDstAddress` does not match with selected network');
            }
        }
    };
};

/// TODO: Should now only take amount as raw value and its denom since Coin is not anymore top level accessible

export interface IMsgBeginRedelgate {
    /** MsgBeginRedelegate delegatorAddress */
    delegatorAddress: string;

    /** MsgBeginRedelegate validatorSrcAddress */
    validatorSrcAddress: string;

    /** MsgBeginRedelegate validatorDstAddress */
    validatorDstAddress: string;

    /** MsgBeginRedelegate amount */
    amount: ICoin;
}
