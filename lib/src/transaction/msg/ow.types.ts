import ow from 'ow';
import { owCoin } from '../../coin/ow.types';
import { owNetwork } from '../../network/ow.types';
import { owStrictObject } from '../../ow.types';

export const owMsgSendOptions = owStrictObject().exactShape({
    fromAddress: ow.string,
    toAddress: ow.string,
    amount: owCoin(),
    network: owNetwork(),
});
