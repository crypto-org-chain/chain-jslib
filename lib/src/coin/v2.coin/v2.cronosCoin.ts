import Big from 'big.js';
import ow from 'ow';

import { InitConfigurations, CroNetwork } from '../../core/cro';
import { Network } from '../../network/network';
import { Coin as CosmosCoin, coin as cosmosCoin, coins as cosmosCoins } from '../../cosmos/coins';

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

export const cronosCoinv2 = function (config: InitConfigurations) {
    return class CronosCoinV2 implements ICoin {
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
        public static TOTAL_SUPPLY_STRING = '100000000000000000000000000000';

        public static TOTAL_SUPPLY = new CronosCoinV2(CronosCoinV2.TOTAL_SUPPLY_STRING);

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
         * @param {string} denom chain compatible denom value (Optional)
         * @throws {Error} amount or unit is invalid
         * @returns {CoinV2}
         */
        constructor(amount: string, denom?: string) {
            ow(amount, 'amount', ow.string);
            ow(denom, 'denom', ow.optional.string);

            let coins: Big;
            try {
                coins = new Big(amount);
            } catch (err) {
                throw new TypeError(`Expected amount to be a base10 number represented as string, got \`${amount}\``);
            }
            this.network = config.network;

            this.baseAmount = coins;

            this.baseAmount = CronosCoinV2.parseBaseAmount(coins);
            this.denom = denom || this.network.coin.baseDenom;
            this.receivedAmount = coins;
        }

        /**
         *
         * @param {string} amount amount in base unit
         * @param {string} denom chain compatible denom value
         */
        public static fromCustomAmountDenom = (amount: string, denom: string): CronosCoinV2 => {
            return new CronosCoinV2(amount, denom);
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

            if (baseAmount.gt(CronosCoinV2.TOTAL_SUPPLY_STRING)) {
                throw new TypeError(`Expected base amount to be within total supply, got \`${baseAmount}\``);
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
        public static fromBaseUnit(baseValue: string): CronosCoinV2 {
            return new CronosCoinV2(baseValue);
        }

        /**
         * Returns the Cosmos-compatible Coin object representation
         * @returns {CosmosCoin}
         * @memberof Coin
         * */
        public toCosmosCoin(): CosmosCoin {
            return cosmosCoin(this.toString(), this.denom);
        }

        /**
         * Returns the Cosmos-compatible Coin object representation
         * @returns {CosmosCoin[]}
         * @memberof Coin
         * */
        public toCosmosCoins(): CosmosCoin[] {
            return cosmosCoins(this.toString(), this.denom);
        }

        /**
         * Returns a string representation of the Coin in the specified unit. Default unit is base.
         * @returns {string}
         * @throws {Error} unit is invalid
         * @memberof Coin
         */
        public toString(): string {
            return this.baseAmount.toString();
        }
    };
};
