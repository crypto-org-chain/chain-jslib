"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sha256 = exports.hash160 = void 0;
var create_hash_1 = __importDefault(require("create-hash"));
var bytes_1 = require("./bytes/bytes");
function hash160(input) {
    var sha256Hash = create_hash_1.default('sha256').update(input.toUint8Array()).digest();
    var ripemd160Hash;
    try {
        ripemd160Hash = create_hash_1.default('rmd160').update(sha256Hash).digest();
    }
    catch (err) {
        ripemd160Hash = create_hash_1.default('ripemd160').update(sha256Hash).digest();
    }
    return bytes_1.Bytes.fromBuffer(ripemd160Hash);
}
exports.hash160 = hash160;
function sha256(input) {
    return bytes_1.Bytes.fromBuffer(create_hash_1.default('sha256').update(input.toUint8Array()).digest());
}
exports.sha256 = sha256;
//# sourceMappingURL=hash.js.map