import 'mocha';
import { expect } from 'chai';
import { fuzzyDescribe } from '../test/mocha-fuzzy/suite';
import { txRawFactoryV2 } from './test';
import { SignedTransaction } from './signed';
import { Bytes } from '../utils/bytes/bytes';

describe('SignedTransaction', function () {
    describe('constructor', function () {
        fuzzyDescribe('should throw Error when argument is invalid', function (fuzzy) {
            const testRunner = fuzzy(fuzzy.ObjArg(txRawFactoryV2.build()));

            testRunner(function (txRaw) {
                if (txRaw.valid) {
                    return;
                }
                expect(() => new SignedTransaction(txRaw.value)).to.throw('Expected `txRaw` to be of type `object`');
            });
        });
    });

    describe('getTxHash', function () {
        it('should return string', function () {
            const anyTxRaw = txRawFactoryV2.build();

            const signedTx = new SignedTransaction(anyTxRaw);

            expect(signedTx.getTxHash()).to.be.a('string');
        });

        it('should return uppercase string', function () {
            const anyTxRaw = txRawFactoryV2.build();

            const signedTx = new SignedTransaction(anyTxRaw);

            expect(signedTx.getTxHash()).to.match(/^[A-F0-9]{64}$/);
        });
    });

    describe('encode', function () {
        it('should return Bytes', function () {
            const anyTxRaw = txRawFactoryV2.build();

            const signedTx = new SignedTransaction(anyTxRaw);

            expect(signedTx.encode()).to.be.an.instanceOf(Bytes);
        });
    });
});
