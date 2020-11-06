import ow from 'ow';
import { Msg } from '../../cosmos/v1beta1/types/msg';
import { Message } from './Message';
import { owMsgDelegateOptions } from './ow.types';
import { InitConfigurations } from '../../core/cro';
import { validateAddress, AddressType } from '../../utils/address';
import { ICoin } from '../../coin/coin';

export const msgDelegate = function (config: InitConfigurations) {
    return class MsgDelegate implements Message {
        /** MsgDelegate delegatorAddress. */
        public delegatorAddress: string;

        /** MsgDelegate validatorAddress. */
        public validatorAddress: string;

        /** MsgDelegate amount. */
        public amount: ICoin;

        /**
         * Constructor to create a new MsgSend
         * @param {IMsgDelegate} options
         * @returns {MsgDelegate}
         * @throws {Error} when options is invalid
         */
        constructor(options: IMsgDelegate) {
            ow(options, 'options', owMsgDelegateOptions);
            this.delegatorAddress = options.delegatorAddress;
            this.validatorAddress = options.validatorAddress;
            this.amount = options.amount;
            this.validateAddresses();
        }

        /**
         * Returns the raw Msg representation of MsgDelegate
         * @returns {Msg}
         */
        toRawMsg(): Msg {
            const cosmosCoin = this.amount.toCosmosCoin();
            return {
                typeUrl: '/cosmos.staking.v1beta1.MsgDelegate',
                value: {
                    delegatorAddress: this.delegatorAddress,
                    validatorAddress: this.validatorAddress,
                    amount: {
                        denom: cosmosCoin.denom,
                        amount: cosmosCoin.amount,
                    },
                },
            };
        }

        validateAddresses(): void {
            const { network } = config;

            if (!validateAddress({ network, address: this.validatorAddress, type: AddressType.VALIDATOR })) {
                throw new TypeError('Provided `validatorAddress` doesnt match network selected');
            }

            if (!validateAddress({ network, address: this.delegatorAddress, type: AddressType.USER })) {
                throw new TypeError('Provided `delegatorAddress` doesnt match network selected');
            }
        }
    };
};

export type IMsgDelegate = {
    delegatorAddress: string;
    validatorAddress: string;
    amount: ICoin;
};
