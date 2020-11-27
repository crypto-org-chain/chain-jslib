import ow, { Predicate } from 'ow';
import { Buffer } from 'buffer';
import { owOptionalStrictObject, owStrictObject } from '../../ow.types';
import { Bytes } from './bytes';

export const owHexString = ow.string.validate((val: string) => ({
    validator: val.length % 2 === 0 && /^(0x)?[0-9a-fA-F]*$/.test(val),
    message: (label: string) =>
        `Expected ${label} to be hexadecimal string of even length, got \`${JSON.stringify(val)}\``,
}));

export const owBase64String = ow.string.validate((val: string) => ({
    validator: val.length % 4 === 0 && Buffer.from(val, 'base64').toString('base64') === val,
    message: `Expected valid base64 string of length be multiple of 4, got \`${JSON.stringify(val)}\``,
}));

const owBytesValidator = (val: object) => ({
    validator: val instanceof Bytes,
    message: (label: string) => `Expected ${label} to be an instance of \`Bytes\``,
});
export const owBytes = () => owStrictObject().validate(owBytesValidator) as Predicate<Bytes>;
export const owOptionalBytes = () => owOptionalStrictObject().validate(owBytesValidator) as Predicate<Bytes>;
