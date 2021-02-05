"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.owOptionalBytes = exports.owBytes = exports.owBase64String = exports.owHexString = void 0;
var ow_1 = __importDefault(require("ow"));
var buffer_1 = require("buffer");
var ow_types_1 = require("../../ow.types");
var bytes_1 = require("./bytes");
exports.owHexString = ow_1.default.string.validate(function (val) { return ({
    validator: val.length % 2 === 0 && /^(0x)?[0-9a-fA-F]*$/.test(val),
    message: function (label) {
        return "Expected " + label + " to be hexadecimal string of even length, got `" + JSON.stringify(val) + "`";
    },
}); });
exports.owBase64String = ow_1.default.string.validate(function (val) { return ({
    validator: val.length % 4 === 0 && buffer_1.Buffer.from(val, 'base64').toString('base64') === val,
    message: "Expected valid base64 string of length be multiple of 4, got `" + JSON.stringify(val) + "`",
}); });
var owBytesValidator = function (val) { return ({
    validator: val instanceof bytes_1.Bytes,
    message: function (label) { return "Expected " + label + " to be an instance of `Bytes`"; },
}); };
exports.owBytes = function () { return ow_types_1.owStrictObject().validate(owBytesValidator); };
exports.owOptionalBytes = function () { return ow_types_1.owOptionalStrictObject().validate(owBytesValidator); };
//# sourceMappingURL=ow.types.js.map