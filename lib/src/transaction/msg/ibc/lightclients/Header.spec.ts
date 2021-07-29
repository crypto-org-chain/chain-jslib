import 'mocha';
import { expect } from 'chai';

import Long from 'long';
import { fuzzyDescribe } from '../../../../test/mocha-fuzzy/suite';
import { CroSDK } from '../../../../core/cro';
import { COSMOS_MSG_TYPEURL } from '../../../common/constants/typeurl';
import { tendermintV2 } from '../../../../cosmos/v1beta1/codec';
import { Bytes } from '../../../../utils/bytes/bytes';

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

describe('Testing IBC.lightclient.Header', function () {
    fuzzyDescribe('should throw Error when options is invalid', function (fuzzy) {
        const anyValidOptions = {
            signedHeader: {
                header: {
                    version: {
                        block: Long.fromString('11'),
                        app: Long.fromString('0'),
                    },
                    chainId: 'cosmoshub-4',
                    height: Long.fromString('5624169'),
                    time: {
                        nanos: 1000,
                        seconds: Long.fromString('10000'),
                    },
                    lastBlockId: {
                        hash: Bytes.fromBase64String('oWxFtofP9BwU9Wa89GsYXmoqoUALZXUwoqn+Deb4Vcc=').toUint8Array(),
                        partSetHeader: {
                            total: 1,
                            hash: Bytes.fromBase64String('EzhR7SsBkj68M9XnvwSDevesSv3NYTCqSmh5H7mxLnU=').toUint8Array(),
                        },
                    },
                    lastCommitHash: Bytes.fromBase64String(
                        'qtWwX2ga4DaUvHyWWDoCWdt2N2FwYcQg4wcQL1swPwI=',
                    ).toUint8Array(),
                    dataHash: Bytes.fromBase64String('47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=').toUint8Array(),
                    validatorsHash: Bytes.fromBase64String(
                        'PhAKNDX38BIXEM2UQ3lUaqLOX35ddedGO8CD3B4uVgo=',
                    ).toUint8Array(),
                    nextValidatorsHash: Bytes.fromBase64String(
                        'PhAKNDX38BIXEM2UQ3lUaqLOX35ddedGO8CD3B4uVgo=',
                    ).toUint8Array(),
                    consensusHash: Bytes.fromBase64String(
                        'DykIiDoQXHk7dElet9bfLupHntf8k0kgamXLD5mHoLg=',
                    ).toUint8Array(),
                    appHash: Bytes.fromBase64String('a4ooHKuZNn51aFSezg9xWrCBJbLm1jWwLFpx8BX0tU8=').toUint8Array(),
                    lastResultsHash: Bytes.fromBase64String(
                        '47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=',
                    ).toUint8Array(),
                    evidenceHash: Bytes.fromBase64String('47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=').toUint8Array(),
                    proposerAddress: Bytes.fromBase64String('zIf1a1hiGBHitaR/OMYWbilc424=').toUint8Array(),
                },
                commit: {
                    height: Long.fromString('5624169'),
                    round: 0,
                    blockId: {
                        hash: Bytes.fromBase64String('oz8JXWoBbJnCyztb4mjdrznhs9Uzq1s6ZWdllb3/dQ8=').toUint8Array(),
                        partSetHeader: {
                            total: 1,
                            hash: Bytes.fromBase64String('SUxdv8W+2aaBLhYVubm4I/2Zxe/fBdKFTmUmjM+MHz8=').toUint8Array(),
                        },
                    },
                    signatures: [
                        {
                            blockIdFlag: null,
                            validatorAddress: Bytes.fromBase64String('g/R9d0ew9jOmug30m33PYfkKobA=').toUint8Array(),
                            timestamp: {
                                nanos: 10000,
                                seconds: Long.fromString('10000'),
                            },
                            signature: Bytes.fromBase64String(
                                'IptF73kG5PueY8k492mu7UnPPZK+XUU+3frADxSBRQ5+xTEnvLk7ekv0RD43vbNmHMzDGh71ihtkAKOT3OImCA==',
                            ).toUint8Array(),
                        },
                    ],
                },
            },
            validatorSet: {
                validators: [
                    {
                        address: Bytes.fromBase64String('g/R9d0ew9jOmug30m33PYfkKobA=').toUint8Array(),
                        pubKey: {
                            ed25519: Bytes.fromBase64String(
                                'W459Kbdx+LJQ7dLVASW6sAfdqWqNRSXnvc53r9aOx/o=',
                            ).toUint8Array(),
                        },
                        votingPower: Long.fromString('13595989'),
                        proposerPriority: Long.fromString('-178446727'),
                    },
                ],
                proposer: {
                    address: Bytes.fromBase64String('g/R9d0ew9jOmug30m33PYfkKobA=').toUint8Array(),
                    pubKey: {
                        ed25519: Bytes.fromBase64String('W459Kbdx+LJQ7dLVASW6sAfdqWqNRSXnvc53r9aOx/o=').toUint8Array(),
                    },
                    votingPower: Long.fromString('13595989'),
                    proposerPriority: Long.fromString('-178446727'),
                },
                totalVotingPower: Long.fromString('192042716'),
            },
            trustedHeight: {
                revisionNumber: Long.fromString('4'),
                revisionHeight: Long.fromString('5624044'),
            },
            trustedValidators: {
                validators: [
                    {
                        address: Bytes.fromBase64String('g/R9d0ew9jOmug30m33PYfkKobA=').toUint8Array(),
                        pubKey: {
                            ed25519: Bytes.fromBase64String(
                                'W459Kbdx+LJQ7dLVASW6sAfdqWqNRSXnvc53r9aOx/o=',
                            ).toUint8Array(),
                        },
                        votingPower: Long.fromString('13595989'),
                        proposerPriority: Long.fromString('-178446727'),
                    },
                ],
                proposer: {
                    address: Bytes.fromBase64String('g/R9d0ew9jOmug30m33PYfkKobA=').toUint8Array(),
                    pubKey: {
                        ed25519: Bytes.fromBase64String('W459Kbdx+LJQ7dLVASW6sAfdqWqNRSXnvc53r9aOx/o=').toUint8Array(),
                    },
                    votingPower: Long.fromString('13595989'),
                    proposerPriority: Long.fromString('-178446727'),
                },
                totalVotingPower: Long.fromString('192042716'),
            },
        };

        const testRunner = fuzzy(fuzzy.ObjArg(anyValidOptions));

        testRunner(function (options) {
            if (options.valid) {
                return;
            }
            expect(() => new cro.ibc.lightclient.Header(options.value)).to.throw(
                'Expected `options` to be of type `object`',
            );
        });
    });

    it('Test Header conversion', function () {
        const Header = new cro.ibc.lightclient.Header({
            signedHeader: {
                header: {
                    version: {
                        block: Long.fromString('11'),
                        app: Long.fromString('0'),
                    },
                    chainId: 'cosmoshub-4',
                    height: Long.fromString('5624169'),
                    time: {
                        nanos: 1000,
                        seconds: Long.fromString('10000'),
                    },
                    lastBlockId: {
                        hash: Bytes.fromBase64String('oWxFtofP9BwU9Wa89GsYXmoqoUALZXUwoqn+Deb4Vcc=').toUint8Array(),
                        partSetHeader: {
                            total: 1,
                            hash: Bytes.fromBase64String('EzhR7SsBkj68M9XnvwSDevesSv3NYTCqSmh5H7mxLnU=').toUint8Array(),
                        },
                    },
                    lastCommitHash: Bytes.fromBase64String(
                        'qtWwX2ga4DaUvHyWWDoCWdt2N2FwYcQg4wcQL1swPwI=',
                    ).toUint8Array(),
                    dataHash: Bytes.fromBase64String('47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=').toUint8Array(),
                    validatorsHash: Bytes.fromBase64String(
                        'PhAKNDX38BIXEM2UQ3lUaqLOX35ddedGO8CD3B4uVgo=',
                    ).toUint8Array(),
                    nextValidatorsHash: Bytes.fromBase64String(
                        'PhAKNDX38BIXEM2UQ3lUaqLOX35ddedGO8CD3B4uVgo=',
                    ).toUint8Array(),
                    consensusHash: Bytes.fromBase64String(
                        'DykIiDoQXHk7dElet9bfLupHntf8k0kgamXLD5mHoLg=',
                    ).toUint8Array(),
                    appHash: Bytes.fromBase64String('a4ooHKuZNn51aFSezg9xWrCBJbLm1jWwLFpx8BX0tU8=').toUint8Array(),
                    lastResultsHash: Bytes.fromBase64String(
                        '47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=',
                    ).toUint8Array(),
                    evidenceHash: Bytes.fromBase64String('47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=').toUint8Array(),
                    proposerAddress: Bytes.fromBase64String('zIf1a1hiGBHitaR/OMYWbilc424=').toUint8Array(),
                },
                commit: {
                    height: Long.fromString('5624169'),
                    round: 0,
                    blockId: {
                        hash: Bytes.fromBase64String('oz8JXWoBbJnCyztb4mjdrznhs9Uzq1s6ZWdllb3/dQ8=').toUint8Array(),
                        partSetHeader: {
                            total: 1,
                            hash: Bytes.fromBase64String('SUxdv8W+2aaBLhYVubm4I/2Zxe/fBdKFTmUmjM+MHz8=').toUint8Array(),
                        },
                    },
                    signatures: [
                        {
                            blockIdFlag: tendermintV2.types.BlockIDFlag.BLOCK_ID_FLAG_COMMIT,
                            validatorAddress: Bytes.fromBase64String('g/R9d0ew9jOmug30m33PYfkKobA=').toUint8Array(),
                            timestamp: {
                                nanos: 10000,
                                seconds: Long.fromString('10000'),
                            },
                            signature: Bytes.fromBase64String(
                                'IptF73kG5PueY8k492mu7UnPPZK+XUU+3frADxSBRQ5+xTEnvLk7ekv0RD43vbNmHMzDGh71ihtkAKOT3OImCA==',
                            ).toUint8Array(),
                        },
                    ],
                },
            },
            validatorSet: {
                validators: [
                    {
                        address: Bytes.fromBase64String('g/R9d0ew9jOmug30m33PYfkKobA=').toUint8Array(),
                        pubKey: {
                            ed25519: Bytes.fromBase64String(
                                'W459Kbdx+LJQ7dLVASW6sAfdqWqNRSXnvc53r9aOx/o=',
                            ).toUint8Array(),
                        },
                        votingPower: Long.fromString('13595989'),
                        proposerPriority: Long.fromString('-178446727'),
                    },
                ],
                proposer: {
                    address: Bytes.fromBase64String('g/R9d0ew9jOmug30m33PYfkKobA=').toUint8Array(),
                    pubKey: {
                        ed25519: Bytes.fromBase64String('W459Kbdx+LJQ7dLVASW6sAfdqWqNRSXnvc53r9aOx/o=').toUint8Array(),
                    },
                    votingPower: Long.fromString('13595989'),
                    proposerPriority: Long.fromString('-178446727'),
                },
                totalVotingPower: Long.fromString('192042716'),
            },
            trustedHeight: {
                revisionNumber: Long.fromString('4'),
                revisionHeight: Long.fromString('5624044'),
            },
            trustedValidators: {
                validators: [
                    {
                        address: Bytes.fromBase64String('g/R9d0ew9jOmug30m33PYfkKobA=').toUint8Array(),
                        pubKey: {
                            ed25519: Bytes.fromBase64String(
                                'W459Kbdx+LJQ7dLVASW6sAfdqWqNRSXnvc53r9aOx/o=',
                            ).toUint8Array(),
                        },
                        votingPower: Long.fromString('13595989'),
                        proposerPriority: Long.fromString('-178446727'),
                    },
                ],
                proposer: {
                    address: Bytes.fromBase64String('g/R9d0ew9jOmug30m33PYfkKobA=').toUint8Array(),
                    pubKey: {
                        ed25519: Bytes.fromBase64String('W459Kbdx+LJQ7dLVASW6sAfdqWqNRSXnvc53r9aOx/o=').toUint8Array(),
                    },
                    votingPower: Long.fromString('13595989'),
                    proposerPriority: Long.fromString('-178446727'),
                },
                totalVotingPower: Long.fromString('192042716'),
            },
        });

        const rawMsg = {
            typeUrl: COSMOS_MSG_TYPEURL.ibc.LightClients.Header,
            value: {
                signedHeader: {
                    header: {
                        version: {
                            block: Long.fromString('11'),
                            app: Long.fromString('0'),
                        },
                        chainId: 'cosmoshub-4',
                        height: Long.fromString('5624169'),
                        time: {
                            nanos: 1000,
                            seconds: Long.fromString('10000'),
                        },
                        lastBlockId: {
                            hash: Bytes.fromBase64String('oWxFtofP9BwU9Wa89GsYXmoqoUALZXUwoqn+Deb4Vcc=').toUint8Array(),
                            partSetHeader: {
                                total: 1,
                                hash: Bytes.fromBase64String(
                                    'EzhR7SsBkj68M9XnvwSDevesSv3NYTCqSmh5H7mxLnU=',
                                ).toUint8Array(),
                            },
                        },
                        lastCommitHash: Bytes.fromBase64String(
                            'qtWwX2ga4DaUvHyWWDoCWdt2N2FwYcQg4wcQL1swPwI=',
                        ).toUint8Array(),
                        dataHash: Bytes.fromBase64String('47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=').toUint8Array(),
                        validatorsHash: Bytes.fromBase64String(
                            'PhAKNDX38BIXEM2UQ3lUaqLOX35ddedGO8CD3B4uVgo=',
                        ).toUint8Array(),
                        nextValidatorsHash: Bytes.fromBase64String(
                            'PhAKNDX38BIXEM2UQ3lUaqLOX35ddedGO8CD3B4uVgo=',
                        ).toUint8Array(),
                        consensusHash: Bytes.fromBase64String(
                            'DykIiDoQXHk7dElet9bfLupHntf8k0kgamXLD5mHoLg=',
                        ).toUint8Array(),
                        appHash: Bytes.fromBase64String('a4ooHKuZNn51aFSezg9xWrCBJbLm1jWwLFpx8BX0tU8=').toUint8Array(),
                        lastResultsHash: Bytes.fromBase64String(
                            '47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=',
                        ).toUint8Array(),
                        evidenceHash: Bytes.fromBase64String(
                            '47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=',
                        ).toUint8Array(),
                        proposerAddress: Bytes.fromBase64String('zIf1a1hiGBHitaR/OMYWbilc424=').toUint8Array(),
                    },
                    commit: {
                        height: Long.fromString('5624169'),
                        round: 0,
                        blockId: {
                            hash: Bytes.fromBase64String('oz8JXWoBbJnCyztb4mjdrznhs9Uzq1s6ZWdllb3/dQ8=').toUint8Array(),
                            partSetHeader: {
                                total: 1,
                                hash: Bytes.fromBase64String(
                                    'SUxdv8W+2aaBLhYVubm4I/2Zxe/fBdKFTmUmjM+MHz8=',
                                ).toUint8Array(),
                            },
                        },
                        signatures: [
                            {
                                blockIdFlag: tendermintV2.types.BlockIDFlag.BLOCK_ID_FLAG_COMMIT,
                                validatorAddress: Bytes.fromBase64String('g/R9d0ew9jOmug30m33PYfkKobA=').toUint8Array(),
                                timestamp: {
                                    nanos: 10000,
                                    seconds: Long.fromString('10000'),
                                },
                                signature: Bytes.fromBase64String(
                                    'IptF73kG5PueY8k492mu7UnPPZK+XUU+3frADxSBRQ5+xTEnvLk7ekv0RD43vbNmHMzDGh71ihtkAKOT3OImCA==',
                                ).toUint8Array(),
                            },
                        ],
                    },
                },
                validatorSet: {
                    validators: [
                        {
                            address: Bytes.fromBase64String('g/R9d0ew9jOmug30m33PYfkKobA=').toUint8Array(),
                            pubKey: {
                                ed25519: Bytes.fromBase64String(
                                    'W459Kbdx+LJQ7dLVASW6sAfdqWqNRSXnvc53r9aOx/o=',
                                ).toUint8Array(),
                            },
                            votingPower: Long.fromString('13595989'),
                            proposerPriority: Long.fromString('-178446727'),
                        },
                    ],
                    proposer: {
                        address: Bytes.fromBase64String('g/R9d0ew9jOmug30m33PYfkKobA=').toUint8Array(),
                        pubKey: {
                            ed25519: Bytes.fromBase64String(
                                'W459Kbdx+LJQ7dLVASW6sAfdqWqNRSXnvc53r9aOx/o=',
                            ).toUint8Array(),
                        },
                        votingPower: Long.fromString('13595989'),
                        proposerPriority: Long.fromString('-178446727'),
                    },
                    totalVotingPower: Long.fromString('192042716'),
                },
                trustedHeight: {
                    revisionNumber: Long.fromString('4'),
                    revisionHeight: Long.fromString('5624044'),
                },
                trustedValidators: {
                    validators: [
                        {
                            address: Bytes.fromBase64String('g/R9d0ew9jOmug30m33PYfkKobA=').toUint8Array(),
                            pubKey: {
                                ed25519: Bytes.fromBase64String(
                                    'W459Kbdx+LJQ7dLVASW6sAfdqWqNRSXnvc53r9aOx/o=',
                                ).toUint8Array(),
                            },
                            votingPower: Long.fromString('13595989'),
                            proposerPriority: Long.fromString('-178446727'),
                        },
                    ],
                    proposer: {
                        address: Bytes.fromBase64String('g/R9d0ew9jOmug30m33PYfkKobA=').toUint8Array(),
                        pubKey: {
                            ed25519: Bytes.fromBase64String(
                                'W459Kbdx+LJQ7dLVASW6sAfdqWqNRSXnvc53r9aOx/o=',
                            ).toUint8Array(),
                        },
                        votingPower: Long.fromString('13595989'),
                        proposerPriority: Long.fromString('-178446727'),
                    },
                    totalVotingPower: Long.fromString('192042716'),
                },
            },
        };

        expect(Header.toRawMsg()).to.eqls(rawMsg);
    });

    it('Test Header `getEncoded`', function () {
        const params = {
            signedHeader: {
                header: {
                    version: {
                        block: Long.fromString('11'),
                        app: Long.fromString('0'),
                    },
                    chainId: 'cosmoshub-4',
                    height: Long.fromString('5624169'),
                    time: {
                        nanos: 1000,
                        seconds: Long.fromString('10000'),
                    },
                    lastBlockId: {
                        hash: Bytes.fromBase64String('oWxFtofP9BwU9Wa89GsYXmoqoUALZXUwoqn+Deb4Vcc=').toUint8Array(),
                        partSetHeader: {
                            total: 1,
                            hash: Bytes.fromBase64String('EzhR7SsBkj68M9XnvwSDevesSv3NYTCqSmh5H7mxLnU=').toUint8Array(),
                        },
                    },
                    lastCommitHash: Bytes.fromBase64String(
                        'qtWwX2ga4DaUvHyWWDoCWdt2N2FwYcQg4wcQL1swPwI=',
                    ).toUint8Array(),
                    dataHash: Bytes.fromBase64String('47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=').toUint8Array(),
                    validatorsHash: Bytes.fromBase64String(
                        'PhAKNDX38BIXEM2UQ3lUaqLOX35ddedGO8CD3B4uVgo=',
                    ).toUint8Array(),
                    nextValidatorsHash: Bytes.fromBase64String(
                        'PhAKNDX38BIXEM2UQ3lUaqLOX35ddedGO8CD3B4uVgo=',
                    ).toUint8Array(),
                    consensusHash: Bytes.fromBase64String(
                        'DykIiDoQXHk7dElet9bfLupHntf8k0kgamXLD5mHoLg=',
                    ).toUint8Array(),
                    appHash: Bytes.fromBase64String('a4ooHKuZNn51aFSezg9xWrCBJbLm1jWwLFpx8BX0tU8=').toUint8Array(),
                    lastResultsHash: Bytes.fromBase64String(
                        '47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=',
                    ).toUint8Array(),
                    evidenceHash: Bytes.fromBase64String('47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=').toUint8Array(),
                    proposerAddress: Bytes.fromBase64String('zIf1a1hiGBHitaR/OMYWbilc424=').toUint8Array(),
                },
                commit: {
                    height: Long.fromString('5624169'),
                    round: 0,
                    blockId: {
                        hash: Bytes.fromBase64String('oz8JXWoBbJnCyztb4mjdrznhs9Uzq1s6ZWdllb3/dQ8=').toUint8Array(),
                        partSetHeader: {
                            total: 1,
                            hash: Bytes.fromBase64String('SUxdv8W+2aaBLhYVubm4I/2Zxe/fBdKFTmUmjM+MHz8=').toUint8Array(),
                        },
                    },
                    signatures: [
                        {
                            blockIdFlag: tendermintV2.types.BlockIDFlag.BLOCK_ID_FLAG_COMMIT,
                            validatorAddress: Bytes.fromBase64String('g/R9d0ew9jOmug30m33PYfkKobA=').toUint8Array(),
                            timestamp: {
                                nanos: 10000,
                                seconds: Long.fromString('10000'),
                            },
                            signature: Bytes.fromBase64String(
                                'IptF73kG5PueY8k492mu7UnPPZK+XUU+3frADxSBRQ5+xTEnvLk7ekv0RD43vbNmHMzDGh71ihtkAKOT3OImCA==',
                            ).toUint8Array(),
                        },
                    ],
                },
            },
            validatorSet: {
                validators: [
                    {
                        address: Bytes.fromBase64String('g/R9d0ew9jOmug30m33PYfkKobA=').toUint8Array(),
                        pubKey: {
                            ed25519: Bytes.fromBase64String(
                                'W459Kbdx+LJQ7dLVASW6sAfdqWqNRSXnvc53r9aOx/o=',
                            ).toUint8Array(),
                        },
                        votingPower: Long.fromString('13595989'),
                        proposerPriority: Long.fromString('-178446727'),
                    },
                ],
                proposer: {
                    address: Bytes.fromBase64String('g/R9d0ew9jOmug30m33PYfkKobA=').toUint8Array(),
                    pubKey: {
                        ed25519: Bytes.fromBase64String('W459Kbdx+LJQ7dLVASW6sAfdqWqNRSXnvc53r9aOx/o=').toUint8Array(),
                    },
                    votingPower: Long.fromString('13595989'),
                    proposerPriority: Long.fromString('-178446727'),
                },
                totalVotingPower: Long.fromString('192042716'),
            },
            trustedHeight: {
                revisionNumber: Long.fromString('4'),
                revisionHeight: Long.fromString('5624044'),
            },
            trustedValidators: {
                validators: [
                    {
                        address: Bytes.fromBase64String('g/R9d0ew9jOmug30m33PYfkKobA=').toUint8Array(),
                        pubKey: {
                            ed25519: Bytes.fromBase64String(
                                'W459Kbdx+LJQ7dLVASW6sAfdqWqNRSXnvc53r9aOx/o=',
                            ).toUint8Array(),
                        },
                        votingPower: Long.fromString('13595989'),
                        proposerPriority: Long.fromString('-178446727'),
                    },
                ],
                proposer: {
                    address: Bytes.fromBase64String('g/R9d0ew9jOmug30m33PYfkKobA=').toUint8Array(),
                    pubKey: {
                        ed25519: Bytes.fromBase64String('W459Kbdx+LJQ7dLVASW6sAfdqWqNRSXnvc53r9aOx/o=').toUint8Array(),
                    },
                    votingPower: Long.fromString('13595989'),
                    proposerPriority: Long.fromString('-178446727'),
                },
                totalVotingPower: Long.fromString('192042716'),
            },
        };
        const Header = new cro.ibc.lightclient.Header(params);

        expect(Header.getEncoded().value).instanceOf(Uint8Array);
        expect(Header.getEncoded().type_url).to.equal('/ibc.lightclients.tendermint.v1.Header');
    });

    it('should throw on invalid values', function () {
        const params = {
            signedHeader: {
                header: {
                    version: {
                        block: Long.fromString('11'),
                        app: Long.fromString('0'),
                    },
                    chainId: 'cosmoshub-4',
                    height: Long.fromString('5624169'),
                    time: {
                        nanos: 1000,
                        seconds: Long.fromString('10000'),
                    },
                    lastBlockId: {
                        hash: Bytes.fromBase64String('oWxFtofP9BwU9Wa89GsYXmoqoUALZXUwoqn+Deb4Vcc=').toUint8Array(),
                        partSetHeader: {
                            total: 1,
                            hash: Bytes.fromBase64String('EzhR7SsBkj68M9XnvwSDevesSv3NYTCqSmh5H7mxLnU=').toUint8Array(),
                        },
                    },
                    lastCommitHash: Bytes.fromBase64String(
                        'qtWwX2ga4DaUvHyWWDoCWdt2N2FwYcQg4wcQL1swPwI=',
                    ).toUint8Array(),
                    dataHash: Bytes.fromBase64String('47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=').toUint8Array(),
                    validatorsHash: Bytes.fromBase64String(
                        'PhAKNDX38BIXEM2UQ3lUaqLOX35ddedGO8CD3B4uVgo=',
                    ).toUint8Array(),
                    nextValidatorsHash: Bytes.fromBase64String(
                        'PhAKNDX38BIXEM2UQ3lUaqLOX35ddedGO8CD3B4uVgo=',
                    ).toUint8Array(),
                    consensusHash: Bytes.fromBase64String(
                        'DykIiDoQXHk7dElet9bfLupHntf8k0kgamXLD5mHoLg=',
                    ).toUint8Array(),
                    appHash: Bytes.fromBase64String('a4ooHKuZNn51aFSezg9xWrCBJbLm1jWwLFpx8BX0tU8=').toUint8Array(),
                    lastResultsHash: Bytes.fromBase64String(
                        '47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=',
                    ).toUint8Array(),
                    evidenceHash: Bytes.fromBase64String('47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=').toUint8Array(),
                    proposerAddress: Bytes.fromBase64String('zIf1a1hiGBHitaR/OMYWbilc424=').toUint8Array(),
                },
                commit: {
                    height: Long.fromString('5624169'),
                    round: 0,
                    blockId: {
                        hash: Bytes.fromBase64String('oz8JXWoBbJnCyztb4mjdrznhs9Uzq1s6ZWdllb3/dQ8=').toUint8Array(),
                        partSetHeader: {
                            total: 1,
                            hash: Bytes.fromBase64String('SUxdv8W+2aaBLhYVubm4I/2Zxe/fBdKFTmUmjM+MHz8=').toUint8Array(),
                        },
                    },
                    signatures: [
                        {
                            blockIdFlag: 4,
                            validatorAddress: Bytes.fromBase64String('g/R9d0ew9jOmug30m33PYfkKobA=').toUint8Array(),
                            timestamp: {
                                nanos: 10000,
                                seconds: Long.fromString('10000'),
                            },
                            signature: Bytes.fromBase64String(
                                'IptF73kG5PueY8k492mu7UnPPZK+XUU+3frADxSBRQ5+xTEnvLk7ekv0RD43vbNmHMzDGh71ihtkAKOT3OImCA==',
                            ).toUint8Array(),
                        },
                    ],
                },
            },
            validatorSet: {
                validators: [
                    {
                        address: Bytes.fromBase64String('g/R9d0ew9jOmug30m33PYfkKobA=').toUint8Array(),
                        pubKey: {
                            ed25519: Bytes.fromBase64String(
                                'W459Kbdx+LJQ7dLVASW6sAfdqWqNRSXnvc53r9aOx/o=',
                            ).toUint8Array(),
                        },
                        votingPower: Long.fromString('13595989'),
                        proposerPriority: Long.fromString('-178446727'),
                    },
                ],
                proposer: {
                    address: Bytes.fromBase64String('g/R9d0ew9jOmug30m33PYfkKobA=').toUint8Array(),
                    pubKey: {
                        ed25519: Bytes.fromBase64String('W459Kbdx+LJQ7dLVASW6sAfdqWqNRSXnvc53r9aOx/o=').toUint8Array(),
                    },
                    votingPower: Long.fromString('13595989'),
                    proposerPriority: Long.fromString('-178446727'),
                },
                totalVotingPower: Long.fromString('192042716'),
            },
            trustedHeight: {
                revisionNumber: Long.fromString('4'),
                revisionHeight: Long.fromString('5624044'),
            },
            trustedValidators: {
                validators: [
                    {
                        address: Bytes.fromBase64String('g/R9d0ew9jOmug30m33PYfkKobA=').toUint8Array(),
                        pubKey: {
                            ed25519: Bytes.fromBase64String(
                                'W459Kbdx+LJQ7dLVASW6sAfdqWqNRSXnvc53r9aOx/o=',
                            ).toUint8Array(),
                        },
                        votingPower: Long.fromString('13595989'),
                        proposerPriority: Long.fromString('-178446727'),
                    },
                ],
                proposer: {
                    address: Bytes.fromBase64String('g/R9d0ew9jOmug30m33PYfkKobA=').toUint8Array(),
                    pubKey: {
                        ed25519: Bytes.fromBase64String('W459Kbdx+LJQ7dLVASW6sAfdqWqNRSXnvc53r9aOx/o=').toUint8Array(),
                    },
                    votingPower: Long.fromString('13595989'),
                    proposerPriority: Long.fromString('-178446727'),
                },
                totalVotingPower: Long.fromString('192042716'),
            },
        };

        expect(() => new cro.ibc.lightclient.Header(params)).to.throw(
            "(array `signatures`) Expected property property property property number `blockIdFlag` to be one of enum 'tendermintV2.types.BlockIDFlag', got `4` in object `t` in object `commit` in object `signedHeader` in object `options`",
        );
    });

    context('should throw on unsupported functionalities', function () {
        it('should throw on calling .toRawAminoMsg', function () {
            const params = {
                signedHeader: {
                    header: {
                        version: {
                            block: Long.fromString('11'),
                            app: Long.fromString('0'),
                        },
                        chainId: 'cosmoshub-4',
                        height: Long.fromString('5624169'),
                        time: {
                            nanos: 1000,
                            seconds: Long.fromString('10000'),
                        },
                        lastBlockId: {
                            hash: Bytes.fromBase64String('oWxFtofP9BwU9Wa89GsYXmoqoUALZXUwoqn+Deb4Vcc=').toUint8Array(),
                            partSetHeader: {
                                total: 1,
                                hash: Bytes.fromBase64String(
                                    'EzhR7SsBkj68M9XnvwSDevesSv3NYTCqSmh5H7mxLnU=',
                                ).toUint8Array(),
                            },
                        },
                        lastCommitHash: Bytes.fromBase64String(
                            'qtWwX2ga4DaUvHyWWDoCWdt2N2FwYcQg4wcQL1swPwI=',
                        ).toUint8Array(),
                        dataHash: Bytes.fromBase64String('47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=').toUint8Array(),
                        validatorsHash: Bytes.fromBase64String(
                            'PhAKNDX38BIXEM2UQ3lUaqLOX35ddedGO8CD3B4uVgo=',
                        ).toUint8Array(),
                        nextValidatorsHash: Bytes.fromBase64String(
                            'PhAKNDX38BIXEM2UQ3lUaqLOX35ddedGO8CD3B4uVgo=',
                        ).toUint8Array(),
                        consensusHash: Bytes.fromBase64String(
                            'DykIiDoQXHk7dElet9bfLupHntf8k0kgamXLD5mHoLg=',
                        ).toUint8Array(),
                        appHash: Bytes.fromBase64String('a4ooHKuZNn51aFSezg9xWrCBJbLm1jWwLFpx8BX0tU8=').toUint8Array(),
                        lastResultsHash: Bytes.fromBase64String(
                            '47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=',
                        ).toUint8Array(),
                        evidenceHash: Bytes.fromBase64String(
                            '47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=',
                        ).toUint8Array(),
                        proposerAddress: Bytes.fromBase64String('zIf1a1hiGBHitaR/OMYWbilc424=').toUint8Array(),
                    },
                    commit: {
                        height: Long.fromString('5624169'),
                        round: 0,
                        blockId: {
                            hash: Bytes.fromBase64String('oz8JXWoBbJnCyztb4mjdrznhs9Uzq1s6ZWdllb3/dQ8=').toUint8Array(),
                            partSetHeader: {
                                total: 1,
                                hash: Bytes.fromBase64String(
                                    'SUxdv8W+2aaBLhYVubm4I/2Zxe/fBdKFTmUmjM+MHz8=',
                                ).toUint8Array(),
                            },
                        },
                        signatures: [
                            {
                                blockIdFlag: tendermintV2.types.BlockIDFlag.BLOCK_ID_FLAG_COMMIT,
                                validatorAddress: Bytes.fromBase64String('g/R9d0ew9jOmug30m33PYfkKobA=').toUint8Array(),
                                timestamp: {
                                    nanos: 10000,
                                    seconds: Long.fromString('10000'),
                                },
                                signature: Bytes.fromBase64String(
                                    'IptF73kG5PueY8k492mu7UnPPZK+XUU+3frADxSBRQ5+xTEnvLk7ekv0RD43vbNmHMzDGh71ihtkAKOT3OImCA==',
                                ).toUint8Array(),
                            },
                        ],
                    },
                },
                validatorSet: {
                    validators: [
                        {
                            address: Bytes.fromBase64String('g/R9d0ew9jOmug30m33PYfkKobA=').toUint8Array(),
                            pubKey: {
                                ed25519: Bytes.fromBase64String(
                                    'W459Kbdx+LJQ7dLVASW6sAfdqWqNRSXnvc53r9aOx/o=',
                                ).toUint8Array(),
                            },
                            votingPower: Long.fromString('13595989'),
                            proposerPriority: Long.fromString('-178446727'),
                        },
                    ],
                    proposer: {
                        address: Bytes.fromBase64String('g/R9d0ew9jOmug30m33PYfkKobA=').toUint8Array(),
                        pubKey: {
                            ed25519: Bytes.fromBase64String(
                                'W459Kbdx+LJQ7dLVASW6sAfdqWqNRSXnvc53r9aOx/o=',
                            ).toUint8Array(),
                        },
                        votingPower: Long.fromString('13595989'),
                        proposerPriority: Long.fromString('-178446727'),
                    },
                    totalVotingPower: Long.fromString('192042716'),
                },
                trustedHeight: {
                    revisionNumber: Long.fromString('4'),
                    revisionHeight: Long.fromString('5624044'),
                },
                trustedValidators: {
                    validators: [
                        {
                            address: Bytes.fromBase64String('g/R9d0ew9jOmug30m33PYfkKobA=').toUint8Array(),
                            pubKey: {
                                ed25519: Bytes.fromBase64String(
                                    'W459Kbdx+LJQ7dLVASW6sAfdqWqNRSXnvc53r9aOx/o=',
                                ).toUint8Array(),
                            },
                            votingPower: Long.fromString('13595989'),
                            proposerPriority: Long.fromString('-178446727'),
                        },
                    ],
                    proposer: {
                        address: Bytes.fromBase64String('g/R9d0ew9jOmug30m33PYfkKobA=').toUint8Array(),
                        pubKey: {
                            ed25519: Bytes.fromBase64String(
                                'W459Kbdx+LJQ7dLVASW6sAfdqWqNRSXnvc53r9aOx/o=',
                            ).toUint8Array(),
                        },
                        votingPower: Long.fromString('13595989'),
                        proposerPriority: Long.fromString('-178446727'),
                    },
                    totalVotingPower: Long.fromString('192042716'),
                },
            };

            expect(() => new cro.ibc.lightclient.Header(params).toRawAminoMsg()).to.throw(
                'IBC Module not supported under amino encoding scheme',
            );
        });
        it('should throw on calling .fromCosmosMsgJSON', function () {
            expect(() => cro.ibc.lightclient.Header.fromCosmosMsgJSON('json')).to.throw(
                'IBC Module does not support JSON decoding.',
            );
        });
    });
});
