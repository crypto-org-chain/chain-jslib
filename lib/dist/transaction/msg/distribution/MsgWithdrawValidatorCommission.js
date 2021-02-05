"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgWithdrawValidatorCommission = void 0;
var ow_1 = __importDefault(require("ow"));
var address_1 = require("../../../utils/address");
var ow_types_1 = require("../ow.types");
var typeurl_1 = require("../../common/constants/typeurl");
exports.msgWithdrawValidatorCommission = function (config) {
    return (function () {
        function MsgWithdrawValidatorCommission(options) {
            ow_1.default(options, 'commissionWithdrawalOptions', ow_types_1.owMsgWithdrawValidatorCommissionOptions);
            this.validatorAddress = options.validatorAddress;
            this.validateAddresses();
        }
        MsgWithdrawValidatorCommission.prototype.toRawAminoMsg = function () {
            throw new Error('Method not implemented.');
        };
        MsgWithdrawValidatorCommission.prototype.toRawMsg = function () {
            return {
                typeUrl: typeurl_1.COSMOS_MSG_TYPEURL.MsgWithdrawValidatorCommission,
                value: {
                    validatorAddress: this.validatorAddress,
                },
            };
        };
        MsgWithdrawValidatorCommission.prototype.validateAddresses = function () {
            if (!address_1.validateAddress({
                address: this.validatorAddress,
                network: config.network,
                type: address_1.AddressType.VALIDATOR,
            })) {
                throw new TypeError('Provided `validatorAddress` doesnt match network selected');
            }
        };
        return MsgWithdrawValidatorCommission;
    }());
};
//# sourceMappingURL=MsgWithdrawValidatorCommission.js.map