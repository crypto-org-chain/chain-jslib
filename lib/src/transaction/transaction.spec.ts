import 'mocha';
import { expect } from 'chai';
import Big from 'big.js';
import { fuzzyDescribe } from '../test/mocha-fuzzy/suite';

import { Transaction } from './transaction';

import { HDWallet } from '../hdwallet/hdwallet';
import { Secp256k1KeyPair } from '../keypair/secp256k1';
import { Msg } from '../cosmos/v1beta1/types/msg';
import { Bytes } from '../utils/bytes/bytes';

const anyTransaction = (): Transaction =>
    new Transaction({
        chainId: 'chain-maind',
    });

describe('Transaction', function () {
    describe('constructor', function () {
        fuzzyDescribe('should throw Error when options is invalid', function (fuzzy) {
            const anyValidOptions = { chainId: 'chain-maind' };
            const testRunner = fuzzy(fuzzy.ObjArg(anyValidOptions));
            testRunner(function (options) {
                if (options.valid) {
                    return;
                }
                expect(() => new Transaction(options.value)).to.throw('Expected `options` to be of type `object`');
            });
        });

        it('should return a Transaction with the provided chainId', function () {
            const anyChainId = 'chain-maind';
            const tx = new Transaction({
                chainId: anyChainId,
            });

            expect(tx.getChainId()).to.eq(anyChainId);
        });
    });

    describe('appendTxBodyMessage', function () {
        fuzzyDescribe('should throw Error when message is invalid', function (fuzzy) {
            const anyValidMessage: Msg = {
                typeUrl: '/cosmos.bank.v1beta1.MsgSend',
                value: {
                    key: 'value',
                },
            };
            const testRunner = fuzzy(fuzzy.ObjArg(anyValidMessage));

            testRunner(function (msg) {
                if (msg.valid) {
                    return;
                }
                const tx = anyTransaction();
                expect(() => tx.appendTxBodyMessage(msg.value)).to.throw('Expected `message` to be of type `object`');
            });
        });

        it('should throw Error when the transaction is signing', function () {
            const anyKeyPair = Secp256k1KeyPair.generateRandom();
            const anyMessage: Msg = {
                typeUrl: '/cosmos.bank.v1beta1.MsgSend',
                value: {
                    fromAddress: 'tcro165tzcrh2yl83g8qeqxueg2g5gzgu57y3fe3kc3',
                    toAddress: 'tcro184lta2lsyu47vwyp2e8zmtca3k5yq85p6c4vp3',
                    amount: [
                        {
                            denom: 'basetcro',
                            amount: '1000',
                        },
                    ],
                },
            };
            const anySigner = {
                publicKey: anyKeyPair.getPubKey(),
                accountNumber: new Big(0),
                accountSequence: new Big(2),
            };

            const tx = anyTransaction();
            tx.appendTxBodyMessage(anyMessage).addSigner(anySigner).sign(0, anyKeyPair);

            const anotherMessage: Msg = {
                typeUrl: '/cosmos.bank.v1beta1.MsgSend',
                value: {
                    fromAddress: 'tcro165tzcrh2yl83g8qeqxueg2g5gzgu57y3fe3kc3',
                    toAddress: 'tcro184lta2lsyu47vwyp2e8zmtca3k5yq85p6c4vp3',
                    amount: [
                        {
                            denom: 'basetcro',
                            amount: '5000',
                        },
                    ],
                },
            };
            expect(() => tx.appendTxBodyMessage(anotherMessage)).to.throw('Transaction already signing');
        });

        it('should append message to txBody', function () {
            const anyMessage: Msg = {
                typeUrl: '/cosmos.bank.v1beta1.MsgSend',
                value: {
                    fromAddress: 'tcro165tzcrh2yl83g8qeqxueg2g5gzgu57y3fe3kc3',
                    toAddress: 'tcro184lta2lsyu47vwyp2e8zmtca3k5yq85p6c4vp3',
                    amount: [
                        {
                            denom: 'basetcro',
                            amount: '1000',
                        },
                    ],
                },
            };

            const tx = anyTransaction();
            tx.appendTxBodyMessage(anyMessage);

            let actualMessages = tx.getTxBody().value.messages;
            expect(actualMessages.length).to.eq(1);
            expect(actualMessages[0]).to.deep.eq(anyMessage);

            const anotherMessage: Msg = {
                typeUrl: '/cosmos.bank.v1beta1.MsgSend',
                value: {
                    fromAddress: 'tcro165tzcrh2yl83g8qeqxueg2g5gzgu57y3fe3kc3',
                    toAddress: 'tcro184lta2lsyu47vwyp2e8zmtca3k5yq85p6c4vp3',
                    amount: [
                        {
                            denom: 'basetcro',
                            amount: '5000',
                        },
                    ],
                },
            };
            tx.appendTxBodyMessage(anotherMessage);

            actualMessages = tx.getTxBody().value.messages;
            expect(actualMessages.length).to.eq(2);
            expect(actualMessages).to.deep.eq([anyMessage, anotherMessage]);
        });
    });

    describe('addSigner', function () {
        fuzzyDescribe('should throw Error when signer is invalid', function (fuzzy) {
            const anyPublicKey = Bytes.fromHexString(
                '023b99ed790823c9af1519dfd36354ebc3a232bf6473b0f18b81f5fdcb2e386e7e',
            );
            const anyAccountNumber = new Big(1);
            const anyAccountSequence = new Big(2);
            const testRunner = fuzzy(
                fuzzy.ObjArg({
                    publicKey: anyPublicKey,
                    accountNumber: anyAccountNumber,
                    accountSequence: anyAccountSequence,
                }),
            );

            testRunner(function (signer) {
                if (signer.valid) {
                    return;
                }
                const tx = anyTransaction();
                expect(() => tx.addSigner(signer.value)).to.throw('Expected `signer` to be of type `object`');
            });
        });

        it('should throw Error when the transaction is signing', function () {
            const anyKeyPair = Secp256k1KeyPair.generateRandom();
            const anyMessage: Msg = {
                typeUrl: '/cosmos.bank.v1beta1.MsgSend',
                value: {
                    fromAddress: 'tcro165tzcrh2yl83g8qeqxueg2g5gzgu57y3fe3kc3',
                    toAddress: 'tcro184lta2lsyu47vwyp2e8zmtca3k5yq85p6c4vp3',
                    amount: [
                        {
                            denom: 'basetcro',
                            amount: '1000',
                        },
                    ],
                },
            };
            const anySigner = {
                publicKey: anyKeyPair.getPubKey(),
                accountNumber: new Big(0),
                accountSequence: new Big(2),
            };

            const tx = anyTransaction();
            tx.appendTxBodyMessage(anyMessage).addSigner(anySigner).sign(0, anyKeyPair);

            const anotherKeyPair = Secp256k1KeyPair.generateRandom();
            const anotherSigner = {
                publicKey: anotherKeyPair.getPubKey(),
                accountNumber: new Big(100),
                accountSequence: new Big(200),
            };
            expect(() => tx.addSigner(anotherSigner)).to.throw('Transaction already signing');
        });

        it('should append signer to AuthInfo', function () {
            const anyPublicKey = Bytes.fromHexString(
                '023b99ed790823c9af1519dfd36354ebc3a232bf6473b0f18b81f5fdcb2e386e7e',
            );
            const anyAccountNumber = new Big(1);
            const anyAccountSequence = new Big(2);
            const anySigner = {
                publicKey: anyPublicKey,
                accountNumber: anyAccountNumber,
                accountSequence: anyAccountSequence,
            };

            const tx = anyTransaction();
            tx.addSigner(anySigner);

            let actualSignerInfos = tx.getAuthInfo().signerInfos;
            expect(actualSignerInfos.length).to.eq(1);
            expect(actualSignerInfos[0].publicKey).to.deep.eq(anyPublicKey);
            expect(actualSignerInfos[0].sequence).to.deep.eq(anyAccountSequence);

            const anotherPublicKey = Bytes.fromHexString(
                '034014a1c3db809dea1da05bfbb969ff1cabd4f7e1ca2884a29246e03408cbdf59',
            );
            const anotherAccountNumber = new Big(100);
            const anotherAccountSequence = new Big(200);
            const anotherSigner = {
                publicKey: anotherPublicKey,
                accountNumber: anotherAccountNumber,
                accountSequence: anotherAccountSequence,
            };
            tx.addSigner(anotherSigner);

            actualSignerInfos = tx.getAuthInfo().signerInfos;
            expect(actualSignerInfos.length).to.eq(2);
            expect(actualSignerInfos[1].publicKey).to.deep.eq(anotherPublicKey);
            expect(actualSignerInfos[1].sequence).to.deep.eq(anotherAccountSequence);
        });

        it('should append signer to signerAccountNumbers', function () {
            const anyPublicKey = Bytes.fromHexString(
                '023b99ed790823c9af1519dfd36354ebc3a232bf6473b0f18b81f5fdcb2e386e7e',
            );
            const anyAccountNumber = new Big(1);
            const anyAccountSequence = new Big(2);
            const anySigner = {
                publicKey: anyPublicKey,
                accountNumber: anyAccountNumber,
                accountSequence: anyAccountSequence,
            };

            const tx = anyTransaction();
            tx.addSigner(anySigner);

            let actualSignerAccountNumbers = tx.getSignerAccountNumbers();
            expect(actualSignerAccountNumbers.length).to.eq(1);
            expect(actualSignerAccountNumbers[0]).to.deep.eq([anyPublicKey, anyAccountNumber]);

            const anotherPublicKey = Bytes.fromHexString(
                '034014a1c3db809dea1da05bfbb969ff1cabd4f7e1ca2884a29246e03408cbdf59',
            );
            const anotherAccountNumber = new Big(100);
            const anotherAccountSequence = new Big(200);
            const anotherSigner = {
                publicKey: anotherPublicKey,
                accountNumber: anotherAccountNumber,
                accountSequence: anotherAccountSequence,
            };
            tx.addSigner(anotherSigner);
            actualSignerAccountNumbers = tx.getSignerAccountNumbers();
            expect(actualSignerAccountNumbers.length).to.eq(2);
            expect(actualSignerAccountNumbers[1]).to.deep.eq([anotherPublicKey, anotherAccountNumber]);
        });
    });

    describe('sign', function () {
        fuzzyDescribe('should throw Error when arguments are invalid', function (fuzzy) {
            const anyValidPrivKey = Bytes.fromUint8Array(new Uint8Array(32).fill(1));
            const testRunner = fuzzy(fuzzy.NumberArg(0), fuzzy.ObjArg(anyValidPrivKey));

            testRunner(function (index, privKey) {
                const anyMessage: Msg = {
                    typeUrl: '/cosmos.bank.v1beta1.MsgSend',
                    value: {
                        fromAddress: 'tcro165tzcrh2yl83g8qeqxueg2g5gzgu57y3fe3kc3',
                        toAddress: 'tcro184lta2lsyu47vwyp2e8zmtca3k5yq85p6c4vp3',
                        amount: [
                            {
                                denom: 'basetcro',
                                amount: '1000',
                            },
                        ],
                    },
                };
                const anyPublicKey = Bytes.fromHexString(
                    '023b99ed790823c9af1519dfd36354ebc3a232bf6473b0f18b81f5fdcb2e386e7e',
                );
                const anyAccountNumber = new Big(1);
                const anyAccountSequence = new Big(2);
                const anySigner = {
                    publicKey: anyPublicKey,
                    accountNumber: anyAccountNumber,
                    accountSequence: anyAccountSequence,
                };

                const tx = anyTransaction();
                tx.appendTxBodyMessage(anyMessage).addSigner(anySigner);

                if (!index.valid) {
                    expect(() => tx.sign(index.value, privKey.value)).to.throw(
                        'Expected `index` to be of type `number`',
                    );
                } else if (!privKey.valid) {
                    expect(() => tx.sign(index.value, privKey.value)).to.throw(
                        'Expected `keyPair` to be of type `object`',
                    );
                }
            });
        });

        it('should throw Error when trying to sign an out of bound index', function () {
            const anyKeyPair = Secp256k1KeyPair.generateRandom();
            const anyMessage: Msg = {
                typeUrl: '/cosmos.bank.v1beta1.MsgSend',
                value: {
                    fromAddress: 'tcro165tzcrh2yl83g8qeqxueg2g5gzgu57y3fe3kc3',
                    toAddress: 'tcro184lta2lsyu47vwyp2e8zmtca3k5yq85p6c4vp3',
                    amount: [
                        {
                            denom: 'basetcro',
                            amount: '1000',
                        },
                    ],
                },
            };
            const anyAccountNumber = new Big(0);
            const anyAccountSequence = new Big(2);
            const anySigner = {
                publicKey: anyKeyPair.getPubKey(),
                accountNumber: anyAccountNumber,
                accountSequence: anyAccountSequence,
            };

            const tx = anyTransaction();
            tx.appendTxBodyMessage(anyMessage).addSigner(anySigner);

            expect(() => tx.sign(1, anyKeyPair)).to.throw('Expected `index` to be within signer size');
        });

        it("should throw Error when the key pair couldn't sign for the public key", function () {
            const anyKeyPair = Secp256k1KeyPair.generateRandom();
            const anyMismatchPublicKey = Bytes.fromHexString(
                '023b99ed790823c9af1519dfd36354ebc3a232bf6473b0f18b81f5fdcb2e386e7e',
            );
            const anyMessage: Msg = {
                typeUrl: '/cosmos.bank.v1beta1.MsgSend',
                value: {
                    fromAddress: 'tcro165tzcrh2yl83g8qeqxueg2g5gzgu57y3fe3kc3',
                    toAddress: 'tcro184lta2lsyu47vwyp2e8zmtca3k5yq85p6c4vp3',
                    amount: [
                        {
                            denom: 'basetcro',
                            amount: '1000',
                        },
                    ],
                },
            };
            const anyAccountNumber = new Big(0);
            const anyAccountSequence = new Big(2);
            const anySigner = {
                publicKey: anyMismatchPublicKey,
                accountNumber: anyAccountNumber,
                accountSequence: anyAccountSequence,
            };

            const tx = anyTransaction();
            tx.appendTxBodyMessage(anyMessage).addSigner(anySigner);

            expect(() => tx.sign(0, anyKeyPair)).to.throw(
                'Expected `keyPair` to be able to sign the public key at index',
            );
        });

        it('should add the signature to the specified index', function () {
            const anyKeyPair = Secp256k1KeyPair.generateRandom();
            const anotherKeyPair = Secp256k1KeyPair.generateRandom();
            const anyMessage: Msg = {
                typeUrl: '/cosmos.bank.v1beta1.MsgSend',
                value: {
                    fromAddress: 'tcro165tzcrh2yl83g8qeqxueg2g5gzgu57y3fe3kc3',
                    toAddress: 'tcro184lta2lsyu47vwyp2e8zmtca3k5yq85p6c4vp3',
                    amount: [
                        {
                            denom: 'basetcro',
                            amount: '1000',
                        },
                    ],
                },
            };
            const anotherMessage: Msg = {
                typeUrl: '/cosmos.bank.v1beta1.MsgSend',
                value: {
                    fromAddress: 'tcro165tzcrh2yl83g8qeqxueg2g5gzgu57y3fe3kc3',
                    toAddress: 'tcro184lta2lsyu47vwyp2e8zmtca3k5yq85p6c4vp3',
                    amount: [
                        {
                            denom: 'basetcro',
                            amount: '5000',
                        },
                    ],
                },
            };
            const anySigner = {
                publicKey: anyKeyPair.getPubKey(),
                accountNumber: new Big(0),
                accountSequence: new Big(2),
            };
            const anotherSigner = {
                publicKey: anotherKeyPair.getPubKey(),
                accountNumber: new Big(100),
                accountSequence: new Big(200),
            };

            const tx = anyTransaction();
            tx.appendTxBodyMessage(anyMessage)
                .appendTxBodyMessage(anotherMessage)
                .addSigner(anySigner)
                .addSigner(anotherSigner);

            expect(tx.isIndexSigned(1)).to.eq(false);

            tx.sign(1, anotherKeyPair);

            expect(tx.isIndexSigned(1)).to.eq(true);
        });
    });

    describe('isIndexSigned', function () {
        fuzzyDescribe('should throw Error when index is invalid', function (fuzzy) {
            const testRunner = fuzzy(fuzzy.NumberArg(0));

            testRunner(function (index) {
                if (index.valid) {
                    return;
                }

                const anyKeyPair = Secp256k1KeyPair.generateRandom();
                const anyMessage: Msg = {
                    typeUrl: '/cosmos.bank.v1beta1.MsgSend',
                    value: {
                        fromAddress: 'tcro165tzcrh2yl83g8qeqxueg2g5gzgu57y3fe3kc3',
                        toAddress: 'tcro184lta2lsyu47vwyp2e8zmtca3k5yq85p6c4vp3',
                        amount: [
                            {
                                denom: 'basetcro',
                                amount: '1000',
                            },
                        ],
                    },
                };
                const anySigner = {
                    publicKey: anyKeyPair.getPubKey(),
                    accountNumber: new Big(0),
                    accountSequence: new Big(2),
                };

                const tx = anyTransaction();
                tx.appendTxBodyMessage(anyMessage).addSigner(anySigner).sign(0, anyKeyPair);

                expect(() => tx.isIndexSigned(index.value)).to.throw('Expected `index` to be of type `number`');
            });
        });

        it('should return false when the transaction has not signed yet', function () {
            const anyKeyPair = Secp256k1KeyPair.generateRandom();
            const anyMessage: Msg = {
                typeUrl: '/cosmos.bank.v1beta1.MsgSend',
                value: {
                    fromAddress: 'tcro165tzcrh2yl83g8qeqxueg2g5gzgu57y3fe3kc3',
                    toAddress: 'tcro184lta2lsyu47vwyp2e8zmtca3k5yq85p6c4vp3',
                    amount: [
                        {
                            denom: 'basetcro',
                            amount: '1000',
                        },
                    ],
                },
            };
            const anySigner = {
                publicKey: anyKeyPair.getPubKey(),
                accountNumber: new Big(0),
                accountSequence: new Big(2),
            };

            const tx = anyTransaction();
            tx.appendTxBodyMessage(anyMessage).addSigner(anySigner);

            expect(tx.isIndexSigned(0)).to.eq(false);
        });

        it('should return true when the index is signed', function () {
            const anyKeyPair = Secp256k1KeyPair.generateRandom();
            const anyMessage: Msg = {
                typeUrl: '/cosmos.bank.v1beta1.MsgSend',
                value: {
                    fromAddress: 'tcro165tzcrh2yl83g8qeqxueg2g5gzgu57y3fe3kc3',
                    toAddress: 'tcro184lta2lsyu47vwyp2e8zmtca3k5yq85p6c4vp3',
                    amount: [
                        {
                            denom: 'basetcro',
                            amount: '1000',
                        },
                    ],
                },
            };
            const anySigner = {
                publicKey: anyKeyPair.getPubKey(),
                accountNumber: new Big(0),
                accountSequence: new Big(2),
            };

            const tx = anyTransaction();
            tx.appendTxBodyMessage(anyMessage).addSigner(anySigner).sign(0, anyKeyPair);

            expect(tx.isIndexSigned(0)).to.eq(true);
        });
    });

    describe('encode', function () {
        it('should throw an Error when the transaction is not completely signed', function () {
            const anyKeyPair = Secp256k1KeyPair.generateRandom();
            const anotherKeyPair = Secp256k1KeyPair.generateRandom();
            const anyMessage: Msg = {
                typeUrl: '/cosmos.bank.v1beta1.MsgSend',
                value: {
                    fromAddress: 'tcro165tzcrh2yl83g8qeqxueg2g5gzgu57y3fe3kc3',
                    toAddress: 'tcro184lta2lsyu47vwyp2e8zmtca3k5yq85p6c4vp3',
                    amount: [
                        {
                            denom: 'basetcro',
                            amount: '1000',
                        },
                    ],
                },
            };
            const anotherMessage: Msg = {
                typeUrl: '/cosmos.bank.v1beta1.MsgSend',
                value: {
                    fromAddress: 'tcro165tzcrh2yl83g8qeqxueg2g5gzgu57y3fe3kc3',
                    toAddress: 'tcro184lta2lsyu47vwyp2e8zmtca3k5yq85p6c4vp3',
                    amount: [
                        {
                            denom: 'basetcro',
                            amount: '5000',
                        },
                    ],
                },
            };
            const anySigner = {
                publicKey: anyKeyPair.getPubKey(),
                accountNumber: new Big(0),
                accountSequence: new Big(2),
            };
            const anotherSigner = {
                publicKey: anotherKeyPair.getPubKey(),
                accountNumber: new Big(100),
                accountSequence: new Big(200),
            };

            const tx = anyTransaction();
            tx.appendTxBodyMessage(anyMessage)
                .appendTxBodyMessage(anotherMessage)
                .addSigner(anySigner)
                .addSigner(anotherSigner)
                .sign(1, anotherKeyPair);

            expect(() => tx.encode()).to.throw('Transaction is not completely signed');
        });

        it('should return the encoded transaction in Bytes', function () {
            const anyKeyPair = Secp256k1KeyPair.generateRandom();
            const anyMessage: Msg = {
                typeUrl: '/cosmos.bank.v1beta1.MsgSend',
                value: {
                    fromAddress: 'tcro165tzcrh2yl83g8qeqxueg2g5gzgu57y3fe3kc3',
                    toAddress: 'tcro184lta2lsyu47vwyp2e8zmtca3k5yq85p6c4vp3',
                    amount: [
                        {
                            denom: 'basetcro',
                            amount: '1000',
                        },
                    ],
                },
            };
            const anySigner = {
                publicKey: anyKeyPair.getPubKey(),
                accountNumber: new Big(0),
                accountSequence: new Big(2),
            };

            const tx = anyTransaction();
            tx.appendTxBodyMessage(anyMessage).addSigner(anySigner).sign(0, anyKeyPair);

            const actual = tx.encode();
            expect(actual).to.be.an.instanceOf(Bytes);
            expect(actual.length).to.be.greaterThan(0);
        });
    });

    describe('getTxHash', function () {
        it('should throw an Error when the transaction is not completely signed', function () {
            const anyKeyPair = Secp256k1KeyPair.generateRandom();
            const anotherKeyPair = Secp256k1KeyPair.generateRandom();
            const anyMessage: Msg = {
                typeUrl: '/cosmos.bank.v1beta1.MsgSend',
                value: {
                    fromAddress: 'tcro165tzcrh2yl83g8qeqxueg2g5gzgu57y3fe3kc3',
                    toAddress: 'tcro184lta2lsyu47vwyp2e8zmtca3k5yq85p6c4vp3',
                    amount: [
                        {
                            denom: 'basetcro',
                            amount: '1000',
                        },
                    ],
                },
            };
            const anotherMessage: Msg = {
                typeUrl: '/cosmos.bank.v1beta1.MsgSend',
                value: {
                    fromAddress: 'tcro165tzcrh2yl83g8qeqxueg2g5gzgu57y3fe3kc3',
                    toAddress: 'tcro184lta2lsyu47vwyp2e8zmtca3k5yq85p6c4vp3',
                    amount: [
                        {
                            denom: 'basetcro',
                            amount: '5000',
                        },
                    ],
                },
            };
            const anySigner = {
                publicKey: anyKeyPair.getPubKey(),
                accountNumber: new Big(0),
                accountSequence: new Big(2),
            };
            const anotherSigner = {
                publicKey: anotherKeyPair.getPubKey(),
                accountNumber: new Big(100),
                accountSequence: new Big(200),
            };

            const tx = anyTransaction();
            tx.appendTxBodyMessage(anyMessage)
                .appendTxBodyMessage(anotherMessage)
                .addSigner(anySigner)
                .addSigner(anotherSigner)
                .sign(1, anotherKeyPair);

            expect(() => tx.getTxHash()).to.throw('Transaction is not completely signed');
        });

        it('should return the encoded transaction in Bytes', function () {
            const anyKeyPair = Secp256k1KeyPair.generateRandom();
            const anyMessage: Msg = {
                typeUrl: '/cosmos.bank.v1beta1.MsgSend',
                value: {
                    fromAddress: 'tcro165tzcrh2yl83g8qeqxueg2g5gzgu57y3fe3kc3',
                    toAddress: 'tcro184lta2lsyu47vwyp2e8zmtca3k5yq85p6c4vp3',
                    amount: [
                        {
                            denom: 'basetcro',
                            amount: '1000',
                        },
                    ],
                },
            };
            const anySigner = {
                publicKey: anyKeyPair.getPubKey(),
                accountNumber: new Big(0),
                accountSequence: new Big(2),
            };

            const tx = anyTransaction();
            tx.appendTxBodyMessage(anyMessage).addSigner(anySigner).sign(0, anyKeyPair);

            const actual = tx.getTxHash();
            expect(actual).to.be.a('string');
            expect(actual.length).to.be.eq(64);
            expect(actual).to.match(/^[A-F0-9]{64}$/);
        });
    });

    // TODO: to be removed
    it('transaction integration test', function () {
        const tx = new Transaction({ chainId: 'testnet-croeseid-1' });

        const wallet = HDWallet.fromMnemonic(HDWallet.generateMnemonic());
        const wallet2 = HDWallet.fromMnemonic(HDWallet.generateMnemonic());
        const privKey = wallet.derivePrivKey("m/44'/1'/0'/0/0");
        const privKey2 = wallet2.derivePrivKey("m/44'/1'/0'/0/0");
        const keyPair = Secp256k1KeyPair.fromPrivKey(privKey);
        const keyPair2 = Secp256k1KeyPair.fromPrivKey(privKey2);
        const result = tx
            .appendTxBodyMessage({
                typeUrl: '/cosmos.bank.v1beta1.MsgSend',
                value: {
                    fromAddress: 'tcro165tzcrh2yl83g8qeqxueg2g5gzgu57y3fe3kc3',
                    toAddress: 'tcro184lta2lsyu47vwyp2e8zmtca3k5yq85p6c4vp3',
                    amount: [
                        {
                            denom: 'basetcro',
                            amount: '1000',
                        },
                    ],
                },
            })
            .appendTxBodyMessage({
                typeUrl: '/cosmos.bank.v1beta1.MsgSend',
                value: {
                    fromAddress: 'tcro184lta2lsyu47vwyp2e8zmtca3k5yq85p6c4vp3',
                    toAddress: 'tcro165tzcrh2yl83g8qeqxueg2g5gzgu57y3fe3kc3',
                    amount: [
                        {
                            denom: 'basetcro',
                            amount: '2000',
                        },
                    ],
                },
            })
            .addSigner({
                publicKey: keyPair.getPubKey(),
                accountNumber: new Big(20),
                accountSequence: new Big(1000),
            })
            .addSigner({
                publicKey: keyPair2.getPubKey(),
                accountNumber: new Big(21),
                accountSequence: new Big(2000),
            })
            .sign(0, keyPair)
            .sign(1, keyPair2)
            .encode();
        console.log(`0x${result.toHexString()}`);
        console.log('TxHash', tx.getTxHash());
    });
});
