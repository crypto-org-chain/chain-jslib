import 'mocha';
import { expect } from 'chai';
import { fuzzyDescribe } from '../test/mocha-fuzzy/suite';

import { HDKey } from './hdkey';
import { Bytes } from '../utils/bytes/bytes';

const anyHDKey = (): HDKey => {
    return HDKey.fromMnemonic(ANY_VALID_MNEMONIC);
};

const ANY_VALID_MNEMONIC =
    'point shiver hurt flight fun online hub antenna engine pave chef fantasy front interest poem accident catch load frequent praise elite pet remove used';

describe('HDKey', function () {
    describe('constructor', function () {
        fuzzyDescribe('should throw Error when argument is not seed', function (fuzzy) {
            const testRunner = fuzzy(fuzzy.ObjectArg(Bytes.fromHexString('000000')));
            testRunner(function (seed) {
                if (seed.valid) {
                    return;
                }
                expect(() => new HDKey(seed.value)).to.throw('Expected `seed` to be of type `object`');
            });
        });
    });

    describe('fromMnemonic', function () {
        fuzzyDescribe('should throw Error when argument is not string', function (fuzzy) {
            const anyPassphrase = 'passphrase';
            const testRunner = fuzzy(fuzzy.StringArg(ANY_VALID_MNEMONIC), fuzzy.optional(fuzzy.String)(anyPassphrase));
            testRunner(function (mnemonic, passphrase) {
                if (!mnemonic.valid) {
                    expect(() => HDKey.fromMnemonic(mnemonic.value, passphrase.value)).to.throw(
                        'Expected `mnemonic` to be of type `string`',
                    );
                } else if (!passphrase.valid) {
                    expect(() => HDKey.fromMnemonic(mnemonic.value, passphrase.value)).to.throw(
                        'Expected `passphrase` to be of type `string`',
                    );
                }
            });
        });

        it('should throw Error when the mnemonic is incorrect', function () {
            const invalidMnemonic = 'hello from nodejs';
            expect(() => {
                HDKey.fromMnemonic(invalidMnemonic);
            }).to.throw('Invalid mnemonic words');
        });

        it('should use empty password when the password is not provided', function () {
            const anyMnemonic = 'seed sock milk update focus rotate barely fade car face mechanic mercy';

            expect(HDKey.fromMnemonic(anyMnemonic).seed.toHexString()).to.deep.eq(
                '3c121e20de068083b49c2315697fb59a2d9e8643c24e5ea7628132c58969a0275693dd5bd9d4cc9e648475eba9613ed4678f4d62560a9c42f75bac04022ded25',
            );
        });

        it('should always restore to the same HDKey', function () {
            const mnemonic =
                'point shiver hurt flight fun online hub antenna engine pave chef fantasy front interest poem accident catch load frequent praise elite pet remove used';
            const passphrase = 'youshallnotpass';
            const wallet = HDKey.fromMnemonic(mnemonic, passphrase);
            const { seed } = wallet;
            const restoredWallet = new HDKey(seed.clone());
            expect(restoredWallet.seed).to.deep.eq(seed);
        });
    });

    describe('derive', function () {
        fuzzyDescribe('should throw Error when the path is invalid', function (fuzzy) {
            const testRunner = fuzzy(fuzzy.StringArg("44'/394'/0'/0/0"));
            testRunner((path) => {
                if (path.valid) {
                    return;
                }
                expect(() => anyHDKey().derivePrivKey(path.value)).to.throw('Expected `path` to be of type `string`');
            });
        });

        it('should throw Error when the path is invalid', function () {
            const wallet = anyHDKey();
            expect(() => {
                wallet.derivePrivKey('invalid');
            }).to.throw('Expected BIP32Path, got String "invalid');
        });

        it('should return private key in Bytes', function () {
            // https://en.bitcoin.it/wiki/BIP_0032_TestVectors
            const wallet = new HDKey(
                Bytes.fromHexString(
                    'fffcf9f6f3f0edeae7e4e1dedbd8d5d2cfccc9c6c3c0bdbab7b4b1aeaba8a5a29f9c999693908d8a8784817e7b7875726f6c696663605d5a5754514e4b484542',
                ),
            );
            const result = wallet.derivePrivKey("m/0/2147483647'/1");

            expect(result).to.be.an.instanceOf(Bytes);
            expect(result.toHexString()).to.eq('704addf544a06e5ee4bea37098463c23613da32020d604506da8c0518e1da4b7');
        });
    });

    describe('generateMnemonic', function () {
        fuzzyDescribe('should throw Error when words length is invalid', function (fuzzy) {
            const testRunner = fuzzy(fuzzy.optional(fuzzy.Number)(24));

            testRunner((wordsLength) => {
                if (wordsLength.value) {
                    return;
                }
                expect(() => HDKey.generateMnemonic(wordsLength.value)).to.throw(
                    'Expected `wordsLength` to be of type `number`',
                );
            });
        });

        it('should throw Error when words length is not an integer', function () {
            expect(() => HDKey.generateMnemonic(12.2 as any)).to.throw(
                'Expected number `wordsLength` to be an integer',
            );
        });

        it('should throw Error when words length is not a positive integer', function () {
            expect(() => HDKey.generateMnemonic(-24 as any)).to.throw('Expected number `wordsLength` to be positive');
        });

        it('should throw Error when words length is not a multiple of 3', function () {
            expect(() => HDKey.generateMnemonic(35 as any)).to.throw(
                'Expected number `wordsLength` to be a multiple of 3',
            );
        });

        it('should throw Error when words length is not in the range of 12 to 24', function () {
            expect(() => HDKey.generateMnemonic(9 as any)).to.throw(
                'Expected number `wordsLength` to be a multiple of 3',
            );
            expect(() => HDKey.generateMnemonic(27 as any)).to.throw(
                'Expected number `wordsLength` to be a multiple of 3',
            );
        });

        it('should generate mnemonic words of desired words length', function () {
            expect(mnemonicWordsLength(HDKey.generateMnemonic(12))).to.eq(12);
            expect(mnemonicWordsLength(HDKey.generateMnemonic(15))).to.eq(15);
            expect(mnemonicWordsLength(HDKey.generateMnemonic(18))).to.eq(18);
            expect(mnemonicWordsLength(HDKey.generateMnemonic(21))).to.eq(21);
            expect(mnemonicWordsLength(HDKey.generateMnemonic(24))).to.eq(24);
        });

        it('should generate mnemonic words of length 24 when no words length provided', function () {
            expect(mnemonicWordsLength(HDKey.generateMnemonic())).to.eq(24);
        });

        it('should generate unique Mnemonic', function () {
            const firstMnemonic = HDKey.generateMnemonic();
            const secondMnemonic = HDKey.generateMnemonic();
            expect(firstMnemonic).not.to.deep.eq(secondMnemonic);
        });
    });
});

const mnemonicWordsLength = (words: string): number => words.split(' ').length;
