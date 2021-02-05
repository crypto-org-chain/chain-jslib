import { Coin } from '../coins';
export interface Msg {
    readonly type: string;
    readonly value: any;
}
export interface MsgSend extends Msg {
    readonly type: 'cosmos-sdk/MsgSend';
    readonly value: {
        readonly from_address: string;
        readonly to_address: string;
        readonly amount: readonly Coin[];
    };
}
export declare function isMsgSend(msg: Msg): msg is MsgSend;
interface Input {
    readonly address: string;
    readonly coins: readonly Coin[];
}
interface Output {
    readonly address: string;
    readonly coins: readonly Coin[];
}
export interface MsgMultiSend extends Msg {
    readonly type: 'cosmos-sdk/MsgMultiSend';
    readonly value: {
        readonly inputs: readonly Input[];
        readonly outputs: readonly Output[];
    };
}
export declare function isMsgMultiSend(msg: Msg): msg is MsgMultiSend;
export interface MsgVerifyInvariant extends Msg {
    readonly type: 'cosmos-sdk/MsgVerifyInvariant';
    readonly value: {
        readonly sender: string;
        readonly invariant_module_name: string;
        readonly invariant_route: string;
    };
}
export declare function isMsgVerifyInvariant(msg: Msg): msg is MsgVerifyInvariant;
export interface MsgSetWithdrawAddress extends Msg {
    readonly type: 'cosmos-sdk/MsgSetWithdrawAddress';
    readonly value: {
        readonly delegator_address: string;
        readonly withdraw_address: string;
    };
}
export declare function isMsgSetWithdrawAddress(msg: Msg): msg is MsgSetWithdrawAddress;
export interface MsgWithdrawDelegatorReward extends Msg {
    readonly type: 'cosmos-sdk/MsgWithdrawDelegationReward';
    readonly value: {
        readonly delegator_address: string;
        readonly validator_address: string;
    };
}
export declare function isMsgWithdrawDelegatorReward(msg: Msg): msg is MsgWithdrawDelegatorReward;
export interface MsgWithdrawValidatorCommission extends Msg {
    readonly type: 'cosmos-sdk/MsgWithdrawValidatorCommission';
    readonly value: {
        readonly validator_address: string;
    };
}
export declare function isMsgWithdrawValidatorCommission(msg: Msg): msg is MsgWithdrawValidatorCommission;
export interface MsgFundCommunityPool extends Msg {
    readonly type: 'cosmos-sdk/MsgFundCommunityPool';
    readonly value: {
        readonly amount: readonly Coin[];
        readonly depositor: string;
    };
}
export declare function isMsgFundCommunityPool(msg: Msg): msg is MsgFundCommunityPool;
interface Any {
    readonly type_url: string;
    readonly value: Uint8Array;
}
export interface MsgSubmitEvidence extends Msg {
    readonly type: 'cosmos-sdk/MsgSubmitEvidence';
    readonly value: {
        readonly submitter: string;
        readonly evidence: Any;
    };
}
export declare function isMsgSubmitEvidence(msg: Msg): msg is MsgSubmitEvidence;
export interface MsgSubmitProposal extends Msg {
    readonly type: 'cosmos-sdk/MsgSubmitProposal';
    readonly value: {
        readonly content: Any;
        readonly initial_deposit: readonly Coin[];
        readonly proposer: string;
    };
}
export declare function isMsgSubmitProposal(msg: Msg): msg is MsgSubmitProposal;
declare enum VoteOption {
    VoteOptionUnspecified = 0,
    VoteOptionYes = 1,
    VoteOptionAbstain = 2,
    VoteOptionNo = 3,
    VoteOptionNoWithVeto = 4
}
export interface MsgVote extends Msg {
    readonly type: 'cosmos-sdk/MsgVote';
    readonly value: {
        readonly proposal_id: number;
        readonly voter: string;
        readonly option: VoteOption;
    };
}
export declare function isMsgVote(msg: Msg): msg is MsgVote;
export interface MsgDeposit extends Msg {
    readonly type: 'cosmos-sdk/MsgDeposit';
    readonly value: {
        readonly proposal_id: number;
        readonly depositor: string;
        readonly amount: readonly Coin[];
    };
}
export declare function isMsgDeposit(msg: Msg): msg is MsgDeposit;
export interface MsgUnjail extends Msg {
    readonly type: 'cosmos-sdk/MsgUnjail';
    readonly value: {
        readonly validator_addr: string;
    };
}
export declare function isMsgUnjail(msg: Msg): msg is MsgUnjail;
interface CommissionRates {
    readonly rate: string;
    readonly max_rate: string;
    readonly max_change_rate: string;
}
interface Description {
    readonly moniker: string;
    readonly identity: string;
    readonly website: string;
    readonly security_contact: string;
    readonly details: string;
}
export interface MsgCreateValidator extends Msg {
    readonly type: 'cosmos-sdk/MsgCreateValidator';
    readonly value: {
        readonly description: Description;
        readonly commission: CommissionRates;
        readonly min_self_delegation: string;
        readonly delegator_address: string;
        readonly validator_address: string;
        readonly pubkey: string;
        readonly value: Coin;
    };
}
export declare function isMsgCreateValidator(msg: Msg): msg is MsgCreateValidator;
export interface MsgEditValidator extends Msg {
    readonly type: 'cosmos-sdk/MsgEditValidator';
    readonly value: {
        readonly description: Description;
        readonly validator_address: string;
        readonly commission_rate: string;
        readonly min_self_delegation: string;
    };
}
export declare function isMsgEditValidator(msg: Msg): msg is MsgEditValidator;
export interface MsgDelegate extends Msg {
    readonly type: 'cosmos-sdk/MsgDelegate';
    readonly value: {
        readonly delegator_address: string;
        readonly validator_address: string;
        readonly amount: Coin;
    };
}
export declare function isMsgDelegate(msg: Msg): msg is MsgDelegate;
export interface MsgBeginRedelegate extends Msg {
    readonly type: 'cosmos-sdk/MsgBeginRedelegate';
    readonly value: {
        readonly delegator_address: string;
        readonly validator_src_address: string;
        readonly validator_dst_address: string;
        readonly amount: Coin;
    };
}
export declare function isMsgBeginRedelegate(msg: Msg): msg is MsgBeginRedelegate;
export interface MsgUndelegate extends Msg {
    readonly type: 'cosmos-sdk/MsgUndelegate';
    readonly value: {
        readonly delegator_address: string;
        readonly validator_address: string;
        readonly amount: Coin;
    };
}
export declare function isMsgUndelegate(msg: Msg): msg is MsgUndelegate;
export {};
//# sourceMappingURL=msg.d.ts.map