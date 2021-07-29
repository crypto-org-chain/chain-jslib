import 'mocha';
import { expect } from 'chai';

import Long from 'long';
import { fuzzyDescribe } from '../../../../test/mocha-fuzzy/suite';
import { CroSDK } from '../../../../core/cro';
import { COSMOS_MSG_TYPEURL } from '../../../common/constants/typeurl';
import { ics23 } from '../../../../cosmos/v1beta1/codec';

const cro = CroSDK({
    network: {
        defaultNodeUrl: '',
        chainId: 'testnet-croeseid-1',
        addressPrefix: 'tcro',
        validatorAddressPrefix: 'tcrocncl',
        validatorPubKeyPrefix: 'tcrocnclconspub',
        coin: {
            baseDenom: 'basetcro',
            croDenom: 'tcro',
        },
        bip44Path: {
            coinType: 1,
            account: 0,
        },
        rpcUrl: '',
    },
});

describe('Testing IBCHeader', function () {
});
