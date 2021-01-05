import 'mocha';
import { expect } from 'chai';
import { coin, coins } from './coins';

describe('coins', function () {
    describe('coin', function () {
        it('works for basic values', function () {
            expect(coin('123', 'utoken')).to.deep.eq({ amount: '123', denom: 'utoken' });
            expect(coin(Number.MAX_SAFE_INTEGER.toString(), 'utoken')).to.deep.eq({
                amount: '9007199254740991',
                denom: 'utoken',
            });
        });

        it('throws for non-safe-integer values', function () {
            expect(() => coin('1.23', 'utoken')).to.throw();
            expect(() => coin('123.0', 'utoken')).to.throw();
            expect(() => coin('NaN', 'utoken')).to.throw();
            expect(() => coin(Number.POSITIVE_INFINITY.toString(), 'utoken')).to.throw();
            expect(() => coin((Number.MAX_SAFE_INTEGER + 1).toString(), 'utoken')).to.throw();
        });

        it('throws for negative values', function () {
            expect(() => coin('-1', 'utoken')).to.throw();
            expect(() => coin(Number.MIN_SAFE_INTEGER.toString(), 'utoken')).to.throw();
            expect(() => coin(Number.NEGATIVE_INFINITY.toString(), 'utoken')).to.throw();
        });
    });

    describe('coins', function () {
        it('returns one element array of coin', function () {
            expect(coins('123', 'utoken')).to.deep.eq([{ amount: '123', denom: 'utoken' }]);
        });
    });
});
