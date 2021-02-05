"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidSepc256k1PublicKey = exports.isValidSecp256k1PrivKey = void 0;
var secp256k1_1 = __importDefault(require("secp256k1"));
exports.isValidSecp256k1PrivKey = function (val) {
    if (val.length !== 32) {
        return {
            ok: false,
            err: function (label) {
                return "Expected " + label + " to be an instance of `Bytes` of byte length in 32, got " + val.length;
            },
        };
    }
    try {
        secp256k1_1.default.publicKeyCreate(val.toUint8Array());
    }
    catch (err) {
        return {
            ok: false,
            err: function () { return err.toString(); },
        };
    }
    return {
        ok: true,
    };
};
exports.isValidSepc256k1PublicKey = function (val) {
    if (!secp256k1_1.default.publicKeyVerify(val.toUint8Array())) {
        return {
            ok: false,
            err: function (label) { return "Expected " + label + " to be an instance of `Bytes` of valid public key"; },
        };
    }
    return {
        ok: true,
    };
};
//# sourceMappingURL=secp256k1.js.map