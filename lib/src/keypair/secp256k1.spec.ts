import 'mocha';
import { expect } from 'chai';
import secp256k1 from 'secp256k1';
import { ANY_VALID_PRIV_KEY, ANY_INVALID_PRIV_KEY, ANY_VALID_KEY_PAIR } from '../test/assets/crypto';
import { fuzzyDescribe } from '../test/mocha-fuzzy/suite';
import { Bytes } from '../utils/bytes/bytes';

import { Secp256k1KeyPair } from './secp256k1';

describe('Secp256k1KeyPair', function () {
    describe('constructor', function () {
        fuzzyDescribe('should throw Error when private key is not Bytes', function (fuzzy) {
            const testRunner = fuzzy<Bytes>(fuzzy.ObjArg(ANY_VALID_PRIV_KEY));
            testRunner(function (privKey) {
                if (!privKey.valid) {
                    let expectedErrMsg: string;
                    if (privKey.type === fuzzy.Object) {
                        expectedErrMsg = 'Expected object `privKey` to be an instance of `Bytes`';
                    } else {
                        expectedErrMsg = 'Expected `privKey` to be of type `object`';
                    }
                    expect(() => Secp256k1KeyPair.fromPrivKey(privKey.value)).to.throw(expectedErrMsg);
                }
            });
        });

        it('should throw Error when private key is invalid', function () {
            expect(() => new Secp256k1KeyPair(ANY_INVALID_PRIV_KEY)).to.throw('Error: Private Key is invalid');
        });

        it('should return KeyPair', function () {
            const keyPair = new Secp256k1KeyPair(ANY_VALID_PRIV_KEY);

            expect(keyPair.toPrivKey()).to.deep.eq(ANY_VALID_PRIV_KEY);
        });
    });

    describe('fromPrivateKey', function () {
        fuzzyDescribe('should throw Error when private key source is not Bytes', function (fuzzy) {
            const testRunner = fuzzy<Bytes>(fuzzy.ObjArg(ANY_VALID_PRIV_KEY));
            testRunner(function (privKey) {
                if (!privKey.valid) {
                    let expectedErrMsg: string;
                    if (privKey.type === fuzzy.Object) {
                        expectedErrMsg = 'Expected object `privKey` to be an instance of `Bytes`';
                    } else if (privKey.type === fuzzy.Func) {
                        expectedErrMsg = 'Expected `privKey` to be of type `object`';
                    } else {
                        expectedErrMsg = 'Expected `privKey` to be of type `object`';
                    }
                    expect(() => Secp256k1KeyPair.fromPrivKey(privKey.value)).to.throw(expectedErrMsg);
                }
            });
        });

        it('should throw Error when private key source is Uint8Array', function () {
            const anyUint8ArrayPrivKey = new Uint8Array(32).fill(1);
            expect(() => Secp256k1KeyPair.fromPrivKey(anyUint8ArrayPrivKey as any)).to.throw(
                'Expected object `privKey` to be an instance of `Bytes`',
            );
        });

        it('should throw Error when private key source is Buffer', function () {
            const anyBuffer = Buffer.alloc(32).fill(1);
            expect(() => Secp256k1KeyPair.fromPrivKey(anyBuffer as any)).to.throw(
                'Expected object `privKey` to be an instance of `Bytes`',
            );
        });

        it('should throw Error when the private key is not 32 bytes long', function () {
            const shorterPrivKey = new Bytes(Uint8Array.from([1, 1, 1]));
            expect(() => Secp256k1KeyPair.fromPrivKey(shorterPrivKey)).to.throw(
                'Expected object `privKey` to be an instance of `Bytes` of byte length in 32',
            );

            const longerPrivKey = new Bytes(new Uint8Array(64).fill(1));
            expect(() => Secp256k1KeyPair.fromPrivKey(longerPrivKey)).to.throw(
                'Expected object `privKey` to be an instance of `Bytes` of byte length in 32',
            );
        });

        it('should throw Error when the private key is invalid', function () {
            expect(() => Secp256k1KeyPair.fromPrivKey(ANY_INVALID_PRIV_KEY)).to.throw('Error: Private Key is invalid');
        });

        it('should return KeyPair', function () {
            const keyPair = Secp256k1KeyPair.fromPrivKey(ANY_VALID_PRIV_KEY);

            expect(keyPair.toPrivKey()).to.deep.eq(ANY_VALID_PRIV_KEY);
        });
    });

    describe('generateRandom', function () {
        it('should return a randomly generated KeyPair', function () {
            const keyPair = Secp256k1KeyPair.generateRandom();
            expect(secp256k1.privateKeyVerify(keyPair.toPrivKey().toUint8Array())).to.be.true;
        });

        it('should generate new random KeyPair on each call', function () {
            const privKeysGenerated: string[] = [];

            for (let i = 0; i < 1000; i += 1) {
                const keyPair = Secp256k1KeyPair.generateRandom();
                expect(secp256k1.privateKeyVerify(keyPair.toPrivKey().toUint8Array())).to.be.true;

                const privKey = keyPair.toPrivKey().toHexString();
                expect(privKeysGenerated.includes(privKey)).to.be.false;

                privKeysGenerated.push(privKey);
            }
        });
    });

    describe('toPubKey', function () {
        fuzzyDescribe('should throw Error when options flag is invalid', function (fuzzy) {
            const testRunner = fuzzy(fuzzy.optional(fuzzy.Obj)({ compressed: true }));
            testRunner(function (options) {
                if (!options.valid) {
                    const keyPair = Secp256k1KeyPair.fromPrivKey(ANY_VALID_PRIV_KEY);
                    expect(() => keyPair.toPubKey(options.value)).to.throw('Expected argument to be of type `object`');
                }
            });
        });

        fuzzyDescribe('should throw Error when compressed flag is invalid', function (fuzzy) {
            const testRunner = fuzzy(fuzzy.optional(fuzzy.Bool)(true));
            testRunner(function (compressed) {
                if (!compressed.valid) {
                    const keyPair = Secp256k1KeyPair.fromPrivKey(ANY_VALID_PRIV_KEY);
                    expect(() =>
                        keyPair.toPubKey({
                            compressed: compressed.value,
                        }),
                    ).to.throw('Expected property `compressed` to be of type `boolean`');
                }
            });
        });

        it('should return compressed public key when specified', function () {
            const keyPair = Secp256k1KeyPair.fromPrivKey(ANY_VALID_KEY_PAIR.privKey);

            expect(
                keyPair.toPubKey({
                    compressed: true,
                }),
            ).to.deep.eq(ANY_VALID_KEY_PAIR.compressedPubKey);
        });

        it('should return uncompressed public key when specified', function () {
            const keyPair = Secp256k1KeyPair.fromPrivKey(ANY_VALID_KEY_PAIR.privKey);

            expect(
                keyPair.toPubKey({
                    compressed: false,
                }),
            ).to.deep.eq(ANY_VALID_KEY_PAIR.pubKey);
        });

        it('should return compressed public key when not specified', function () {
            const keyPair = Secp256k1KeyPair.fromPrivKey(ANY_VALID_KEY_PAIR.privKey);

            expect(keyPair.toPubKey()).to.deep.eq(ANY_VALID_KEY_PAIR.compressedPubKey);
        });
    });

    describe('sign', function () {
        fuzzyDescribe('should throw Error when message is not Uint8Array', function (fuzzy) {
            const anyMessage = new Uint8Array(32).fill(1);
            const testRunner = fuzzy(fuzzy.ObjArg(anyMessage));

            testRunner(function (message) {
                if (!message.valid) {
                    const keyPair = Secp256k1KeyPair.fromPrivKey(ANY_VALID_PRIV_KEY);
                    expect(() => keyPair.sign(message.value)).to.throw('Expected argument to be of type `Uint8Array`');
                }
            });
        });

        it('should return the signature of signing the same message', function () {
            const keyPair = Secp256k1KeyPair.fromPrivKey(ANY_VALID_PRIV_KEY);

            const anyMessage = new Uint8Array(32).fill(1);
            const actualSignature = keyPair.sign(anyMessage);

            expect(secp256k1.ecdsaVerify(actualSignature.toUint8Array(), anyMessage, keyPair.toPubKey().toUint8Array()))
                .to.be.true;
        });
    });
});
