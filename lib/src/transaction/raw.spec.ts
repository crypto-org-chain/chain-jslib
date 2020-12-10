import 'mocha';
import { expect } from 'chai';
import { fuzzyDescribe } from '../test/mocha-fuzzy/suite';
import { CosmosMsgSuiteFactory, TransactionSignerFactory } from './test';

import { SignableTransaction } from './signable';
import { CroNetwork, CroSDK } from '../core/cro';

const cro = CroSDK({ network: CroNetwork.Testnet });

const anyTransaction = () => new cro.RawTransaction();

describe('Transaction', function () {
    describe('appendTxBodyMessage', function () {
        fuzzyDescribe('should throw Error when message is invalid', function (fuzzy) {
            const { message: anyMessage } = CosmosMsgSuiteFactory.build();
            const testRunner = fuzzy(fuzzy.ObjArg(anyMessage));

            testRunner(function (msg) {
                if (msg.valid) {
                    return;
                }
                const tx = anyTransaction();
                expect(() => tx.addMessage(msg.value)).to.throw('Expected `message` to be of type `object`');
            });
        });

        it('should append message to txBody', function () {
            const { message: anyMessage } = CosmosMsgSuiteFactory.build();
            const tx = anyTransaction();
            tx.addMessage(anyMessage);

            let actualMessages = tx.getTxBody().value.messages;
            expect(actualMessages.length).to.eq(1);
            expect(actualMessages[0]).to.deep.eq(anyMessage);

            const { message: anotherMessage } = CosmosMsgSuiteFactory.build();
            tx.addMessage(anotherMessage);

            actualMessages = tx.getTxBody().value.messages;
            expect(actualMessages.length).to.eq(2);
            expect(actualMessages).to.deep.eq([anyMessage, anotherMessage]);
        });
    });

    describe('addSigner', function () {
        fuzzyDescribe('should throw Error when signer is invalid', function (fuzzy) {
            const anyValidTransactionSigner = TransactionSignerFactory.build();
            const testRunner = fuzzy(fuzzy.ObjArg(anyValidTransactionSigner));

            testRunner(function (signer) {
                if (signer.valid) {
                    return;
                }
                const tx = anyTransaction();
                expect(() => tx.addSigner(signer.value)).to.throw('Expected `signer` to be of type `object`');
            });
        });

        it('should append signer to AuthInfo', function () {
            const anySigner = TransactionSignerFactory.build();

            const tx = anyTransaction();
            tx.addSigner(anySigner);
            let actualSignerInfos = tx.getAuthInfo().signerInfos;
            expect(actualSignerInfos.length).to.eq(1);
            expect(actualSignerInfos[0].publicKey).to.deep.eq(anySigner.publicKey);
            expect(actualSignerInfos[0].sequence).to.deep.eq(anySigner.accountSequence);

            const anotherSigner = TransactionSignerFactory.build();
            tx.addSigner(anotherSigner);
            actualSignerInfos = tx.getAuthInfo().signerInfos;
            expect(actualSignerInfos.length).to.eq(2);
            expect(actualSignerInfos[1].publicKey).to.deep.eq(anotherSigner.publicKey);
            expect(actualSignerInfos[1].sequence).to.deep.eq(anotherSigner.accountSequence);
        });

        it('should append signer to signerAccountNumbers', function () {
            const anySigner = TransactionSignerFactory.build();

            const tx = anyTransaction();
            tx.addSigner(anySigner);

            let actualSignerAccountNumbers = tx.getSignerAccounts();
            expect(actualSignerAccountNumbers.length).to.eq(1);
            expect(actualSignerAccountNumbers[0]).to.deep.eq({
                publicKey: anySigner.publicKey,
                accountNumber: anySigner.accountNumber,
            });

            const anotherSigner = TransactionSignerFactory.build();
            tx.addSigner(anotherSigner);
            actualSignerAccountNumbers = tx.getSignerAccounts();
            expect(actualSignerAccountNumbers.length).to.eq(2);
            expect(actualSignerAccountNumbers[1]).to.deep.eq({
                publicKey: anotherSigner.publicKey,
                accountNumber: anotherSigner.accountNumber,
            });
        });
    });

    describe('toSignable', function () {
        it('should throw Error when no message is added', function () {
            const anySigner = TransactionSignerFactory.build();
            const tx = anyTransaction();

            tx.addSigner(anySigner);

            expect(() => tx.toSignable()).to.throw('Expected message in transaction, got none');
        });

        it('should throw Error when no signer is added', function () {
            const { message: anyMessage } = CosmosMsgSuiteFactory.build();
            const tx = anyTransaction();

            tx.addMessage(anyMessage);

            expect(() => tx.toSignable()).to.throw('Expected signer in transaction, got none');
        });

        it('should return SignableTransaction', function () {
            const { keyPair, message: anyMessage } = CosmosMsgSuiteFactory.build();
            const anySigner = TransactionSignerFactory.build(
                {},
                {
                    keyPair,
                },
            );
            const tx = anyTransaction();

            tx.addMessage(anyMessage).addSigner(anySigner);

            expect(tx.toSignable()).to.be.an.instanceOf(SignableTransaction);
        });
    });
});
