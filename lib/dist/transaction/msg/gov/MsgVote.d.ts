import Big from 'big.js';
import { InitConfigurations } from '../../../core/cro';
import { Msg } from '../../../cosmos/v1beta1/types/msg';
import * as legacyAmino from '../../../cosmos/amino';
export declare enum VoteOptions {
    YES = "VOTE_OPTION_YES",
    ABSTAIN = "VOTE_OPTION_ABSTAIN",
    NO = "VOTE_OPTION_NO",
    NO_WITH_VETO = "VOTE_OPTION_NO_WITH_VETO",
    UNSPECIFIED = "VOTE_OPTION_UNSPECIFIED"
}
export declare const msgVote: (config: InitConfigurations) => {
    new (options: MsgVoteOptions): {
        proposalId: Big;
        voter: string;
        option: string;
        toRawAminoMsg(): legacyAmino.Msg;
        toRawMsg(): Msg;
        validate(): void;
    };
};
export declare type MsgVoteOptions = {
    proposalId: Big;
    voter: string;
    option: string;
};
//# sourceMappingURL=MsgVote.d.ts.map