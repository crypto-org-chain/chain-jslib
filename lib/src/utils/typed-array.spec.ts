import 'mocha';
import { expect } from 'chai';

import { cloneUint8Array } from './typed-array';

describe('utils', function () {
    describe('cloneUint8Array', function () {
        it('should return a clone of the provided array', function () {
            const anyUint8Array = new Uint8Array(32).fill(1);

            const clonedUint8Array = cloneUint8Array(anyUint8Array);
            clonedUint8Array.fill(0);

            expect(anyUint8Array).to.deep.eq(new Uint8Array(32).fill(1));
        });
    });
});
