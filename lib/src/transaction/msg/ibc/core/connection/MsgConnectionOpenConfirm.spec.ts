import 'mocha';
import { expect } from 'chai';
import Big from 'big.js';

import Long from 'long';
import { fuzzyDescribe } from '../../../../../test/mocha-fuzzy/suite';
import { Msg } from '../../../../../cosmos/v1beta1/types/msg';
import { Secp256k1KeyPair } from '../../../../../keypair/secp256k1';
import { Bytes } from '../../../../../utils/bytes/bytes';
import { CroSDK } from '../../../../../core/cro';
import { COSMOS_MSG_TYPEURL } from '../../../../common/constants/typeurl';

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

describe('Testing MsgConnectionOpenConfirm', function () {
    fuzzyDescribe('should throw Error when options is invalid', function (fuzzy) {
        const anyValidOptions = {
            connectionId: 'connection-0',
            proofAck: Bytes.fromBase64String(
                'CuoECucEChpjb25uZWN0aW9ucy9jb25uZWN0aW9uLTEwORJhChAwNy10ZW5kZXJtaW50LTM5EiMKATESDU9SREVSX09SREVSRUQSD09SREVSX1VOT1JERVJFRBgDIiYKDzA3LXRlbmRlcm1pbnQtMBIMY29ubmVjdGlvbi0wGgUKA2liYxoOCAEYASABKgYAAuaxrgUiLAgBEigCBOaxrgUgltfw',
            ).toUint8Array(),
            proofHeight: {
                revisionNumber: Long.fromString('4'),
                revisionHeight: Long.fromString('5624044'),
            },
            signer: 'tcro15sfupd26sp6qf37ll5q6xuf330k7df9tnvrqht',
        };

        const testRunner = fuzzy(fuzzy.ObjArg(anyValidOptions));

        testRunner(function (options) {
            if (options.valid) {
                return;
            }
            expect(() => new cro.ibc.connection.MsgConnectionOpenConfirm(options.value)).to.throw(
                'Expected `options` to be of type `object`',
            );
        });
    });

    it('Test MsgConnectionOpenConfirm conversion', function () {
        const MsgConnectionOpenConfirm = new cro.ibc.connection.MsgConnectionOpenConfirm({
            connectionId: 'connection-0',
            proofAck: Bytes.fromBase64String(
                'CuoECucEChpjb25uZWN0aW9ucy9jb25uZWN0aW9uLTEwORJhChAwNy10ZW5kZXJtaW50LTM5EiMKATESDU9SREVSX09SREVSRUQSD09SREVSX1VOT1JERVJFRBgDIiYKDzA3LXRlbmRlcm1pbnQtMBIMY29ubmVjdGlvbi0wGgUKA2liYxoOCAEYASABKgYAAuaxrgUiLAgBEigCBOaxrgUgltfw',
            ).toUint8Array(),
            proofHeight: {
                revisionNumber: Long.fromString('4'),
                revisionHeight: Long.fromString('5624044'),
            },
            signer: 'tcro15sfupd26sp6qf37ll5q6xuf330k7df9tnvrqht',
        });

        const rawMsg: Msg = {
            typeUrl: COSMOS_MSG_TYPEURL.ibc.connection.MsgConnectionOpenConfirm,
            value: {
                connectionId: 'connection-0',
                proofAck: Bytes.fromBase64String(
                    'CuoECucEChpjb25uZWN0aW9ucy9jb25uZWN0aW9uLTEwORJhChAwNy10ZW5kZXJtaW50LTM5EiMKATESDU9SREVSX09SREVSRUQSD09SREVSX1VOT1JERVJFRBgDIiYKDzA3LXRlbmRlcm1pbnQtMBIMY29ubmVjdGlvbi0wGgUKA2liYxoOCAEYASABKgYAAuaxrgUiLAgBEigCBOaxrgUgltfw',
                ).toUint8Array(),
                proofHeight: {
                    revisionNumber: Long.fromString('4'),
                    revisionHeight: Long.fromString('5624044'),
                },
                signer: 'tcro15sfupd26sp6qf37ll5q6xuf330k7df9tnvrqht',
            },
        };

        expect(MsgConnectionOpenConfirm.toRawMsg()).to.deep.equal(rawMsg);
    });

    it('Test appendTxBody MsgConnectionOpenConfirm Tx signing', function () {
        const anyKeyPair = Secp256k1KeyPair.fromPrivKey(
            Bytes.fromHexString('66633d18513bec30dd11a209f1ceb1787aa9e2069d5d47e590174dc9665102b3'),
        );

        const MsgConnectionOpenConfirm = new cro.ibc.connection.MsgConnectionOpenConfirm({
            connectionId: 'connection-0',
            proofAck: Bytes.fromBase64String(
                'CuoECucEChpjb25uZWN0aW9ucy9jb25uZWN0aW9uLTEwORJhChAwNy10ZW5kZXJtaW50LTM5EiMKATESDU9SREVSX09SREVSRUQSD09SREVSX1VOT1JERVJFRBgDIiYKDzA3LXRlbmRlcm1pbnQtMBIMY29ubmVjdGlvbi0wGgUKA2liYxoOCAEYASABKgYAAuaxrgUiLAgBEigCBOaxrgUgltfw',
            ).toUint8Array(),
            proofHeight: {
                revisionNumber: Long.fromString('4'),
                revisionHeight: Long.fromString('5624044'),
            },
            signer: 'tcro15sfupd26sp6qf37ll5q6xuf330k7df9tnvrqht',
        });

        const anySigner = {
            publicKey: anyKeyPair.getPubKey(),
            accountNumber: new Big(0),
            accountSequence: new Big(2),
        };

        const rawTx = new cro.RawTransaction();

        const signableTx = rawTx.appendMessage(MsgConnectionOpenConfirm).addSigner(anySigner).toSignable();

        const signedTx = signableTx.setSignature(0, anyKeyPair.sign(signableTx.toSignDocumentHash(0))).toSigned();

        const signedTxHex = signedTx.encode().toHexString();
        expect(signedTxHex).to.be.eql(
            '0aa4020aa1020a302f6962632e636f72652e636f6e6e656374696f6e2e76312e4d7367436f6e6e656374696f6e4f70656e436f6e6669726d12ec010a0c636f6e6e656374696f6e2d3012a5010aea040ae7040a1a636f6e6e656374696f6e732f636f6e6e656374696f6e2d31303912610a1030372d74656e6465726d696e742d333912230a0131120d4f524445525f4f524445524544120f4f524445525f554e4f524445524544180322260a0f30372d74656e6465726d696e742d30120c636f6e6e656374696f6e2d301a050a036962631a0e0801180120012a060002e6b1ae05222c080112280204e6b1ae052096d7f01a07080410eca1d702222b7463726f313573667570643236737036716633376c6c3571367875663333306b37646639746e767271687412580a500a460a1f2f636f736d6f732e63727970746f2e736563703235366b312e5075624b657912230a2103fd0d560b6c4aa1ca16721d039a192867c3457e19dad553edb98e7ba88b159c2712040a0208011802120410c09a0c1a40d229e4846fa7efaaa1574ac5bda529cc60f43bfbf621fbca66e099bcb3af34e4090f929b8d2ccaa871595a9e6dd5a3fe521717dc5bc510c5e7e9be8dfc7bfc35',
        );
    });

    it('Should validate MsgConnectionOpenConfirm provided addresses with network config', function () {
        const params1 = {
            connectionId: 'connection-0',
            proofAck: Bytes.fromBase64String(
                'CuoECucEChpjb25uZWN0aW9ucy9jb25uZWN0aW9uLTEwORJhChAwNy10ZW5kZXJtaW50LTM5EiMKATESDU9SREVSX09SREVSRUQSD09SREVSX1VOT1JERVJFRBgDIiYKDzA3LXRlbmRlcm1pbnQtMBIMY29ubmVjdGlvbi0wGgUKA2liYxoOCAEYASABKgYAAuaxrgUiLAgBEigCBOaxrgUgltfw',
            ).toUint8Array(),
            proofHeight: {
                revisionNumber: Long.fromString('4'),
                revisionHeight: Long.fromString('5624044'),
            },
            signer: 'cosmos1vw4ucaeagtduv5ep4sa95e3aqzqpsk5meda08c',
        };

        expect(() => new cro.ibc.connection.MsgConnectionOpenConfirm(params1)).to.throw(
            'Provided `signer` does not match network selected',
        );
    });

    it('Should throw on getting toRawAminoMsg()', function () {
        const MsgConnectionOpenConfirm = new cro.ibc.connection.MsgConnectionOpenConfirm({
            connectionId: 'connection-0',
            proofAck: Bytes.fromBase64String(
                'CuoECucEChpjb25uZWN0aW9ucy9jb25uZWN0aW9uLTEwORJhChAwNy10ZW5kZXJtaW50LTM5EiMKATESDU9SREVSX09SREVSRUQSD09SREVSX1VOT1JERVJFRBgDIiYKDzA3LXRlbmRlcm1pbnQtMBIMY29ubmVjdGlvbi0wGgUKA2liYxoOCAEYASABKgYAAuaxrgUiLAgBEigCBOaxrgUgltfw',
            ).toUint8Array(),
            proofHeight: {
                revisionNumber: Long.fromString('4'),
                revisionHeight: Long.fromString('5624044'),
            },
            signer: 'tcro15sfupd26sp6qf37ll5q6xuf330k7df9tnvrqht',
        });

        expect(() => MsgConnectionOpenConfirm.toRawAminoMsg()).to.throw(
            'IBC Module not supported under amino encoding scheme',
        );
    });

    describe('fromCosmosJSON', function () {
        it('should throw Error if the JSON is not a IBC MsgConnectionOpenConfirm', function () {
            const json =
                '{ "@type": "/cosmos.bank.v1beta1.MsgCreateValidator", "amount": [{ "denom": "basetcro", "amount": "3478499933290496" }], "from_address": "tcro1x07kkkepfj2hl8etlcuqhej7jj6myqrp48y4hg", "to_address": "tcro184lta2lsyu47vwyp2e8zmtca3k5yq85p6c4vp3" }';
            expect(() => cro.ibc.connection.MsgConnectionOpenConfirm.fromCosmosMsgJSON(json)).to.throw(
                '/ibc.core.connection.v1.MsgConnectionOpenConfirm but got /cosmos.bank.v1beta1.MsgCreateValidator',
            );
        });
        it('should throw on invalid `signer`', function () {
            const json = `
            {
                "@type": "/ibc.core.connection.v1.MsgConnectionOpenConfirm",
                "connection_id": "connection-0",
                "proof_ack": "CuoECucEChpjb25uZWN0aW9ucy9jb25uZWN0aW9uLTEwORJhChAwNy10ZW5kZXJtaW50LTM5EiMKATESDU9SREVSX09SREVSRUQSD09SREVSX1VOT1JERVJFRBgDIiYKDzA3LXRlbmRlcm1pbnQtMBIMY29ubmVjdGlvbi0wGgUKA2liYxoOCAEYASABKgYAAuaxrgUiLAgBEigCBOaxrgUgltfw/bo0CDtYmNNH7fv7vx+WjEcTkfac/kCPa7DedDEgIiwIARIoBAbmsa4FIB8xvqKimT34trzUuHIlW3G/2DP7N8YHwOSx/mzQ0ErpICIsCAESKAYK5rGuBSBWYYwmrC+uozPRr3ohRkyH3xIOwIaaW+1sq8AxiFNQYSAiLAgBEigIGuaxrgUgy8xshXqwIhiBGvcb4PNq5LIqnO0OUHaijkhQRqR7jqogIi4IARIHCibmsa4FIBohIItQjFFOZ3x/ji7vdITso/QHTHYeLi5uc7QUQSSwm0bUIi4IARIHDFjmsa4FIBohIKFbQ+eCfqDHa9oEnrivmdJwS67tg1C9ZxwmaEaqvX2+Ii0IARIpDpwB5rGuBSC9Zpf5w9YzCgKIVDlD16yj4NXh3l8fsJKmryTYqTnyqiAiLwgBEggQpgLmsa4FIBohIBEGzVfyfw8OTVskya1pMT5e8/DW5Yx5yPgIGOY0E4W9Ii8IARIIEt4D5rGuBSAaISC3sgTWB3c4n6lgqlNYSjFvMHSl6YZ3r+ebnNDCEmCfYiItCAESKRaKDOaxrgUg+jfbRK8vmXAywtaLcL/UaDT16iML9dND4OASW1eHSB0gCtUBCtIBCgNpYmMSIGDVVrQC1QnXBhhenB9j9iBD8d1AMShY+v3PLkaVo++3GgkIARgBIAEqAQAiJwgBEgEBGiD5Vt5/BBmvQQnMGXTh8TcjCr0rjLn1J3de7MoaiBcPIiIlCAESIQEFpaWk4Z4I+HrpIBDKAjoakmKcZxCuHLso78blOarPPiIlCAESIQFyMyfTXOtJCpzDuQ7cb70cKwRg+huJy6JykKxrRE6vYiInCAESAQEaIPGCxxt96/zj47Kv0wrrGBOqto+/vvvf4XGiiuxT7TZU",
                "proof_height": {
                  "revision_number": "4",
                  "revision_height": "5622902"
                },
                "signer": "cosmos1u8prj0rj3ur7kr23dhjgyteuq55ntahfuzlf6g"
              }
            `;

            expect(() => cro.ibc.connection.MsgConnectionOpenConfirm.fromCosmosMsgJSON(json)).to.throw(
                'Provided `signer` does not match network selected',
            );
        });
        it('should return the IBC MsgConnectionOpenConfirm corresponding to the JSON', function () {
            const json = `{
                "@type": "/ibc.core.connection.v1.MsgConnectionOpenConfirm",
                "connection_id": "connection-0",
                "proof_ack": "CuoECucEChpjb25uZWN0aW9ucy9jb25uZWN0aW9uLTEwORJhChAwNy10ZW5kZXJtaW50LTM5EiMKATESDU9SREVSX09SREVSRUQSD09SREVSX1VOT1JERVJFRBgDIiYKDzA3LXRlbmRlcm1pbnQtMBIMY29ubmVjdGlvbi0wGgUKA2liYxoOCAEYASABKgYAAuaxrgUiLAgBEigCBOaxrgUgltfw/bo0CDtYmNNH7fv7vx+WjEcTkfac/kCPa7DedDEgIiwIARIoBAbmsa4FIB8xvqKimT34trzUuHIlW3G/2DP7N8YHwOSx/mzQ0ErpICIsCAESKAYK5rGuBSBWYYwmrC+uozPRr3ohRkyH3xIOwIaaW+1sq8AxiFNQYSAiLAgBEigIGuaxrgUgy8xshXqwIhiBGvcb4PNq5LIqnO0OUHaijkhQRqR7jqogIi4IARIHCibmsa4FIBohIItQjFFOZ3x/ji7vdITso/QHTHYeLi5uc7QUQSSwm0bUIi4IARIHDFjmsa4FIBohIKFbQ+eCfqDHa9oEnrivmdJwS67tg1C9ZxwmaEaqvX2+Ii0IARIpDpwB5rGuBSC9Zpf5w9YzCgKIVDlD16yj4NXh3l8fsJKmryTYqTnyqiAiLwgBEggQpgLmsa4FIBohIBEGzVfyfw8OTVskya1pMT5e8/DW5Yx5yPgIGOY0E4W9Ii8IARIIEt4D5rGuBSAaISC3sgTWB3c4n6lgqlNYSjFvMHSl6YZ3r+ebnNDCEmCfYiItCAESKRaKDOaxrgUg+jfbRK8vmXAywtaLcL/UaDT16iML9dND4OASW1eHSB0gCtUBCtIBCgNpYmMSIGDVVrQC1QnXBhhenB9j9iBD8d1AMShY+v3PLkaVo++3GgkIARgBIAEqAQAiJwgBEgEBGiD5Vt5/BBmvQQnMGXTh8TcjCr0rjLn1J3de7MoaiBcPIiIlCAESIQEFpaWk4Z4I+HrpIBDKAjoakmKcZxCuHLso78blOarPPiIlCAESIQFyMyfTXOtJCpzDuQ7cb70cKwRg+huJy6JykKxrRE6vYiInCAESAQEaIPGCxxt96/zj47Kv0wrrGBOqto+/vvvf4XGiiuxT7TZU",
                "proof_height": {
                  "revision_number": "4",
                  "revision_height": "5622902"
                },
                "signer": "tcro1agr5hwr6gxljf4kpg6fm7l7ehjxtyazg86nef8"
              }
                `;

            const MsgConnectionOpenConfirm = cro.ibc.connection.MsgConnectionOpenConfirm.fromCosmosMsgJSON(json);
            expect(MsgConnectionOpenConfirm.signer).to.eql('tcro1agr5hwr6gxljf4kpg6fm7l7ehjxtyazg86nef8');
            expect(MsgConnectionOpenConfirm.connectionId).to.eql('connection-0');
            expect(MsgConnectionOpenConfirm?.proofHeight?.revisionHeight!.toString()).to.eql('5622902');
            expect(MsgConnectionOpenConfirm?.proofHeight?.revisionNumber!.toString()).to.eql('4');
        });
    });
});
