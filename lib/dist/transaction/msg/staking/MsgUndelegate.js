"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgUndelegate = void 0;
var ow_1 = __importDefault(require("ow"));
var ow_types_1 = require("../ow.types");
var address_1 = require("../../../utils/address");
var typeurl_1 = require("../../common/constants/typeurl");
exports.msgUndelegate = function (config) {
    return (function () {
        function MsgUndelegate(options) {
            ow_1.default(options, 'options', ow_types_1.owMsgUndelegateOptions);
            this.delegatorAddress = options.delegatorAddress;
            this.validatorAddress = options.validatorAddress;
            this.amount = options.amount;
            this.validateAddresses();
        }
        MsgUndelegate.prototype.toRawAminoMsg = function () {
            return {
                type: 'cosmos-sdk/MsgUndelegate',
                value: {
                    delegator_address: this.delegatorAddress,
                    validator_address: this.validatorAddress,
                    amount: this.amount.toCosmosCoin(),
                },
            };
        };
        MsgUndelegate.prototype.toRawMsg = function () {
            var cosmosCoin = this.amount.toCosmosCoin();
            return {
                typeUrl: typeurl_1.COSMOS_MSG_TYPEURL.MsgUndelegate,
                value: {
                    delegatorAddress: this.delegatorAddress,
                    validatorAddress: this.validatorAddress,
                    amount: {
                        denom: cosmosCoin.denom,
                        amount: cosmosCoin.amount,
                    },
                },
            };
        };
        MsgUndelegate.prototype.validateAddresses = function () {
            var network = config.network;
            if (!address_1.validateAddress({ network: network, address: this.validatorAddress, type: address_1.AddressType.VALIDATOR })) {
                throw new TypeError('Provided `validatorAddress` doesnt match network selected');
            }
            if (!address_1.validateAddress({ network: network, address: this.delegatorAddress, type: address_1.AddressType.USER })) {
                throw new TypeError('Provided `delegatorAddress` doesnt match network selected');
            }
        };
        return MsgUndelegate;
    }());
};
//# sourceMappingURL=MsgUndelegate.js.map