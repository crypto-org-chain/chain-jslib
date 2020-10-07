import ow, { Predicate } from 'ow';
import { owOptionalStrictObject, owStrictObject } from '../../ow.types';
import { Bytes } from './bytes';

export const owHexString = ow.string.validate((val: string) => ({
    validator: val.length % 2 === 0 && /^[0-9a-fA-F]*$/.test(val),
    message: (label: string) => `Expected ${label} to be hexadecimal string of even length`,
}));

const owBytesValidator = (val: object) => ({
    validator: val instanceof Bytes,
    message: (label: string) => `Expected ${label} to be an instance of \`Bytes\``,
});
export const owBytes = () => owStrictObject().validate(owBytesValidator) as Predicate<Bytes>;
export const owOptionalBytes = () => owOptionalStrictObject().validate(owBytesValidator) as Predicate<Bytes>;
