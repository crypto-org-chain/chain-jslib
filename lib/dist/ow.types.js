"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.owOptionalBig = exports.owBig = exports.owOptionalStrictObject = exports.owStrictObject = void 0;
var ow_1 = __importDefault(require("ow"));
var big_js_1 = __importDefault(require("big.js"));
var strictObjectValidator = function (val) { return ({
    validator: typeof val !== 'function',
    message: function (label) {
        return "Expected " + parseObjectLabel(label) + " to be of type `object`, but received type `function`";
    },
}); };
var parseObjectLabel = function (label) {
    if (label === 'object') {
        return 'argument';
    }
    if (label.startsWith('object ')) {
        var parts = label.split('object ');
        return parts.length === 2 ? parts[1] : 'argument';
    }
    return label;
};
exports.owStrictObject = function () { return ow_1.default.object.validate(strictObjectValidator); };
exports.owOptionalStrictObject = function () { return ow_1.default.optional.object.validate(strictObjectValidator); };
var owBigValidator = function (val) { return ({
    validator: val instanceof big_js_1.default,
    message: function (label) { return "Expected " + label + " to be an instance of `Big`"; },
}); };
exports.owBig = function () { return exports.owStrictObject().validate(owBigValidator); };
exports.owOptionalBig = function () { return exports.owOptionalStrictObject().validate(owBigValidator); };
//# sourceMappingURL=ow.types.js.map