"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.protoEncodeEd25519PubKey = exports.msgCreateValidator = void 0;
var ow_1 = __importDefault(require("ow"));
var ow_types_1 = require("../ow.types");
var address_1 = require("../../../utils/address");
var typeurl_1 = require("../../common/constants/typeurl");
var codec_1 = require("../../../cosmos/v1beta1/codec");
var bytes_1 = require("../../../utils/bytes/bytes");
exports.msgCreateValidator = function (config) {
    return (function () {
        function MsgCreateValidator(options) {
            ow_1.default(options, 'options', ow_types_1.owMsgCreateValidatorOptions);
            this.description = options.description;
            this.commission = options.commission;
            this.minSelfDelegation = options.minSelfDelegation;
            this.delegatorAddress = options.delegatorAddress;
            this.validatorAddress = options.validatorAddress;
            this.pubkey = options.pubkey;
            this.value = options.value;
            this.validateAddresses();
        }
        MsgCreateValidator.prototype.toRawAminoMsg = function () {
            throw new Error('Method not implemented.');
        };
        MsgCreateValidator.prototype.toRawMsg = function () {
            var cosmosCoin = this.value.toCosmosCoin();
            var pubkeyEncoded = exports.protoEncodeEd25519PubKey(bytes_1.Bytes.fromBase64String(this.pubkey));
            return {
                typeUrl: typeurl_1.COSMOS_MSG_TYPEURL.MsgCreateValidator,
                value: {
                    description: this.description,
                    commission: this.commission,
                    minSelfDelegation: this.minSelfDelegation,
                    delegatorAddress: this.delegatorAddress,
                    validatorAddress: this.validatorAddress,
                    pubkey: pubkeyEncoded,
                    value: {
                        denom: cosmosCoin.denom,
                        amount: cosmosCoin.amount,
                    },
                },
            };
        };
        MsgCreateValidator.prototype.validateAddresses = function () {
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
        return MsgCreateValidator;
    }());
};
exports.protoEncodeEd25519PubKey = function (pubKey) {
    var pubKeyProto = codec_1.cosmos.crypto.ed25519.PubKey.create({
        key: pubKey.toUint8Array(),
    });
    return codec_1.google.protobuf.Any.create({
        type_url: typeurl_1.COSMOS_MSG_TYPEURL.PubKey.ed25519,
        value: Uint8Array.from(codec_1.cosmos.crypto.ed25519.PubKey.encode(pubKeyProto).finish()),
    });
};
//# sourceMappingURL=MsgCreateValidator.js.map