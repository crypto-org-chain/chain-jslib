import ow from 'ow';
import { Network } from '../network/network';
import { Coin, Units } from '../coin/coin';
import { RawTransaction } from '../transaction/raw';
import { owCroSDKInitParams } from './ow.types';

export class CroSDK {
    public readonly configs: InitConfigurations;

    public static Testnet: Network = {
        chainId: 'testnet-croeseid-1',
        addressPrefix: 'tcro',
        coin: {
            baseDenom: 'basetcro',
            croDenom: 'tcro',
        },
        bip44Path: {
            coinType: 1,
            account: 0,
        },
    };

    /**
     * Constructor to create a CroSDK
     * @param {InitConfigurations} configs SDK initialization configurations
     * @throws {Error} amount or unit is invalid
     * @returns {CroSDK}
     */
    constructor(configs: InitConfigurations) {
        ow(configs, 'configs', owCroSDKInitParams);
        this.configs = configs;
    }

    /**
     * Create a network aware Coin object from sdk config
     * @param {string} amount coins value in specified unit
     * @param {Units} unit unit for the specified amount
     * @returns {Coin}
     * @throws {Error} base value is invalid
     * @memberof CroSDK
     */
    public Coin(amount: string, unit: Units): Coin {
        return new Coin(amount, unit, this.configs.network);
    }

    /**
     * Create a Coin from the base unit
     * @param {string} baseValue coins value in base unit
     * @returns {Coin}
     * @throws {Error} base value is invalid
     * @memberof Cro
     */
    public coinFromBaseUnit(baseValue: string): Coin {
        return new Coin(baseValue, Units.BASE, this.configs.network);
    }

    /**
     * Create a Coin from CRO unit
     * @param {string} croValue coins value in CRO unit
     * @returns {Coin}
     * @throws {Error} cro value is invalid
     * @memberof Cro
     */
    public coinFromCRO(croValue: string): Coin {
        return new Coin(croValue, Units.CRO, this.configs.network);
    }

    /**
     * Create a new network aware RawTransaction from sdk configs
     * @returns {RawTransaction}
     * @throws {Error} when options is invalid
     */
    public RawTransaction(): RawTransaction {
        return new RawTransaction({ network: this.configs.network });
    }
}

export type InitConfigurations = {
    network: Network;
    // More sdk configs to be added in the future
};
