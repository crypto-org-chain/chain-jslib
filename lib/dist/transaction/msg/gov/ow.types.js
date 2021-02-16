"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.owParamChangeProposalOptions = exports.owParamChange = exports.owCommunityPoolSpendProposalOptions = void 0;
var ow_1 = __importDefault(require("ow"));
var ow_types_1 = require("../../../ow.types");
var ow_types_2 = require("../../../coin/ow.types");
exports.owCommunityPoolSpendProposalOptions = ow_types_1.owStrictObject().exactShape({
    title: ow_1.default.string,
    description: ow_1.default.string,
    recipient: ow_1.default.string,
    amount: ow_types_2.owCoin(),
});
exports.owParamChange = function () {
    return ow_types_1.owStrictObject().exactShape({
        subspace: ow_1.default.string,
        key: ow_1.default.string,
        value: ow_1.default.string,
    });
};
exports.owParamChangeProposalOptions = ow_types_1.owStrictObject().exactShape({
    title: ow_1.default.string,
    description: ow_1.default.string,
    paramChanges: ow_1.default.array.ofType(exports.owParamChange()),
});
//# sourceMappingURL=ow.types.js.map