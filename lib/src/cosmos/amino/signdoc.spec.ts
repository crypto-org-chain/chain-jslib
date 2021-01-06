import 'mocha';
import { expect } from 'chai';
import { sortedJsonStringify } from './signdoc';

describe('encoding', function () {
    describe('sortedJsonStringify', function () {
        it('leaves non-objects unchanged', function () {
            expect(sortedJsonStringify(true)).to.eq(`true`);
            expect(sortedJsonStringify(false)).to.eq(`false`);
            expect(sortedJsonStringify('aabbccdd')).to.eq(`"aabbccdd"`);
            expect(sortedJsonStringify(75)).to.eq(`75`);
            expect(sortedJsonStringify(null)).to.eq(`null`);
            expect(sortedJsonStringify([5, 6, 7, 1])).to.eq(`[5,6,7,1]`);
            expect(sortedJsonStringify([5, ['a', 'b'], true, null, 1])).to.eq(`[5,["a","b"],true,null,1]`);
        });

        it('sorts objects by key', function () {
            // already sorted
            expect(sortedJsonStringify({})).to.eq(`{}`);
            expect(sortedJsonStringify({ a: 3 })).to.eq(`{"a":3}`);
            expect(sortedJsonStringify({ a: 3, b: 2, c: 1 })).to.eq(`{"a":3,"b":2,"c":1}`);

            // not yet sorted
            expect(sortedJsonStringify({ b: 2, a: 3, c: 1 })).to.eq(`{"a":3,"b":2,"c":1}`);
            expect(sortedJsonStringify({ aaa: true, aa: true, a: true })).to.eq(`{"a":true,"aa":true,"aaa":true}`);
        });

        it('sorts nested objects', function () {
            // already sorted
            expect(sortedJsonStringify({ x: { y: { z: null } } })).to.eq(`{"x":{"y":{"z":null}}}`);

            // not yet sorted
            expect(sortedJsonStringify({ b: { z: true, x: true, y: true }, a: true, c: true })).to.eq(
                `{"a":true,"b":{"x":true,"y":true,"z":true},"c":true}`,
            );
        });

        it('sorts objects in arrays', function () {
            // already sorted
            expect(sortedJsonStringify([1, 2, { x: { y: { z: null } } }, 4])).to.eq(`[1,2,{"x":{"y":{"z":null}}},4]`);

            // not yet sorted
            expect(sortedJsonStringify([1, 2, { b: { z: true, x: true, y: true }, a: true, c: true }, 4])).to.eq(
                `[1,2,{"a":true,"b":{"x":true,"y":true,"z":true},"c":true},4]`,
            );
        });
    });
});
