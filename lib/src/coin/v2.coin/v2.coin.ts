import Big from 'big.js';
import ow from 'ow';

import { owCoinUnit } from '../ow.types';
import { InitConfigurations, CroNetwork } from '../../core/cro';
import { Network } from '../../network/network';
import { Coin as CosmosCoin, coin as cosmosCoin, coins as cosmosCoins } from '../../cosmos/coins';

export enum Units {
    BASE = 'base',
    CRO = 'cro',
}

// Duck type check due to limitations of non exportable type for proper instance of checks
export function isCoin(object: Object): boolean {
    // eslint-disable-next-line no-prototype-builtins
    return object.hasOwnProperty('baseAmount');
}

// Mainly used to export Coin type
export interface ICoin {
    toCosmosCoin(): CosmosCoin;

    toCosmosCoins(): CosmosCoin[];

    getNetwork(): Network;
}

export const coinv2 = function (config: InitConfigurations) {
    return class CoinV2 implements ICoin {
        public static croAllDenoms = [
            ...Object.values(CroNetwork.Mainnet.coin),
            ...Object.values(CroNetwork.Testnet.coin),
        ];

        /**
         * Total supply in base unit represented as string
         * @type {string}
         * @static
         * @memberof Coin
         */
        public static TOTAL_SUPPLY_STRING = '10000000000000000000';

        public static TOTAL_SUPPLY = new CoinV2(CoinV2.TOTAL_SUPPLY_STRING, Units.BASE);

        /**
         * One CRO in base unit represented as Big object
         * @type {Big}
         * @static
         * @memberof Coin
         */
        public static ONE_CRO_IN_BASE_UNIT = new Big('100000000');

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

        public readonly network: Network;

        public readonly denom: string;

        public readonly receivedAmount: Big;

        /**
         * Constructor to create a Coin
         * @param {string} amount coins amount represented as string
         * @param {Units} unit unit of the coins
         * @param {string} denom chain compatible denom value (Optional)
         * @throws {Error} amount or unit is invalid
         * @returns {CoinV2}
         */
        constructor(amount: string, unit: Units, denom?: string) {
            ow(amount, 'amount', ow.string);
            ow(denom, 'denom', ow.optional.string);
            ow(unit, 'unit', owCoinUnit);

            let coins: Big;
            try {
                coins = new Big(amount);
            } catch (err) {
                throw new TypeError(`Expected amount to be a base10 number represented as string, got \`${amount}\``);
            }
            this.network = config.network;

            this.baseAmount = coins;

            if (unit === Units.BASE) {
                this.baseAmount = CoinV2.parseBaseAmount(coins);
            } else if (unit === Units.CRO) {
                if (typeof denom === 'undefined') {
                    this.baseAmount = CoinV2.parseCROAmount(coins);
                } else if (['cro', 'tcro'].includes(denom.toLowerCase())) {
                    this.baseAmount = CoinV2.parseCROAmount(coins);
                } else if (!['cro', 'tcro'].includes(denom.toLowerCase())) {
                    throw new Error('Provided Units and Denom do not belong to the same network.');
                }
            }
            this.denom = denom || this.network.coin.baseDenom;
            this.receivedAmount = coins;
        }

        /**
         *
         * @param {string} amount amount in base unit
         * @param {string} denom chain compatible denom value
         */
        public static fromCustomAmountDenom = (amount: string, denom: string): CoinV2 => {
            return new CoinV2(amount, Units.BASE, denom);
        };

        getNetwork(): Network {
            return this.network;
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

            if (baseAmount.gt(CoinV2.TOTAL_SUPPLY_STRING)) {
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
            const baseAmount = croAmount.mul(CoinV2.ONE_CRO_IN_BASE_UNIT);
            if (baseAmount.cmp(baseAmount.toFixed(0)) !== 0) {
                throw new TypeError(`Expected CRO amount to have at most 8 decimal places, got \`${croAmount}\``);
            }

            if (baseAmount.lt(0)) {
                throw new TypeError(`Expected CRO amount to be positive, got \`${croAmount}\``);
            }

            if (baseAmount.gt(CoinV2.TOTAL_SUPPLY_STRING)) {
                throw new TypeError(`Expected CRO amount to be within total supply, got \`${croAmount}\``);
            }

            return baseAmount;
        }

        /**
         * Create a Coin from the base unit
         * @param {string} baseValue coins value in base unit
         * @returns {CoinV2}
         * @throws {Error} base value is invalid
         * @memberof Coin
         */
        public static fromBaseUnit(baseValue: string): CoinV2 {
            return new CoinV2(baseValue, Units.BASE);
        }

        /**
         * Create a Coin from CRO unit
         * @param {string} croValue coins value in CRO unit
         * @returns {CoinV2}
         * @throws {Error} cro value is invalid
         * @memberof Coin
         */
        public static fromCRO(croValue: string): CoinV2 {
            return new CoinV2(croValue, Units.CRO);
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
            return cosmosCoin(this.toString(Units.BASE), this.denom);
        }

        /**
         * Returns the Cosmos-compatible Coin object representation
         * @returns {CosmosCoin[]}
         * @memberof Coin
         * */
        public toCosmosCoins(): CosmosCoin[] {
            return cosmosCoins(this.toString(Units.BASE), this.denom);
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

            if (!CoinV2.croAllDenoms.includes(this.denom)) {
                return this.receivedAmount.toString();
            }
            if (unit === Units.BASE) {
                return this.baseAmount.toString();
            }
            return this.baseAmount.div(CoinV2.ONE_CRO_IN_BASE_UNIT).toString();
        }
    };
};
