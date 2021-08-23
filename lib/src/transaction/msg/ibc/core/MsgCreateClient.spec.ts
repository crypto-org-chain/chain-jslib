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

describe('Testing MsgCreateClient', function () {
    fuzzyDescribe('should throw Error when options is invalid', function (fuzzy) {
        const anyValidOptions = {
            signer: 'tcro15sfupd26sp6qf37ll5q6xuf330k7df9tnvrqht',
        };

        const testRunner = fuzzy(fuzzy.ObjArg(anyValidOptions));

        testRunner(function (options) {
            if (options.valid) {
                return;
            }
            expect(() => new cro.ibc.MsgCreateClient(options.value)).to.throw(
                'Expected `options` to be of type `object`',
            );
        });
    });

    it('Test MsgCreateClient conversion', function () {
        const msgClientState = new cro.ibc.lightclient.ClientState({
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

        const msgConsensusState = new cro.ibc.lightclient.ConsensusState({
            timestamp: null,
            root: null,
            nextValidatorsHash: Uint8Array.from([1, 2, 3]),
        });

        const MsgCreateClient = new cro.ibc.MsgCreateClient({
            signer: 'tcro15sfupd26sp6qf37ll5q6xuf330k7df9tnvrqht',
            clientState: msgClientState,
            consensusState: msgConsensusState,
        });

        const rawMsg: Msg = {
            typeUrl: COSMOS_MSG_TYPEURL.ibc.MsgCreateClient,
            value: {
                signer: 'tcro15sfupd26sp6qf37ll5q6xuf330k7df9tnvrqht',
                clientState: msgClientState.getEncoded(),
                consensusState: msgConsensusState.getEncoded(),
            },
        };

        expect(MsgCreateClient.toRawMsg()).to.deep.equal(rawMsg);
    });

    it('Test appendTxBody MsgCreateClient Tx signing', function () {
        const anyKeyPair = Secp256k1KeyPair.fromPrivKey(
            Bytes.fromHexString('66633d18513bec30dd11a209f1ceb1787aa9e2069d5d47e590174dc9665102b3'),
        );
        const msgClientState = new cro.ibc.lightclient.ClientState({
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

        const msgConsensusState = new cro.ibc.lightclient.ConsensusState({
            timestamp: null,
            root: null,
            nextValidatorsHash: Uint8Array.from([1, 2, 3]),
        });
        const MsgCreateClient = new cro.ibc.MsgCreateClient({
            signer: 'tcro15sfupd26sp6qf37ll5q6xuf330k7df9tnvrqht',
            clientState: msgClientState,
            consensusState: msgConsensusState,
        });

        const anySigner = {
            publicKey: anyKeyPair.getPubKey(),
            accountNumber: new Big(0),
            accountSequence: new Big(2),
        };

        const rawTx = new cro.RawTransaction();

        const signableTx = rawTx.appendMessage(MsgCreateClient).addSigner(anySigner).toSignable();

        const signedTx = signableTx.setSignature(0, anyKeyPair.sign(signableTx.toSignDocumentHash(0))).toSigned();

        const signedTxHex = signedTx.encode().toHexString();
        expect(signedTxHex).to.be.eql(
            '0ab4020ab1020a232f6962632e636f72652e636c69656e742e76312e4d7367437265617465436c69656e741289020aa0010a2b2f6962632e6c69676874636c69656e74732e74656e6465726d696e742e76312e436c69656e74537461746512710a12746573746e65742d63726f65736569642d311204080110011a06086410a08d062206086410a08d062a06086410a08d063204086410643a040864106442280a0d08051005180520022a0300010212110a02010210011800200a2a03000102300518904e20904e4a036962635000580012370a2e2f6962632e6c69676874636c69656e74732e74656e6465726d696e742e76312e436f6e73656e737573537461746512051a030102031a2b7463726f313573667570643236737036716633376c6c3571367875663333306b37646639746e767271687412580a500a460a1f2f636f736d6f732e63727970746f2e736563703235366b312e5075624b657912230a2103fd0d560b6c4aa1ca16721d039a192867c3457e19dad553edb98e7ba88b159c2712040a0208011802120410c09a0c1a40d4414a8cc77c85b9afcc53b76b4aaec7b793973c19f7a2a5b2c35c3d9fd80a0c51e11e77d42a190479e0a99ba02c7b957d5aec76afc9129835c178e19d42d237',
        );
    });

    it('Should validate MsgCreateClient provided addresses with network config', function () {
        const params1 = {
            signer: 'cosmos1vw4ucaeagtduv5ep4sa95e3aqzqpsk5meda08c',
        };

        expect(() => new cro.ibc.MsgCreateClient(params1)).to.throw(
            'Provided `signer` does not match network selected',
        );
    });

    it('Should throw on getting toRawAminoMsg()', function () {
        const MsgCreateClient = new cro.ibc.MsgCreateClient({
            signer: 'tcro15sfupd26sp6qf37ll5q6xuf330k7df9tnvrqht',
        });

        expect(() => MsgCreateClient.toRawAminoMsg()).to.throw('IBC Module not supported under amino encoding scheme');
    });

    describe('fromCosmosJSON', function () {
        it('should throw Error if the JSON is not a IBC MsgCreateClient', function () {
            const json =
                '{ "@type": "/cosmos.bank.v1beta1.MsgCreateValidator", "amount": [{ "denom": "basetcro", "amount": "3478499933290496" }], "from_address": "tcro1x07kkkepfj2hl8etlcuqhej7jj6myqrp48y4hg", "to_address": "tcro184lta2lsyu47vwyp2e8zmtca3k5yq85p6c4vp3" }';
            expect(() => cro.ibc.MsgCreateClient.fromCosmosMsgJSON(json)).to.throw(
                'Expected /ibc.core.client.v1.MsgCreateClient but got /cosmos.bank.v1beta1.MsgCreateValidator',
            );
        });
        it('should throw on invalid `sender`', function () {
            const json = `
              {
                "@type": "/ibc.core.client.v1.MsgCreateClient",
                "signer": "cosmos1u8prj0rj3ur7kr23dhjgyteuq55ntahfuzlf6g"
              }
            `;

            expect(() => cro.ibc.MsgCreateClient.fromCosmosMsgJSON(json)).to.throw(
                'Provided `signer` does not match network selected',
            );
        });
        it('should return the IBC MsgCreateClient corresponding to the JSON', function () {
            const json = `{
                    "@type": "/ibc.core.client.v1.MsgCreateClient",
                    "signer": "tcro1agr5hwr6gxljf4kpg6fm7l7ehjxtyazg86nef8"
                  }
                `;

            const MsgCreateClient = cro.ibc.MsgCreateClient.fromCosmosMsgJSON(json);
            expect(MsgCreateClient.signer).to.eql('tcro1agr5hwr6gxljf4kpg6fm7l7ehjxtyazg86nef8');
        });
    });
});
