"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignedTransaction = void 0;
var ow_1 = __importDefault(require("ow"));
var codec_1 = require("../cosmos/v1beta1/codec");
var ow_types_1 = require("../cosmos/v1beta1/types/ow.types");
var bytes_1 = require("../utils/bytes/bytes");
var hash_1 = require("../utils/hash");
var SignedTransaction = (function () {
    function SignedTransaction(txRaw) {
        ow_1.default(txRaw, 'txRaw', ow_types_1.owTxRaw());
        this.txRaw = txRaw;
    }
    SignedTransaction.prototype.getTxHash = function () {
        return hash_1.sha256(this.encode()).toHexString().toUpperCase();
    };
    SignedTransaction.prototype.encode = function () {
        return encodeTxRaw(this.txRaw);
    };
    SignedTransaction.prototype.getHexEncoded = function () {
        return this.encode().toHexString();
    };
    SignedTransaction.prototype.getTxRaw = function () {
        return this.txRaw;
    };
    return SignedTransaction;
}());
exports.SignedTransaction = SignedTransaction;
var encodeTxRaw = function (txRaw) {
    var encodableTxRaw = {
        bodyBytes: txRaw.bodyBytes.toUint8Array(),
        authInfoBytes: txRaw.authInfoBytes.toUint8Array(),
        signatures: txRaw.signatures.map(function (signature) { return signature.toUint8Array(); }),
    };
    var txRawProto = codec_1.cosmos.tx.v1beta1.TxRaw.create(encodableTxRaw);
    return bytes_1.Bytes.fromUint8Array(codec_1.cosmos.tx.v1beta1.TxRaw.encode(txRawProto).finish());
};
//# sourceMappingURL=signed.js.map