import ow from 'ow';
import { Coin, Units } from './coin';

/**
 * Technically speaking functions are objects in JavaScript. However, this definition is not intuitive in argument
 * use cases. strict object eliminates function validity from the ow.object predicate.
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions
 */
export const owStrictObject = ow.object.validate((val: any) => ({
    validator: typeof val !== 'function',
    message: `Expected argument to be of type \`object\`, got \`${JSON.stringify(val)}\``,
}));

export const owCoinUnit = ow.string.validate((val: any) => ({
    validator: Object.values(Units).includes(val),
    message: 'Expected argument to be one of the Coin units',
}));

export const owCoin = owStrictObject.validate((val: any) => ({
    validator: val instanceof Coin,
    message: 'Expected argument to be an instance of `Coin`',
}));
