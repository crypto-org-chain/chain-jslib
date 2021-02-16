"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.rawTransaction = void 0;
var ow_1 = __importDefault(require("ow"));
var big_js_1 = __importDefault(require("big.js"));
var codec_1 = require("../cosmos/v1beta1/codec");
var ow_types_1 = require("./ow.types");
var secp256k1_1 = require("../utils/secp256k1");
var big_1 = require("../utils/big");
var types_1 = require("./types");
var signable_1 = require("./signable");
var clone_1 = require("../utils/clone");
var cosmosMsg_1 = require("./msg/cosmosMsg");
var ow_types_2 = require("../coin/ow.types");
exports.rawTransaction = function (config) {
    return (function () {
        function RawTransaction() {
            this.txBody = {
                typeUrl: '/cosmos.tx.v1beta1.TxBody',
                value: {
                    messages: [],
                    memo: '',
                    timeoutHeight: '0',
                },
            };
            this.authInfo = {
                signerInfos: [],
                fee: {
                    gasLimit: new big_js_1.default(200000),
                },
            };
            this.signerAccounts = [];
            this.network = config.network;
        }
        RawTransaction.prototype.addMessage = function (message) {
            ow_1.default(message, 'message', cosmosMsg_1.owCosmosMsg());
            this.txBody.value.messages.push(message);
            return this;
        };
        RawTransaction.prototype.appendMessage = function (message) {
            return this.addMessage(message);
        };
        RawTransaction.prototype.setMemo = function (memo) {
            ow_1.default(memo, 'memo', ow_1.default.string);
            this.txBody.value.memo = memo;
            return this;
        };
        RawTransaction.prototype.setGasLimit = function (gasLimit) {
            ow_1.default(gasLimit, 'gasLimit', ow_1.default.string);
            try {
                this.authInfo.fee.gasLimit = new big_js_1.default(gasLimit);
            }
            catch (err) {
                throw new TypeError("Expected gasLimit value to be a base10 number represented as string, got `" + gasLimit + "`");
            }
            return this;
        };
        RawTransaction.prototype.setFee = function (fee) {
            ow_1.default(fee, 'fee', ow_types_2.owCoin());
            this.authInfo.fee.amount = fee;
            return this;
        };
        RawTransaction.prototype.setTimeOutHeight = function (timeoutHeight) {
            ow_1.default(timeoutHeight, 'timeoutHeight', ow_types_1.owTimeoutHeight);
            this.txBody.value.timeoutHeight = timeoutHeight;
            return this;
        };
        RawTransaction.prototype.addSigner = function (signer) {
            ow_1.default(signer, 'signer', ow_types_1.owRawTransactionSigner);
            var publicKeyResult = secp256k1_1.isValidSepc256k1PublicKey(signer.publicKey);
            if (!publicKeyResult.ok) {
                throw new TypeError(publicKeyResult.err('signer'));
            }
            if (!big_1.isBigInteger(signer.accountNumber) && signer.accountNumber.gte(0)) {
                throw new TypeError("Expected accountNumber to be of positive integer, got `" + signer.accountNumber + "`");
            }
            if (!big_1.isBigInteger(signer.accountSequence) && signer.accountSequence.gte(0)) {
                throw new TypeError("Expected accountNumber to be of positive integer, got `" + signer.accountNumber + "`");
            }
            var signMode = signer.signMode;
            if (typeof signMode === 'undefined') {
                signMode = types_1.SIGN_MODE.DIRECT;
            }
            var cosmosSignMode;
            switch (signMode) {
                case types_1.SIGN_MODE.DIRECT:
                    cosmosSignMode = codec_1.cosmos.tx.signing.v1beta1.SignMode.SIGN_MODE_DIRECT;
                    break;
                case types_1.SIGN_MODE.LEGACY_AMINO_JSON:
                    cosmosSignMode = codec_1.cosmos.tx.signing.v1beta1.SignMode.SIGN_MODE_LEGACY_AMINO_JSON;
                    break;
                default:
                    throw new Error("Unsupported sign mode: " + signMode);
            }
            this.authInfo.signerInfos.push({
                publicKey: signer.publicKey,
                modeInfo: {
                    single: {
                        mode: cosmosSignMode,
                    },
                },
                sequence: signer.accountSequence,
            });
            this.signerAccounts.push({
                publicKey: signer.publicKey,
                accountNumber: signer.accountNumber,
                signMode: signMode,
            });
            return this;
        };
        RawTransaction.prototype.toSignable = function () {
            if (this.txBody.value.messages.length === 0) {
                throw new Error('Expected message in transaction, got none');
            }
            if (this.authInfo.signerInfos.length === 0) {
                throw new Error('Expected signer in transaction, got none');
            }
            return new signable_1.SignableTransaction({
                txBody: clone_1.cloneDeep(this.txBody),
                authInfo: clone_1.cloneDeep(this.authInfo),
                network: clone_1.cloneDeep(this.network),
                signerAccounts: clone_1.cloneDeep(this.signerAccounts),
            });
        };
        RawTransaction.prototype.getTxBody = function () {
            return this.txBody;
        };
        RawTransaction.prototype.getAuthInfo = function () {
            return this.authInfo;
        };
        RawTransaction.prototype.getNetwork = function () {
            return this.network;
        };
        RawTransaction.prototype.getSignerAccounts = function () {
            return this.signerAccounts;
        };
        return RawTransaction;
    }());
};
//# sourceMappingURL=raw.js.map