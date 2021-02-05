"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.owTxRaw = exports.owCosmosSignMode = exports.owSignerInfo = exports.owAuthInfo = exports.owTxBody = void 0;
var ow_1 = __importDefault(require("ow"));
var ow_types_1 = require("../../../coin/ow.types");
var ow_types_2 = require("../../../ow.types");
var cosmosMsg_1 = require("../../../transaction/msg/cosmosMsg");
var ow_types_3 = require("../../../transaction/ow.types");
var ow_types_4 = require("../../../utils/bytes/ow.types");
var codec_1 = require("../codec");
exports.owTxBody = function () {
    return ow_types_2.owStrictObject().exactShape({
        typeUrl: ow_1.default.string.equals('/cosmos.tx.v1beta1.TxBody'),
        value: ow_types_2.owStrictObject().exactShape({
            messages: ow_1.default.array.ofType(cosmosMsg_1.owCosmosMsg()),
            memo: ow_1.default.string,
            timeoutHeight: ow_types_3.owTimeoutHeight,
        }),
    });
};
exports.owAuthInfo = function () {
    return ow_types_2.owStrictObject().exactShape({
        signerInfos: ow_1.default.array.ofType(exports.owSignerInfo()),
        fee: ow_types_2.owStrictObject().exactShape({
            amount: ow_types_1.owOptionalCoin(),
            gasLimit: ow_types_2.owOptionalBig(),
            payer: ow_1.default.optional.string,
            granter: ow_1.default.optional.string,
        }),
    });
};
exports.owSignerInfo = function () {
    return ow_types_2.owStrictObject().exactShape({
        publicKey: ow_types_4.owBytes(),
        modeInfo: ow_types_2.owStrictObject().exactShape({
            single: ow_types_2.owStrictObject().exactShape({
                mode: exports.owCosmosSignMode(),
            }),
        }),
        sequence: ow_types_2.owBig(),
    });
};
exports.owCosmosSignMode = function () {
    return ow_1.default.number.validate(function (value) { return ({
        validator: Object.values(codec_1.cosmos.tx.signing.v1beta1.SignMode).includes(value),
        message: "Expected mode to be one of Cosmos sign mode, got `value`",
    }); });
};
exports.owTxRaw = function () {
    return ow_types_2.owStrictObject().exactShape({
        bodyBytes: ow_types_4.owBytes(),
        authInfoBytes: ow_types_4.owBytes(),
        signatures: ow_1.default.array.ofType(ow_types_4.owBytes()),
    });
};
//# sourceMappingURL=ow.types.js.map