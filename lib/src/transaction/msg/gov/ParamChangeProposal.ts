import { cosmos, google } from '../../../cosmos/v1beta1/codec';
import { IMsgProposalContent } from './IMsgProposalContent';

export const paramChangeProposal = function () {
    return class ParamChangeProposal implements IMsgProposalContent {
        /** ParameterChangeProposal title. */
        public readonly title: string;

        /** ParameterChangeProposal description. */
        public readonly description: string;

        public readonly paramChanges: ParamChange[];

        constructor(options: ParamChangeProposalOptions) {
            // TODO : Validate ow() params

            this.title = options.title;
            this.description = options.description;
            this.paramChanges = options.paramChanges;
        }

        /**
         * Returns the proto encoding representation of CommunityPoolSpendProposal
         * @returns {google.protobuf.Any}
         */
        getEncoded(): google.protobuf.Any {
            const parameterChanges = this.paramChanges.map((param) =>
                cosmos.params.v1beta1.ParamChange.create({
                    subspace: param.subspace,
                    key: param.key,
                    value: param.value,
                }),
            );
            const paramChange = {
                title: this.title,
                description: this.description,
                changes: parameterChanges,
            };

            const spendProposal = cosmos.params.v1beta1.ParameterChangeProposal.create(paramChange);

            return google.protobuf.Any.create({
                type_url: '/cosmos.params.v1beta1.ParameterChangeProposal',
                value: cosmos.params.v1beta1.ParameterChangeProposal.encode(spendProposal).finish(),
            });
        }
    };
};

export type ParamChange = {
    /** ParamChange subspace. */
    subspace: string;

    /** ParamChange key. */
    key: string;

    /** ParamChange value. */
    value: string;
};

export type ParamChangeProposalOptions = {
    title: string;
    description: string;
    paramChanges: ParamChange[];
};
