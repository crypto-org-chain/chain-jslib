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
exports.SignableTransaction = void 0;
var ow_1 = __importDefault(require("ow"));
var long_1 = __importDefault(require("long"));
var secp256k1_1 = __importDefault(require("secp256k1"));
var codec_1 = require("../cosmos/v1beta1/codec");
var adr27_1 = require("../cosmos/v1beta1/adr27");
var typeurls_1 = require("../cosmos/v1beta1/types/typeurls");
var hash_1 = require("../utils/hash");
var bytes_1 = require("../utils/bytes/bytes");
var types_1 = require("./types");
var ow_types_1 = require("./ow.types");
var ow_types_2 = require("../utils/bytes/ow.types");
var signed_1 = require("./signed");
var legacyAmino = __importStar(require("../cosmos/amino"));
var DEFAULT_GAS_LIMIT = 200000;
var SignableTransaction = (function () {
    function SignableTransaction(params) {
        this.signerAccounts = [];
        ow_1.default(params, 'params', ow_types_1.owSignableTransactionParams);
        if (params.txBody.value.messages.length === 0) {
            throw new TypeError('Expected message in `txBody` of `params`, got none');
        }
        if (params.authInfo.signerInfos.length === 0) {
            throw new TypeError('Expected signer in `signerInfos` of `authInfo` of `params`, got none');
        }
        if (params.signerAccounts.length === 0) {
            throw new TypeError('Expected signer in `signerInfos` of `authInfo` of `params`, got none');
        }
        this.txBody = params.txBody;
        this.authInfo = params.authInfo;
        var bodyBytes = protoEncodeTxBody(params.txBody);
        var authInfoBytes = protoEncodeAuthInfo(params.authInfo);
        this.txRaw = {
            bodyBytes: bodyBytes,
            authInfoBytes: authInfoBytes,
            signatures: params.authInfo.signerInfos.map(function () { return types_1.EMPTY_SIGNATURE; }),
        };
        this.network = params.network;
        this.signerAccounts = params.signerAccounts;
    }
    SignableTransaction.prototype.toSignDocument = function (index) {
        ow_1.default(index, 'index', this.owIndex());
        var signMode = this.getSignerSignMode(index);
        if (signMode === types_1.SIGN_MODE.DIRECT) {
            return makeSignDoc(this.txRaw.bodyBytes, this.txRaw.authInfoBytes, this.network.chainId, this.signerAccounts[index].accountNumber);
        }
        if (signMode === types_1.SIGN_MODE.LEGACY_AMINO_JSON) {
            return makeLegacyAminoSignDoc(legacyEncodeMsgs(this.txBody.value.messages), legacyEncodeStdFee(this.authInfo.fee.amount, this.authInfo.fee.gasLimit), this.network.chainId, this.txBody.value.memo || '', this.signerAccounts[index].accountNumber.toString(), this.authInfo.signerInfos[index].sequence.toString(), legacyEncodeTimeoutHeight(this.txBody.value.timeoutHeight));
        }
        throw new Error("Unrecognized sign mode: " + signMode);
    };
    SignableTransaction.prototype.toSignDocumentHash = function (index) {
        var raw = this.toSignDocument(index);
        var hash = hash_1.sha256(raw);
        return hash;
    };
    SignableTransaction.prototype.toSignDoc = function (index) {
        return this.toSignDocumentHash(index);
    };
    SignableTransaction.prototype.setSignature = function (index, signature) {
        ow_1.default(index, 'index', this.owIndex());
        ow_1.default(signature, 'signature', ow_types_2.owBytes());
        var pubKey = this.signerAccounts[index].publicKey;
        var signDocHash = this.toSignDocumentHash(index);
        if (!secp256k1_1.default.ecdsaVerify(signature.toUint8Array(), signDocHash.toUint8Array(), pubKey.toUint8Array())) {
            throw new Error('Invalid signature');
        }
        this.txRaw.signatures[index] = signature;
        return this;
    };
    SignableTransaction.prototype.getSignerSignMode = function (index) {
        return this.signerAccounts[index].signMode;
    };
    SignableTransaction.prototype.isIndexSigned = function (index) {
        ow_1.default(index, 'index', this.owIndex());
        return !this.txRaw.signatures[index].isEqual(types_1.EMPTY_SIGNATURE);
    };
    SignableTransaction.prototype.owIndex = function () {
        var _this = this;
        return ow_1.default.number.integer.greaterThanOrEqual(0).validate(function (val) { return ({
            validator: val < _this.signerAccounts.length,
            message: function (label) { return "Expected `" + label + "` to be within signer size, got `" + val + "`"; },
        }); });
    };
    SignableTransaction.prototype.getTxRaw = function () {
        return this.txRaw;
    };
    SignableTransaction.prototype.getNetwork = function () {
        return this.network;
    };
    SignableTransaction.prototype.toSigned = function () {
        if (!this.isCompletelySigned()) {
            throw new Error('Transaction is not completed signed');
        }
        return new signed_1.SignedTransaction(this.txRaw);
    };
    SignableTransaction.prototype.isCompletelySigned = function () {
        return this.txRaw.signatures.every(function (signature) { return !signature.isEqual(types_1.EMPTY_SIGNATURE); });
    };
    return SignableTransaction;
}());
exports.SignableTransaction = SignableTransaction;
var protoEncodeTxBody = function (txBody) {
    var wrappedMessages = txBody.value.messages.map(function (message) {
        var rawMessage = message.toRawMsg();
        var messageBytes = protoEncodeTxBodyMessage(rawMessage);
        return codec_1.google.protobuf.Any.create({
            type_url: rawMessage.typeUrl,
            value: messageBytes,
        });
    });
    var txBodyProto = codec_1.cosmos.tx.v1beta1.TxBody.create(__assign(__assign({}, txBody), { messages: wrappedMessages }));
    if (txBody.value.memo) {
        txBodyProto.memo = txBody.value.memo;
    }
    if (txBody.value.timeoutHeight && txBody.value.timeoutHeight !== '0') {
        txBodyProto.timeoutHeight = long_1.default.fromString(txBody.value.timeoutHeight, true);
    }
    return bytes_1.Bytes.fromUint8Array(codec_1.cosmos.tx.v1beta1.TxBody.encode(txBodyProto).finish());
};
var protoEncodeTxBodyMessage = function (message) {
    var type = typeurls_1.typeUrlMappings[message.typeUrl];
    if (!type) {
        throw new Error("Unrecognized message type " + message.typeUrl);
    }
    var created = type.create(message.value);
    return Uint8Array.from(type.encode(created).finish());
};
var protoEncodeAuthInfo = function (authInfo) {
    var encodableAuthInfo = {
        signerInfos: authInfo.signerInfos.map(function (_a) {
            var publicKey = _a.publicKey, modeInfo = _a.modeInfo, sequence = _a.sequence;
            return ({
                publicKey: protoEncodePubKey(publicKey),
                modeInfo: modeInfo,
                sequence: sequence ? long_1.default.fromString(sequence.toString()) : undefined,
            });
        }),
        fee: {
            amount: authInfo.fee.amount !== undefined ? [authInfo.fee.amount.toCosmosCoin()] : [],
            gasLimit: protoEncodeGasLimitOrDefault(authInfo),
        },
    };
    return bytes_1.Bytes.fromUint8Array(codec_1.cosmos.tx.v1beta1.AuthInfo.encode(encodableAuthInfo).finish());
};
var protoEncodeGasLimitOrDefault = function (authInfo) {
    var defaultGasLimit = long_1.default.fromNumber(DEFAULT_GAS_LIMIT);
    return authInfo.fee.gasLimit !== undefined && authInfo.fee.gasLimit !== null
        ? long_1.default.fromNumber(authInfo.fee.gasLimit.toNumber())
        : defaultGasLimit;
};
var protoEncodePubKey = function (pubKey) {
    var pubKeyProto = codec_1.cosmos.crypto.secp256k1.PubKey.create({
        key: pubKey.toUint8Array(),
    });
    return codec_1.google.protobuf.Any.create({
        type_url: '/cosmos.crypto.secp256k1.PubKey',
        value: Uint8Array.from(codec_1.cosmos.crypto.secp256k1.PubKey.encode(pubKeyProto).finish()),
    });
};
var makeSignDoc = function (txBodyBytes, authInfoBytes, chainId, accountNumber) {
    var signDoc = adr27_1.omitDefaults({
        bodyBytes: txBodyBytes.toUint8Array(),
        authInfoBytes: authInfoBytes.toUint8Array(),
        chainId: chainId,
    });
    if (accountNumber.toNumber()) {
        signDoc.accountNumber = long_1.default.fromNumber(accountNumber.toNumber());
    }
    var signDocProto = codec_1.cosmos.tx.v1beta1.SignDoc.create(signDoc);
    return bytes_1.Bytes.fromUint8Array(codec_1.cosmos.tx.v1beta1.SignDoc.encode(signDocProto).finish());
};
var legacyEncodeMsgs = function (msgs) {
    return msgs.map(function (msg) { return msg.toRawAminoMsg(); });
};
var legacyEncodeStdFee = function (fee, gas) {
    return {
        amount: fee ? fee.toCosmosCoins() : [],
        gas: gas ? gas.toString() : DEFAULT_GAS_LIMIT.toString(),
    };
};
var legacyEncodeTimeoutHeight = function (timeoutHeight) {
    if (typeof timeoutHeight === 'undefined' || timeoutHeight === '0') {
        return undefined;
    }
    return timeoutHeight;
};
var makeLegacyAminoSignDoc = function (msgs, fee, chainId, memo, accountNumber, sequence, timeoutHeight) {
    var encodedTimeoutHeight;
    if (typeof timeoutHeight !== 'undefined') {
        encodedTimeoutHeight = legacyAmino.Uint53.fromString(timeoutHeight.toString()).toString();
    }
    var stdSignDocBase = {
        chain_id: chainId,
        account_number: legacyAmino.Uint53.fromString(accountNumber.toString()).toString(),
        sequence: legacyAmino.Uint53.fromString(sequence.toString()).toString(),
        fee: fee,
        msgs: msgs,
        memo: memo,
    };
    var stdSignDoc;
    if (typeof timeoutHeight === 'undefined') {
        stdSignDoc = __assign({}, stdSignDocBase);
    }
    else {
        stdSignDoc = __assign(__assign({}, stdSignDocBase), { timeout_height: encodedTimeoutHeight });
    }
    return bytes_1.Bytes.fromUint8Array(legacyAmino.toUtf8(legacyAmino.sortedJsonStringify(stdSignDoc)));
};
//# sourceMappingURL=signable.js.map