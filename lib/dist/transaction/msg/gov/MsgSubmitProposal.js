"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgSubmitProposal = void 0;
var ow_1 = __importDefault(require("ow"));
var typeurl_1 = require("../../common/constants/typeurl");
var address_1 = require("../../../utils/address");
var ow_types_1 = require("../ow.types");
exports.msgSubmitProposal = function (config) {
    return (function () {
        function MsgSubmitProposal(options) {
            ow_1.default(options, 'options', ow_types_1.owMsgSubmitProposalOptions);
            this.proposer = options.proposer;
            this.initialDeposit = options.initialDeposit;
            this.content = options.content;
        }
        MsgSubmitProposal.prototype.toRawAminoMsg = function () {
            throw new Error('Method not implemented.');
        };
        MsgSubmitProposal.prototype.toRawMsg = function () {
            var cosmosAmount = this.initialDeposit.toCosmosCoin();
            return {
                typeUrl: typeurl_1.COSMOS_MSG_TYPEURL.MsgSubmitProposal,
                value: {
                    proposer: this.proposer,
                    content: this.content.getEncoded(),
                    initialDeposit: [
                        {
                            denom: cosmosAmount.denom,
                            amount: cosmosAmount.amount,
                        },
                    ],
                },
            };
        };
        MsgSubmitProposal.prototype.validate = function () {
            if (!address_1.validateAddress({
                address: this.proposer,
                network: config.network,
                type: address_1.AddressType.USER,
            })) {
                throw new TypeError('Provided `proposer` doesnt match network selected');
            }
        };
        return MsgSubmitProposal;
    }());
};
//# sourceMappingURL=MsgSubmitProposal.js.map