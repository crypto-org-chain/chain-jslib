import Big from 'big.js';
import ow from 'ow';

import { owCoin, owCoinUnit } from './ow.types';
import { InitConfigurations } from '../core/cro';

export enum Units {
    BASE = 'base',
    CRO = 'cro',
}

export const coin = function (config: InitConfigurations) {
    // TODO: support network
    return {
        Coin: class Coin {
            /**
             * Total supply in base unit represented as string
             * @type {string}
             * @static
             * @memberof Coin
             */
            public static TOTAL_SUPPLY_STRING = '10000000000000000000';

            public static TOTAL_SUPPLY = new Coin(Coin.TOTAL_SUPPLY_STRING, Units.BASE);

            /**
             * One CRO in base unit represented as Big object
             * @type {Big}
             * @static
             * @memberof Coin
             */
            public static ONE_CRO_IN_BASE_UNIT = new Big('100000000');

            /**
             * List of Coin unit enum
             * @type {Units}
             * @static
             * @memberof Coin
             */
            public static UNITS = Units;

            /**
             * Denote base unit
             * @type {string}
             * @static
             * @memberof Coin
             */
            public static UNIT_BASE = Units.BASE;

            /**
             * Denote CRO unit
             * @type {string}
             * @static
             * @memberof Coin
             */
            public static UNIT_CRO = Units.CRO;

            /**
             * Coin value stored in basic unit as Big
             */
            public readonly baseAmount: Big;

            /**
             * Constructor to create a Coin
             * @param {string} amount coins amount represented as string
             * @param {Units} unit unit of the coins
             * @param {Network} network current network configuration
             * @throws {Error} amount or unit is invalid
             * @returns {Coin}
             */
            constructor(amount: string, unit: Units) {
                ow(amount, 'amount', ow.string);
                ow(unit, 'unit', owCoinUnit);
                // ow(network, 'network', owNetwork());

                // this.network = network;

                let coins: Big;
                try {
                    coins = new Big(amount);
                } catch (err) {
                    throw new TypeError(
                        `Expected amount to be a base10 number represented as string, got \`${amount}\``,
                    );
                }

                this.baseAmount = unit === Units.BASE ? Coin.parseBaseAmount(coins) : Coin.parseCROAmount(coins);
            }

            /**
             * Parse and validate a amount in base unit represented as Big
             * @param {Big} baseAmount amount in base unit
             * @returns {Big} the parsed coins in base unit
             * @throws {TypeError} coins amount is invalid
             */
            static parseBaseAmount(baseAmount: Big): Big {
                if (baseAmount.cmp(baseAmount.toFixed(0)) !== 0) {
                    throw new TypeError(`Expected base amount to be an integer, got \`${baseAmount}\``);
                }
                if (baseAmount.lt(0)) {
                    throw new TypeError(`Expected base amount to be positive, got \`${baseAmount}\``);
                }

                if (baseAmount.gt(Coin.TOTAL_SUPPLY_STRING)) {
                    throw new TypeError(`Expected base amount to be within total supply, got \`${baseAmount}\``);
                }

                return baseAmount;
            }

            /**
             * Parse and validate a amount in CRO unit represented as Big to base unit
             * @param {Big} croAmount amount in CRO unit
             * @returns {Big} the parsed coins in base unit
             * @throws {TypeError} coins amount is invalid
             */
            static parseCROAmount(croAmount: Big): Big {
                const baseAmount = croAmount.mul(Coin.ONE_CRO_IN_BASE_UNIT);
                if (baseAmount.cmp(baseAmount.toFixed(0)) !== 0) {
                    throw new TypeError(`Expected CRO amount to have at most 8 decimal places, got \`${croAmount}\``);
                }

                if (baseAmount.lt(0)) {
                    throw new TypeError(`Expected CRO amount to be positive, got \`${croAmount}\``);
                }

                if (baseAmount.gt(Coin.TOTAL_SUPPLY_STRING)) {
                    throw new TypeError(`Expected CRO amount to be within total supply, got \`${croAmount}\``);
                }

                return baseAmount;
            }

            /**
             * Create a Coin from the base unit
             * @param {string} baseValue coins value in base unit
             * @returns {Coin}
             * @throws {Error} base value is invalid
             * @memberof Coin
             */
            public static fromBaseUnit(baseValue: string): Coin {
                return new Coin(baseValue, Units.BASE);
            }

            /**
             * Create a Coin from CRO unit
             * @param {string} croValue coins value in CRO unit
             * @returns {Coin}
             * @throws {Error} cro value is invalid
             * @memberof Coin
             */
            public static fromCRO(croValue: string): Coin {
                return new Coin(croValue, Units.CRO);
            }

            /**
             * Add two coins together and returns a new Coin
             * @param {Coin} anotherCoin coins to add
             * @returns {Coin}
             * @throws {Error} adding two coins would exceed total supply
             * @memberof Coin
             */
            public add(anotherCoin: Coin): Coin {
                ow(anotherCoin, owCoin());

                const newAmount = this.baseAmount.add(anotherCoin.toBig());
                if (newAmount.gt(Coin.TOTAL_SUPPLY_STRING)) {
                    throw new Error('Adding two Coin together exceed total supply');
                }
                return new Coin(newAmount.toString(), Units.BASE);
            }

            /**
             * Subtract another Coin and returns a new Coin
             * @param {Coin} anotherCoin coins to subtract
             * @returns {Coin}
             * @throws {Error} subtracting two coins would become negative
             * @memberof Coin
             */
            public sub(anotherCoin: Coin): Coin {
                ow(anotherCoin, owCoin());

                const newAmount = this.baseAmount.sub(anotherCoin.toBig());
                if (newAmount.lt(0)) {
                    throw new Error('Subtracting the Coin results in negation Coin');
                }
                return new Coin(newAmount.toString(), Units.BASE);
            }

            /**
             * Returns the Big representation of the Coin in base unit
             * @returns {Big}
             * @memberof Coin
             */
            public toBig(): Big {
                return this.baseAmount;
            }

            /**
             * Returns the Cosmos-compatible Coin object representation
             * @returns {CosmosCoin}
             * @memberof Coin
             * */
            public toCosmosCoin(): CosmosCoin {
                return {
                    amount: this.toString(Units.BASE),
                    denom: config.network.coin.baseDenom,
                };
            }

            /**
             * Returns a string representation of the Coin in the specified unit. Default unit is base.
             * @param {Units} [unit=Unit.Base] coins unit
             * @returns {string}
             * @throws {Error} unit is invalid
             * @memberof Coin
             */
            public toString(unit: Units = Units.BASE): string {
                ow(unit, owCoinUnit);

                if (unit === Units.BASE) {
                    return this.baseAmount.toString();
                }
                return this.baseAmount.div(Coin.ONE_CRO_IN_BASE_UNIT).toString();
            }
        },
    };
};

export type CosmosCoin = {
    amount: string;
    denom: string;
};
