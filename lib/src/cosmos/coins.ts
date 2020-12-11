import { Uint53 } from '@cosmjs/math';

export interface Coin {
    readonly denom: string;
    readonly amount: string;
}

/** Creates a coin */
export function coin(amount: string, denom: string): Coin {
    return { amount: Uint53.fromString(amount).toString(), denom };
}

/** Creates a list of coins with one element */
export function coins(amount: string, denom: string): Coin[] {
    return [coin(amount, denom)];
}
