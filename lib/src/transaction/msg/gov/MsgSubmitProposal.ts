import ow from 'ow';
import { InitConfigurations } from '../../../core/cro';
import { Message } from '../Message';
import { Msg } from '../../../cosmos/v1beta1/types/msg';
import { ICoin } from '../../../coin/coin';
import { COSMOS_MSG_TYPEURL } from '../../common/constants/typeurl';
import { AddressType, validateAddress } from '../../../utils/address';
import { owMsgSubmitProposalOptions } from '../ow.types';
import { cosmos, google } from '../../../cosmos/v1beta1/codec';

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
                    content: this.encodeContent(),
                    initialDeposit: [
                        {
                            denom: cosmosAmount.denom,
                            amount: cosmosAmount.amount,
                        },
                    ],
                },
            };
        }

        // cancel-software-upgrade Cancel the current software upgrade proposal
        // community-pool-spend    Submit a community pool spend proposal
        // param-change            Submit a parameter change proposal
        // software-upgrade        Submit a software upgrade proposal

        public encodeContent() {
            const cosmosAmount = this.initialDeposit.toCosmosCoin();

            const poolSpend = {
                title: this.title,
                description: this.description,
                recipient: this.proposer,
                amount: [
                    {
                        denom: cosmosAmount.denom,
                        amount: cosmosAmount.amount,
                    },
                ],
            };

            const spendProposal = cosmos.distribution.v1beta1.CommunityPoolSpendProposal.create(poolSpend);

            return google.protobuf.Any.create({
                type_url: '/cosmos.distribution.v1beta1.CommunityPoolSpendProposal',
                value: cosmos.distribution.v1beta1.CommunityPoolSpendProposal.encode(spendProposal).finish(),
            });
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
