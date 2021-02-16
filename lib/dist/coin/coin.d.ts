import Big from 'big.js';
import { InitConfigurations } from '../core/cro';
import { Network } from '../network/network';
import { Coin as CosmosCoin } from '../cosmos/coins';
export declare enum Units {
    BASE = "base",
    CRO = "cro"
}
export declare function isCoin(object: Object): boolean;
export interface ICoin {
    toCosmosCoin(): CosmosCoin;
    toCosmosCoins(): CosmosCoin[];
    getNetwork(): Network;
}
export declare const coin: (config: InitConfigurations) => {
    new (amount: string, unit: Units): {
        readonly baseAmount: Big;
        readonly network: Network;
        getNetwork(): Network;
        add(anotherCoin: any): any;
        sub(anotherCoin: any): any;
        toBig(): Big;
        toCosmosCoin(): CosmosCoin;
        toCosmosCoins(): CosmosCoin[];
        toString(unit?: Units): string;
    };
    TOTAL_SUPPLY_STRING: string;
    TOTAL_SUPPLY: {
        readonly baseAmount: Big;
        readonly network: Network;
        getNetwork(): Network;
        add(anotherCoin: any): any;
        sub(anotherCoin: any): any;
        toBig(): Big;
        toCosmosCoin(): CosmosCoin;
        toCosmosCoins(): CosmosCoin[];
        toString(unit?: Units): string;
    };
    ONE_CRO_IN_BASE_UNIT: Big;
    UNIT_BASE: Units;
    UNIT_CRO: Units;
    parseBaseAmount(baseAmount: Big): Big;
    parseCROAmount(croAmount: Big): Big;
    fromBaseUnit(baseValue: string): {
        readonly baseAmount: Big;
        readonly network: Network;
        getNetwork(): Network;
        add(anotherCoin: any): any;
        sub(anotherCoin: any): any;
        toBig(): Big;
        toCosmosCoin(): CosmosCoin;
        toCosmosCoins(): CosmosCoin[];
        toString(unit?: Units): string;
    };
    fromCRO(croValue: string): {
        readonly baseAmount: Big;
        readonly network: Network;
        getNetwork(): Network;
        add(anotherCoin: any): any;
        sub(anotherCoin: any): any;
        toBig(): Big;
        toCosmosCoin(): CosmosCoin;
        toCosmosCoins(): CosmosCoin[];
        toString(unit?: Units): string;
    };
};
//# sourceMappingURL=coin.d.ts.map