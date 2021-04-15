import ow from 'ow';
import { cosmos, google } from '../../../../cosmos/v1beta1/codec';
import { IMsgProposalContent } from '../IMsgProposalContent';
import { owCancelSoftwareUpgradeProposalOptions } from '../ow.types';
import { COSMOS_MSG_TYPEURL } from '../../../common/constants/typeurl';

export const cancelSoftwareUpgradeProposal = function () {
    return class CancelSoftwareUpgradeProposal implements IMsgProposalContent {
        /** CancelSoftwareUpgradeProposal title. */
        public title: string;

        /** CancelSoftwareUpgradeProposal description. */
        public description: string;

        constructor(options: CancelSoftwareUpgradeProposalOptions) {
            ow(options, 'options', owCancelSoftwareUpgradeProposalOptions);

            this.title = options.title;
            this.description = options.description;
        }

        /**
         * Returns the proto encoding representation of CancelSoftwareUpgradeProposal
         * @returns {google.protobuf.Any}
         */
        getEncoded(): google.protobuf.Any {
            const cancelProposalOptions = {
                title: this.title,
                description: this.description,
            };

            const cancelProposal = cosmos.upgrade.v1beta1.CancelSoftwareUpgradeProposal.create(cancelProposalOptions);

            return google.protobuf.Any.create({
                type_url: COSMOS_MSG_TYPEURL.upgrade.CancelSoftwareUpgradeProposal,
                value: cosmos.upgrade.v1beta1.CancelSoftwareUpgradeProposal.encode(cancelProposal).finish(),
            });
        }
    };
};

export type CancelSoftwareUpgradeProposalOptions = {
    title: string;
    description: string;
};
