import { InitConfigurations } from '../../../core/cro';
import { Msg } from '../../../cosmos/v1beta1/types/msg';
import { ICoin } from '../../../coin/coin';
import { IMsgProposalContent } from './IMsgProposalContent';
import * as legacyAmino from '../../../cosmos/amino';
export declare const msgSubmitProposal: (config: InitConfigurations) => {
    new (options: ProposalOptions): {
        readonly proposer: string;
        readonly initialDeposit: ICoin;
        readonly content: IMsgProposalContent;
        toRawAminoMsg(): legacyAmino.Msg;
        toRawMsg(): Msg;
        validate(): void;
    };
};
export declare type ProposalOptions = {
    proposer: string;
    initialDeposit: ICoin;
    content: IMsgProposalContent;
};
//# sourceMappingURL=MsgSubmitProposal.d.ts.map