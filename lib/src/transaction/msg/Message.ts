import { Msg } from '../../cosmos/v1beta1/types/msg';

export interface Message {
    /**
     * Returns the raw Msg representation of any implementation of Message
     * @returns {Msg}
     */
    toRawMsg(): Msg;
}
