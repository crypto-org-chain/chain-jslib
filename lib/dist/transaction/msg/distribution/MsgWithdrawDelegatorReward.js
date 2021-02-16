"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgWithdrawDelegateReward = void 0;
var ow_1 = __importDefault(require("ow"));
var address_1 = require("../../../utils/address");
var ow_types_1 = require("../ow.types");
var typeurl_1 = require("../../common/constants/typeurl");
exports.msgWithdrawDelegateReward = function (config) {
    return (function () {
        function MsgWithdrawDelegatorReward(options) {
            ow_1.default(options, 'rewardOptions', ow_types_1.owMsgWithdrawDelegatorRewardOptions);
            this.delegatorAddress = options.delegatorAddress;
            this.validatorAddress = options.validatorAddress;
            this.validateAddresses();
        }
        MsgWithdrawDelegatorReward.prototype.toRawAminoMsg = function () {
            return {
                type: 'cosmos-sdk/MsgWithdrawDelegationReward',
                value: {
                    delegator_address: this.delegatorAddress,
                    validator_address: this.validatorAddress,
                },
            };
        };
        MsgWithdrawDelegatorReward.prototype.toRawMsg = function () {
            return {
                typeUrl: typeurl_1.COSMOS_MSG_TYPEURL.MsgWithdrawDelegatorReward,
                value: {
                    delegatorAddress: this.delegatorAddress,
                    validatorAddress: this.validatorAddress,
                },
            };
        };
        MsgWithdrawDelegatorReward.prototype.validateAddresses = function () {
            if (!address_1.validateAddress({
                address: this.delegatorAddress,
                network: config.network,
                type: address_1.AddressType.USER,
            })) {
                throw new TypeError('Provided `delegatorAddress` doesnt match network selected');
            }
            if (!address_1.validateAddress({
                address: this.validatorAddress,
                network: config.network,
                type: address_1.AddressType.VALIDATOR,
            })) {
                throw new TypeError('Provided `validatorAddress` doesnt match network selected');
            }
        };
        return MsgWithdrawDelegatorReward;
    }());
};
//# sourceMappingURL=MsgWithdrawDelegatorReward.js.map