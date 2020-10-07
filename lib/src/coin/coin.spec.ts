import 'mocha';
import { expect } from 'chai';
import { fuzzyDescribe } from '../test/mocha-fuzz/suite';

import { Coin } from './coin';

describe('Coin', function () {
    describe('constructor', function () {
        fuzzyDescribe('should throw Error when the provided argument is not (string, Unit)', function (fuzzy) {
            const testRunner = fuzzy(fuzzy.StringArg('1000'), fuzzy.StringArg(Coin.UNIT_BASE));
            testRunner(
                function (args0, args1) {
                    if (!args0.valid) {
                        expect(() => new Coin(args0.value, args1.value)).to.throw(
                            'Expected `amount` to be of type `string`',
                        );
                    } else if (!args1.valid) {
                        expect(() => new Coin(args0.value, args1.value)).to.throw(
                            'Expected `unit` to be of type `string`',
                        );
                    }
                },
                { invalidArgsOnly: true },
            );
        });

        context('When unit is base unit', function () {
            it('should throw Error when the provided string is not a valid number', function () {
                expect(() => new Coin('invalid', Coin.UNIT_BASE)).to.throw(
                    'Expected amount to be a base10 number represented as string',
                );
            });

            it('should throw Error when the provided string is a floating number', function () {
                expect(() => new Coin('1234.5678', Coin.UNIT_BASE)).to.throw('Expected base amount to be an integer');
            });

            it('should throw Error when the provided string is not a base10 number', function () {
                expect(() => new Coin('0xff', Coin.UNIT_BASE)).to.throw(
                    'Expected amount to be a base10 number represented as string',
                );
            });

            it('should throw Error when the provided string is a negative integer', function () {
                expect(() => new Coin('-1000', Coin.UNIT_BASE)).to.throw('Expected base amount to be positive');
            });

            it('should throw Error if the value exceed total supply', function () {
                expect(() => new Coin('10000000000000000001', Coin.UNIT_BASE)).to.throw(
                    'Expected base amount to be within total supply',
                );
            });

            it('should return a coins object of the provided string', function () {
                const anyBaseValue = '1000';
                const coins = new Coin(anyBaseValue, Coin.UNIT_BASE);

                expect(coins.toString()).to.eq(anyBaseValue);
            });
        });

        context('When unit is CRO', function () {
            it('should throw Error when the provided string is not a valid number', function () {
                expect(() => new Coin('invalid', Coin.UNIT_CRO)).to.throw(
                    'Expected amount to be a base10 number represented as string',
                );
            });

            it('should throw Error when the provided string is not a base10 number', function () {
                expect(() => new Coin('0xff', Coin.UNIT_CRO)).to.throw(
                    'Expected amount to be a base10 number represented as string',
                );
            });

            it('should throw Error when the provided string is a negative integer', function () {
                expect(() => new Coin('-1000', Coin.UNIT_CRO)).to.throw('Expected CRO amount to be positive');
            });

            it('should throw Error when the provided string exceed 8 decimal places', function () {
                expect(() => new Coin('1000.123456789', Coin.UNIT_CRO)).to.throw(
                    'Expected CRO amount to have at most 8 decimal places',
                );
            });

            it('should throw Error if the value exceed total supply', function () {
                expect(() => new Coin('100000000001', Coin.UNIT_CRO)).to.throw(
                    'Expected CRO amount to be within total supply',
                );
            });

            it('should return a coins object of the provided string', function () {
                const anyCROValue = '0.00001';
                const coins = new Coin(anyCROValue, Coin.UNIT_CRO);

                const expectedBaseValue = '1000';
                expect(coins.toString()).to.eq(expectedBaseValue);
            });
        });
    });

    describe('fromBaseUnit', function () {
        fuzzyDescribe('should throw Error when the provided value is not a string', function (fuzzy) {
            const testRunner = fuzzy(fuzzy.StringArg('1000'));
            testRunner(
                function (arg) {
                    expect(() => Coin.fromBaseUnit(arg.value)).to.throw('Expected `amount` to be of type `string`');
                },
                { invalidArgsOnly: true },
            );
        });

        it('should throw Error when the provided string is not a valid number', function () {
            expect(() => Coin.fromBaseUnit('invalid')).to.throw(
                'Expected amount to be a base10 number represented as string,',
            );
        });

        it('should throw Error when the provided string is a floating number', function () {
            expect(() => Coin.fromBaseUnit('1234.5678')).to.throw('Expected base amount to be an integer');
            expect(() => Coin.fromBaseUnit('-1234.5678')).to.throw('Expected base amount to be an integer');
        });

        it('should throw Error when the provided string is not a base10 number', function () {
            expect(() => Coin.fromBaseUnit('0xff')).to.throw(
                'Expected amount to be a base10 number represented as string',
            );
        });

        it('should throw Error when the provided string is a negative integer', function () {
            expect(() => Coin.fromBaseUnit('-1000')).to.throw('Expected base amount to be positive');
        });

        it('should throw Error if the value exceed total supply', function () {
            expect(() => Coin.fromBaseUnit('10000000000000000001')).to.throw(
                'Expected base amount to be within total supply',
            );
        });

        it('should return a coins object of the provided base unit string', function () {
            const anyBaseValue = '1000';
            const coins = Coin.fromBaseUnit(anyBaseValue);

            expect(coins.toString()).to.eq(anyBaseValue);
        });
    });

    describe('fromCRO', function () {
        fuzzyDescribe('should throw Error when the provided value is not a string', function (fuzzy) {
            const testRunner = fuzzy(fuzzy.StringArg('0.1'));
            testRunner(
                function (arg) {
                    expect(() => Coin.fromCRO(arg.value)).to.throw('Expected `amount` to be of type `string`');
                },
                { invalidArgsOnly: true },
            );
        });

        it('should throw Error when the provided string is not a valid number', function () {
            expect(() => Coin.fromCRO('invalid')).to.throw(
                'Expected amount to be a base10 number represented as string',
            );
        });

        it('should throw Error when the provided string exceeds 8 decimal places', function () {
            expect(() => Coin.fromCRO('1000.123456789')).to.throw(
                'Expected CRO amount to have at most 8 decimal places',
            );
            expect(() => Coin.fromCRO('-1000.123456789')).to.throw(
                'Expected CRO amount to have at most 8 decimal places',
            );
        });

        it('should throw Error when the provided string is not a base10 number', function () {
            expect(() => Coin.fromCRO('0xff')).to.throw('Expected amount to be a base10 number represented as string');
        });

        it('should throw Error when the provided string is a negative integer', function () {
            expect(() => Coin.fromCRO('-1000')).to.throw('Expected CRO amount to be positive');
        });

        it('should throw Error if the value exceed total supply', function () {
            expect(() => Coin.fromCRO('10000000000000000001')).to.throw(
                'Expected CRO amount to be within total supply',
            );
        });

        it('should return a coins object of the provided CRO unit string', function () {
            const anyCROValue = '0.00001';
            const coins = Coin.fromCRO(anyCROValue);

            const expectedBaseValue = '1000';
            expect(coins.toString()).to.eq(expectedBaseValue);
        });
    });

    describe('add', function () {
        fuzzyDescribe('should throw Error when the provided coins is not an instance of Coin', function (fuzzy) {
            const anyValidCoin = Coin.fromBaseUnit('1000');
            const testRunner = fuzzy(fuzzy.NonPrimitiveArg(anyValidCoin));
            testRunner(
                function (arg) {
                    const anyCoin = Coin.fromBaseUnit('1000');

                    let expectedErrMsg: string;
                    if (arg.type === fuzzy.Object) {
                        expectedErrMsg = 'Expected argument to be an instance of `Coin`';
                    } else {
                        expectedErrMsg = 'Expected argument to be of type `object`';
                    }
                    expect(() => anyCoin.add(arg.value)).to.throw(expectedErrMsg);
                },
                { invalidArgsOnly: true },
            );
        });

        it('should throw Error when the result exceeds total supply', function () {
            const totalSupply = Coin.TOTAL_SUPPLY;
            const oneBaseUnit = Coin.fromBaseUnit('1');

            expect(() => totalSupply.add(oneBaseUnit)).to.throw('Adding two Coin together exceed total supply');
        });

        it('should return the sum of the two coins', function () {
            const anyCoin = Coin.fromBaseUnit('1000');
            const anyAnotherCoin = Coin.fromBaseUnit('10000000');

            expect(anyCoin.add(anyAnotherCoin).toString()).to.eq('10001000');
        });

        it('should return a new coins without modifying the original coins', function () {
            const anyCoinValue = '1000';
            const anyCoin = Coin.fromBaseUnit(anyCoinValue);
            const anyAnotherCoin = Coin.fromBaseUnit('10000000');

            anyCoin.add(anyAnotherCoin);
            expect(anyCoin.toString()).to.eq(anyCoinValue);
        });
    });

    describe('sub', function () {
        fuzzyDescribe('should throw Error when the provided coins is not an instance of Coin', function (fuzzy) {
            const anyValidCoin = Coin.fromBaseUnit('1000');
            const testRunner = fuzzy(fuzzy.NonPrimitiveArg(anyValidCoin));
            testRunner(
                function (arg) {
                    const anyCoin = Coin.fromBaseUnit('1000');

                    let expectedErrMsg: string;
                    if (arg.type === fuzzy.Object) {
                        expectedErrMsg = 'Expected argument to be an instance of `Coin`';
                    } else {
                        expectedErrMsg = 'Expected argument to be of type `object`';
                    }
                    expect(() => anyCoin.sub(arg.value)).to.throw(expectedErrMsg);
                },
                { invalidArgsOnly: true },
            );
        });

        it('should throw Error when the result is negative', function () {
            const oneBaseUnit = Coin.fromBaseUnit('1');
            const twoBaseUnit = Coin.fromBaseUnit('2');

            expect(() => oneBaseUnit.sub(twoBaseUnit)).to.throw('Subtracting the Coin results in negation Coin');
        });

        it('should return the result of subtracting Coin with the provided Coin', function () {
            const anyCoin = Coin.fromBaseUnit('10006000');
            const anyAnotherCoin = Coin.fromBaseUnit('1000');

            expect(anyCoin.sub(anyAnotherCoin).toString()).to.eq('10005000');
        });

        it('should return a new coins without modifying the original coins', function () {
            const anyCoinValue = '10006000';
            const anyCoin = Coin.fromBaseUnit(anyCoinValue);
            const anyAnotherCoin = Coin.fromBaseUnit('1000');

            anyCoin.sub(anyAnotherCoin);
            expect(anyCoin.toString()).to.eq(anyCoinValue);
        });
    });

    describe('toString', function () {
        fuzzyDescribe('should throw Error when the provided unit is not a string', function (fuzzy) {
            const testRunner = fuzzy(fuzzy.optional(fuzzy.String)(Coin.UNIT_BASE));
            testRunner(
                function (arg) {
                    const anyCoin = Coin.fromBaseUnit('1000');
                    expect(() => anyCoin.toString(arg.value)).to.throw('Expected argument to be of type `string`');
                },
                { invalidArgsOnly: true },
            );
        });

        it('should throw Error when the provided unit is invalid', function () {
            const anyCoin = Coin.fromBaseUnit('1000');

            expect(() => anyCoin.toString('invalid' as any)).to.throw('Expected argument to be one of the Coin units');
        });

        it('should return the base unit when no unit is provided', function () {
            const anyBaseValue = '1000';
            const coins = Coin.fromBaseUnit(anyBaseValue);

            expect(coins.toString()).to.eq(anyBaseValue);
        });

        it('should return the base unit when unit is base', function () {
            const anyBaseValue = '1000';
            const coins = Coin.fromBaseUnit(anyBaseValue);

            expect(coins.toString(Coin.UNIT_BASE)).to.eq(anyBaseValue);
        });

        it('should return the CRO value when unit is CRO', function () {
            const anyBaseValue = '1000';
            const coins = Coin.fromBaseUnit(anyBaseValue);

            const expectedCROValue = '0.00001';
            expect(coins.toString(Coin.UNIT_CRO)).to.eq(expectedCROValue);
        });

        it('should return the CRO value when unit is CRO and has 8 decimal places', function () {
            const anyBaseValue = '12345678';
            const coins = Coin.fromBaseUnit(anyBaseValue);

            const expectedCROValue = '0.12345678';
            expect(coins.toString(Coin.UNIT_CRO)).to.eq(expectedCROValue);
        });
    });
});
