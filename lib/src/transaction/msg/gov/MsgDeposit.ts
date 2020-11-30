import Big from 'big.js';
import Long from 'long';
import ow from 'ow';
import { InitConfigurations } from '../../../core/cro';
import { Message } from '../Message';
import { Msg } from '../../../cosmos/v1beta1/types/msg';
import { ICoin } from '../../../coin/coin';
import { AddressType, validateAddress } from '../../../utils/address';
import { COSMOS_MSG_TYPEURL } from '../../common/constants/typeurl';
import { owMsgDepositOptions } from '../ow.types';

export const msgDeposit = function (config: InitConfigurations) {
    return class MsgDeposit implements Message {
        public proposalId: Big;

        public depositor: string;

        public amount: ICoin;

        /**
         * Constructor to create a new MsgDeposit
         * @param {MsgDepositOptions} options
         * @returns {MsgDeposit}
         * @throws {Error} when options is invalid
         */
        constructor(options: MsgDepositOptions) {
            ow(options, 'options', owMsgDepositOptions);

            this.proposalId = options.proposalId;
            this.depositor = options.depositor;
            this.amount = options.amount;

            this.validate();
        }

        /**
         * Returns the raw Msg representation of MsgDeposit
         * @returns {Msg}
         */
        toRawMsg(): Msg {
            const cosmosAmount = this.amount.toCosmosCoin();
            const proposal = Long.fromNumber(this.proposalId.toNumber(), true);
            return {
                typeUrl: COSMOS_MSG_TYPEURL.MsgDeposit,
                value: {
                    proposalId: proposal,
                    depositor: this.depositor,
                    amount: [
                        {
                            denom: cosmosAmount.denom,
                            amount: cosmosAmount.amount,
                        },
                    ],
                },
            };
        }

        validate() {
            if (
                !validateAddress({
                    address: this.depositor,
                    network: config.network,
                    type: AddressType.USER,
                })
            ) {
                throw new TypeError('Provided `depositor` doesnt match network selected');
            }
        }
    };
};

export type MsgDepositOptions = {
    proposalId: Big;
    depositor: string;
    amount: ICoin;
};
