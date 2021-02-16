"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.owOptionalWordsLength = void 0;
var ow_1 = __importDefault(require("ow"));
exports.owOptionalWordsLength = ow_1.default.optional.number.integer.positive.validate(function (val) { return ({
    validator: val >= 12 && val <= 24 && val % 3 === 0,
    message: function (label) { return "Expected " + label + " to be a multiple of 3"; },
}); });
//# sourceMappingURL=ow.types.js.map