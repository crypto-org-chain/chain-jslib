// Copyright © 2018–2020 IOV SAS (licensed under the Apache License, Version 2.0)
// Copyright © 2020 Confio UO (licensed under the Apache License, Version 2.0)
// Copyright © 2020 Simon Warta (licensed under the Apache License, Version 2.0)
// Modifications Copyright (c) 2018-present Crypto.org (licensed under the Apache License, Version 2.0)
import { expect } from 'chai';
import { isNonNullObject, isUint8Array } from './typechecks';

describe('typechecks', function () {
    describe('isNonNullObject', function () {
        it('returns true for objects', function () {
            expect(isNonNullObject({})).to.eq(true);
            expect(isNonNullObject({ foo: 123 })).to.eq(true);
            expect(isNonNullObject(new Uint8Array([]))).to.eq(true);
        });

        it('returns true for arrays', function () {
            // > object is a type that represents the non-primitive type, i.e.
            // > anything that is not number, string, boolean, symbol, null, or undefined.
            // https://www.typescriptlang.org/docs/handbook/basic-types.html#object
            expect(isNonNullObject([])).to.eq(true);
        });

        it('returns false for null', function () {
            expect(isNonNullObject(null)).to.eq(false);
        });

        it('returns false for other kind of data', function () {
            expect(isNonNullObject(undefined)).to.eq(false);
            expect(isNonNullObject('abc')).to.eq(false);
            expect(isNonNullObject(123)).to.eq(false);
            expect(isNonNullObject(true)).to.eq(false);
        });
    });

    describe('isUint8Array', function () {
        it('returns true for Uint8Arrays', function () {
            expect(isUint8Array(new Uint8Array())).to.eq(true);
            expect(isUint8Array(new Uint8Array([1, 2, 3]))).to.eq(true);
        });

        it('returns false for Buffer', function () {
            // One could start a big debate about whether or not a Buffer is a Uint8Array, which
            // required a definition of "is a" in a languages that has no proper object oriented
            // programming support.
            //
            // In all our software we use Uint8Array for storing binary data and copy Buffers into
            // new Uint8Array to make deep equality checks work and to ensure our code works the same
            // way in browsers and Node.js. So our expectation is: _a Buffer is not an Uint8Array_.
            expect(isUint8Array(Buffer.from(''))).to.eq(false);
        });

        it('returns false for other kind of data', function () {
            expect(isUint8Array(undefined)).to.eq(false);
            expect(isUint8Array('abc')).to.eq(false);
            expect(isUint8Array(123)).to.eq(false);
            expect(isUint8Array(true)).to.eq(false);

            expect(isUint8Array([])).to.eq(false);
            expect(isUint8Array(new Int8Array())).to.eq(false);
            expect(isUint8Array(new Uint16Array())).to.eq(false);
        });
    });
});
