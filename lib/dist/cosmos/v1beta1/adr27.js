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
exports.omitDefaults = exports.omitDefault = void 0;
var typechecks_1 = require("../../utils/typechecks");
function omitDefault(input) {
    if (input === undefined || input === null)
        return null;
    if (typeof input === 'number' || typeof input === 'boolean' || typeof input === 'string') {
        return input || null;
    }
    if (Array.isArray(input) || typechecks_1.isUint8Array(input)) {
        return input.length ? input : null;
    }
    throw new Error('Input type not supported');
}
exports.omitDefault = omitDefault;
function omitDefaults(input) {
    if (input === undefined || input === null)
        return null;
    if (typeof input === 'number' ||
        typeof input === 'boolean' ||
        typeof input === 'string' ||
        Array.isArray(input) ||
        typechecks_1.isUint8Array(input)) {
        return omitDefault(input);
    }
    if (typechecks_1.isNonNullObject(input)) {
        return Object.entries(input).reduce(function (accumulator, _a) {
            var _b;
            var key = _a[0], value = _a[1];
            return (__assign(__assign({}, accumulator), (_b = {}, _b[key] = omitDefaults(value), _b)));
        }, {});
    }
    throw new Error("Input type not supported: " + typeof input);
}
exports.omitDefaults = omitDefaults;
//# sourceMappingURL=adr27.js.map