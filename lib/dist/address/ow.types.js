"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.owAccountOptions = exports.owAccountPubKeySource = void 0;
var ow_1 = __importDefault(require("ow"));
var ow_types_1 = require("../keypair/ow.types");
var ow_types_2 = require("../ow.types");
var ow_types_3 = require("../utils/bytes/ow.types");
exports.owAccountPubKeySource = ow_1.default.any(ow_types_1.owSecp256k1KeyPair(), ow_types_3.owBytes());
exports.owAccountOptions = ow_types_2.owOptionalStrictObject().exactShape({
    prefix: ow_1.default.string,
});
//# sourceMappingURL=ow.types.js.map