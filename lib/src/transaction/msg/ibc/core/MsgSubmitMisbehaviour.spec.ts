import 'mocha';
import { expect } from 'chai';
import Big from 'big.js';

import { fuzzyDescribe } from '../../../../test/mocha-fuzzy/suite';
import { Msg } from '../../../../cosmos/v1beta1/types/msg';
import { Secp256k1KeyPair } from '../../../../keypair/secp256k1';
import { Bytes } from '../../../../utils/bytes/bytes';
import { CroSDK } from '../../../../core/cro';
import { COSMOS_MSG_TYPEURL } from '../../../common/constants/typeurl';
import { google } from '../../../../cosmos/v1beta1/codec';

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

describe('Testing MsgSubmitMisbehaviour', function () {
    fuzzyDescribe('should throw Error when options is invalid', function (fuzzy) {
        const anyValidOptions = {
            signer: 'tcro15sfupd26sp6qf37ll5q6xuf330k7df9tnvrqht',
        };

        const testRunner = fuzzy(fuzzy.ObjArg(anyValidOptions));

        testRunner(function (options) {
            if (options.valid) {
                return;
            }
            expect(() => new cro.ibc.MsgSubmitMisbehaviour(options.value)).to.throw(
                'Expected `options` to be of type `object`',
            );
        });
    });

    it('Test MsgSubmitMisbehaviour conversion', function () {
        const MsgSubmitMisbehaviour = new cro.ibc.MsgSubmitMisbehaviour({
            signer: 'tcro15sfupd26sp6qf37ll5q6xuf330k7df9tnvrqht',
            clientId: 'clientId',
        });

        const rawMsg: Msg = {
            typeUrl: COSMOS_MSG_TYPEURL.ibc.MsgSubmitMisbehaviour,
            value: {
                signer: 'tcro15sfupd26sp6qf37ll5q6xuf330k7df9tnvrqht',
                clientId: 'clientId',
                misbehaviour: undefined,
            },
        };

        expect(MsgSubmitMisbehaviour.toRawMsg()).to.deep.eq(rawMsg);
    });

    it('Test appendTxBody MsgSubmitMisbehaviour Tx signing', function () {
        const anyKeyPair = Secp256k1KeyPair.fromPrivKey(
            Bytes.fromHexString('66633d18513bec30dd11a209f1ceb1787aa9e2069d5d47e590174dc9665102b3'),
        );

        const MsgSubmitMisbehaviour = new cro.ibc.MsgSubmitMisbehaviour({
            signer: 'tcro15sfupd26sp6qf37ll5q6xuf330k7df9tnvrqht',
            misbehaviour: google.protobuf.Any.create({
                type_url: '/some.valid.type.url',
                value: new Uint8Array([1, 2, 35, 5]),
            }),
            clientId: 'clientId',
        });

        const anySigner = {
            publicKey: anyKeyPair.getPubKey(),
            accountNumber: new Big(0),
            accountSequence: new Big(2),
        };

        const rawTx = new cro.RawTransaction();

        const signableTx = rawTx.appendMessage(MsgSubmitMisbehaviour).addSigner(anySigner).toSignable();

        const signedTx = signableTx.setSignature(0, anyKeyPair.sign(signableTx.toSignDocumentHash(0))).toSigned();

        const signedTxHex = signedTx.encode().toHexString();
        expect(signedTxHex).to.be.eql(
            '0a85010a82010a292f6962632e636f72652e636c69656e742e76312e4d73675375626d69744d69736265686176696f757212550a08636c69656e744964121c0a142f736f6d652e76616c69642e747970652e75726c1204010223051a2b7463726f313573667570643236737036716633376c6c3571367875663333306b37646639746e767271687412580a500a460a1f2f636f736d6f732e63727970746f2e736563703235366b312e5075624b657912230a2103fd0d560b6c4aa1ca16721d039a192867c3457e19dad553edb98e7ba88b159c2712040a0208011802120410c09a0c1a406b03e8c6860b1ba2f02af6187606eb40bac88bccfd7f54c5bf1993a9e2607da96e84f7b7dc14b8d111403ae62c27a5b9001848ef814b29da9b6b08424030e272',
        );
    });

    it('Should validate MsgSubmitMisbehaviour provided addresses with network config', function () {
        const params1 = {
            signer: 'cosmos1vw4ucaeagtduv5ep4sa95e3aqzqpsk5meda08c',
            misbehaviour: google.protobuf.Any.create({
                type_url: '/some.valid.type.url',
                value: new Uint8Array([1, 2, 35, 5]),
            }),
            clientId: 'clientId',
        };

        expect(() => new cro.ibc.MsgSubmitMisbehaviour(params1)).to.throw(
            'Provided `signer` does not match network selected',
        );
    });

    it('Should throw on getting toRawAminoMsg()', function () {
        const MsgSubmitMisbehaviour = new cro.ibc.MsgSubmitMisbehaviour({
            signer: 'tcro15sfupd26sp6qf37ll5q6xuf330k7df9tnvrqht',
            clientId: 'clientId',
        });

        expect(() => MsgSubmitMisbehaviour.toRawAminoMsg()).to.throw(
            'IBC Module not supported under amino encoding scheme',
        );
    });
});
