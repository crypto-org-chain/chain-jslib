import 'mocha';
import { expect } from 'chai';
import Big from 'big.js';
import { fuzzyDescribe } from '../test/mocha-fuzzy/suite';
import { CosmosMsgSuiteFactoryV2, TransactionSignerFactory, CosmosMsgSuiteFactory } from './test';

import { CroNetwork, CroSDK } from '../core/cro';
import { Bytes } from '../utils/bytes/bytes';
import { SignableTransactionV2 } from './v2.signable';
import utils from '../utils';
import { SIGN_MODE } from './types';

const cro = CroSDK({ network: CroNetwork.Testnet });

const anyTransaction = () => new cro.v2.RawTransactionV2();

describe('Transaction', function () {
    context('v2 messages', function name() {
        describe('appendTxBodyMessage', function () {
            fuzzyDescribe('should throw Error when message is invalid', function (fuzzy) {
                const { message: anyMessage } = CosmosMsgSuiteFactoryV2.build();
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
                const { message: anyMessage } = CosmosMsgSuiteFactoryV2.build();
                const tx = anyTransaction();
                tx.addMessage(anyMessage);

                let actualMessages = tx.getTxBody().value.messages;
                expect(actualMessages.length).to.eq(1);
                expect(actualMessages[0]).to.deep.eq(anyMessage);

                const { message: anotherMessage } = CosmosMsgSuiteFactoryV2.build();
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

            it('should set a single fee `amount` to AuthInfo', function () {
                const tx = anyTransaction();
                tx.setFee(cro.Coin.fromBaseUnit('10000'));

                expect(tx.getAuthInfo().fee.amount).to.have.length(1);
                expect(tx.getAuthInfo().fee!.amount![0].toCosmosCoin()).to.deep.eq({
                    amount: '10000',
                    denom: 'basetcro',
                });
            });

            it('should append fee `amount` to AuthInfo', function () {
                const tx = anyTransaction();
                tx.appendFeeAmount(cro.Coin.fromBaseUnit('88888'));
                tx.appendFeeAmount(cro.Coin.fromBaseUnit('99999'));

                expect(tx.getAuthInfo().fee.amount).to.have.length(2);
                expect(tx.getAuthInfo().fee!.amount![0].toCosmosCoin()).to.deep.eq({
                    amount: '88888',
                    denom: 'basetcro',
                });
                expect(tx.getAuthInfo().fee!.amount![1].toCosmosCoin()).to.deep.eq({
                    amount: '99999',
                    denom: 'basetcro',
                });
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
                    signMode: anySigner.signMode,
                });

                const anotherSigner = TransactionSignerFactory.build();
                tx.addSigner(anotherSigner);
                actualSignerAccountNumbers = tx.getSignerAccounts();
                expect(actualSignerAccountNumbers.length).to.eq(2);
                expect(actualSignerAccountNumbers[1]).to.deep.eq({
                    publicKey: anotherSigner.publicKey,
                    accountNumber: anotherSigner.accountNumber,
                    signMode: anotherSigner.signMode,
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
                const { message: anyMessage } = CosmosMsgSuiteFactoryV2.build();
                const tx = anyTransaction();

                tx.addMessage(anyMessage);

                expect(() => tx.toSignable()).to.throw('Expected signer in transaction, got none');
            });

            it('should return SignableTransactionV2', function () {
                const { keyPair, message: anyMessage } = CosmosMsgSuiteFactoryV2.build();
                const anySigner = TransactionSignerFactory.build(
                    {},
                    {
                        keyPair,
                    },
                );
                const tx = anyTransaction();

                tx.addMessage(anyMessage).addSigner(anySigner);

                expect(tx.toSignable()).to.be.an.instanceOf(SignableTransactionV2);
            });
        });

        describe('toCosmosJSON', function () {
            it('should not throw', function () {
                const anyTx = anyTransaction();

                expect(() => {
                    anyTx.toCosmosJSON();
                }).not.throw();
            });

            it('should create correct JSON', function () {
                const anyTx = anyTransaction();

                anyTx.addMessage(
                    cro.bank.MsgSend.fromCosmosMsgJSON(
                        `{ "@type": "/cosmos.bank.v1beta1.MsgSend", "amount": [{ "denom": "basetcro", "amount": "3478499933290496" }], "from_address": "tcro1x07kkkepfj2hl8etlcuqhej7jj6myqrp48y4hg", "to_address": "tcro184lta2lsyu47vwyp2e8zmtca3k5yq85p6c4vp3" }`,
                    ),
                );

                // { "body": { "messages": [{ "@type": "/cosmos.bank.v1beta1.MsgSend", "amount": [{ "denom": "basetcro", "amount": "3478499933290496" }], "from_address": "tcro1x07kkkepfj2hl8etlcuqhej7jj6myqrp48y4hg", "to_address": "tcro184lta2lsyu47vwyp2e8zmtca3k5yq85p6c4vp3" }], "memo": "", "timeout_height": "0", "extension_options": [], "non_critical_extension_options": [] }, "auth_info": { "signer_infos": [{ "public_key": { "@type": "/cosmos.crypto.secp256k1.PubKey", "key": "Ap/w6zWJiX6QCKLTt6jLM1sFJsUmBWaS6VUi7zxqqb0V" }, "mode_info": { "single": { "mode": "SIGN_MODE_DIRECT" } }, "sequence": "794129105682432" }], "fee": { "amount": [], "gas_limit": "8105066556817408", "payer": "", "granter": "" } }, "signatures": [""] }

                anyTx.addSigner({
                    accountNumber: new Big(0),
                    accountSequence: new Big(79),
                    publicKey: Bytes.fromHexString(
                        '03a52c32db89513a187ceb00a4520b52dec06f583f2e12afcf1da78e370a5358e6',
                    ),
                });

                const parsedCosmosJson = JSON.parse(anyTx.toCosmosJSON());

                expect(parsedCosmosJson).to.have.all.keys('body', 'auth_info', 'signatures');
                expect(parsedCosmosJson.body.messages.length).to.greaterThan(0);
                expect(parsedCosmosJson.body).to.haveOwnProperty('memo');
                expect(parsedCosmosJson.body).to.haveOwnProperty('timeout_height');
                expect(parsedCosmosJson.auth_info).to.haveOwnProperty('signer_infos');
                expect(parsedCosmosJson.auth_info.signer_infos.length).to.greaterThan(0);
                expect(parsedCosmosJson.auth_info).to.haveOwnProperty('fee');
                expect(parsedCosmosJson.auth_info.fee).to.haveOwnProperty('gas_limit');
                expect(parseInt(parsedCosmosJson.auth_info.fee.gas_limit, 10)).to.greaterThan(0);
            });
        });
    });

    context('v1 messages', function name() {
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

            it('should set a single fee `amount` to AuthInfo', function () {
                const tx = anyTransaction();
                tx.setFee(cro.Coin.fromBaseUnit('10000'));

                expect(tx.getAuthInfo().fee.amount).to.have.length(1);
                expect(tx.getAuthInfo().fee!.amount![0].toCosmosCoin()).to.deep.eq({
                    amount: '10000',
                    denom: 'basetcro',
                });
            });

            it('should append fee `amount` to AuthInfo', function () {
                const tx = anyTransaction();
                tx.appendFeeAmount(cro.Coin.fromBaseUnit('88888'));
                tx.appendFeeAmount(cro.Coin.fromBaseUnit('99999'));

                expect(tx.getAuthInfo().fee.amount).to.have.length(2);
                expect(tx.getAuthInfo().fee!.amount![0].toCosmosCoin()).to.deep.eq({
                    amount: '88888',
                    denom: 'basetcro',
                });
                expect(tx.getAuthInfo().fee!.amount![1].toCosmosCoin()).to.deep.eq({
                    amount: '99999',
                    denom: 'basetcro',
                });
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
                    signMode: anySigner.signMode,
                });

                const anotherSigner = TransactionSignerFactory.build();
                tx.addSigner(anotherSigner);
                actualSignerAccountNumbers = tx.getSignerAccounts();
                expect(actualSignerAccountNumbers.length).to.eq(2);
                expect(actualSignerAccountNumbers[1]).to.deep.eq({
                    publicKey: anotherSigner.publicKey,
                    accountNumber: anotherSigner.accountNumber,
                    signMode: anotherSigner.signMode,
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

            it('should return SignableTransactionV2', function () {
                const { keyPair, message: anyMessage } = CosmosMsgSuiteFactory.build();
                const anySigner = TransactionSignerFactory.build(
                    {},
                    {
                        keyPair,
                    },
                );
                const tx = anyTransaction();

                tx.addMessage(anyMessage).addSigner(anySigner);

                expect(tx.toSignable()).to.be.an.instanceOf(SignableTransactionV2);
            });
        });

        describe('toCosmosJSON', function () {
            it('should not throw', function () {
                const anyTx = anyTransaction();
                expect(() => {
                    anyTx.toCosmosJSON();
                }).not.throw();
            });

            it('should throw', function () {
                const anyTx = anyTransaction();
                // @ts-ignore
                anyTx.txBody = undefined;
                expect(() => {
                    anyTx.toCosmosJSON();
                }).to.throw(
                    "error converting RawTransaction to Cosmos compatible JSON: TypeError: Cannot read property 'value' of undefined",
                );
            });

            it('should output correct `signer` array', function () {
                const anyTx = anyTransaction();
                const { message: anyMessage } = CosmosMsgSuiteFactory.build();
                anyTx.addMessage(anyMessage);
                anyTx.addSigner({
                    publicKey: Bytes.fromHexString(
                        '03a52c32db89513a187ceb00a4520b52dec06f583f2e12afcf1da78e370a5358e6',
                    ),
                    accountNumber: new Big(1),
                    accountSequence: new Big(2),
                });
                expect(anyTx.exportSignerAccounts()).to.eq(
                    `[{"publicKey":"A6UsMtuJUToYfOsApFILUt7Ab1g/LhKvzx2njjcKU1jm","accountNumber":"1","signMode":"1"}]`,
                );
            });

            it('should create correct JSON', function () {
                const anyTx = anyTransaction();

                anyTx.addMessage(
                    cro.bank.MsgSend.fromCosmosMsgJSON(
                        `{ "@type": "/cosmos.bank.v1beta1.MsgSend", "amount": [{ "denom": "basetcro", "amount": "3478499933290496" }], "from_address": "tcro1x07kkkepfj2hl8etlcuqhej7jj6myqrp48y4hg", "to_address": "tcro184lta2lsyu47vwyp2e8zmtca3k5yq85p6c4vp3" }`,
                    ),
                );

                // { "body": { "messages": [{ "@type": "/cosmos.bank.v1beta1.MsgSend", "amount": [{ "denom": "basetcro", "amount": "3478499933290496" }], "from_address": "tcro1x07kkkepfj2hl8etlcuqhej7jj6myqrp48y4hg", "to_address": "tcro184lta2lsyu47vwyp2e8zmtca3k5yq85p6c4vp3" }], "memo": "", "timeout_height": "0", "extension_options": [], "non_critical_extension_options": [] }, "auth_info": { "signer_infos": [{ "public_key": { "@type": "/cosmos.crypto.secp256k1.PubKey", "key": "Ap/w6zWJiX6QCKLTt6jLM1sFJsUmBWaS6VUi7zxqqb0V" }, "mode_info": { "single": { "mode": "SIGN_MODE_DIRECT" } }, "sequence": "794129105682432" }], "fee": { "amount": [], "gas_limit": "8105066556817408", "payer": "", "granter": "" } }, "signatures": [""] }

                anyTx.addSigner({
                    accountNumber: new Big(0),
                    accountSequence: new Big(79),
                    publicKey: Bytes.fromHexString(
                        '03a52c32db89513a187ceb00a4520b52dec06f583f2e12afcf1da78e370a5358e6',
                    ),
                });

                const parsedCosmosJson = JSON.parse(anyTx.toCosmosJSON());

                expect(parsedCosmosJson).to.have.all.keys('body', 'auth_info', 'signatures');
                expect(parsedCosmosJson.body.messages.length).to.greaterThan(0);
                expect(parsedCosmosJson.body).to.haveOwnProperty('memo');
                expect(parsedCosmosJson.body).to.haveOwnProperty('timeout_height');
                expect(parsedCosmosJson.auth_info).to.haveOwnProperty('signer_infos');
                expect(parsedCosmosJson.auth_info.signer_infos.length).to.greaterThan(0);
                expect(parsedCosmosJson.auth_info).to.haveOwnProperty('fee');
                expect(parsedCosmosJson.auth_info.fee).to.haveOwnProperty('gas_limit');
                expect(parseInt(parsedCosmosJson.auth_info.fee.gas_limit, 10)).to.greaterThan(0);
            });
        });
    });

    describe('parseSignerAccounts', function () {
        it('should throw Error when the raw data is not valid JSON', function () {
            expect(() => cro.v2.RawTransactionV2.parseSignerAccounts('invalid JSON')).to.throw(
                'Invalid raw signer accounts',
            );
        });

        it('should throw Error when the raw data is not an array', function () {
            expect(() =>
                cro.v2.RawTransactionV2.parseSignerAccounts(
                    '{"publicKey":"A+eBCWOq3Tv/CYQyLSafRnHG61Hf5tSBv8VGs7sbWoGN","accountNumber":"1","signMode":"1"}',
                ),
            ).to.throw('Expected `rawSignerAccounts` to be of type `array` but received type `Object`');
        });

        it('should throw Error when the raw data is an array of incompatible type', function () {
            expect(() => cro.v2.RawTransactionV2.parseSignerAccounts('[{"foo": "bar"}]')).to.throw(
                '(array `rawSignerAccounts`) Expected property `publicKey` to be of type `string` but received type `undefined` in object `t`',
            );
        });
        it('should throw Error when the `accounNumber` is an incompatible type', function () {
            expect(() =>
                cro.v2.RawTransactionV2.parseSignerAccounts(
                    '[{"publicKey":"A+eBCWOq3Tv/CYQyLSafRnHG61Hf5tSBv8VGs7sbWoGN","accountNumber":"as","signMode":"1"}]',
                ),
            ).to.throw(
                '(array `rawSignerAccounts`) Expected property string `accountNumber` to be an integer string, got `as` in object `t`',
            );
        });
        it('should throw Error when the `signMode` is an invalid value', function () {
            expect(() =>
                cro.v2.RawTransactionV2.parseSignerAccounts(
                    '[{"publicKey":"A+eBCWOq3Tv/CYQyLSafRnHG61Hf5tSBv8VGs7sbWoGN","accountNumber":"1","signMode":"100"}]',
                ),
            ).to.throw(
                '(array `rawSignerAccounts`) Expected property string `signMode` to be SignMode in string, got `100` in object `t`',
            );
        });

        it('should work', function () {
            expect(
                cro.v2.RawTransactionV2.parseSignerAccounts(
                    '[{"publicKey":"A+eBCWOq3Tv/CYQyLSafRnHG61Hf5tSBv8VGs7sbWoGN","accountNumber":"1","signMode":"1"}]',
                ),
            ).to.deep.eq([
                {
                    publicKey: Bytes.fromBase64String('A+eBCWOq3Tv/CYQyLSafRnHG61Hf5tSBv8VGs7sbWoGN'),
                    accountNumber: utils.Big(1),
                    signMode: SIGN_MODE.DIRECT,
                },
            ]);
        });
    });
});
