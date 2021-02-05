import { google } from '../../../cosmos/v1beta1/codec';
export declare const paramChangeProposal: () => {
    new (options: ParamChangeProposalOptions): {
        readonly title: string;
        readonly description: string;
        readonly paramChanges: ParamChange[];
        getEncoded(): google.protobuf.Any;
    };
};
export declare type ParamChange = {
    subspace: string;
    key: string;
    value: string;
};
export declare type ParamChangeProposalOptions = {
    title: string;
    description: string;
    paramChanges: ParamChange[];
};
//# sourceMappingURL=ParamChangeProposal.d.ts.map