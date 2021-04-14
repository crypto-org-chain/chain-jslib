import ow from 'ow';
import Long from 'long';
import { cosmos, google } from '../../../../cosmos/v1beta1/codec';
import { IMsgProposalContent } from '../IMsgProposalContent';
import { owSoftwareUpgradeProposalOptions } from '../ow.types';
import { COSMOS_MSG_TYPEURL } from '../../../common/constants/typeurl';

export const softwareUpgradeProposal = function () {
    return class SoftwareUpgradeProposal implements IMsgProposalContent {
        /** SoftwareUpgradeProposal title. */
        public title: string;

        /** SoftwareUpgradeProposal description. */
        public description: string;

        /** SoftwareUpgradeProposal plan. */
        public plan?: IPlan;

        constructor(options: SoftwareUpgradeProposalOptions) {
            ow(options, 'options', owSoftwareUpgradeProposalOptions);

            this.title = options.title;
            this.description = options.description;
            this.plan = options.plan;
        }

        /**
         * Returns the proto encoding representation of SoftwareUpgradeProposal
         * @returns {google.protobuf.Any}
         */
        getEncoded(): google.protobuf.Any {
            const softwareUpgradeProposalOptions = {
                title: this.title,
                description: this.description,
                plan: this.plan,
            };

            const softwareUpgradeProposalContent = cosmos.upgrade.v1beta1.SoftwareUpgradeProposal.create(
                softwareUpgradeProposalOptions,
            );

            return google.protobuf.Any.create({
                type_url: COSMOS_MSG_TYPEURL.upgrade.SoftwareUpgradeProposal,
                value: cosmos.upgrade.v1beta1.SoftwareUpgradeProposal.encode(softwareUpgradeProposalContent).finish(),
            });
        }
    };
};

export type IPlan = {
    /** Plan name */
    name: string;

    /** Plan time */
    time?: ITimestamp;

    /** Plan height */
    height: Long;

    /** Plan info */
    info: string;

    /** Plan upgradedClientState */
    upgradedClientState?: google.protobuf.IAny;
};

export type ITimestamp = {
    /** Timestamp seconds */
    seconds?: Long;

    /** Timestamp nanos */
    nanos?: number;
};

export type SoftwareUpgradeProposalOptions = {
    title: string;
    description: string;
    plan?: IPlan;
};
