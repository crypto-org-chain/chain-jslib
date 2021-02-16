"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.owCoin = exports.owOptionalCoin = exports.owCoinUnit = void 0;
var ow_1 = __importDefault(require("ow"));
var ow_types_1 = require("../ow.types");
var coin_1 = require("./coin");
exports.owCoinUnit = ow_1.default.string.validate(function (val) { return ({
    validator: Object.values(coin_1.Units).includes(val),
    message: function (label) { return "Expected " + label + " to be one of the Coin units, got `" + val + "`"; },
}); });
var coinValidatorFn = function (val) { return ({
    validator: coin_1.isCoin(val),
    message: function (label) { return "Expected " + label + " to be an instance of `Coin`, got `" + val + "`"; },
}); };
exports.owOptionalCoin = function () { return ow_types_1.owOptionalStrictObject().validate(coinValidatorFn); };
exports.owCoin = function () { return ow_types_1.owStrictObject().validate(coinValidatorFn); };
//# sourceMappingURL=ow.types.js.map