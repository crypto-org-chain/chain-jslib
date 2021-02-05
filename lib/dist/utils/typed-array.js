"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cloneUint8Array = void 0;
exports.cloneUint8Array = function (arr) {
    var cloned = new Uint8Array(arr.length);
    cloned.set(arr);
    return cloned;
};
//# sourceMappingURL=typed-array.js.map