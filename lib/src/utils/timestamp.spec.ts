import 'mocha';
import { expect } from 'chai';
import Long from 'long';
import { convertSecondsNanosToTZFormat } from './timestamp';

describe('convertTimestamp', function () {
    it('should return correct formatted timestamp', function () {
        convertSecondsNanosToTZFormat(Long.fromString('1627644878'), 10000000);
    });
    it('should throw on invalid values', function () {
        expect(() => convertSecondsNanosToTZFormat(Long.fromString('-1'), -1)).throw('Error converting timestamp.');
    });
});
