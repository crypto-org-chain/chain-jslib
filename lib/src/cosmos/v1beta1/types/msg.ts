import ow from 'ow';
import { owStrictObject } from '../../../ow.types';

export type SignModeDirectMsg = {
    typeUrl: string;
    value: {
        [key: string]: any;
    };
};
export const owSignModeDirectMsg = () =>
    owStrictObject().partialShape({
        typeUrl: ow.string,
    });
