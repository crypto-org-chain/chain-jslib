import ow from 'ow';
import { owOptionalStrictObject, owStrictObject } from '../ow.types';
import { Coin, Units } from './coin';

export const owCoinUnit = ow.string.validate((val) => ({
    validator: Object.values(Units).includes(val as any),
    message: (label) => `Expected ${label} to be one of the Coin units, got \`${val}\``,
}));

const coinValidatorFn = (val: object) => ({
    validator: val instanceof Coin,
    message: (label: string) => `Expected ${label} to be an instance of \`Coin\`, got \`${val}\``,
});

export const owOptionalCoin = () => owOptionalStrictObject().validate(coinValidatorFn);

export const owCoin = () => owStrictObject().validate(coinValidatorFn);
