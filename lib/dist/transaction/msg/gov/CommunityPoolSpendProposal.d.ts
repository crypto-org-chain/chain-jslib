import { ICoin } from '../../../coin/coin';
import { google } from '../../../cosmos/v1beta1/codec';
import { InitConfigurations } from '../../../core/cro';
export declare const communityPoolSpendProposal: (config: InitConfigurations) => {
    new (options: CommunityPoolSpendProposalOptions): {
        title: string;
        description: string;
        recipient: string;
        amount: ICoin;
        getEncoded(): google.protobuf.Any;
        validate(): void;
    };
};
export declare type CommunityPoolSpendProposalOptions = {
    title: string;
    description: string;
    recipient: string;
    amount: ICoin;
};
//# sourceMappingURL=CommunityPoolSpendProposal.d.ts.map