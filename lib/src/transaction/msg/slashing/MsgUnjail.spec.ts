import 'mocha';
import { expect } from 'chai';
import Big from 'big.js';

import { fuzzyDescribe } from '../../../test/mocha-fuzzy/suite';
import { Msg } from '../../../cosmos/v1beta1/types/msg';
import { Secp256k1KeyPair } from '../../../keypair/secp256k1';
import { Bytes } from '../../../utils/bytes/bytes';
import { CroSDK } from '../../../core/cro';
import * as legacyAmino from '../../../cosmos/amino';

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

describe('Testing MsgUnjail', function () {
    fuzzyDescribe('should throw Error when options is invalid', function (fuzzy) {
        const anyValidOptions = {
            validatorAddress: 'tcrocncl1j7pej8kplem4wt50p4hfvndhuw5jprxxxtenvr',
        };
        const testRunner = fuzzy(fuzzy.ObjArg(anyValidOptions));

        testRunner(function (options) {
            if (options.valid) {
                return;
            }
            expect(() => new cro.v2.slashing.MsgUnjailV2(options.value)).to.throw(
                'Expected `options` to be of type `object`',
            );
        });
    });

    it('Test MsgUnjail conversion', function () {
        const MsgUnjail = new cro.v2.slashing.MsgUnjailV2({
            validatorAddress: 'tcrocncl1j7pej8kplem4wt50p4hfvndhuw5jprxxxtenvr',
        });

        const rawMsg: Msg = {
            typeUrl: '/cosmos.slashing.v1beta1.MsgUnjail',
            value: {
                validatorAddr: 'tcrocncl1j7pej8kplem4wt50p4hfvndhuw5jprxxxtenvr',
            },
        };

        expect(MsgUnjail.toRawMsg()).to.eqls(rawMsg);
    });

    it('Test appendTxBody MsgUnjail Tx signing', function () {
        const anyKeyPair = Secp256k1KeyPair.fromPrivKey(
            Bytes.fromHexString('66633d18513bec30dd11a209f1ceb1787aa9e2069d5d47e590174dc9665102b3'),
        );

        const MsgUnjail = new cro.v2.slashing.MsgUnjailV2({
            validatorAddress: 'tcrocncl1j7pej8kplem4wt50p4hfvndhuw5jprxxxtenvr',
        });

        const anySigner = {
            publicKey: anyKeyPair.getPubKey(),
            accountNumber: new Big(0),
            accountSequence: new Big(2),
        };

        const rawTx = new cro.RawTransaction();

        const signableTx = rawTx.appendMessage(MsgUnjail).addSigner(anySigner).toSignable();

        const signedTx = signableTx.setSignature(0, anyKeyPair.sign(signableTx.toSignDocumentHash(0))).toSigned();

        const signedTxHex = signedTx.encode().toHexString();
        expect(signedTxHex).to.be.eql(
            '0a590a570a222f636f736d6f732e736c617368696e672e763162657461312e4d7367556e6a61696c12310a2f7463726f636e636c316a3770656a386b706c656d347774353070346866766e64687577356a707278787874656e767212580a500a460a1f2f636f736d6f732e63727970746f2e736563703235366b312e5075624b657912230a2103fd0d560b6c4aa1ca16721d039a192867c3457e19dad553edb98e7ba88b159c2712040a0208011802120410c09a0c1a40186e87b0b41928e69a1211c1fb5ebcb4c11fa6350f5cc830fa5f38f36f37f66e00d062707672b5d4ebf98cd5e3c7c4b40562707321bb9e8f2d3d605d8beb7b13',
        );
    });

    it('Should not throw on using V2 methods for transaction management', function () {
        const anyKeyPair = Secp256k1KeyPair.fromPrivKey(
            Bytes.fromHexString('66633d18513bec30dd11a209f1ceb1787aa9e2069d5d47e590174dc9665102b3'),
        );

        const MsgUnjail = new cro.v2.slashing.MsgUnjailV2({
            validatorAddress: 'tcrocncl1j7pej8kplem4wt50p4hfvndhuw5jprxxxtenvr',
        });

        const anySigner = {
            publicKey: anyKeyPair.getPubKey(),
            accountNumber: new Big(0),
            accountSequence: new Big(2),
        };

        const rawTx = new cro.v2.RawTransactionV2();

        const signableTxV2 = rawTx.appendMessage(MsgUnjail).addSigner(anySigner).toSignable();

        const signedTx = signableTxV2.setSignature(0, anyKeyPair.sign(signableTxV2.toSignDocumentHash(0))).toSigned();

        const signedTxHex = signedTx.encode().toHexString();
        expect(signedTxHex).to.be.eql(
            '0a590a570a222f636f736d6f732e736c617368696e672e763162657461312e4d7367556e6a61696c12310a2f7463726f636e636c316a3770656a386b706c656d347774353070346866766e64687577356a707278787874656e767212580a500a460a1f2f636f736d6f732e63727970746f2e736563703235366b312e5075624b657912230a2103fd0d560b6c4aa1ca16721d039a192867c3457e19dad553edb98e7ba88b159c2712040a0208011802120410c09a0c1a40186e87b0b41928e69a1211c1fb5ebcb4c11fa6350f5cc830fa5f38f36f37f66e00d062707672b5d4ebf98cd5e3c7c4b40562707321bb9e8f2d3d605d8beb7b13',
        );
    });

    it('Should validate MsgUnjail provided addresses with network config', function () {
        const params2 = {
            validatorAddress: 'tcro165tzcrh2yl83g8qeqxueg2g5gzgu57y3fe3kc3',
        };

        expect(() => new cro.v2.slashing.MsgUnjailV2(params2)).to.throw(
            'Provided `validatorAddress` doesnt match network selected',
        );
    });

    describe('Testing MsgUnjail Json', function () {
        it('Test MsgUnjail conversion for amino json', function () {
            const MsgUnjail = new cro.v2.slashing.MsgUnjailV2({
                validatorAddress: 'tcrocncl1j7pej8kplem4wt50p4hfvndhuw5jprxxxtenvr',
            });

            const rawMsg: legacyAmino.Msg = {
                type: 'cosmos-sdk/MsgUnjail',
                value: {
                    validator_addr: 'tcrocncl1j7pej8kplem4wt50p4hfvndhuw5jprxxxtenvr',
                },
            };

            expect(MsgUnjail.toRawAminoMsg()).to.eqls(rawMsg);
        });
    });
    describe('fromCosmosJSON', function () {
        it('should throw Error if the JSON is not a MsgUnjail', function () {
            const json =
                '{ "@type": "/cosmos.bank.v1beta1.MsgCreateValidator", "amount": [{ "denom": "basetcro", "amount": "3478499933290496" }], "from_address": "tcro1x07kkkepfj2hl8etlcuqhej7jj6myqrp48y4hg", "to_address": "tcro184lta2lsyu47vwyp2e8zmtca3k5yq85p6c4vp3" }';
            expect(() => cro.v2.slashing.MsgUnjailV2.fromCosmosMsgJSON(json)).to.throw(
                'Expected /cosmos.slashing.v1beta1.MsgUnjail but got /cosmos.bank.v1beta1.MsgCreateValidator',
            );
        });
        it('should throw Error when the `validator_address` field is missing', function () {
            const json = '{"@type":"/cosmos.slashing.v1beta1.MsgUnjail"}';
            expect(() => cro.v2.slashing.MsgUnjailV2.fromCosmosMsgJSON(json)).to.throw(
                'Expected property `validatorAddress` to be of type `string` but received type `undefined` in object `options`',
            );
        });

        it('should return the MsgUnjail corresponding to the JSON', function () {
            const json =
                '{"@type":"/cosmos.slashing.v1beta1.MsgUnjail","validator_addr":"tcrocncl1j7pej8kplem4wt50p4hfvndhuw5jprxxxtenvr"}';
            const MsgUnjail = cro.v2.slashing.MsgUnjailV2.fromCosmosMsgJSON(json);
            expect(MsgUnjail.validatorAddress).to.eql('tcrocncl1j7pej8kplem4wt50p4hfvndhuw5jprxxxtenvr');
        });
    });
});
