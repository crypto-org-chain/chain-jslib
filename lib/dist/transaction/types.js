"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EMPTY_SIGNATURE = exports.SIGN_MODE = void 0;
var bytes_1 = require("../utils/bytes/bytes");
var SIGN_MODE;
(function (SIGN_MODE) {
    SIGN_MODE[SIGN_MODE["LEGACY_AMINO_JSON"] = 0] = "LEGACY_AMINO_JSON";
    SIGN_MODE[SIGN_MODE["DIRECT"] = 1] = "DIRECT";
})(SIGN_MODE = exports.SIGN_MODE || (exports.SIGN_MODE = {}));
exports.EMPTY_SIGNATURE = bytes_1.Bytes.fromHexString('');
//# sourceMappingURL=types.js.map