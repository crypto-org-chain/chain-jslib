import ow from 'ow';

const strictObjectValidator = (val: object) => ({
    validator: typeof val !== 'function',
    message: (label: string) =>
        `Expected ${label === 'object' ? 'argument' : label} to be of type \`object\`, got \`${JSON.stringify(val)}\``,
});
/**
 * Technically speaking functions are objects in JavaScript. However, this definition is not intuitive in argument
 * use cases. strict object eliminates function validity from the ow.object predicate.
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions
 */
export const owStrictObject = () => ow.object.validate(strictObjectValidator);
export const owOptionalStrictObject = () => ow.optional.object.validate(strictObjectValidator);
