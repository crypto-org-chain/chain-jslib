"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.anyValidSecp256k1PublicKey = void 0;
var secp256k1_1 = require("./secp256k1");
exports.anyValidSecp256k1PublicKey = function () {
    var keyPair = secp256k1_1.Secp256k1KeyPair.generateRandom();
    return keyPair.getPubKey();
};
//# sourceMappingURL=test.js.map