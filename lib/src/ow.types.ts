import ow from 'ow';
import Big from 'big.js';

const strictObjectValidator = (val: object) => ({
    validator: typeof val !== 'function',
    message: (label: string) =>
        `Expected ${parseObjectLabel(label)} to be of type \`object\`, but received type \`function\``,
});

const parseObjectLabel = (label: string): string => {
    if (label === 'object') {
        return 'argument';
    }
    if (label.startsWith('object ')) {
        const parts = label.split('object ');
        return parts.length === 2 ? parts[1] : 'argument';
    }

    return label;
};
/**
 * Technically speaking functions are objects in JavaScript. However, this definition is not intuitive in argument
 * use cases. strict object eliminates function validity from the ow.object predicate.
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions
 */
export const owStrictObject = () => ow.object.validate(strictObjectValidator);
export const owOptionalStrictObject = () => ow.optional.object.validate(strictObjectValidator);

const owBigValidator = (val: object) => ({
    validator: val instanceof Big,
    message: (label: string) => `Expected ${label} to be an instance of \`Big\``,
});
export const owBig = () => owStrictObject().validate(owBigValidator);
export const owOptionalBig = () => owOptionalStrictObject().validate(owBigValidator);
