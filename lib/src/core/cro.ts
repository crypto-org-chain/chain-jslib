import ow from 'ow';
import { Network } from '../network/network';
import { Coin, Units } from '../coin/coin';
import { RawTransaction } from '../transaction/raw';
import { owCroInitParams } from './ow.types';

export class Cro {
    public readonly configs: InitConfigurations;

    constructor(options: InitConfigurations) {
        ow(options, 'configs', owCroInitParams);
        this.configs = options;
    }

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

    public RawTransaction(): RawTransaction {
        return new RawTransaction({ network: this.configs.network });
    }
}

export type InitConfigurations = {
    network: Network;
};
