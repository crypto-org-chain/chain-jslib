"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ANY_VALID_KEY_PAIR = exports.ANY_INVALID_PRIV_KEY = exports.ANY_VALID_PRIV_KEY = void 0;
var bytes_1 = require("../../utils/bytes/bytes");
exports.ANY_VALID_PRIV_KEY = bytes_1.Bytes.fromUint8Array(new Uint8Array(32).fill(1));
exports.ANY_INVALID_PRIV_KEY = bytes_1.Bytes.fromUint8Array(new Uint8Array(32).fill(0));
exports.ANY_VALID_KEY_PAIR = {
    privKey: bytes_1.Bytes.fromUint8Array(new Uint8Array(32).fill(1)),
    pubKey: (function () {
        var arr = new Uint8Array(65);
        arr.set(Buffer.from('041b84c5567b126440995d3ed5aaba0565d71e1834604819ff9c17f5e9d5dd078f70beaf8f588b541507fed6a642c5ab42dfdf8120a7f639de5122d47a69a8e8d1', 'hex'));
        return bytes_1.Bytes.fromUint8Array(arr);
    })(),
    compressedPubKey: (function () {
        var arr = new Uint8Array(33);
        arr.set(Buffer.from('031b84c5567b126440995d3ed5aaba0565d71e1834604819ff9c17f5e9d5dd078f', 'hex'));
        return bytes_1.Bytes.fromUint8Array(arr);
    })(),
};
//# sourceMappingURL=crypto.js.map