import ow from 'ow';
import { owOptionalStrictObject, owStrictObject } from '../ow.types';
import { isCoin, Units } from './v2.coin/v2.coin';

export const owCoinUnit = ow.string.validate((val) => ({
    validator: Object.values(Units).includes(val as any),
    message: (label) => `Expected ${label} to be one of the Coin units, got \`${val}\``,
}));

const coinValidatorFn = (val: object) => ({
    validator: isCoin(val),
    message: (label: string) => `Expected ${label} to be an instance of \`Coin\`, got \`${val}\``,
});

export const owOptionalCoin = () => owOptionalStrictObject().validate(coinValidatorFn);

export const owCoin = () => owStrictObject().validate(coinValidatorFn);
