"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.coin = exports.isCoin = exports.Units = void 0;
var big_js_1 = __importDefault(require("big.js"));
var ow_1 = __importDefault(require("ow"));
var ow_types_1 = require("./ow.types");
var coins_1 = require("../cosmos/coins");
var Units;
(function (Units) {
    Units["BASE"] = "base";
    Units["CRO"] = "cro";
})(Units = exports.Units || (exports.Units = {}));
function isCoin(object) {
    return object.hasOwnProperty('baseAmount');
}
exports.isCoin = isCoin;
exports.coin = function (config) {
    var _a;
    return _a = (function () {
            function Coin(amount, unit) {
                ow_1.default(amount, 'amount', ow_1.default.string);
                ow_1.default(unit, 'unit', ow_types_1.owCoinUnit);
                var coins;
                try {
                    coins = new big_js_1.default(amount);
                }
                catch (err) {
                    throw new TypeError("Expected amount to be a base10 number represented as string, got `" + amount + "`");
                }
                this.network = config.network;
                this.baseAmount = unit === Units.BASE ? Coin.parseBaseAmount(coins) : Coin.parseCROAmount(coins);
            }
            Coin.prototype.getNetwork = function () {
                return this.network;
            };
            Coin.parseBaseAmount = function (baseAmount) {
                if (baseAmount.cmp(baseAmount.toFixed(0)) !== 0) {
                    throw new TypeError("Expected base amount to be an integer, got `" + baseAmount + "`");
                }
                if (baseAmount.lt(0)) {
                    throw new TypeError("Expected base amount to be positive, got `" + baseAmount + "`");
                }
                if (baseAmount.gt(Coin.TOTAL_SUPPLY_STRING)) {
                    throw new TypeError("Expected base amount to be within total supply, got `" + baseAmount + "`");
                }
                return baseAmount;
            };
            Coin.parseCROAmount = function (croAmount) {
                var baseAmount = croAmount.mul(Coin.ONE_CRO_IN_BASE_UNIT);
                if (baseAmount.cmp(baseAmount.toFixed(0)) !== 0) {
                    throw new TypeError("Expected CRO amount to have at most 8 decimal places, got `" + croAmount + "`");
                }
                if (baseAmount.lt(0)) {
                    throw new TypeError("Expected CRO amount to be positive, got `" + croAmount + "`");
                }
                if (baseAmount.gt(Coin.TOTAL_SUPPLY_STRING)) {
                    throw new TypeError("Expected CRO amount to be within total supply, got `" + croAmount + "`");
                }
                return baseAmount;
            };
            Coin.fromBaseUnit = function (baseValue) {
                return new Coin(baseValue, Units.BASE);
            };
            Coin.fromCRO = function (croValue) {
                return new Coin(croValue, Units.CRO);
            };
            Coin.prototype.add = function (anotherCoin) {
                ow_1.default(anotherCoin, ow_types_1.owCoin());
                var newAmount = this.baseAmount.add(anotherCoin.toBig());
                if (newAmount.gt(Coin.TOTAL_SUPPLY_STRING)) {
                    throw new Error('Adding two Coin together exceed total supply');
                }
                return new Coin(newAmount.toString(), Units.BASE);
            };
            Coin.prototype.sub = function (anotherCoin) {
                ow_1.default(anotherCoin, ow_types_1.owCoin());
                var newAmount = this.baseAmount.sub(anotherCoin.toBig());
                if (newAmount.lt(0)) {
                    throw new Error('Subtracting the Coin results in negation Coin');
                }
                return new Coin(newAmount.toString(), Units.BASE);
            };
            Coin.prototype.toBig = function () {
                return this.baseAmount;
            };
            Coin.prototype.toCosmosCoin = function () {
                return coins_1.coin(this.toString(Units.BASE), config.network.coin.baseDenom);
            };
            Coin.prototype.toCosmosCoins = function () {
                return coins_1.coins(this.toString(Units.BASE), config.network.coin.baseDenom);
            };
            Coin.prototype.toString = function (unit) {
                if (unit === void 0) { unit = Units.BASE; }
                ow_1.default(unit, ow_types_1.owCoinUnit);
                if (unit === Units.BASE) {
                    return this.baseAmount.toString();
                }
                return this.baseAmount.div(Coin.ONE_CRO_IN_BASE_UNIT).toString();
            };
            return Coin;
        }()),
        _a.TOTAL_SUPPLY_STRING = '10000000000000000000',
        _a.TOTAL_SUPPLY = new _a(_a.TOTAL_SUPPLY_STRING, Units.BASE),
        _a.ONE_CRO_IN_BASE_UNIT = new big_js_1.default('100000000'),
        _a.UNIT_BASE = Units.BASE,
        _a.UNIT_CRO = Units.CRO,
        _a;
};
//# sourceMappingURL=coin.js.map