import ow from 'ow';
import { cosmos, google } from '../../../../cosmos/v1beta1/codec';
import { IMsgProposalContent } from '../IMsgProposalContent';
import { owTextProposalOptions } from '../ow.types';
import { COSMOS_MSG_TYPEURL } from '../../../common/constants/typeurl';

export const textProposal = function () {
    return class TextProposal implements IMsgProposalContent {
        /** TextProposal title. */
        public title: string;

        /** TextProposal description. */
        public description: string;

        constructor(options: TextProposalOptions) {
            ow(options, 'options', owTextProposalOptions);

            this.title = options.title;
            this.description = options.description;
        }

        /**
         * Returns the proto encoding representation of TextProposal
         * @returns {google.protobuf.Any}
         */
        getEncoded(): google.protobuf.Any {
            const textProposalOptions = {
                title: this.title,
                description: this.description,
            };

            const textProposalProto = cosmos.gov.v1beta1.TextProposal.create(textProposalOptions);

            return google.protobuf.Any.create({
                type_url: COSMOS_MSG_TYPEURL.gov.TextProposal,
                value: cosmos.gov.v1beta1.TextProposal.encode(textProposalProto).finish(),
            });
        }
    };
};

export type TextProposalOptions = {
    title: string;
    description: string;
};
