import { Big } from 'big.js';

// Decimal places
Big.DP = 100;

// Precision quantity after exponent format starts
Big.PE = 100;

export interface Coin {
    readonly denom: string;
    readonly amount: string;
}

/** Creates a coin */
export function coin(amount: string, denom: string): Coin {
    const amountInBN = new Big(amount);

    // Disallow decimal and negative integers
    if (amountInBN.cmp(0) === -1 || amount.includes('.')) {
        throw new Error('Invalid amount string.');
    }
    return { amount: amountInBN.toString(), denom };
}

/** Creates a list of coins with one element */
export function coins(amount: string, denom: string): Coin[] {
    return [coin(amount, denom)];
}
