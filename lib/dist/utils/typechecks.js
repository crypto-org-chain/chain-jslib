"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isUint8Array = exports.isNonNullObject = void 0;
function isNonNullObject(data) {
    return typeof data === 'object' && data !== null;
}
exports.isNonNullObject = isNonNullObject;
function isUint8Array(data) {
    if (!isNonNullObject(data))
        return false;
    if (Object.prototype.toString.call(data) !== '[object Uint8Array]')
        return false;
    if (typeof Buffer !== 'undefined' && typeof Buffer.isBuffer !== 'undefined') {
        if (Buffer.isBuffer(data))
            return false;
    }
    return true;
}
exports.isUint8Array = isUint8Array;
//# sourceMappingURL=typechecks.js.map