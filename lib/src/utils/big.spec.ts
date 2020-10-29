import 'mocha';
import { expect } from 'chai';
import Big from 'big.js';

import { isBigInteger } from './big';

describe('isBigInteger', function () {
    it('should return false if the Big is not integer', function () {
        expect(isBigInteger(new Big('1.2'))).to.eq(false);
        expect(isBigInteger(new Big('0.123'))).to.eq(false);
        expect(isBigInteger(new Big('-0.123'))).to.eq(false);
    });

    it('should return true if the Big is integer', function () {
        expect(isBigInteger(new Big('0'))).to.eq(true);
        expect(isBigInteger(new Big('1'))).to.eq(true);
        expect(isBigInteger(new Big('123456'))).to.eq(true);
    });
});
