"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sortedJsonStringify = void 0;
function sortedJsonStringify(obj) {
    return JSON.stringify(sortedObject(obj));
}
exports.sortedJsonStringify = sortedJsonStringify;
function sortedObject(obj) {
    if (typeof obj !== 'object' || obj === null) {
        return obj;
    }
    if (Array.isArray(obj)) {
        return obj.map(sortedObject);
    }
    var sortedKeys = Object.keys(obj).sort();
    var result = sortedKeys.reduce(function (accumulator, key) {
        var _a;
        return (__assign(__assign({}, accumulator), (_a = {}, _a[key] = sortedObject(obj[key]), _a)));
    }, {});
    return result;
}
//# sourceMappingURL=signdoc.js.map