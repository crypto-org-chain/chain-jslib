import ow from 'ow';
import Big from 'big.js';
import { owAuthInfo, owTxBody } from '../cosmos/v1beta1/types/ow.types';
import { owNetwork } from '../network/ow.types';
import { owBig, owStrictObject } from '../ow.types';
import { owBase64String, owBytes } from '../utils/bytes/ow.types';
import { isBigInteger } from '../utils/big';
import { SIGN_MODE } from './types';

export const owRawTransactionOptions = owStrictObject().exactShape({
    network: owNetwork(),
});

const SignModeValidator = (value: number) => Object.values(SIGN_MODE).includes(value as any);

const validateSignMode = (value: number) => ({
    validator: SignModeValidator(value),
    message: (label: string) => `Expected ${label} to be one of the sign mode, got \`${value}\``,
});

export const owSignMode = () => ow.number.validate(validateSignMode);
export const owOptionalSignMode = () => ow.optional.number.validate(validateSignMode);

export const owRawTransactionSigner = owStrictObject().exactShape({
    publicKey: owBytes(),
    accountNumber: owBig(),
    accountSequence: owBig(),
    signMode: owOptionalSignMode(),
});

export const owTimeoutHeight = ow.string.validate((value) => {
    try {
        const big = new Big(value);
        return {
            validator: isBigInteger(big) && big.gte(0),
            message: `Expected timeout height to be 0 or an positive integer string, got \`${value}\``,
        };
    } catch {
        return {
            validator: false,
            message: `Expected timeout height to be integer string, got \`${value}\``,
        };
    }
});

export const owSignerAccount = () =>
    owStrictObject().exactShape({
        publicKey: owBytes(),
        accountNumber: owBig(),
        signMode: owSignMode(),
    });

export const owSignableTransactionParamsV2 = owStrictObject().exactShape({
    rawTxJSON: ow.string,
    network: owNetwork(),
    signerAccounts: ow.optional.array.ofType(owSignerAccount()),
});

export const owSignableTransactionParams = owStrictObject().exactShape({
    txBody: owTxBody(),
    authInfo: owAuthInfo(),
    network: owNetwork(),
    signerAccounts: ow.array.ofType(owSignerAccount()),
});

export const owRawSignerAccount = () =>
    owStrictObject().exactShape({
        publicKey: owBase64String,
        accountNumber: owIntegerString(),
        signMode: owSignModeString(),
    });

// eslint-disable-next-line no-self-compare
const isNaN = (v: any) => v !== v;

export const owIntegerString = () =>
    ow.string.validate((value: string) => ({
        validator: !isNaN(parseInt(value, 10)) && Number.isInteger(parseFloat(value)),
        message: (label: string) => `Expected ${label} to be an integer string, got \`${value}\``,
    }));

export const owSignModeString = () =>
    owIntegerString().validate((value: string) => ({
        validator: SignModeValidator(parseInt(value, 10)),
        message: (label: string) => `Expected ${label} to be SignMode in string, got \`${value}\``,
    }));
