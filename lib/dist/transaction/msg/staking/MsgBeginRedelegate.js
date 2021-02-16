"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgBeginRedelegate = void 0;
var ow_1 = __importDefault(require("ow"));
var ow_types_1 = require("../ow.types");
var address_1 = require("../../../utils/address");
var typeurl_1 = require("../../common/constants/typeurl");
exports.msgBeginRedelegate = function (config) {
    return (function () {
        function MsgBeginRedelegate(options) {
            ow_1.default(options, 'options', ow_types_1.owMsgBeginRedelgateOptions);
            this.delegatorAddress = options.delegatorAddress;
            this.validatorDstAddress = options.validatorDstAddress;
            this.validatorSrcAddress = options.validatorSrcAddress;
            this.amount = options.amount;
            this.validateAddresses();
        }
        MsgBeginRedelegate.prototype.toRawAminoMsg = function () {
            throw new Error('Method not implemented.');
        };
        MsgBeginRedelegate.prototype.toRawMsg = function () {
            var cosmosCoin = this.amount.toCosmosCoin();
            return {
                typeUrl: typeurl_1.COSMOS_MSG_TYPEURL.MsgBeginRedelegate,
                value: {
                    delegatorAddress: this.delegatorAddress,
                    validatorDstAddress: this.validatorDstAddress,
                    validatorSrcAddress: this.validatorSrcAddress,
                    amount: {
                        denom: cosmosCoin.denom,
                        amount: cosmosCoin.amount,
                    },
                },
            };
        };
        MsgBeginRedelegate.prototype.validateAddresses = function () {
            if (this.validatorDstAddress === this.validatorSrcAddress) {
                throw new TypeError('Source and destination validator addresses cannot be the same.');
            }
            if (!address_1.validateAddress({
                address: this.delegatorAddress,
                network: config.network,
                type: address_1.AddressType.USER,
            })) {
                throw new TypeError('Provided `delegatorAddress` does not match with selected network');
            }
            if (!address_1.validateAddress({
                address: this.validatorSrcAddress,
                network: config.network,
                type: address_1.AddressType.VALIDATOR,
            })) {
                throw new TypeError('Provided `validatorSrcAddress` does not match with selected network');
            }
            if (!address_1.validateAddress({
                address: this.validatorDstAddress,
                network: config.network,
                type: address_1.AddressType.VALIDATOR,
            })) {
                throw new TypeError('Provided `validatorDstAddress` does not match with selected network');
            }
        };
        return MsgBeginRedelegate;
    }());
};
//# sourceMappingURL=MsgBeginRedelegate.js.map