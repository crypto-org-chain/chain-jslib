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

describe('Testing IBCClientState', function () {
    fuzzyDescribe('should throw Error when options is invalid', function (fuzzy) {
        const anyValidOptions = [
            {
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
                proofSpecs: [
                    {
                        leafSpec: {
                            hash: ics23.HashOp.BITCOIN,
                            prehashKey: ics23.HashOp.BITCOIN,
                            prehashValue: ics23.HashOp.BITCOIN,
                            length: ics23.LengthOp.VAR_RLP,
                            prefix: Uint8Array.from([0, 1, 2]),
                        },
                        innerSpec: {
                            childOrder: [1, 2],
                            childSize: 1,
                            minPrefixLength: 0,
                            maxPrefixLength: 10,
                            emptyChild: Uint8Array.from([0, 1, 2]),
                            hash: ics23.HashOp.BITCOIN,
                        },
                        maxDepth: 10000,
                        minDepth: 10000,
                    },
                ],
                upgradePath: ['ibc'],
                allowUpdateAfterExpiry: false,
                allowUpdateAfterMisbehaviour: false,
            },
        ];

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

    it('Test MsgCreateClient conversion', function () {
        const MsgCreateClient = new cro.ibc.lightclient.ClientState({
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
            proofSpecs: [
                {
                    leafSpec: {
                        hash: ics23.HashOp.BITCOIN,
                        prehashKey: ics23.HashOp.BITCOIN,
                        prehashValue: ics23.HashOp.BITCOIN,
                        length: ics23.LengthOp.VAR_RLP,
                        prefix: Uint8Array.from([0, 1, 2]),
                    },
                    innerSpec: {
                        childOrder: [1, 2],
                        childSize: 1,
                        minPrefixLength: 0,
                        maxPrefixLength: 10,
                        emptyChild: Uint8Array.from([0, 1, 2]),
                        hash: ics23.HashOp.BITCOIN,
                    },
                    maxDepth: 10000,
                    minDepth: 10000,
                },
            ],
            upgradePath: ['ibc'],
            allowUpdateAfterExpiry: false,
            allowUpdateAfterMisbehaviour: false,
        });

        const rawMsg = {
            typeUrl: COSMOS_MSG_TYPEURL.ibc.LightClients.ClientState,
            value: {
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
                proofSpecs: [
                    {
                        leafSpec: {
                            hash: ics23.HashOp.BITCOIN,
                            prehashKey: ics23.HashOp.BITCOIN,
                            prehashValue: ics23.HashOp.BITCOIN,
                            length: ics23.LengthOp.VAR_RLP,
                            prefix: Uint8Array.from([0, 1, 2]),
                        },
                        innerSpec: {
                            childOrder: [1, 2],
                            childSize: 1,
                            minPrefixLength: 0,
                            maxPrefixLength: 10,
                            emptyChild: Uint8Array.from([0, 1, 2]),
                            hash: ics23.HashOp.BITCOIN,
                        },
                        maxDepth: 10000,
                        minDepth: 10000,
                    },
                ],
                upgradePath: ['ibc'],
                allowUpdateAfterExpiry: false,
                allowUpdateAfterMisbehaviour: false,
            },
        };

        expect(MsgCreateClient.toRawMsg()).to.eqls(rawMsg);
    });

    it('Test MsgCreateClient `getEncoded`', function () {
        const params = {
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
            proofSpecs: [
                {
                    leafSpec: {
                        hash: ics23.HashOp.BITCOIN,
                        prehashKey: ics23.HashOp.BITCOIN,
                        prehashValue: ics23.HashOp.BITCOIN,
                        length: ics23.LengthOp.VAR_RLP,
                        prefix: Uint8Array.from([0, 1, 2]),
                    },
                    innerSpec: {
                        childOrder: [1, 2],
                        childSize: 1,
                        minPrefixLength: 0,
                        maxPrefixLength: 10,
                        emptyChild: Uint8Array.from([0, 1, 2]),
                        hash: ics23.HashOp.BITCOIN,
                    },
                    maxDepth: 10000,
                    minDepth: 10000,
                },
            ],
            upgradePath: ['ibc'],
            allowUpdateAfterExpiry: false,
            allowUpdateAfterMisbehaviour: false,
        };
        const MsgCreateClient = new cro.ibc.lightclient.ClientState(params);

        expect(MsgCreateClient.getEncoded().value).instanceOf(Uint8Array);
        expect(MsgCreateClient.getEncoded().type_url).to.equal('/ibc.lightclients.tendermint.v1.ClientState');
    });

    it('should throw on invalid values', function () {
        const params = {
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
            proofSpecs: [
                {
                    leafSpec: {
                        hash: 10,
                        prehashKey: ics23.HashOp.BITCOIN,
                        prehashValue: ics23.HashOp.BITCOIN,
                        length: ics23.LengthOp.VAR_RLP,
                        prefix: Uint8Array.from([0, 1, 2]),
                    },
                    innerSpec: {
                        childOrder: [1, 2],
                        childSize: 1,
                        minPrefixLength: 0,
                        maxPrefixLength: 10,
                        emptyChild: Uint8Array.from([0, 1, 2]),
                        hash: ics23.HashOp.BITCOIN,
                    },
                    maxDepth: 10000,
                    minDepth: 10000,
                },
            ],
            upgradePath: ['ibc'],
            allowUpdateAfterExpiry: false,
            allowUpdateAfterMisbehaviour: false,
        };
        const params1 = {
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
            proofSpecs: [
                {
                    leafSpec: {
                        hash: ics23.HashOp.BITCOIN,
                        prehashKey: ics23.HashOp.BITCOIN,
                        prehashValue: ics23.HashOp.BITCOIN,
                        length: 11,
                        prefix: Uint8Array.from([0, 1, 2]),
                    },
                    innerSpec: {
                        childOrder: [1, 2],
                        childSize: 1,
                        minPrefixLength: 0,
                        maxPrefixLength: 10,
                        emptyChild: Uint8Array.from([0, 1, 2]),
                        hash: ics23.HashOp.BITCOIN,
                    },
                    maxDepth: 10000,
                    minDepth: 10000,
                },
            ],
            upgradePath: ['ibc'],
            allowUpdateAfterExpiry: false,
            allowUpdateAfterMisbehaviour: false,
        };

        expect(() => new cro.ibc.lightclient.ClientState(params)).to.throw(
            '(array `proofSpecs`) Expected property property property number `hash` to be one of enum ics23.HashOp, got `10` in object `leafSpec` in object `t` in object `options`',
        );
        expect(() => new cro.ibc.lightclient.ClientState(params1)).to.throw(
            '(array `proofSpecs`) Expected property property property number `length` to be one of enum ics23.LengthOp, got `11` in object `leafSpec` in object `t` in object `options`',
        );
    });
});
