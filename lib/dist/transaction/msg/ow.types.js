"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.owMsgBeginRedelgateOptions = exports.owMsgWithdrawValidatorCommissionOptions = exports.owMsgUndelegateOptions = exports.owMsgDelegateOptions = exports.owMsgWithdrawDelegatorRewardOptions = exports.owMsgEditValidatorOptions = exports.owMsgCreateValidatorOptions = exports.owMsgVoteOptions = exports.owMsgDepositOptions = exports.owMsgSubmitProposalOptions = exports.owMsgSendOptions = exports.owVoteOption = void 0;
var ow_1 = __importDefault(require("ow"));
var ow_types_1 = require("../../coin/ow.types");
var ow_types_2 = require("../../ow.types");
var MsgVote_1 = require("./gov/MsgVote");
var IMsgProposalContent_1 = require("./gov/IMsgProposalContent");
var voteOptionValidator = function (val) { return ({
    validator: Object.values(MsgVote_1.VoteOptions).includes(val),
    message: function (label) { return "Expected " + label + " to be one of the Vote options, got `" + val + "`"; },
}); };
exports.owVoteOption = function () { return ow_1.default.string.validate(voteOptionValidator); };
exports.owMsgSendOptions = ow_types_2.owStrictObject().exactShape({
    fromAddress: ow_1.default.string,
    toAddress: ow_1.default.string,
    amount: ow_types_1.owCoin(),
});
var proposalContentValidatorFn = function (val) { return ({
    validator: IMsgProposalContent_1.isMsgProposalContent(val),
    message: function (label) { return "Expected " + label + " to be an instance of `IMsgProposalContent`, got `" + val + "`"; },
}); };
var owContent = function () { return ow_types_2.owStrictObject().validate(proposalContentValidatorFn); };
exports.owMsgSubmitProposalOptions = ow_types_2.owStrictObject().exactShape({
    proposer: ow_1.default.string,
    initialDeposit: ow_types_1.owCoin(),
    content: owContent(),
});
exports.owMsgDepositOptions = ow_types_2.owStrictObject().exactShape({
    depositor: ow_1.default.string,
    proposalId: ow_types_2.owBig(),
    amount: ow_types_1.owCoin(),
});
exports.owMsgVoteOptions = ow_types_2.owStrictObject().exactShape({
    voter: ow_1.default.string,
    proposalId: ow_types_2.owBig(),
    option: exports.owVoteOption(),
});
exports.owMsgCreateValidatorOptions = ow_types_2.owStrictObject().exactShape({
    description: {
        moniker: ow_1.default.string,
        identity: ow_1.default.optional.string,
        website: ow_1.default.optional.string,
        securityContact: ow_1.default.optional.string,
        details: ow_1.default.optional.string,
    },
    commission: {
        rate: ow_1.default.string,
        maxRate: ow_1.default.string,
        maxChangeRate: ow_1.default.string,
    },
    minSelfDelegation: ow_1.default.string,
    delegatorAddress: ow_1.default.string,
    validatorAddress: ow_1.default.string,
    pubkey: ow_1.default.string,
    value: ow_types_1.owCoin(),
});
exports.owMsgEditValidatorOptions = ow_types_2.owStrictObject().exactShape({
    description: {
        moniker: ow_1.default.optional.string,
        identity: ow_1.default.optional.string,
        website: ow_1.default.optional.string,
        securityContact: ow_1.default.optional.string,
        details: ow_1.default.optional.string,
    },
    validatorAddress: ow_1.default.string,
    commissionRate: ow_1.default.any(ow_1.default.string, ow_1.default.null),
    minSelfDelegation: ow_1.default.any(ow_1.default.string, ow_1.default.null),
});
exports.owMsgWithdrawDelegatorRewardOptions = ow_types_2.owStrictObject().exactShape({
    delegatorAddress: ow_1.default.string,
    validatorAddress: ow_1.default.string,
});
exports.owMsgDelegateOptions = ow_types_2.owStrictObject().exactShape({
    delegatorAddress: ow_1.default.string,
    validatorAddress: ow_1.default.string,
    amount: ow_types_1.owCoin(),
});
exports.owMsgUndelegateOptions = ow_types_2.owStrictObject().exactShape({
    delegatorAddress: ow_1.default.string,
    validatorAddress: ow_1.default.string,
    amount: ow_types_1.owCoin(),
});
exports.owMsgWithdrawValidatorCommissionOptions = ow_types_2.owStrictObject().exactShape({
    validatorAddress: ow_1.default.string,
});
exports.owMsgBeginRedelgateOptions = ow_types_2.owStrictObject().exactShape({
    delegatorAddress: ow_1.default.string,
    validatorDstAddress: ow_1.default.string,
    validatorSrcAddress: ow_1.default.string,
    amount: ow_types_1.owCoin(),
});
//# sourceMappingURL=ow.types.js.map