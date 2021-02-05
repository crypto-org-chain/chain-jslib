"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.coins = exports.coin = void 0;
var math_1 = require("@cosmjs/math");
function coin(amount, denom) {
    return { amount: math_1.Uint53.fromString(amount).toString(), denom: denom };
}
exports.coin = coin;
function coins(amount, denom) {
    return [coin(amount, denom)];
}
exports.coins = coins;
//# sourceMappingURL=coins.js.map