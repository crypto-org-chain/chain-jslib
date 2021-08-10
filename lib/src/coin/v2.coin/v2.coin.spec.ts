/* eslint-disable */

import { expect } from 'chai';
import { fuzzyDescribe } from '../../test/mocha-fuzzy/suite';

import { CroNetwork, CroSDK } from '../../core/cro';

const cro = CroSDK({ network: CroNetwork.Testnet });

describe('Coin', function () {
    describe('constructor', function () {
        fuzzyDescribe('should throw Error when the provided argument is not (string, Unit)', function (fuzzy) {
            const testRunner = fuzzy(fuzzy.StringArg('1000'), fuzzy.StringArg(cro.v2.CoinV2.UNIT_BASE));
            testRunner(
                function (args0, args1) {
                    if (!args0.valid) {
                        expect(() => new cro.v2.CoinV2(args0.value, args1.value)).to.throw(
                            'Expected `amount` to be of type `string`',
                        );
                    } else if (!args1.valid) {
                        expect(() => new cro.v2.CoinV2(args0.value, args1.value)).to.throw(
                            'Expected `unit` to be of type `string`',
                        );
                    }
                },
                { invalidArgsOnly: true },
            );
        });

        context('When unit is base unit', function () {
            it('should throw Error when the provided string is not a valid number', function () {
                expect(() => new cro.v2.CoinV2('invalid', cro.v2.CoinV2.UNIT_BASE)).to.throw(
                    'Expected amount to be a base10 number represented as string',
                );
            });

            it('should throw Error when the provided string is a floating number', function () {
                expect(() => new cro.v2.CoinV2('1234.5678', cro.v2.CoinV2.UNIT_BASE)).to.throw(
                    'Expected base amount to be an integer',
                );
            });

            it('should throw Error when the provided string is not a base10 number', function () {
                expect(() => new cro.v2.CoinV2('0xff', cro.v2.CoinV2.UNIT_BASE)).to.throw(
                    'Expected amount to be a base10 number represented as string',
                );
            });

            it('should throw Error when the provided string is a negative integer', function () {
                expect(() => new cro.v2.CoinV2('-1000', cro.v2.CoinV2.UNIT_BASE)).to.throw('Expected base amount to be positive');
            });

            it('should throw Error if the value exceed total supply', function () {
                expect(() => new cro.v2.CoinV2('10000000000000000001', cro.v2.CoinV2.UNIT_BASE)).to.throw(
                    'Expected base amount to be within total supply',
                );
            });

            it('should return a coins object of the provided string', function () {
                const anyBaseValue = '1000';
                const coins = new cro.v2.CoinV2(anyBaseValue, cro.v2.CoinV2.UNIT_BASE);

                expect(coins.toString()).to.eq(anyBaseValue);
            });
        });

        context('When unit is CRO', function () {
            it('should throw Error when the provided string is not a valid number', function () {
                expect(() => new cro.v2.CoinV2('invalid', cro.v2.CoinV2.UNIT_CRO)).to.throw(
                    'Expected amount to be a base10 number represented as string',
                );
            });

            it('should throw Error when the provided string is not a base10 number', function () {
                expect(() => new cro.v2.CoinV2('0xff', cro.v2.CoinV2.UNIT_CRO)).to.throw(
                    'Expected amount to be a base10 number represented as string',
                );
            });

            it('should throw Error when the provided string is a negative integer', function () {
                expect(() => new cro.v2.CoinV2('-1000', cro.v2.CoinV2.UNIT_CRO)).to.throw('Expected CRO amount to be positive');
            });

            it('should throw Error when the provided string exceed 8 decimal places', function () {
                expect(() => new cro.v2.CoinV2('1000.123456789', cro.v2.CoinV2.UNIT_CRO)).to.throw(
                    'Expected CRO amount to have at most 8 decimal places',
                );
            });

            it('should throw Error if the value exceed total supply', function () {
                expect(() => new cro.v2.CoinV2('100000000001', cro.v2.CoinV2.UNIT_CRO)).to.throw(
                    'Expected CRO amount to be within total supply',
                );
            });

            it('should return a coins object of the provided string', function () {
                const anyCROValue = '0.00001';
                const coins = new cro.v2.CoinV2(anyCROValue, cro.v2.CoinV2.UNIT_CRO);

                const expectedBaseValue = '1000';
                expect(coins.toString()).to.eq(expectedBaseValue);
            });
        });

        context('When `denom` is passed along other params', function () {
            it('should throw Error when the provided `units` and `denom` do not belong to same network', function () {
                expect(() => new cro.v2.CoinV2('1000000', cro.v2.CoinV2.UNIT_CRO, 'cosmos')).to.throw(
                    'Provided Units and Denom do not belong to the same network.',
                );
            });
            it('should set the `denom` correctly', function () {
                expect(() => new cro.v2.CoinV2('1000000', cro.v2.CoinV2.UNIT_BASE, 'cosmos')).to.not.throw();

                const coin = new cro.v2.CoinV2('1000000', cro.v2.CoinV2.UNIT_BASE, 'cosmos');
                expect(coin.denom).to.equal('cosmos');
                expect(coin.baseAmount.toString()).to.equal('1000000');
            });
            it('should return `baseAmount` correctly on same network `unit` & `denom`', function () {
                expect(() => new cro.v2.CoinV2('1000000', cro.v2.CoinV2.UNIT_CRO, 'cro')).to.not.throw();
                expect(() => new cro.v2.CoinV2('1000000', cro.v2.CoinV2.UNIT_CRO, 'tcro')).to.not.throw();

                const CROcoin = new cro.v2.CoinV2('11111111', cro.v2.CoinV2.UNIT_CRO, 'cro');
                const TCROcoin = new cro.v2.CoinV2('22222222', cro.v2.CoinV2.UNIT_CRO, 'tcro');

                expect(CROcoin.denom).to.equal('cro');
                expect(TCROcoin.denom).to.equal('tcro');

                expect(TCROcoin.baseAmount.toString()).to.equal('2222222200000000');
                expect(TCROcoin.toString()).to.equal('2222222200000000');
                expect(TCROcoin.toString(cro.v2.CoinV2.UNIT_CRO)).to.equal('22222222');

                expect(CROcoin.baseAmount.toString()).to.equal('1111111100000000');
                expect(CROcoin.toString()).to.equal('1111111100000000');
                expect(CROcoin.toString(cro.v2.CoinV2.UNIT_CRO)).to.equal('11111111');
            });
        });
    });

    describe('fromCustomAmountDenom', function () {
        fuzzyDescribe('should throw Error when the provided value is not a string', function (fuzzy) {
            const testRunner = fuzzy(fuzzy.StringArg('1000'));
            testRunner(
                function (arg) {
                    expect(() => cro.v2.CoinV2.fromCustomAmountDenom(arg.value, arg.value)).to.throw(
                        'Expected `amount` to be of type `string`',
                    );
                },
                { invalidArgsOnly: true },
            );
        });

        it('should throw Error when the provided string is not a valid number', function () {
            expect(() => cro.v2.CoinV2.fromCustomAmountDenom('invalid', 'invalid')).to.throw(
                'Expected amount to be a base10 number represented as string,',
            );
        });

        it('should return `coin` instance on correct params', function () {
            const coin = cro.v2.CoinV2.fromCustomAmountDenom('1000', 'uatom');
            expect(coin.denom).to.equal('uatom');
            expect(coin.baseAmount.toString()).to.equal('1000');
            expect(coin.toCosmosCoin().amount).to.equal('1000');
            expect(coin.toCosmosCoin().denom).to.equal('uatom');
        });
    });

    describe('fromBaseUnit', function () {
        fuzzyDescribe('should throw Error when the provided value is not a string', function (fuzzy) {
            const testRunner = fuzzy(fuzzy.StringArg('1000'));
            testRunner(
                function (arg) {
                    expect(() => cro.v2.CoinV2.fromBaseUnit(arg.value)).to.throw('Expected `amount` to be of type `string`');
                },
                { invalidArgsOnly: true },
            );
        });

        it('should throw Error when the provided string is not a valid number', function () {
            expect(() => cro.v2.CoinV2.fromBaseUnit('invalid')).to.throw(
                'Expected amount to be a base10 number represented as string,',
            );
        });

        it('should throw Error when the provided string is a floating number', function () {
            expect(() => cro.v2.CoinV2.fromBaseUnit('1234.5678')).to.throw('Expected base amount to be an integer');
            expect(() => cro.v2.CoinV2.fromBaseUnit('-1234.5678')).to.throw('Expected base amount to be an integer');
        });

        it('should throw Error when the provided string is not a base10 number', function () {
            expect(() => cro.v2.CoinV2.fromBaseUnit('0xff')).to.throw(
                'Expected amount to be a base10 number represented as string',
            );
        });

        it('should throw Error when the provided string is a negative integer', function () {
            expect(() => cro.v2.CoinV2.fromBaseUnit('-1000')).to.throw('Expected base amount to be positive');
        });

        it('should throw Error if the value exceed total supply', function () {
            expect(() => cro.v2.CoinV2.fromBaseUnit('10000000000000000001')).to.throw(
                'Expected base amount to be within total supply',
            );
        });

        it('should return a coins object of the provided base unit string', function () {
            const anyBaseValue = '1000';
            const coins = cro.v2.CoinV2.fromBaseUnit(anyBaseValue);
            expect(coins.toString()).to.eq(anyBaseValue);
        });
    });

    describe('fromCRO', function () {
        fuzzyDescribe('should throw Error when the provided value is not a string', function (fuzzy) {
            const testRunner = fuzzy(fuzzy.StringArg('0.1'));
            testRunner(
                function (arg) {
                    expect(() => cro.v2.CoinV2.fromCRO(arg.value)).to.throw('Expected `amount` to be of type `string`');
                },
                { invalidArgsOnly: true },
            );
        });

        it('should throw Error when the provided string is not a valid number', function () {
            expect(() => cro.v2.CoinV2.fromCRO('invalid')).to.throw(
                'Expected amount to be a base10 number represented as string',
            );
        });

        it('should throw Error when the provided string exceeds 8 decimal places', function () {
            expect(() => cro.v2.CoinV2.fromCRO('1000.123456789')).to.throw(
                'Expected CRO amount to have at most 8 decimal places',
            );
            expect(() => cro.v2.CoinV2.fromCRO('-1000.123456789')).to.throw(
                'Expected CRO amount to have at most 8 decimal places',
            );
        });

        it('should throw Error when the provided string is not a base10 number', function () {
            expect(() => cro.v2.CoinV2.fromCRO('0xff')).to.throw(
                'Expected amount to be a base10 number represented as string',
            );
        });

        it('should throw Error when the provided string is a negative integer', function () {
            expect(() => cro.v2.CoinV2.fromCRO('-1000')).to.throw('Expected CRO amount to be positive');
        });

        it('should throw Error if the value exceed total supply', function () {
            expect(() => cro.v2.CoinV2.fromCRO('10000000000000000001')).to.throw(
                'Expected CRO amount to be within total supply',
            );
        });

        it('should return a coins object of the provided CRO unit string', function () {
            const anyCROValue = '0.00001';
            const coins = cro.v2.CoinV2.fromCRO(anyCROValue);

            const expectedBaseValue = '1000';
            expect(coins.toString()).to.eq(expectedBaseValue);
        });
    });

    describe('toCosmosCoin', function () {
        it('should return the Cosmos Coin object', function () {
            const anyCoin = cro.v2.CoinV2.fromBaseUnit('1000');
            expect(anyCoin.toCosmosCoin()).to.deep.eq({
                amount: '1000',
                denom: CroNetwork.Testnet.coin.baseDenom,
            });
        });
    });

    describe('toString', function () {
        fuzzyDescribe('should throw Error when the provided unit is not a string', function (fuzzy) {
            const testRunner = fuzzy(fuzzy.optional(fuzzy.String)(cro.v2.CoinV2.UNIT_BASE));
            testRunner(
                function (arg) {
                    const anyCoin = cro.v2.CoinV2.fromBaseUnit('1000');
                    expect(() => anyCoin.toString(arg.value)).to.throw('Expected argument to be of type `string`');
                },
                { invalidArgsOnly: true },
            );
        });

        it('should throw Error when the provided unit is invalid', function () {
            const anyCoin = cro.v2.CoinV2.fromBaseUnit('1000');

            expect(() => anyCoin.toString('invalid' as any)).to.throw('Expected string to be one of the Coin units');
        });

        it('should return the base unit when no unit is provided', function () {
            const anyBaseValue = '1000';
            const coins = cro.v2.CoinV2.fromBaseUnit(anyBaseValue);

            expect(coins.toString()).to.eq(anyBaseValue);
        });

        it('should return the base unit when unit is base', function () {
            const anyBaseValue = '1000';
            const coins = cro.v2.CoinV2.fromBaseUnit(anyBaseValue);

            expect(coins.toString(cro.v2.CoinV2.UNIT_BASE)).to.eq(anyBaseValue);
        });

        it('should return the CRO value when unit is CRO', function () {
            const anyBaseValue = '1000';
            const coins = cro.v2.CoinV2.fromBaseUnit(anyBaseValue);

            const expectedCROValue = '0.00001';
            expect(coins.toString(cro.v2.CoinV2.UNIT_CRO)).to.eq(expectedCROValue);
        });

        it('should return the CRO value when unit is CRO and has 8 decimal places', function () {
            const anyBaseValue = '12345678';
            const coins = cro.v2.CoinV2.fromBaseUnit(anyBaseValue);

            const expectedCROValue = '0.12345678';
            expect(coins.toString(cro.v2.CoinV2.UNIT_CRO)).to.eq(expectedCROValue);
        });
    });
});
