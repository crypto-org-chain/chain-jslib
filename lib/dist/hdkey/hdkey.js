"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HDKey = void 0;
var ow_1 = __importDefault(require("ow"));
var bip32 = __importStar(require("bip32"));
var bip39 = __importStar(require("bip39"));
var bytes_1 = require("../utils/bytes/bytes");
var ow_types_1 = require("./ow.types");
var ow_types_2 = require("../utils/bytes/ow.types");
var HDKey = (function () {
    function HDKey(seed) {
        ow_1.default(seed, 'seed', ow_types_2.owBytes());
        this.innerSeed = seed;
    }
    HDKey.fromMnemonic = function (mnemonic, passphrase) {
        ow_1.default(mnemonic, 'mnemonic', ow_1.default.string);
        ow_1.default(passphrase, 'passphrase', ow_1.default.optional.string);
        if (!bip39.validateMnemonic(mnemonic)) {
            throw new Error('Invalid mnemonic words');
        }
        var seed = bip39.mnemonicToSeedSync(mnemonic, passphrase);
        return new HDKey(bytes_1.Bytes.fromBuffer(seed));
    };
    Object.defineProperty(HDKey.prototype, "seed", {
        get: function () {
            return this.innerSeed;
        },
        enumerable: false,
        configurable: true
    });
    HDKey.generateMnemonic = function (wordsLength) {
        if (wordsLength === void 0) { wordsLength = 24; }
        ow_1.default(wordsLength, 'wordsLength', ow_types_1.owOptionalWordsLength);
        var strength = (wordsLength / 3) * 32;
        return bip39.generateMnemonic(strength);
    };
    HDKey.prototype.derivePrivKey = function (path) {
        ow_1.default(path, 'path', ow_1.default.string);
        var root = bip32.fromSeed(this.innerSeed.toBuffer());
        var result = root.derivePath(path);
        return bytes_1.Bytes.fromBuffer(result.privateKey);
    };
    return HDKey;
}());
exports.HDKey = HDKey;
//# sourceMappingURL=hdkey.js.map