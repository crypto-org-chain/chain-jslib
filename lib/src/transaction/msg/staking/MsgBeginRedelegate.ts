import ow from 'ow';
import { Msg } from '../../../cosmos/v1beta1/types/msg';
import { CosmosMsg } from '../cosmosMsg';
import { ICoin } from '../../../coin/coin';
import { owMsgBeginRedelgateOptions } from '../ow.types';
import { InitConfigurations } from '../../../core/cro';
import { validateAddress, AddressType } from '../../../utils/address';
import { COSMOS_MSG_TYPEURL } from '../../common/constants/typeurl';
import * as legacyAmino from '../../../cosmos/amino';

export const msgBeginRedelegate = function (config: InitConfigurations) {
    return class MsgBeginRedelegate implements CosmosMsg {
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
         * @param {IMsgBeginRedelgate} options
         * @returns {MsgBeginRedelegate}
         * @throws {Error} when options are invalid
         */
        constructor(options: IMsgBeginRedelgate) {
            ow(options, 'options', owMsgBeginRedelgateOptions);
            this.delegatorAddress = options.delegatorAddress;
            this.validatorDstAddress = options.validatorDstAddress;
            this.validatorSrcAddress = options.validatorSrcAddress;
            this.amount = options.amount;
            this.validateAddresses();
        }

        // eslint-disable-next-line class-methods-use-this
        toRawAminoMsg(): legacyAmino.Msg {
            throw new Error('Method not implemented.');
        }

        /**
         * Returns the raw Msg representation of MsgCreateValidator
         * @returns {Msg}
         */
        toRawMsg(): Msg {
            const cosmosCoin = this.amount.toCosmosCoin();
            return {
                typeUrl: COSMOS_MSG_TYPEURL.MsgBeginRedelegate,
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
            if (this.validatorDstAddress === this.validatorSrcAddress) {
                throw new TypeError('Source and destination validator addresses cannot be the same.');
            }

            if (
                !validateAddress({
                    address: this.delegatorAddress,
                    network: config.network,
                    type: AddressType.USER,
                })
            ) {
                throw new TypeError('Provided `delegatorAddress` does not match with selected network');
            }

            if (
                !validateAddress({
                    address: this.validatorSrcAddress,
                    network: config.network,
                    type: AddressType.VALIDATOR,
                })
            ) {
                throw new TypeError('Provided `validatorSrcAddress` does not match with selected network');
            }
            if (
                !validateAddress({
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
