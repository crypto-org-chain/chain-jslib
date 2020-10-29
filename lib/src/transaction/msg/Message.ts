import { Msg } from '../../cosmos/v1beta1/types/msg';

export interface Message {
    toRawMsg(): Msg;
}
