import ow from 'ow';
import { owStrictObject } from '../../../ow.types';

export type Msg =
    | {
          typeUrl: string;
          value: {
              [key: string]: any;
          };
      }
    | MsgWithdrawDelegatorReward;

export const owMsg = () =>
    owStrictObject().partialShape({
        typeUrl: ow.string,
    });

export type distribution = {
    v1beta1: {
        MsgWithdrawDelegatorReward: MsgWithdrawDelegatorReward;
    };
};

type MsgWithdrawDelegatorReward = {
    typeUrl: '/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward';
    value: {
        delegatorAddress: string;
        validatorAddress: string;
    };
};
