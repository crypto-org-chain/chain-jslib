import 'mocha';
import { expect } from 'chai';
import Big from 'big.js';

import { fuzzyDescribe } from '../../../test/mocha-fuzzy/suite';
import { Msg } from '../../../cosmos/v1beta1/types/msg';
import { Secp256k1KeyPair } from '../../../keypair/secp256k1';
import { Bytes } from '../../../utils/bytes/bytes';
import { CroSDK } from '../../../core/cro';
import { COSMOS_MSG_TYPEURL } from '../../common/constants/typeurl';
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

describe('Testing MsgEditNFT', function () {
    fuzzyDescribe('should throw Error when options is invalid', function (fuzzy) {
        const anyValidOptions = {
            id: 'alphanumericId1234',
            name: 'nft_name',
            sender: 'tcro1pndm4ywdf4qtmupa0fqe75krmqed2znjyj6x8f',
            denomId: 'basetcro',
            uri: 'https://someuri',
            data: 'some_data_nft',
        };

        const testRunner = fuzzy(fuzzy.ObjArg(anyValidOptions));

        testRunner(function (options) {
            if (options.valid) {
                return;
            }
            expect(() => new cro.nft.MsgEditNFT(options.value)).to.throw('Expected `options` to be of type `object`');
        });
    });

    it('should throw Error when the token id is invalid', function () {
        const anyDenomId = 'anydenomid';
        const anyName = 'anyname';
        const anyUri = 'anyuri';
        const anyData = 'anydata';
        const anySender = 'tcro165tzcrh2yl83g8qeqxueg2g5gzgu57y3fe3kc3';

        // < 3 characters
        expect(
            () =>
                new cro.nft.MsgEditNFT({
                    id: 'a',
                    name: anyName,
                    sender: anySender,
                    denomId: anyDenomId,
                    uri: anyUri,
                    data: anyData,
                }),
        ).to.throw('Expected property string `id` to have a minimum length of `3`, got `a` in object `options`');
        // > 64 characters
        expect(
            () =>
                new cro.nft.MsgEditNFT({
                    id: 'a123456789012345567890123456789012345678901234567890123456789012345',
                    name: anyName,
                    sender: anySender,
                    denomId: anyDenomId,
                    uri: anyUri,
                    data: anyData,
                }),
        ).to.throw(
            'Expected property string `id` to have a maximum length of `64`, got `a123456789012345567890123456789012345678901234567890123456789012345` in object `options`',
        );
        expect(
            () =>
                new cro.nft.MsgEditNFT({
                    id: '123',
                    name: anyName,
                    sender: anySender,
                    denomId: anyDenomId,
                    uri: anyUri,
                    data: anyData,
                }),
        ).to.throw('Expected property string `id` to start with lowercase alphabets in object `options`');
        expect(
            () =>
                new cro.nft.MsgEditNFT({
                    id: 'aBC',
                    name: anyName,
                    sender: anySender,
                    denomId: anyDenomId,
                    uri: anyUri,
                    data: anyData,
                }),
        ).to.throw(
            'Expected property string `id` to contain only lowercase alphanumeric characters in object `options`',
        );
        expect(
            () =>
                new cro.nft.MsgEditNFT({
                    id: 'abc_123',
                    name: anyName,
                    sender: anySender,
                    denomId: anyDenomId,
                    uri: anyUri,
                    data: anyData,
                }),
        ).to.throw(
            'Expected property string `id` to contain only lowercase alphanumeric characters in object `options`',
        );
    });

    it('should throw Error when the denom id is invalid', function () {
        const anyTokenId = 'anytokenid';
        const anyName = 'anyname';
        const anyUri = 'anyuri';
        const anyData = 'anydata';
        const anySender = 'tcro165tzcrh2yl83g8qeqxueg2g5gzgu57y3fe3kc3';

        // < 3 characters
        expect(
            () =>
                new cro.nft.MsgEditNFT({
                    denomId: 'a',
                    name: anyName,
                    sender: anySender,
                    id: anyTokenId,
                    uri: anyUri,
                    data: anyData,
                }),
        ).to.throw('Expected property string `denomId` to have a minimum length of `3`, got `a` in object `options`');
        // > 64 characters
        expect(
            () =>
                new cro.nft.MsgEditNFT({
                    denomId: 'a123456789012345567890123456789012345678901234567890123456789012345',
                    name: anyName,
                    sender: anySender,
                    id: anyTokenId,
                    uri: anyUri,
                    data: anyData,
                }),
        ).to.throw(
            'Expected property string `denomId` to have a maximum length of `64`, got `a123456789012345567890123456789012345678901234567890123456789012345` in object `options`',
        );
        expect(
            () =>
                new cro.nft.MsgEditNFT({
                    denomId: '123',
                    name: anyName,
                    sender: anySender,
                    id: anyTokenId,
                    uri: anyUri,
                    data: anyData,
                }),
        ).to.throw('Expected property string `denomId` to start with lowercase alphabets in object `options`');
        expect(
            () =>
                new cro.nft.MsgEditNFT({
                    denomId: 'aBC',
                    name: anyName,
                    sender: anySender,
                    id: anyTokenId,
                    uri: anyUri,
                    data: anyData,
                }),
        ).to.throw(
            'Expected property string `denomId` to contain only lowercase alphanumeric characters in object `options`',
        );
        expect(
            () =>
                new cro.nft.MsgEditNFT({
                    denomId: 'abc_123',
                    name: anyName,
                    sender: anySender,
                    id: anyTokenId,
                    uri: anyUri,
                    data: anyData,
                }),
        ).to.throw(
            'Expected property string `denomId` to contain only lowercase alphanumeric characters in object `options`',
        );
    });

    it('Test MsgEditNFT conversion', function () {
        const MsgEditNFT = new cro.nft.MsgEditNFT({
            id: 'alphanumericid1234',
            name: 'nft_name',
            sender: 'tcro165tzcrh2yl83g8qeqxueg2g5gzgu57y3fe3kc3',
            denomId: 'basetcro',
            uri: 'https://someuri',
            data: 'some_data_nft',
        });

        const rawMsg: Msg = {
            typeUrl: COSMOS_MSG_TYPEURL.nft.MsgEditNFT,
            value: {
                id: 'alphanumericid1234',
                name: 'nft_name',
                sender: 'tcro165tzcrh2yl83g8qeqxueg2g5gzgu57y3fe3kc3',
                denomId: 'basetcro',
                uri: 'https://someuri',
                data: 'some_data_nft',
            },
        };

        expect(MsgEditNFT.toRawMsg()).to.eqls(rawMsg);
    });

    it('Test MsgMintNFT conversion Json', function () {
        const msgMintNFT = new cro.nft.MsgMintNFT({
            id: 'alphanumericid1234',
            name: 'nft_name',
            sender: 'tcro165tzcrh2yl83g8qeqxueg2g5gzgu57y3fe3kc3',
            denomId: 'basetcro',
            uri: 'https://someuri',
            data: 'some_data_nft',
            recipient: 'tcro1j7pej8kplem4wt50p4hfvndhuw5jprxxn5625q',
        });

        const rawMsg: legacyAmino.Msg = {
            type: 'cosmos-sdk/MsgMintNFT',
            value: {
                id: 'alphanumericid1234',
                name: 'nft_name',
                sender: 'tcro165tzcrh2yl83g8qeqxueg2g5gzgu57y3fe3kc3',
                denom_id: 'basetcro',
                uri: 'https://someuri',
                data: 'some_data_nft',
                recipient: 'tcro1j7pej8kplem4wt50p4hfvndhuw5jprxxn5625q',
            },
        };

        expect(msgMintNFT.toRawAminoMsg()).to.eqls(rawMsg);
    });

    it('Test appendTxBody MsgEditNFT Tx signing', function () {
        const anyKeyPair = Secp256k1KeyPair.fromPrivKey(
            Bytes.fromHexString('66633d18513bec30dd11a209f1ceb1787aa9e2069d5d47e590174dc9665102b3'),
        );

        const MsgEditNFT = new cro.nft.MsgEditNFT({
            id: 'alphanumericid1234',
            name: 'nft_name',
            sender: 'tcro165tzcrh2yl83g8qeqxueg2g5gzgu57y3fe3kc3',
            denomId: 'basetcro',
            uri: 'https://someuri',
            data: 'some_data_nft',
        });

        const anySigner = {
            publicKey: anyKeyPair.getPubKey(),
            accountNumber: new Big(0),
            accountSequence: new Big(2),
        };

        const rawTx = new cro.RawTransaction();

        const signableTx = rawTx.appendMessage(MsgEditNFT).addSigner(anySigner).toSignable();

        const signedTx = signableTx.setSignature(0, anyKeyPair.sign(signableTx.toSignDocumentHash(0))).toSigned();

        const signedTxHex = signedTx.encode().toHexString();
        expect(signedTxHex).to.be.eql(
            '0a98010a95010a1c2f636861696e6d61696e2e6e66742e76312e4d7367456469744e465412750a12616c7068616e756d657269636964313233341208626173657463726f1a086e66745f6e616d65220f68747470733a2f2f736f6d657572692a0d736f6d655f646174615f6e6674322b7463726f313635747a63726832796c3833673871657178756567326735677a6775353779336665336b633312580a500a460a1f2f636f736d6f732e63727970746f2e736563703235366b312e5075624b657912230a2103fd0d560b6c4aa1ca16721d039a192867c3457e19dad553edb98e7ba88b159c2712040a0208011802120410c09a0c1a40d39e62ab7d9f3fa45fd464c741b7a2031461eeaf95712509cd7bdabfe77a25885519d27220a695721bdef25c7e3c10998f6291b638dcb845a920864380675a2c',
        );
    });

    it('Should validate MsgEditNFT provided addresses with network config', function () {
        const params1 = {
            id: 'alphanumericid1234',
            name: 'nft_name',
            sender: 'cro1pndm4ywdf4qtmupa0fqe75krmqed2znjyj6x8f',
            denomId: 'basetcro',
            uri: 'https://someuri',
            data: 'some_data_nft',
        };

        expect(() => new cro.nft.MsgEditNFT(params1)).to.throw('Provided `sender` does not match network selected');
    });
});
