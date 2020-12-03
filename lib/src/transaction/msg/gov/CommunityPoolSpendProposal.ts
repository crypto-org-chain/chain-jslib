import ow from 'ow';
import { ICoin } from '../../../coin/coin';
import { cosmos, google } from '../../../cosmos/v1beta1/codec';
import { IMsgProposalContent } from './IMsgProposalContent';
import { InitConfigurations } from '../../../core/cro';
import { AddressType, validateAddress } from '../../../utils/address';
import { owCommunityPoolSpendProposalOptions } from './ow.types';

export const communityPoolSpendProposal = function (config: InitConfigurations) {
    return class CommunityPoolSpendProposal implements IMsgProposalContent {
        /** CommunityPoolSpendProposal title. */
        public title: string;

        /** CommunityPoolSpendProposal description. */
        public description: string;

        /** CommunityPoolSpendProposal recipient. */
        public recipient: string;

        /** CommunityPoolSpendProposal amount. */
        public amount: ICoin;

        constructor(options: CommunityPoolSpendProposalOptions) {
            ow(options, 'options', owCommunityPoolSpendProposalOptions);

            this.title = options.title;
            this.description = options.description;
            this.recipient = options.recipient;
            this.amount = options.amount;
        }

        /**
         * Returns the proto encoding representation of CommunityPoolSpendProposal
         * @returns {google.protobuf.Any}
         */
        getEncoded(): google.protobuf.Any {
            const convertedAmount = this.amount.toCosmosCoin();

            const communityPoolSpend = {
                title: this.title,
                description: this.description,
                recipient: this.recipient,
                amount: [
                    {
                        denom: convertedAmount.denom,
                        amount: convertedAmount.amount,
                    },
                ],
            };

            const spendProposal = cosmos.distribution.v1beta1.CommunityPoolSpendProposal.create(communityPoolSpend);

            return google.protobuf.Any.create({
                type_url: '/cosmos.distribution.v1beta1.CommunityPoolSpendProposal',
                value: cosmos.distribution.v1beta1.CommunityPoolSpendProposal.encode(spendProposal).finish(),
            });
        }

        validate() {
            if (
                !validateAddress({
                    address: this.recipient,
                    network: config.network,
                    type: AddressType.USER,
                })
            ) {
                throw new TypeError('Provided `recipient` doesnt match network selected');
            }
        }
    };
};

export type CommunityPoolSpendProposalOptions = {
    title: string;
    description: string;
    recipient: string;
    amount: ICoin;
};
