"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgVote = exports.VoteOptions = void 0;
var long_1 = __importDefault(require("long"));
var ow_1 = __importDefault(require("ow"));
var address_1 = require("../../../utils/address");
var typeurl_1 = require("../../common/constants/typeurl");
var ow_types_1 = require("../ow.types");
var VoteOptions;
(function (VoteOptions) {
    VoteOptions["YES"] = "VOTE_OPTION_YES";
    VoteOptions["ABSTAIN"] = "VOTE_OPTION_ABSTAIN";
    VoteOptions["NO"] = "VOTE_OPTION_NO";
    VoteOptions["NO_WITH_VETO"] = "VOTE_OPTION_NO_WITH_VETO";
    VoteOptions["UNSPECIFIED"] = "VOTE_OPTION_UNSPECIFIED";
})(VoteOptions = exports.VoteOptions || (exports.VoteOptions = {}));
exports.msgVote = function (config) {
    return (function () {
        function MsgVote(options) {
            ow_1.default(options, 'options', ow_types_1.owMsgVoteOptions);
            this.proposalId = options.proposalId;
            this.voter = options.voter;
            this.option = options.option;
            this.validate();
        }
        MsgVote.prototype.toRawAminoMsg = function () {
            throw new Error('Method not implemented.');
        };
        MsgVote.prototype.toRawMsg = function () {
            var proposal = long_1.default.fromNumber(this.proposalId.toNumber(), true);
            return {
                typeUrl: typeurl_1.COSMOS_MSG_TYPEURL.MsgVote,
                value: {
                    proposalId: proposal,
                    voter: this.voter,
                    option: this.option,
                },
            };
        };
        MsgVote.prototype.validate = function () {
            if (!address_1.validateAddress({
                address: this.voter,
                network: config.network,
                type: address_1.AddressType.USER,
            })) {
                throw new TypeError('Provided `voter` doesnt match network selected');
            }
        };
        return MsgVote;
    }());
};
//# sourceMappingURL=MsgVote.js.map