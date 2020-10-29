import ow from 'ow';

export const owOptionalWordsLength = ow.optional.number.integer.positive.validate((val: number) => ({
    validator: val >= 12 && val <= 24 && val % 3 === 0,
    message: (label: string) => `Expected ${label} to be a multiple of 3`,
}));
