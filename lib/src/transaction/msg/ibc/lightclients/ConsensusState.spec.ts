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

describe('Testing IBCConsensusState', function () {
    fuzzyDescribe('should throw Error when options is invalid', function (fuzzy) {
        const anyValidOptions = [
            {
                timestamp: {
                    seconds: Long.fromString('100'),
                    nanos: 100000,
                },
                root: {
                    hash: Uint8Array.from([1, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4]),
                },
                nextValidatorsHash: Uint8Array.from([1, 2, 3]),
            },
        ];

        const testRunner = fuzzy(fuzzy.ObjArg(anyValidOptions));

        testRunner(function (options) {
            if (options.valid) {
                return;
            }
            expect(() => new cro.ibc.lightclient.ConsensusState(options.value)).to.throw(
                'Expected `options` to be of type `object`',
            );
        });
    });

    it('Test ConsensusState conversion', function () {
        const ConsensusState = new cro.ibc.lightclient.ConsensusState({
            timestamp: {
                seconds: Long.fromString('100'),
                nanos: 100000,
            },
            root: {
                hash: Uint8Array.from([1, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4]),
            },
            nextValidatorsHash: Uint8Array.from([1, 2, 3]),
        });

        const rawMsg = {
            typeUrl: '/ibc.lightclients.tendermint.v1.ConsensusState',
            value: {
                timestamp: {
                    seconds: Long.fromString('100'),
                    nanos: 100000,
                },
                root: {
                    hash: Uint8Array.from([1, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4]),
                },
                nextValidatorsHash: Uint8Array.from([1, 2, 3]),
            },
        };

        expect(ConsensusState.toRawMsg()).to.deep.equal(rawMsg);
    });

    it('Test ConsensusState `getEncoded`', function () {
        const params = {
            timestamp: {
                seconds: Long.fromString('100'),
                nanos: 100000,
            },
            root: {
                hash: Uint8Array.from([1, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4]),
            },
            nextValidatorsHash: Uint8Array.from([1, 2, 3]),
        };

        const ConsensusState = new cro.ibc.lightclient.ConsensusState(params);

        expect(ConsensusState.getEncoded().value).instanceOf(Uint8Array);
        expect(ConsensusState.getEncoded().type_url).to.equal('/ibc.lightclients.tendermint.v1.ConsensusState');
    });

    context('should throw on unsupported functionalities', function () {
        it('should throw on calling .toRawAminoMsg', function () {
            const params = {
                timestamp: null,
                root: null,
                nextValidatorsHash: Uint8Array.from([1, 2, 3]),
            };

            expect(() => new cro.ibc.lightclient.ConsensusState(params).toRawAminoMsg()).to.throw(
                'IBC Module not supported under amino encoding scheme',
            );
        });
        it('should throw on calling .fromCosmosMsgJSON', function () {
            expect(() => cro.ibc.lightclient.ConsensusState.fromCosmosMsgJSON('json')).to.throw(
                'IBC Module does not support JSON decoding.',
            );
        });
    });
});
