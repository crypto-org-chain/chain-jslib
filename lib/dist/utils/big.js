"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isBigInteger = exports.Big = void 0;
var big_js_1 = __importDefault(require("big.js"));
exports.Big = big_js_1.default;
var isBigInteger = function (val) {
    return val.cmp(val.toFixed(0)) === 0;
};
exports.isBigInteger = isBigInteger;
//# sourceMappingURL=big.js.map