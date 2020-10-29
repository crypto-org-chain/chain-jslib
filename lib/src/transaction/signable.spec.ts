import 'mocha';
import { expect } from 'chai';
import { fuzzyDescribe } from '../test/mocha-fuzzy/suite';
import { SignableTransactionParamsSuiteFactory } from './test';
import { SignableTransaction } from './signable';
import { Bytes } from '../utils/bytes/bytes';

const anySignableTransaction = (): SignableTransaction => {
    const { params: anyParams } = SignableTransactionParamsSuiteFactory.build();
    return new SignableTransaction(anyParams);
};

describe('SignableTransaction', function () {
    describe('constructor', function () {
        fuzzyDescribe('should throw Error when params is invalid', function (fuzzy) {
            const { params: anyValidParams } = SignableTransactionParamsSuiteFactory.build();
            const testRunner = fuzzy(fuzzy.ObjArg(anyValidParams));

            testRunner(function (params) {
                if (params.valid) {
                    return;
                }
                expect(() => new SignableTransaction(params.value)).to.throw(
                    'Expected `params` to be of type `object`',
                );
            });
        });
    });

    describe('toSignDoc', function () {
        fuzzyDescribe('should throw Error when index is invalid', function (fuzzy) {
            const testRunner = fuzzy(fuzzy.NumberArg(0));

            testRunner(function (index) {
                if (index.valid) {
                    return;
                }

                const anyTx = anySignableTransaction();
                expect(() => anyTx.toSignDoc(index.value)).to.throw('Expected `index` to be of type `number`');
            });
        });

        it('should throw Error when index is out of signers size', function () {
            const anyTx = anySignableTransaction();
            const outOfBoundIndex = 100;

            expect(() => anyTx.toSignDoc(outOfBoundIndex)).to.throw(
                'Expected `number `index`` to be within signer size',
            );
        });

        it('should return Bytes representation of SignDoc', function () {
            const anyTx = anySignableTransaction();

            expect(anyTx.toSignDoc(0)).to.be.an.instanceOf(Bytes);
        });
    });

    describe('setSignature', function () {
        fuzzyDescribe('should throw Error when index is invalid', function (fuzzy) {
            const anySignature = Bytes.fromHexString('111111');
            const testRunner = fuzzy(fuzzy.NumberArg(0), fuzzy.ObjArg(anySignature));

            testRunner(function (index, signature) {
                const anyTx = anySignableTransaction();
                if (!index.valid) {
                    expect(() => anyTx.setSignature(index.value, signature.value)).to.throw(
                        'Expected `index` to be of type `number`',
                    );
                } else if (!signature.valid) {
                    expect(() => anyTx.setSignature(index.value, signature.value)).to.throw(
                        'Expected `signature` to be of type `object`',
                    );
                }
            });
        });

        it('should throw Error when index is out of signers size', function () {
            const { keyPair, params: anyParams } = SignableTransactionParamsSuiteFactory.build();
            const anyTx = new SignableTransaction(anyParams);
            const signature = keyPair.sign(anyTx.toSignDoc(0));

            const outOfBoundIndex = 100;
            expect(() => anyTx.setSignature(outOfBoundIndex, signature)).to.throw(
                'Expected `number `index`` to be within signer size',
            );
        });

        it('should throw Error when signature is invalid', function () {
            const anyTx = anySignableTransaction();
            const anyValidIndex = 0;
            const invalidSignature = Bytes.fromUint8Array(new Uint8Array(64).fill(1));

            expect(() => anyTx.setSignature(anyValidIndex, invalidSignature)).to.throw('Invalid signature');
        });

        it('should set the signature', function () {
            const { keyPair, params: anyParams } = SignableTransactionParamsSuiteFactory.build();
            const anyTx = new SignableTransaction(anyParams);

            const anyValidIndex = 0;
            const signature = keyPair.sign(anyTx.toSignDoc(0));

            expect(anyTx.isIndexSigned(anyValidIndex)).to.eq(false);

            anyTx.setSignature(anyValidIndex, signature);
            expect(anyTx.isIndexSigned(anyValidIndex)).to.eq(true);
        });
    });
});
