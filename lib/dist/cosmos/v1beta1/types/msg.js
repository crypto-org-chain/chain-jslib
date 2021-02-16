"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.owMsg = void 0;
var ow_1 = __importDefault(require("ow"));
var ow_types_1 = require("../../../ow.types");
exports.owMsg = function () {
    return ow_types_1.owStrictObject().partialShape({
        typeUrl: ow_1.default.string,
    });
};
//# sourceMappingURL=msg.js.map