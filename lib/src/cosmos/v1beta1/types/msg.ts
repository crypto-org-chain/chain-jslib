import ow from 'ow';
import { owStrictObject } from '../../../ow.types';

export type Msg = {
    typeUrl: string;
    value: {
        [key: string]: any;
    };
};
export const owMsg = () =>
    owStrictObject().partialShape({
        typeUrl: ow.string,
    });
