import ow from 'ow';
import { Msg } from '../../../cosmos/v1beta1/types/msg';
import { ICoin } from '../../../coin/coin';
import { owMsgSendOptions } from '../ow.types';
import { InitConfigurations } from '../../../core/cro';
import { AddressType, isValidAddress } from '../../../utils/address';
import { Message } from '../Message';

export const msgSend = function (config: InitConfigurations) {
    return class MsgSend implements Message {
        public readonly fromAddress: string;

        public readonly toAddress: string;

        public amount: ICoin;

        /**
         * Constructor to create a new MsgSend
         * @param {MsgSendOptions} options
         * @returns {MsgSend}
         * @throws {Error} when options is invalid
         */
        constructor(options: MsgSendOptions) {
            ow(options, 'options', owMsgSendOptions);

            this.fromAddress = options.fromAddress;
            this.toAddress = options.toAddress;
            this.amount = options.amount;

            this.validateAddresses();
        }

        /**
         * Returns the raw Msg representation of MsgSend
         * @returns {Msg}
         */
        toRawMsg(): Msg {
            const cosmosCoin = this.amount.toCosmosCoin();
            return {
                typeUrl: '/cosmos.bank.v1beta1.MsgSend',
                value: {
                    fromAddress: this.fromAddress,
                    toAddress: this.toAddress,
                    amount: [
                        {
                            denom: cosmosCoin.denom,
                            amount: cosmosCoin.amount,
                        },
                    ],
                },
            };
        }

        validateAddresses() {
            if (
                !isValidAddress({
                    address: this.fromAddress,
                    network: config.network,
                    type: AddressType.USER,
                })
            ) {
                throw new TypeError('Provided `fromAddress` doesnt match network selected');
            }

            if (
                !isValidAddress({
                    address: this.toAddress,
                    network: config.network,
                    type: AddressType.USER,
                })
            ) {
                throw new TypeError('Provided `toAddress` doesnt match network selected');
            }
        }
    };
};

/// TODO: Should now only take amount as raw value and its denom since Coin is not anymore top level accessible

export type MsgSendOptions = {
    fromAddress: string;
    toAddress: string;
    amount: ICoin;
};
