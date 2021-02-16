"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.txRawFactory = exports.SignableTransactionParamsSuiteFactory = exports.TransactionSignerFactory = exports.CosmosMsgSuiteFactory = void 0;
var rosie_1 = require("rosie");
var big_js_1 = __importDefault(require("big.js"));
var chance_1 = require("chance");
var secp256k1_1 = require("../keypair/secp256k1");
var signable_1 = require("./signable");
var codec_1 = require("../cosmos/v1beta1/codec");
var cro_1 = require("../core/cro");
var types_1 = require("./types");
var chance = new chance_1.Chance();
var cro = cro_1.CroSDK({ network: cro_1.CroNetwork.Testnet });
exports.CosmosMsgSuiteFactory = new rosie_1.Factory()
    .option('network', cro_1.CroNetwork.Testnet)
    .attr('keyPair', function () { return secp256k1_1.Secp256k1KeyPair.generateRandom(); })
    .attr('toAddress', 'tcro184lta2lsyu47vwyp2e8zmtca3k5yq85p6c4vp3')
    .attr('message', ['network', 'keyPair', 'toAddress'], function (_, keyPair, toAddress) {
    return new cro.bank.MsgSend({
        fromAddress: new cro.Address(keyPair.getPubKey()).account(),
        toAddress: toAddress,
        amount: cro.Coin.fromBaseUnit(chance.integer({ min: 0 }).toString()),
    });
});
exports.TransactionSignerFactory = new rosie_1.Factory()
    .option('keyPair', function () { return secp256k1_1.Secp256k1KeyPair.generateRandom(); })
    .attr('publicKey', ['keyPair'], function (keyPair) { return keyPair.getPubKey(); })
    .attrs({
    accountNumber: new big_js_1.default(chance.integer({ min: 0 })),
    accountSequence: new big_js_1.default(chance.integer({ min: 0 })),
    signMode: types_1.SIGN_MODE.DIRECT,
});
exports.SignableTransactionParamsSuiteFactory = new rosie_1.Factory()
    .option('network', cro_1.CroNetwork.Testnet)
    .attr('keyPair', function () { return secp256k1_1.Secp256k1KeyPair.generateRandom(); })
    .attr('params', ['network', 'keyPair'], function (network, keyPair) {
    var message = exports.CosmosMsgSuiteFactory.build({}, {
        keyPair: keyPair,
    }).message;
    var pubKey = keyPair.getPubKey();
    return {
        txBody: {
            typeUrl: '/cosmos.tx.v1beta1.TxBody',
            value: {
                messages: [message],
                memo: '',
                timeoutHeight: '0',
            },
        },
        authInfo: {
            signerInfos: [
                {
                    publicKey: pubKey,
                    modeInfo: {
                        single: {
                            mode: codec_1.cosmos.tx.signing.v1beta1.SignMode.SIGN_MODE_DIRECT,
                        },
                    },
                    sequence: new big_js_1.default(chance.integer({ min: 0 })),
                },
            ],
            fee: {
                gasLimit: new big_js_1.default(chance.integer({ min: 0 })),
            },
        },
        network: network,
        signerAccounts: [
            {
                publicKey: pubKey,
                accountNumber: new big_js_1.default(chance.integer({ min: 0 })),
                signMode: types_1.SIGN_MODE.DIRECT,
            },
        ],
    };
});
exports.txRawFactory = {
    build: function () {
        var _a = exports.SignableTransactionParamsSuiteFactory.build(), keyPair = _a.keyPair, params = _a.params;
        var signableTx = new signable_1.SignableTransaction(params);
        var signDoc = signableTx.toSignDocumentHash(0);
        var signature = keyPair.sign(signDoc);
        signableTx.setSignature(0, signature);
        return signableTx.getTxRaw();
    },
};
//# sourceMappingURL=test.js.map