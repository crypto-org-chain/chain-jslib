"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ANY_VALID_SECP256K1_KEY_PAIR = void 0;
var secp256k1_1 = require("../../keypair/secp256k1");
var crypto_1 = require("./crypto");
exports.ANY_VALID_SECP256K1_KEY_PAIR = secp256k1_1.Secp256k1KeyPair.fromPrivKey(crypto_1.ANY_VALID_PRIV_KEY);
//# sourceMappingURL=keypair.js.map