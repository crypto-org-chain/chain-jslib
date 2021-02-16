"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.owCosmosMsg = exports.isCosmosMsg = void 0;
var ow_types_1 = require("../../ow.types");
function isCosmosMsg(msg) {
    return typeof msg.toRawMsg === 'function' && typeof msg.toRawAminoMsg === 'function';
}
exports.isCosmosMsg = isCosmosMsg;
exports.owCosmosMsg = function () {
    return ow_types_1.owStrictObject().validate(function (value) { return ({
        validator: isCosmosMsg(value),
        message: 'Expected value to be `CosmosMsg`, but it is not',
    }); });
};
//# sourceMappingURL=cosmosMsg.js.map