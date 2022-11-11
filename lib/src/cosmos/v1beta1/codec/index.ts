// Copyright © 2018–2020 IOV SAS (licensed under the Apache License, Version 2.0)
// Copyright © 2020 Confio UO (licensed under the Apache License, Version 2.0)
// Copyright © 2020 Simon Warta (licensed under the Apache License, Version 2.0)
// Modifications Copyright (c) 2018-present Crypto.org (licensed under the Apache License, Version 2.0)
import Long from 'long';
import protobuf from 'protobufjs/minimal';

// Ensure the protobuf module has a Long implementation, which otherwise only works
// in Node.js (see https://github.com/protobufjs/protobuf.js/issues/921#issuecomment-334925145)
protobuf.util.Long = Long;
protobuf.configure();

export * from './generated/codecimpl';
