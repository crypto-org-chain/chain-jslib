import 'mocha';
import { expect } from 'chai';
import Big from 'big.js';

import { fuzzyDescribe } from '../../../test/mocha-fuzzy/suite';
import { Msg } from '../../../cosmos/v1beta1/types/msg';
import { Secp256k1KeyPair } from '../../../keypair/secp256k1';
import { Bytes } from '../../../utils/bytes/bytes';
import { CroSDK } from '../../../core/cro';
import { COSMOS_MSG_TYPEURL } from '../../common/constants/typeurl';

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

describe('Testing MsgTransferNFT', function () {
    fuzzyDescribe('should throw Error when options is invalid', function (fuzzy) {
        const anyValidOptions = {
            id: 'alphaNumericID',
            name: 'nft_name',
            schema: 'schema',
            sender: 'tcro165tzcrh2yl83g8qeqxueg2g5gzgu57y3fe3kc3',
        };

        const testRunner = fuzzy(fuzzy.ObjArg(anyValidOptions));

        testRunner(function (options) {
            if (options.valid) {
                return;
            }
            expect(() => new cro.nft.MsgTransferNFT(options.value)).to.throw('Expected `options` to be of type `object`');
        });
    });

    it('Test MsgTransferNFT conversion', function () {
        const MsgTransferNFT = new cro.nft.MsgTransferNFT({
            id: 'alphanumericId1234',
            name: 'nft_name',
            sender: 'tcro165tzcrh2yl83g8qeqxueg2g5gzgu57y3fe3kc3',
            denomId: 'basetcro',
            uri: 'https://someuri',
            data: 'some_data_nft',
            recipient: 'tcro1j7pej8kplem4wt50p4hfvndhuw5jprxxn5625q',
        });

        const rawMsg: Msg = {
            typeUrl: COSMOS_MSG_TYPEURL.nft.MsgTransferNFT,
            value: {
                id: 'alphanumericId1234',
                name: 'nft_name',
                sender: 'tcro165tzcrh2yl83g8qeqxueg2g5gzgu57y3fe3kc3',
                denomId: 'basetcro',
                uri: 'https://someuri',
                data: 'some_data_nft',
                recipient: 'tcro1j7pej8kplem4wt50p4hfvndhuw5jprxxn5625q',
            },
        };

        expect(MsgTransferNFT.toRawMsg()).to.eqls(rawMsg);
    });

    it('Test appendTxBody MsgTransferNFT Tx signing', function () {
        const anyKeyPair = Secp256k1KeyPair.fromPrivKey(
            Bytes.fromHexString('66633d18513bec30dd11a209f1ceb1787aa9e2069d5d47e590174dc9665102b3'),
        );

        const MsgTransferNFT = new cro.nft.MsgTransferNFT({
            id: 'alphanumericId1234',
            name: 'nft_name',
            sender: 'tcro165tzcrh2yl83g8qeqxueg2g5gzgu57y3fe3kc3',
            denomId: 'basetcro',
            uri: 'https://someuri',
            data: 'some_data_nft',
            recipient: 'tcro1j7pej8kplem4wt50p4hfvndhuw5jprxxn5625q',
        });

        const anySigner = {
            publicKey: anyKeyPair.getPubKey(),
            accountNumber: new Big(0),
            accountSequence: new Big(2),
        };

        const rawTx = new cro.RawTransaction();

        const signableTx = rawTx.appendMessage(MsgTransferNFT).addSigner(anySigner).toSignable();

        const signedTx = signableTx.setSignature(0, anyKeyPair.sign(signableTx.toSignDocumentHash(0))).toSigned();

        const signedTxHex = signedTx.encode().toHexString();
        expect(signedTxHex).to.be.eql(
            '0a9f010a9c010a202f636861696e6d61696e2e6e66742e76312e4d73675472616e736665724e465412780a12616c7068616e756d657269634964313233341208626173657463726f1a2b7463726f313635747a63726832796c3833673871657178756567326735677a6775353779336665336b6333222b7463726f316a3770656a386b706c656d347774353070346866766e64687577356a707278786e353632357112580a500a460a1f2f636f736d6f732e63727970746f2e736563703235366b312e5075624b657912230a2103fd0d560b6c4aa1ca16721d039a192867c3457e19dad553edb98e7ba88b159c2712040a0208011802120410c09a0c1a40bcff4a558a22df40a4a6f7932f80f019eaa3f3308e1e72869e125a2618ec531275511913cf8db0e2aa954f2dae56303461a296318912d60e70dd529f1198bc33',
        );
    });

    it('Should validate MsgTransferNFT provided addresses with network config', function () {
        const params1 = {
            id: 'alphanumericId1234',
            name: 'nft_name',
            sender: 'cro1pndm4ywdf4qtmupa0fqe75krmqed2znjyj6x8f',
            denomId: 'basetcro',
            uri: 'https://someuri',
            data: 'some_data_nft',
            recipient: 'tcro1j7pej8kplem4wt50p4hfvndhuw5jprxxn5625q',
        };

        expect(() => new cro.nft.MsgTransferNFT(params1)).to.throw('Provided `sender` does not match network selected');

        const params2 = {
            id: 'alphanumericId1234',
            name: 'nft_name',
            sender: 'tcro1j7pej8kplem4wt50p4hfvndhuw5jprxxn5625q',
            denomId: 'basetcro',
            uri: 'https://someuri',
            data: 'some_data_nft',
            recipient: 'cro1pndm4ywdf4qtmupa0fqe75krmqed2znjyj6x8f',
        };

        expect(() => new cro.nft.MsgTransferNFT(params2)).to.throw('Provided `recipient` does not match network selected');
    });

    it('Should throw on getting toRawAminoMsg()', function () {
        const MsgTransferNFT = new cro.nft.MsgTransferNFT({
            id: 'alphanumericId1234',
            name: 'nft_name',
            sender: 'tcro165tzcrh2yl83g8qeqxueg2g5gzgu57y3fe3kc3',
            denomId: 'basetcro',
            uri: 'https://someuri',
            data: 'some_data_nft',
            recipient: 'tcro1j7pej8kplem4wt50p4hfvndhuw5jprxxn5625q',
        });

        expect(() => MsgTransferNFT.toRawAminoMsg()).to.throw('Amino encoding format not support for NFT module.');
    });
});
