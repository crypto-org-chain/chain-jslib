"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Secp256k1KeyPair = void 0;
var secp256k1_1 = __importDefault(require("secp256k1"));
var ow_1 = __importDefault(require("ow"));
var randombytes_1 = __importDefault(require("randombytes"));
var ow_types_1 = require("./ow.types");
var bytes_1 = require("../utils/bytes/bytes");
var ow_types_2 = require("../utils/bytes/ow.types");
var secp256k1_2 = require("../utils/secp256k1");
var Secp256k1KeyPair = (function () {
    function Secp256k1KeyPair(privKey) {
        ow_1.default(privKey, ow_types_1.owSecp256k1PrivKey);
        this.privKey = privKey;
    }
    Secp256k1KeyPair.fromPrivKey = function (privKey) {
        ow_1.default(privKey, 'privKey', ow_types_1.owSecp256k1PrivKey);
        var result = secp256k1_2.isValidSecp256k1PrivKey(privKey);
        if (!result.ok) {
            throw new TypeError(result.err('privKey'));
        }
        return new Secp256k1KeyPair(privKey);
    };
    Secp256k1KeyPair.generateRandom = function () {
        var privKey;
        do {
            privKey = randombytes_1.default(32);
        } while (!secp256k1_1.default.privateKeyVerify(privKey));
        return new Secp256k1KeyPair(bytes_1.Bytes.fromUint8Array(privKey));
    };
    Secp256k1KeyPair.prototype.getPrivKey = function () {
        return this.privKey;
    };
    Secp256k1KeyPair.prototype.getPubKey = function (options) {
        ow_1.default(options, ow_types_1.owOptionalPubKeyOptions);
        var compressed = typeof (options === null || options === void 0 ? void 0 : options.compressed) === 'undefined' ? true : options.compressed;
        return bytes_1.Bytes.fromUint8Array(secp256k1_1.default.publicKeyCreate(this.privKey.toUint8Array(), compressed));
    };
    Secp256k1KeyPair.prototype.sign = function (message) {
        ow_1.default(message, ow_types_2.owBytes());
        var signature = secp256k1_1.default.ecdsaSign(message.toUint8Array(), this.privKey.toUint8Array()).signature;
        return bytes_1.Bytes.fromUint8Array(signature);
    };
    return Secp256k1KeyPair;
}());
exports.Secp256k1KeyPair = Secp256k1KeyPair;
//# sourceMappingURL=secp256k1.js.map