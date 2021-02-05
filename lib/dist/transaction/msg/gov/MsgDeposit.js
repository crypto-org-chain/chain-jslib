"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgDeposit = void 0;
var long_1 = __importDefault(require("long"));
var ow_1 = __importDefault(require("ow"));
var address_1 = require("../../../utils/address");
var typeurl_1 = require("../../common/constants/typeurl");
var ow_types_1 = require("../ow.types");
exports.msgDeposit = function (config) {
    return (function () {
        function MsgDeposit(options) {
            ow_1.default(options, 'options', ow_types_1.owMsgDepositOptions);
            this.proposalId = options.proposalId;
            this.depositor = options.depositor;
            this.amount = options.amount;
            this.validate();
        }
        MsgDeposit.prototype.toRawAminoMsg = function () {
            throw new Error('Method not implemented.');
        };
        MsgDeposit.prototype.toRawMsg = function () {
            var cosmosAmount = this.amount.toCosmosCoin();
            var proposal = long_1.default.fromNumber(this.proposalId.toNumber(), true);
            return {
                typeUrl: typeurl_1.COSMOS_MSG_TYPEURL.MsgDeposit,
                value: {
                    proposalId: proposal,
                    depositor: this.depositor,
                    amount: [
                        {
                            denom: cosmosAmount.denom,
                            amount: cosmosAmount.amount,
                        },
                    ],
                },
            };
        };
        MsgDeposit.prototype.validate = function () {
            if (!address_1.validateAddress({
                address: this.depositor,
                network: config.network,
                type: address_1.AddressType.USER,
            })) {
                throw new TypeError('Provided `depositor` doesnt match network selected');
            }
        };
        return MsgDeposit;
    }());
};
//# sourceMappingURL=MsgDeposit.js.map