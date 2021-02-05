"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bytes = void 0;
var ow_1 = __importDefault(require("ow"));
var buffer_1 = require("buffer");
var typed_array_1 = require("../typed-array");
var ow_types_1 = require("./ow.types");
var Bytes = (function () {
    function Bytes(value) {
        ow_1.default(value, 'value', ow_1.default.uint8Array);
        this.value = typed_array_1.cloneUint8Array(value);
    }
    Bytes.fromUint8Array = function (value) {
        ow_1.default(value, 'value', ow_1.default.uint8Array);
        return new Bytes(value);
    };
    Bytes.fromBuffer = function (value) {
        ow_1.default(value, 'value', ow_1.default.buffer);
        var arr = new Uint8Array(value.length);
        arr.set(value);
        return Bytes.fromUint8Array(arr);
    };
    Bytes.fromHexString = function (value) {
        ow_1.default(value, 'value', ow_types_1.owHexString);
        if (value.length === 0) {
            return Bytes.fromUint8Array(new Uint8Array());
        }
        var hexValue = this.clean0x(value);
        var arr = new Uint8Array(hexValue.match(/.{2}/g).map(function (v) { return parseInt(v, 16); }));
        return Bytes.fromUint8Array(arr);
    };
    Bytes.clean0x = function (value) {
        if (value.startsWith(this.PREFIX_OX)) {
            return value.replace(this.PREFIX_OX, '');
        }
        return value;
    };
    Bytes.fromBase64String = function (value) {
        ow_1.default(value, 'value', ow_types_1.owBase64String);
        return Bytes.fromBuffer(buffer_1.Buffer.from(value, 'base64'));
    };
    Bytes.prototype.isEqual = function (anotherBytes) {
        if (this.length !== anotherBytes.length) {
            return false;
        }
        var anotherBytesValue = anotherBytes.toUint8Array();
        return this.value.every(function (val, i) { return val === anotherBytesValue[i]; });
    };
    Bytes.prototype.toUint8Array = function () {
        return typed_array_1.cloneUint8Array(this.value);
    };
    Bytes.prototype.toBuffer = function () {
        return buffer_1.Buffer.from(this.value);
    };
    Bytes.prototype.toHexString = function () {
        return Array.from(this.value)
            .map(function (i) { return ("0" + i.toString(16)).slice(-2); })
            .join('');
    };
    Bytes.prototype.toBase64String = function () {
        return this.toBuffer().toString('base64');
    };
    Bytes.prototype.clone = function () {
        return Bytes.fromUint8Array(typed_array_1.cloneUint8Array(this.value));
    };
    Object.defineProperty(Bytes.prototype, "length", {
        get: function () {
            return this.value.length;
        },
        enumerable: false,
        configurable: true
    });
    Bytes.PREFIX_OX = '0x';
    return Bytes;
}());
exports.Bytes = Bytes;
//# sourceMappingURL=bytes.js.map