import ow from 'ow';
import { InitConfigurations } from '../../../core/cro';
import { Message } from '../Message';
import { Msg } from '../../../cosmos/v1beta1/types/msg';
import { ICoin } from '../../../coin/coin';
import { COSMOS_MSG_TYPEURL } from '../../common/constants/typeurl';
import { AddressType, validateAddress } from '../../../utils/address';
import { owMsgSubmitProposalOptions } from '../ow.types';

export const msgSubmitProposal = function (config: InitConfigurations) {
    return class MsgSubmitProposal implements Message {
        public readonly title: string;

        public readonly description: string;

        public readonly proposer: string;

        public readonly initialDeposit: ICoin;

        /**
         * Constructor to create a new MsgDeposit
         * @param {ProposalOptions} options
         * @returns {MsgSubmitProposal}
         * @throws {Error} when options is invalid
         */
        constructor(options: ProposalOptions) {
            ow(options, 'options', owMsgSubmitProposalOptions);
            this.title = options.title;
            this.description = options.description;
            this.proposer = options.proposer;
            this.initialDeposit = options.initialDeposit;
        }

        /**
         * Returns the raw Msg representation of MsgSubmitProposal
         * @returns {Msg}
         */
        toRawMsg(): Msg {
            const cosmosAmount = this.initialDeposit.toCosmosCoin();
            return {
                typeUrl: COSMOS_MSG_TYPEURL.MsgSubmitProposal,
                value: {
                    proposer: this.proposer,
                    content: {
                        title: this.title,
                        description: this.description,
                    },
                    initialDeposit: [
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
                    address: this.proposer,
                    network: config.network,
                    type: AddressType.USER,
                })
            ) {
                throw new TypeError('Provided `depositor` doesnt match network selected');
            }
        }
    };
};

export type ProposalOptions = {
    title: string;
    description: string;
    proposer: string;
    initialDeposit: ICoin;
};
