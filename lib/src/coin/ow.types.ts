import ow from 'ow';
import { owStrictObject } from '../ow.types';
import { Coin, Units } from './coin';

export const owCoinUnit = ow.string.validate((val) => ({
    validator: Object.values(Units).includes(val as any),
    message: 'Expected argument to be one of the Coin units',
}));

export const owCoin = owStrictObject().validate((val) => ({
    validator: val instanceof Coin,
    message: 'Expected argument to be an instance of `Coin`',
}));
