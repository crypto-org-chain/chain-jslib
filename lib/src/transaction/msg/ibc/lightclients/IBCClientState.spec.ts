import 'mocha';
import { expect } from 'chai';

import Long from 'long';
import { fuzzyDescribe } from '../../../../test/mocha-fuzzy/suite';
import { CroSDK } from '../../../../core/cro';

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

describe('Testing IBCClientState', function () {
    fuzzyDescribe('should throw Error when options is invalid', function (fuzzy) {
        const anyValidOptions = {
            chainId: 'testnet-croeseid-1',
            trustLevel: {
                numerator: Long.fromString('1'),
                denominator: Long.fromString('1'),
            },
            trustingPeriod: {
                seconds: Long.fromString('100'),
                nanos: 100000,
            },
            unbondingPeriod: {
                seconds: Long.fromString('100'),
                nanos: 100000,
            },
            maxClockDrift: {
                seconds: Long.fromString('100'),
                nanos: 100000,
            },
            frozenHeight: {
                revisionNumber: Long.fromString('100'),
                revisionHeight: Long.fromString('100'),
            },
            latestHeight: {
                revisionNumber: Long.fromString('100'),
                revisionHeight: Long.fromString('100'),
            },
            proofSpecs: {
                leafSpec: {
                    hash: 'hash',
                    prehashKey: 'prehashKey',
                    prehashValue: 'prehashValue',
                    length: 'length',
                    prefix: 'prefix',
                },
                innerSpec: {
                    childOrder: 'childOrder',
                    childSize: 'childSize',
                    minPrefixLength: 'minPrefixLength',
                    maxPrefixLength: 'maxPrefixLength',
                    emptyChild: 'emptyChild',
                    hash: 'hash',
                },
                maxDepth: 10000,
                minDepth: 10000,
            },
            upgradePath: ['ibc'],
            allowUpdateAfterExpiry: false,
            allowUpdateAfterMisbehaviour: false,
        };

        const testRunner = fuzzy(fuzzy.ObjArg(anyValidOptions));

        testRunner(function (options) {
            if (options.valid) {
                return;
            }
            expect(() => new cro.ibc.lightclient.ClientState(options.value)).to.throw(
                'Expected `options` to be of type `object`',
            );
        });
    });
});
