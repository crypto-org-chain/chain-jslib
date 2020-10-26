import ow from 'ow';
import { owStrictObject } from '../ow.types';
import { Coin, Units } from './coin';

export const owCoinUnit = ow.string.validate((val) => ({
    validator: Object.values(Units).includes(val as any),
    message: (label) => `Expected ${label} to be one of the Coin units, got \`${val}\``,
}));

export const owCoin = owStrictObject().validate((val) => ({
    validator: val instanceof Coin,
    message: (label) => `Expected ${label} to be an instance of \`Coin\`, got \`${val}\``,
}));
