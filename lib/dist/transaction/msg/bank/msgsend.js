"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgSend = void 0;
var ow_1 = __importDefault(require("ow"));
var ow_types_1 = require("../ow.types");
var address_1 = require("../../../utils/address");
var typeurl_1 = require("../../common/constants/typeurl");
exports.msgSend = function (config) {
    return (function () {
        function MsgSend(options) {
            ow_1.default(options, 'options', ow_types_1.owMsgSendOptions);
            this.fromAddress = options.fromAddress;
            this.toAddress = options.toAddress;
            this.amount = options.amount;
            this.validateAddresses();
        }
        MsgSend.prototype.toRawMsg = function () {
            return {
                typeUrl: typeurl_1.COSMOS_MSG_TYPEURL.MsgSend,
                value: {
                    fromAddress: this.fromAddress,
                    toAddress: this.toAddress,
                    amount: this.amount.toCosmosCoins(),
                },
            };
        };
        MsgSend.prototype.toRawAminoMsg = function () {
            return {
                type: 'cosmos-sdk/MsgSend',
                value: {
                    from_address: this.fromAddress,
                    to_address: this.toAddress,
                    amount: this.amount.toCosmosCoins(),
                },
            };
        };
        MsgSend.prototype.validateAddresses = function () {
            if (!address_1.validateAddress({
                address: this.fromAddress,
                network: config.network,
                type: address_1.AddressType.USER,
            })) {
                throw new TypeError('Provided `fromAddress` does not match network selected');
            }
            if (!address_1.validateAddress({
                address: this.toAddress,
                network: config.network,
                type: address_1.AddressType.USER,
            })) {
                throw new TypeError('Provided `toAddress` does not match network selected');
            }
        };
        return MsgSend;
    }());
};
//# sourceMappingURL=msgsend.js.map