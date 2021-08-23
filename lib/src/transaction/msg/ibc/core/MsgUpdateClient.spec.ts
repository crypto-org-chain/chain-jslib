import 'mocha';
import { expect } from 'chai';
import Big from 'big.js';

import Long from 'long';
import { fuzzyDescribe } from '../../../../test/mocha-fuzzy/suite';
import { Msg } from '../../../../cosmos/v1beta1/types/msg';
import { Secp256k1KeyPair } from '../../../../keypair/secp256k1';
import { Bytes } from '../../../../utils/bytes/bytes';
import { CroSDK } from '../../../../core/cro';
import { COSMOS_MSG_TYPEURL } from '../../../common/constants/typeurl';
import { tendermintV2 } from '../../../../cosmos/v1beta1/codec';

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

describe('Testing MsgUpdateClient', function () {
    fuzzyDescribe('should throw Error when options is invalid', function (fuzzy) {
        const anyValidOptions = {
            signer: 'tcro15sfupd26sp6qf37ll5q6xuf330k7df9tnvrqht',
        };

        const testRunner = fuzzy(fuzzy.ObjArg(anyValidOptions));

        testRunner(function (options) {
            if (options.valid) {
                return;
            }
            expect(() => new cro.ibc.MsgUpdateClient(options.value)).to.throw(
                'Expected `options` to be of type `object`',
            );
        });
    });

    it('Test MsgUpdateClient conversion', function () {
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
        const msgHeader = new cro.ibc.lightclient.Header(params);

        const MsgUpdateClient = new cro.ibc.MsgUpdateClient({
            signer: 'tcro15sfupd26sp6qf37ll5q6xuf330k7df9tnvrqht',
            clientId: 'clientId',
            header: msgHeader,
        });

        const rawMsg: Msg = {
            typeUrl: COSMOS_MSG_TYPEURL.ibc.MsgUpdateClient,
            value: {
                signer: 'tcro15sfupd26sp6qf37ll5q6xuf330k7df9tnvrqht',
                clientId: 'clientId',
                header: msgHeader.getEncoded(),
            },
        };

        expect(MsgUpdateClient.toRawMsg()).to.eqls(rawMsg);
    });

    it('Test appendTxBody MsgUpdateClient Tx signing', function () {
        const anyKeyPair = Secp256k1KeyPair.fromPrivKey(
            Bytes.fromHexString('66633d18513bec30dd11a209f1ceb1787aa9e2069d5d47e590174dc9665102b3'),
        );
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
        const msgHeader = new cro.ibc.lightclient.Header(params);

        const MsgUpdateClient = new cro.ibc.MsgUpdateClient({
            signer: 'tcro15sfupd26sp6qf37ll5q6xuf330k7df9tnvrqht',
            header: msgHeader,
            clientId: 'clientId',
        });

        const anySigner = {
            publicKey: anyKeyPair.getPubKey(),
            accountNumber: new Big(0),
            accountSequence: new Big(2),
        };

        const rawTx = new cro.RawTransaction();

        const signableTx = rawTx.appendMessage(MsgUpdateClient).addSigner(anySigner).toSignable();

        const signedTx = signableTx.setSignature(0, anyKeyPair.sign(signableTx.toSignDocumentHash(0))).toSigned();

        const signedTxHex = signedTx.encode().toHexString();
        expect(signedTxHex).to.be.eql(
            '0aa7080aa4080a232f6962632e636f72652e636c69656e742e76312e4d7367557064617465436c69656e7412fc070a08636c69656e74496412c2070a262f6962632e6c69676874636c69656e74732e74656e6465726d696e742e76312e4865616465721297070acb040a90030a04080b1000120b636f736d6f736875622d3418e9a2d702220608904e10e8072a480a20a16c45b687cff41c14f566bcf46b185e6a2aa1400b657530a2a9fe0de6f855c7122408011220133851ed2b01923ebc33d5e7bf04837af7ac4afdcd6130aa4a68791fb9b12e753220aad5b05f681ae03694bc7c96583a0259db7637617061c420e307102f5b303f023a20e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b85542203e100a3435f7f0121710cd944379546aa2ce5f7e5d75e7463bc083dc1e2e560a4a203e100a3435f7f0121710cd944379546aa2ce5f7e5d75e7463bc083dc1e2e560a52200f2908883a105c793b74495eb7d6df2eea479ed7fc9349206a65cb0f9987a0b85a206b8a281cab99367e7568549ece0f715ab08125b2e6d635b02c5a71f015f4b54f6220e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b8556a20e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b8557214cc87f56b58621811e2b5a47f38c6166e295ce36e12b50108e9a2d70210001a480a20a33f095d6a016c99c2cb3b5be268ddaf39e1b3d533ab5b3a65676595bdff750f122408011220494c5dbfc5bed9a6812e1615b9b9b823fd99c5efdf05d2854e65268ccf8c1f3f22620802121483f47d7747b0f633a6ba0df49b7dcf61f90aa1b01a0608904e10904e2240229b45ef7906e4fb9e63c938f769aeed49cf3d92be5d453eddfac00f1481450e7ec53127bcb93b7a4bf4443e37bdb3661cccc31a1ef58a1b6400a393dce22608129d010a4a0a1483f47d7747b0f633a6ba0df49b7dcf61f90aa1b012220a205b8e7d29b771f8b250edd2d50125bab007dda96a8d4525e7bdce77afd68ec7fa18d5eabd0620f9bcf4aaffffffffff01124a0a1483f47d7747b0f633a6ba0df49b7dcf61f90aa1b012220a205b8e7d29b771f8b250edd2d50125bab007dda96a8d4525e7bdce77afd68ec7fa18d5eabd0620f9bcf4aaffffffffff0118dcadc95b1a07080410eca1d702229d010a4a0a1483f47d7747b0f633a6ba0df49b7dcf61f90aa1b012220a205b8e7d29b771f8b250edd2d50125bab007dda96a8d4525e7bdce77afd68ec7fa18d5eabd0620f9bcf4aaffffffffff01124a0a1483f47d7747b0f633a6ba0df49b7dcf61f90aa1b012220a205b8e7d29b771f8b250edd2d50125bab007dda96a8d4525e7bdce77afd68ec7fa18d5eabd0620f9bcf4aaffffffffff0118dcadc95b1a2b7463726f313573667570643236737036716633376c6c3571367875663333306b37646639746e767271687412580a500a460a1f2f636f736d6f732e63727970746f2e736563703235366b312e5075624b657912230a2103fd0d560b6c4aa1ca16721d039a192867c3457e19dad553edb98e7ba88b159c2712040a0208011802120410c09a0c1a4073919aa75f9f5e86b9d353ad5420f8b52199d600b5506c575f516e3964c86b3c5be9757f4a423492d52786657afdc2bce10a5aea7198dab1fd6d6c0d2463e521',
        );
    });

    it('Should validate MsgUpdateClient provided addresses with network config', function () {
        const params1 = {
            signer: 'cosmos1vw4ucaeagtduv5ep4sa95e3aqzqpsk5meda08c',
            clientId: 'clientId',
        };

        expect(() => new cro.ibc.MsgUpdateClient(params1)).to.throw(
            'Provided `signer` does not match network selected',
        );
    });

    it('Should throw on getting toRawAminoMsg()', function () {
        const MsgUpdateClient = new cro.ibc.MsgUpdateClient({
            signer: 'tcro15sfupd26sp6qf37ll5q6xuf330k7df9tnvrqht',
            clientId: 'clientId',
        });

        expect(() => MsgUpdateClient.toRawAminoMsg()).to.throw('IBC Module not supported under amino encoding scheme');
    });
    describe('fromCosmosJSON', function () {
        it('should throw Error if the JSON is not a IBC MsgUpdateClient', function () {
            const json =
                '{ "@type": "/cosmos.bank.v1beta1.MsgCreateValidator", "amount": [{ "denom": "basetcro", "amount": "3478499933290496" }], "from_address": "tcro1x07kkkepfj2hl8etlcuqhej7jj6myqrp48y4hg", "to_address": "tcro184lta2lsyu47vwyp2e8zmtca3k5yq85p6c4vp3" }';
            expect(() => cro.ibc.MsgUpdateClient.fromCosmosMsgJSON(json)).to.throw(
                'Expected /ibc.core.client.v1.MsgUpdateClient but got /cosmos.bank.v1beta1.MsgCreateValidator',
            );
        });
        it('should throw on invalid `signer`', function () {
            const json = `
              {
                "@type": "/ibc.core.client.v1.MsgUpdateClient",
                "signer": "cosmos1u8prj0rj3ur7kr23dhjgyteuq55ntahfuzlf6g",
                "client_id": "07-tendermint-33"
              }
            `;

            expect(() => cro.ibc.MsgUpdateClient.fromCosmosMsgJSON(json)).to.throw(
                'Provided `signer` does not match network selected',
            );
        });
        it('should throw on invalid `clientId`', function () {
            const json = `
              {
                "@type": "/ibc.core.client.v1.MsgUpdateClient",
                "signer": "cosmos1u8prj0rj3ur7kr23dhjgyteuq55ntahfuzlf6g"
              }
            `;

            expect(() => cro.ibc.MsgUpdateClient.fromCosmosMsgJSON(json)).to.throw(
                'Expected property `clientId` to be of type `string` but received type `undefined` in object `options`',
            );
        });
        it('should return the IBC MsgUpdateClient corresponding to the JSON', function () {
            const json = `{
                    "@type": "/ibc.core.client.v1.MsgUpdateClient",
                    "signer": "tcro1agr5hwr6gxljf4kpg6fm7l7ehjxtyazg86nef8",
                    "client_id": "07-tendermint-33"
                }
                `;

            const MsgUpdateClient = cro.ibc.MsgUpdateClient.fromCosmosMsgJSON(json);
            expect(MsgUpdateClient.signer).to.eql('tcro1agr5hwr6gxljf4kpg6fm7l7ehjxtyazg86nef8');
            expect(MsgUpdateClient.clientId).to.eql('07-tendermint-33');
            expect(MsgUpdateClient.header).to.be.null;
        });
    });
});
