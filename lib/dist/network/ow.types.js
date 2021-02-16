"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.owNetwork = void 0;
var ow_1 = __importDefault(require("ow"));
var ow_types_1 = require("../ow.types");
exports.owNetwork = function () {
    return ow_types_1.owStrictObject().exactShape({
        defaultNodeUrl: ow_1.default.string,
        chainId: ow_1.default.string,
        addressPrefix: ow_1.default.string,
        validatorAddressPrefix: ow_1.default.string,
        validatorPubKeyPrefix: ow_1.default.string,
        coin: ow_types_1.owStrictObject().exactShape({
            baseDenom: ow_1.default.string,
            croDenom: ow_1.default.string,
        }),
        bip44Path: ow_types_1.owStrictObject().exactShape({
            coinType: ow_1.default.number,
            account: ow_1.default.number,
        }),
    });
};
//# sourceMappingURL=ow.types.js.map