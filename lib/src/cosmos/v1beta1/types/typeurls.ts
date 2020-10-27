// Copyright © 2018–2020 IOV SAS (licensed under the Apache License, Version 2.0)
// Copyright © 2020 Confio UO (licensed under the Apache License, Version 2.0)
// Copyright © 2020 Simon Warta (licensed under the Apache License, Version 2.0)
// Modifications Copyright (c) 2018 - 2020, Foris Limited (licensed under the Apache License, Version 2.0)
import protobuf from 'protobufjs';
import { cosmos } from '../codec';

export const typeUrlMappings: {
    [key: string]: GeneratedType;
} = {
    '/cosmos.base.v1beta1.Coin': cosmos.base.v1beta1.Coin,
    '/cosmos.bank.v1beta1.MsgSend': cosmos.bank.v1beta1.MsgSend,
    '/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward': cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward,
};

export interface GeneratedType {
    readonly create: (properties?: { [k: string]: any }) => any;
    readonly encode: (message: any | { [k: string]: any }, writer?: protobuf.Writer) => protobuf.Writer;
    readonly decode: (reader: protobuf.Reader | Uint8Array, length?: number) => any;
}
