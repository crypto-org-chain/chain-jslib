import Big from 'big.js';
import ow from 'ow';

import { owCoin } from './ow.types';
import { InitConfigurations } from '../core/cro';
import { Network } from '../network/network';
import { Coin as CosmosCoin, coin as cosmosCoin, coins as cosmosCoins } from '../cosmos/coins';
import { ICoin } from './coin';

export const cronosCoin = function (config: InitConfigurations) {
    return class Coin implements ICoin {
        /**
         * Total supply in base unit represented as string
         * @type {string}
         * @static
         * @memberof Coin
         */
        public static TOTAL_SUPPLY_STRING = '100000000000000000000000000000';

        public static TOTAL_SUPPLY = new Coin(Coin.TOTAL_SUPPLY_STRING);

        /**
         * Coin value stored in basic unit as Big
         */
        public readonly baseAmount: Big;

        public readonly network: Network;

        /**
         * Constructor to create a Coin
         * @param {string} amount coins amount represented as string
         * @throws {Error} amount or unit is invalid
         * @returns {Coin}
         */
        constructor(amount: string) {
            ow(amount, 'amount', ow.string);

            let coins: Big;
            try {
                coins = new Big(amount);
            } catch (err) {
                throw new TypeError(`Expected amount to be a base10 number represented as string, got \`${amount}\``);
            }
            this.network = config.network;
            this.baseAmount = Coin.parseBaseAmount(coins);
        }

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

            if (baseAmount.gt(Coin.TOTAL_SUPPLY_STRING)) {
                throw new TypeError(`Expected base amount to be within total supply, got \`${baseAmount}\``);
            }

            return baseAmount;
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
            return new Coin(newAmount.toString());
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
            return new Coin(newAmount.toString());
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
            return cosmosCoin(this.toString(), config.network.coin.baseDenom);
        }

        /**
         * Returns the Cosmos-compatible Coin object representation
         * @returns {CosmosCoin[]}
         * @memberof Coin
         * */
        public toCosmosCoins(): CosmosCoin[] {
            return cosmosCoins(this.toString(), config.network.coin.baseDenom);
        }

        /**
         * Returns a string representation of the Coin.
         * @returns {string}
         * @throws {Error} unit is invalid
         * @memberof Coin
         */
        public toString(): string {
            return this.baseAmount.toString();
        }
    };
};
