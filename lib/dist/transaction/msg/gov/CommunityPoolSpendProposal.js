"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.communityPoolSpendProposal = void 0;
var ow_1 = __importDefault(require("ow"));
var codec_1 = require("../../../cosmos/v1beta1/codec");
var address_1 = require("../../../utils/address");
var ow_types_1 = require("./ow.types");
exports.communityPoolSpendProposal = function (config) {
    return (function () {
        function CommunityPoolSpendProposal(options) {
            ow_1.default(options, 'options', ow_types_1.owCommunityPoolSpendProposalOptions);
            this.title = options.title;
            this.description = options.description;
            this.recipient = options.recipient;
            this.amount = options.amount;
        }
        CommunityPoolSpendProposal.prototype.getEncoded = function () {
            var convertedAmount = this.amount.toCosmosCoin();
            var communityPoolSpend = {
                title: this.title,
                description: this.description,
                recipient: this.recipient,
                amount: [
                    {
                        denom: convertedAmount.denom,
                        amount: convertedAmount.amount,
                    },
                ],
            };
            var spendProposal = codec_1.cosmos.distribution.v1beta1.CommunityPoolSpendProposal.create(communityPoolSpend);
            return codec_1.google.protobuf.Any.create({
                type_url: '/cosmos.distribution.v1beta1.CommunityPoolSpendProposal',
                value: codec_1.cosmos.distribution.v1beta1.CommunityPoolSpendProposal.encode(spendProposal).finish(),
            });
        };
        CommunityPoolSpendProposal.prototype.validate = function () {
            if (!address_1.validateAddress({
                address: this.recipient,
                network: config.network,
                type: address_1.AddressType.USER,
            })) {
                throw new TypeError('Provided `recipient` doesnt match network selected');
            }
        };
        return CommunityPoolSpendProposal;
    }());
};
//# sourceMappingURL=CommunityPoolSpendProposal.js.map