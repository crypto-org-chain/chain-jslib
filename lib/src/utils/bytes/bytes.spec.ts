import 'mocha';
import { expect } from 'chai';
import { fuzzyDescribe } from '../../test/mocha-fuzzy/suite';

import { Bytes } from './bytes';

describe('Bytes', function () {
    describe('constructor', function () {
        fuzzyDescribe('should throw Error when argument is not Uint8Array', function (fuzzy) {
            const testRunner = fuzzy(fuzzy.ObjArg(new Uint8Array(32).fill(1)));

            testRunner(function (arg) {
                if (!arg.valid) {
                    expect(() => Bytes.fromUint8Array(arg.value)).to.throw(
                        'Expected `value` to be of type `Uint8Array`',
                    );
                }
            });
        });

        it('should clone the Uint8Array input', function () {
            const anyUint8Array = new Uint8Array(32).fill(1);
            const bytes = Bytes.fromUint8Array(anyUint8Array);

            anyUint8Array.fill(0);
            const expectedUint8Array = new Uint8Array(32).fill(1);
            expect(bytes.toUint8Array()).to.deep.eq(expectedUint8Array);
        });

        it('should return Bytes of the provided Uint8Array', function () {
            const anyUint8Array = new Uint8Array(32).fill(1);
            const bytes = Bytes.fromUint8Array(anyUint8Array);

            expect(bytes.toUint8Array()).to.deep.eq(anyUint8Array);
        });
    });

    describe('fromUint8Array', function () {
        fuzzyDescribe('should throw Error when argument is not Uint8Array', function (fuzzy) {
            const testRunner = fuzzy(fuzzy.ObjArg(new Uint8Array(32).fill(1)));

            testRunner(function (arg) {
                if (!arg.valid) {
                    expect(() => Bytes.fromUint8Array(arg.value)).to.throw(
                        'Expected `value` to be of type `Uint8Array`',
                    );
                }
            });
        });

        it('should clone the Uint8Array input', function () {
            const anyUint8Array = new Uint8Array(32).fill(1);
            const bytes = Bytes.fromUint8Array(anyUint8Array);

            anyUint8Array.fill(0);
            const expectedUint8Array = new Uint8Array(32).fill(1);
            expect(bytes.toUint8Array()).to.deep.eq(expectedUint8Array);
        });

        it('should return Bytes of the provided Uint8Array', function () {
            const anyUint8Array = new Uint8Array(32).fill(1);
            const bytes = Bytes.fromUint8Array(anyUint8Array);

            expect(bytes.toUint8Array()).to.deep.eq(anyUint8Array);
        });
    });

    describe('fromBuffer', function () {
        fuzzyDescribe('should throw Error when argument is not Buffer', function (fuzzy) {
            const testRunner = fuzzy(fuzzy.ObjArg(Buffer.alloc(32).fill(1)));

            testRunner(function (arg) {
                if (!arg.valid) {
                    expect(() => Bytes.fromBuffer(arg.value)).to.throw('Expected `value` to be of type `Buffer`');
                }
            });
        });

        it('should clone the Buffer input', function () {
            const anyBuffer = Buffer.alloc(32).fill(1);
            const bytes = Bytes.fromBuffer(anyBuffer);

            anyBuffer.fill(0);

            const expectedUint8Array = new Uint8Array(32).fill(1);
            expect(bytes.toUint8Array()).to.deep.eq(expectedUint8Array);
        });

        it('should return Bytes of the provided Buffer', function () {
            const anyBuffer = Buffer.alloc(32).fill(1);
            const bytes = Bytes.fromBuffer(anyBuffer);

            const expectedUint8Array = new Uint8Array(32).fill(1);
            expect(bytes.toUint8Array()).to.deep.eq(expectedUint8Array);
        });
    });

    describe('fromHexString', function () {
        fuzzyDescribe('should throw Error when argument is not string', function (fuzzy) {
            const testRunner = fuzzy(fuzzy.StringArg('1'.repeat(32)));

            testRunner(function (arg) {
                if (!arg.valid) {
                    expect(() => Bytes.fromHexString(arg.value)).to.throw('Expected `value` to be of type `string`');
                }
            });
        });

        it('should throw Error when string is not hexadecimal character', function () {
            expect(() => Bytes.fromHexString('ZZZZ')).to.throw(
                'Expected string `value` to be hexadecimal string of even length',
            );
        });

        it('should throw Error when string is not hexadecimal character of even length', function () {
            expect(() => Bytes.fromHexString('111')).to.throw(
                'Expected string `value` to be hexadecimal string of even length',
            );
        });

        it('should return empty Bytes when string is empty', function () {
            const bytes = Bytes.fromHexString('');

            expect(bytes.toUint8Array().length).to.eq(0);
        });

        it('should return Bytes of the provided Buffer', function () {
            const anyHexString = '01'.repeat(32);
            const bytes = Bytes.fromHexString(anyHexString);

            const expectedUint8Array = new Uint8Array(32).fill(1);
            expect(bytes.toUint8Array()).to.deep.eq(expectedUint8Array);
        });

        it('should not throw Error when hex strings are prefixed with 0x', function () {
            const anyHexString = `0x${'01'.repeat(32)}`;
            const bytes = Bytes.fromHexString(anyHexString);

            const expectedUint8Array = new Uint8Array(32).fill(1);
            expect(bytes.toUint8Array()).to.deep.eq(expectedUint8Array);
        });
    });

    describe('fromBase64String', function () {
        fuzzyDescribe('should throw Error when argument is not string', function (fuzzy) {
            const testRunner = fuzzy(fuzzy.StringArg('Hy/hEXURHOHziOcyS7u6coBcoCfVtYvZ+0sJhkfr5I4='));

            testRunner(function (arg) {
                if (!arg.valid) {
                    expect(() => Bytes.fromBase64String(arg.value)).to.throw('Expected `value` to be of type `string`');
                }
            });
        });

        it('should throw Error when string is not valid base64 string', function () {
            expect(() => Bytes.fromBase64String('!@#$%^&*')).to.throw(
                'Expected valid base64 string of length be multiple of 4',
            );
        });

        it('should throw Error when string is not valid base64 string of length be multiple of 4', function () {
            expect(() => Bytes.fromBase64String('6chars')).to.throw(
                'Expected valid base64 string of length be multiple of 4',
            );
        });

        it('should return empty Bytes when string is empty', function () {
            const bytes = Bytes.fromBase64String('');

            expect(bytes.toUint8Array().length).to.eq(0);
        });

        it('should return Bytes of the provided base64 string', function () {
            const anyHexString = 'AQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQE=';
            const bytes = Bytes.fromBase64String(anyHexString);

            const expectedUint8Array = new Uint8Array(32).fill(1);
            expect(bytes.toUint8Array()).to.deep.eq(expectedUint8Array);
        });
    });

    describe('length', function () {
        it('should return 0 when the Bytes is empty', function () {
            const anyBytes = Bytes.fromHexString('');

            expect(anyBytes.length).to.eq(0);
        });

        it('should return length of the bytes', function () {
            const anyBytes = Bytes.fromUint8Array(new Uint8Array(32).fill(1));

            expect(anyBytes.length).to.eq(32);
        });
    });

    describe('isEqual', function () {
        it('should return false when the two Bytes are of different length', function () {
            const anyBytes = Bytes.fromHexString('ababab');
            const anotherBytes = Bytes.fromHexString('abcd');

            expect(anyBytes.isEqual(anotherBytes)).to.eq(false);
        });

        it('should return false when the two Bytes are of same length but different', function () {
            const anyBytes = Bytes.fromHexString('ababab');
            const anotherBytes = Bytes.fromHexString('ababcd');

            expect(anyBytes.isEqual(anotherBytes)).to.eq(false);
        });

        it('should return true when the two Bytes are the same', function () {
            const anyBytes = Bytes.fromHexString('ababab');
            const anotherBytes = Bytes.fromHexString('ababab');

            expect(anyBytes.isEqual(anotherBytes)).to.eq(true);
        });
    });

    describe('toUint8Array', function () {
        it('should return new copy of the underlying Uint8Array', function () {
            const anyUint8Array = new Uint8Array(32).fill(1);
            const bytes = Bytes.fromUint8Array(anyUint8Array);

            const result = bytes.toUint8Array();
            result.fill(0);
            expect(bytes.toUint8Array()).to.deep.eq(new Uint8Array(32).fill(1));
        });
    });

    describe('toBuffer', function () {
        it('should return Buffer representation', function () {
            const anyUint8Array = new Uint8Array(32).fill(1);
            const bytes = Bytes.fromUint8Array(anyUint8Array);

            const expectedBuffer = Buffer.alloc(32).fill(1);
            expect(bytes.toBuffer()).to.deep.eq(expectedBuffer);
        });
    });

    describe('toHexString', function () {
        it('should return hexadecimal string representation', function () {
            const anyUint8Array = new Uint8Array(32).fill(1);
            const bytes = Bytes.fromUint8Array(anyUint8Array);

            const expectedHexString = '01'.repeat(32);
            expect(bytes.toHexString()).to.deep.eq(expectedHexString);
        });
    });

    describe('toBase64String', function () {
        it('should return base64 string representation', function () {
            const anyUint8Array = new Uint8Array(32).fill(1);
            const bytes = Bytes.fromUint8Array(anyUint8Array);

            const expectedBase64String = 'AQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQE=';
            expect(bytes.toBase64String()).to.deep.eq(expectedBase64String);
        });
    });
});
