"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.owSecp256k1KeyPair = exports.owOptionalPubKeyOptions = exports.owSecp256k1PrivKey = void 0;
var ow_1 = __importDefault(require("ow"));
var secp256k1_1 = __importDefault(require("secp256k1"));
var ow_types_1 = require("../ow.types");
var ow_types_2 = require("../utils/bytes/ow.types");
var secp256k1_2 = require("./secp256k1");
exports.owSecp256k1PrivKey = ow_types_2.owBytes().validate(function (val) {
    if (val.length !== 32) {
        return {
            validator: false,
            message: function (label) {
                return "Expected " + label + " to be an instance of `Bytes` of byte length in 32, got " + val.length;
            },
        };
    }
    try {
        secp256k1_1.default.publicKeyCreate(val.toUint8Array());
    }
    catch (err) {
        return {
            validator: false,
            message: err.toString(),
        };
    }
    return {
        validator: true,
        message: '',
    };
});
exports.owOptionalPubKeyOptions = ow_types_1.owOptionalStrictObject().exactShape({
    compressed: ow_1.default.boolean,
});
exports.owSecp256k1KeyPair = function () {
    return ow_types_1.owStrictObject().validate(function (val) { return ({
        validator: val instanceof secp256k1_2.Secp256k1KeyPair,
        message: function (label) { return "Expected " + label + " to be an instance of `Secp256k1KeyPair`"; },
    }); });
};
//# sourceMappingURL=ow.types.js.map