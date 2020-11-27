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

            expect(keyPair.getPrivKey()).to.deep.eq(ANY_VALID_PRIV_KEY);
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
            const shorterPrivKey = Bytes.fromUint8Array(Uint8Array.from([1, 1, 1]));
            expect(() => Secp256k1KeyPair.fromPrivKey(shorterPrivKey)).to.throw(
                'Expected object `privKey` to be an instance of `Bytes` of byte length in 32',
            );

            const longerPrivKey = Bytes.fromUint8Array(new Uint8Array(64).fill(1));
            expect(() => Secp256k1KeyPair.fromPrivKey(longerPrivKey)).to.throw(
                'Expected object `privKey` to be an instance of `Bytes` of byte length in 32',
            );
        });

        it('should throw Error when the private key is invalid', function () {
            expect(() => Secp256k1KeyPair.fromPrivKey(ANY_INVALID_PRIV_KEY)).to.throw('Error: Private Key is invalid');
        });

        it('should return KeyPair', function () {
            const keyPair = Secp256k1KeyPair.fromPrivKey(ANY_VALID_PRIV_KEY);

            expect(keyPair.getPrivKey()).to.deep.eq(ANY_VALID_PRIV_KEY);
        });
    });

    describe('generateRandom', function () {
        it('should return a randomly generated KeyPair', function () {
            const keyPair = Secp256k1KeyPair.generateRandom();
            expect(secp256k1.privateKeyVerify(keyPair.getPrivKey().toUint8Array())).to.be.true;
        });

        it('should generate new random KeyPair on each call', function () {
            const privKeysGenerated: string[] = [];

            for (let i = 0; i < 1000; i += 1) {
                const keyPair = Secp256k1KeyPair.generateRandom();
                expect(secp256k1.privateKeyVerify(keyPair.getPrivKey().toUint8Array())).to.be.true;

                const privKey = keyPair.getPrivKey().toHexString();
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
                    expect(() => keyPair.getPubKey(options.value)).to.throw('Expected argument to be of type `object`');
                }
            });
        });

        fuzzyDescribe('should throw Error when compressed flag is invalid', function (fuzzy) {
            const testRunner = fuzzy(fuzzy.optional(fuzzy.Bool)(true));
            testRunner(function (compressed) {
                if (!compressed.valid) {
                    const keyPair = Secp256k1KeyPair.fromPrivKey(ANY_VALID_PRIV_KEY);
                    expect(() =>
                        keyPair.getPubKey({
                            compressed: compressed.value,
                        }),
                    ).to.throw('Expected property `compressed` to be of type `boolean`');
                }
            });
        });

        it('should return compressed public key when specified', function () {
            const keyPair = Secp256k1KeyPair.fromPrivKey(ANY_VALID_KEY_PAIR.privKey);

            expect(
                keyPair.getPubKey({
                    compressed: true,
                }),
            ).to.deep.eq(ANY_VALID_KEY_PAIR.compressedPubKey);
        });

        it('should return uncompressed public key when specified', function () {
            const keyPair = Secp256k1KeyPair.fromPrivKey(ANY_VALID_KEY_PAIR.privKey);

            expect(
                keyPair.getPubKey({
                    compressed: false,
                }),
            ).to.deep.eq(ANY_VALID_KEY_PAIR.pubKey);
        });

        it('should return compressed public key when not specified', function () {
            const keyPair = Secp256k1KeyPair.fromPrivKey(ANY_VALID_KEY_PAIR.privKey);

            expect(keyPair.getPubKey()).to.deep.eq(ANY_VALID_KEY_PAIR.compressedPubKey);
        });
    });

    describe('sign', function () {
        fuzzyDescribe('should throw Error when message is not Uint8Array', function (fuzzy) {
            const anyMessage = Bytes.fromUint8Array(new Uint8Array(32).fill(1));
            const testRunner = fuzzy(fuzzy.ObjArg(anyMessage));

            testRunner(function (message) {
                if (!message.valid) {
                    const keyPair = Secp256k1KeyPair.fromPrivKey(ANY_VALID_PRIV_KEY);
                    expect(() => keyPair.sign(message.value)).to.throw('Expected argument to be of type `object`');
                }
            });
        });

        it('should return the signature of signing the same message', function () {
            const keyPair = Secp256k1KeyPair.fromPrivKey(ANY_VALID_PRIV_KEY);

            const anyMessage = Bytes.fromUint8Array(new Uint8Array(32).fill(1));
            const actualSignature = keyPair.sign(anyMessage);

            expect(
                secp256k1.ecdsaVerify(
                    actualSignature.toUint8Array(),
                    anyMessage.toUint8Array(),
                    keyPair.getPubKey().toUint8Array(),
                ),
            ).to.be.true;
        });

        it('should not crash on 0x prefixed keys import and prefixed should be similar to unprefixed', function () {
            const prefixedHexKeys = [
                '0xf1de6bdadc6db4631c1586cb382ee9ff7d0bf01409ddf3d9ac1acf60d9e76a4f',
                '0x9f821dd809b2f739d8c0f2cbe9b509af56053a59288802bb3e12644015a04062',
                '0x392d282180a5e4f2470d5ef47be91b06aabed88873e33286fd85527a8b7508c4',
                '0x96cf28df58c5c11e5badf42332ff0dce4343b651511028428c3bda6f525d392f',
                '0x5e6142308a989b069fabf1623101a9b2dec2c90d3bbd9485416cdaa9a41d1685',
                '0xab0b3706f0ec0fd6963fa5fecf2651bd67196ffdd3050da3886851a135e61860',
            ];

            prefixedHexKeys.forEach((prefixedHexKey) => {
                const prefixedKeyPair = Secp256k1KeyPair.fromPrivKey(Bytes.fromHexString(prefixedHexKey));
                const keyPairNonPrefixed = Secp256k1KeyPair.fromPrivKey(
                    Bytes.fromHexString(prefixedHexKey.replace('0x', '')),
                );
                expect(prefixedKeyPair.getPrivKey()).to.be.eql(keyPairNonPrefixed.getPrivKey());
            });
        });
    });
});
