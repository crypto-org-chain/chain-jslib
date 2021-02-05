"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgEditValidator = void 0;
var ow_1 = __importDefault(require("ow"));
var ow_types_1 = require("../ow.types");
var address_1 = require("../../../utils/address");
var typeurl_1 = require("../../common/constants/typeurl");
exports.msgEditValidator = function (config) {
    return (function () {
        function MsgEditValidator(options) {
            ow_1.default(options, 'options', ow_types_1.owMsgEditValidatorOptions);
            this.description = options.description;
            this.commissionRate = options.commissionRate;
            this.minSelfDelegation = options.minSelfDelegation;
            this.validatorAddress = options.validatorAddress;
            this.validateAddresses();
        }
        MsgEditValidator.prototype.toRawAminoMsg = function () {
            throw new Error('Method not implemented.');
        };
        MsgEditValidator.prototype.toRawMsg = function () {
            return {
                typeUrl: typeurl_1.COSMOS_MSG_TYPEURL.MsgEditValidator,
                value: {
                    description: this.description,
                    commissionRate: this.commissionRate,
                    minSelfDelegation: this.minSelfDelegation,
                    validatorAddress: this.validatorAddress,
                },
            };
        };
        MsgEditValidator.prototype.validateAddresses = function () {
            var network = config.network;
            if (!address_1.validateAddress({ network: network, address: this.validatorAddress, type: address_1.AddressType.VALIDATOR })) {
                throw new TypeError('Provided `validatorAddress` doesnt match network selected');
            }
        };
        return MsgEditValidator;
    }());
};
//# sourceMappingURL=MsgEditValidator.js.map