"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userAddress = void 0;
var ow_1 = __importDefault(require("ow"));
var bech32_1 = __importDefault(require("bech32"));
var secp256k1_1 = require("../keypair/secp256k1");
var ow_types_1 = require("./ow.types");
var hash_1 = require("../utils/hash");
var bytes_1 = require("../utils/bytes/bytes");
exports.userAddress = function (config) {
    return (function () {
        function Address(pubKeySource) {
            ow_1.default(pubKeySource, 'pubKeySource', ow_types_1.owAccountPubKeySource);
            if (pubKeySource instanceof bytes_1.Bytes) {
                if (pubKeySource.length !== 33) {
                    throw new TypeError("Expected public key to be in compressed form of byte length in 33 bytes, got " + pubKeySource.length);
                }
            }
            var pubKey = pubKeySource instanceof secp256k1_1.Secp256k1KeyPair ? pubKeySource.getPubKey({ compressed: true }) : pubKeySource;
            this.pubKeyDigest = hash_1.hash160(pubKey);
        }
        Address.prototype.account = function () {
            var words = bech32_1.default.toWords(this.pubKeyDigest.toUint8Array());
            return bech32_1.default.encode(config.network.addressPrefix, words);
        };
        Address.prototype.validator = function () {
            var words = bech32_1.default.toWords(this.pubKeyDigest.toUint8Array());
            return bech32_1.default.encode(config.network.validatorAddressPrefix, words);
        };
        return Address;
    }());
};
//# sourceMappingURL=address.js.map