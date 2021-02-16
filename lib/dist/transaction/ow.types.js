"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.owSignableTransactionParams = exports.owSignerAccount = exports.owTimeoutHeight = exports.owRawTransactionSigner = exports.owOptionalSignMode = exports.owSignMode = exports.owRawTransactionOptions = void 0;
var ow_1 = __importDefault(require("ow"));
var big_js_1 = __importDefault(require("big.js"));
var ow_types_1 = require("../cosmos/v1beta1/types/ow.types");
var ow_types_2 = require("../network/ow.types");
var ow_types_3 = require("../ow.types");
var ow_types_4 = require("../utils/bytes/ow.types");
var big_1 = require("../utils/big");
var types_1 = require("./types");
exports.owRawTransactionOptions = ow_types_3.owStrictObject().exactShape({
    network: ow_types_2.owNetwork(),
});
var validateSignMode = function (value) { return ({
    validator: Object.values(types_1.SIGN_MODE).includes(value),
    message: function (label) { return "Expected " + label + " to be one of the sign mode, got `" + value + "`"; },
}); };
exports.owSignMode = function () { return ow_1.default.number.validate(validateSignMode); };
exports.owOptionalSignMode = function () { return ow_1.default.optional.number.validate(validateSignMode); };
exports.owRawTransactionSigner = ow_types_3.owStrictObject().exactShape({
    publicKey: ow_types_4.owBytes(),
    accountNumber: ow_types_3.owBig(),
    accountSequence: ow_types_3.owBig(),
    signMode: exports.owOptionalSignMode(),
});
exports.owTimeoutHeight = ow_1.default.string.validate(function (value) {
    try {
        var big = new big_js_1.default(value);
        return {
            validator: big_1.isBigInteger(big) && big.gte(0),
            message: "Expected timeout height to be 0 or an positive integer string, got `" + value + "`",
        };
    }
    catch (_a) {
        return {
            validator: false,
            message: "Expected timeout height to be integer string, got `" + value + "`",
        };
    }
});
exports.owSignerAccount = function () {
    return ow_types_3.owStrictObject().exactShape({
        publicKey: ow_types_4.owBytes(),
        accountNumber: ow_types_3.owBig(),
        signMode: exports.owSignMode(),
    });
};
exports.owSignableTransactionParams = ow_types_3.owStrictObject().exactShape({
    txBody: ow_types_1.owTxBody(),
    authInfo: ow_types_1.owAuthInfo(),
    network: ow_types_2.owNetwork(),
    signerAccounts: ow_1.default.array.ofType(exports.owSignerAccount()),
});
//# sourceMappingURL=ow.types.js.map