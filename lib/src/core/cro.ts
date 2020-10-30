import { Network } from '../network/network';
import { Coin, Units } from '../coin/coin';

export class Cro {
    public options: InitOptions;

    constructor(options: InitOptions) {
        // TODO : Add proper validation with ow
        this.options = options;
    }

    public coin(amount: string, unit: Units): Coin {
        return new Coin(amount, unit, this.options.network);
    }

    /**
     * Create a Coin from the base unit
     * @param {string} baseValue coins value in base unit
     * @returns {Coin}
     * @throws {Error} base value is invalid
     * @memberof Cro
     */
    public coinFromBaseUnit(baseValue: string): Coin {
        return new Coin(baseValue, Units.BASE, this.options.network);
    }

    /**
     * Create a Coin from CRO unit
     * @param {string} croValue coins value in CRO unit
     * @returns {Coin}
     * @throws {Error} cro value is invalid
     * @memberof Cro
     */
    public coinFromCRO(croValue: string): Coin {
        return new Coin(croValue, Units.CRO, this.options.network);
    }
}

export type InitOptions = {
    network: Network;
};
