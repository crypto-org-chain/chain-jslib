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

    it('Test MsgEditNFT conversion', function () {
        const MsgEditNFT = new cro.nft.MsgEditNFT({
            id: 'alphanumericId1234',
            name: 'nft_name',
            sender: 'tcro165tzcrh2yl83g8qeqxueg2g5gzgu57y3fe3kc3',
            denomId: 'basetcro',
            uri: 'https://someuri',
            data: 'some_data_nft',
        });

        const rawMsg: Msg = {
            typeUrl: COSMOS_MSG_TYPEURL.nft.MsgEditNFT,
            value: {
                id: 'alphanumericId1234',
                name: 'nft_name',
                sender: 'tcro165tzcrh2yl83g8qeqxueg2g5gzgu57y3fe3kc3',
                denomId: 'basetcro',
                uri: 'https://someuri',
                data: 'some_data_nft',
            },
        };

        expect(MsgEditNFT.toRawMsg()).to.eqls(rawMsg);
    });

    it('Test appendTxBody MsgEditNFT Tx signing', function () {
        const anyKeyPair = Secp256k1KeyPair.fromPrivKey(
            Bytes.fromHexString('66633d18513bec30dd11a209f1ceb1787aa9e2069d5d47e590174dc9665102b3'),
        );

        const MsgEditNFT = new cro.nft.MsgEditNFT({
            id: 'alphanumericId1234',
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
            '0a98010a95010a1c2f636861696e6d61696e2e6e66742e76312e4d7367456469744e465412750a12616c7068616e756d657269634964313233341208626173657463726f1a086e66745f6e616d65220f68747470733a2f2f736f6d657572692a0d736f6d655f646174615f6e6674322b7463726f313635747a63726832796c3833673871657178756567326735677a6775353779336665336b633312580a500a460a1f2f636f736d6f732e63727970746f2e736563703235366b312e5075624b657912230a2103fd0d560b6c4aa1ca16721d039a192867c3457e19dad553edb98e7ba88b159c2712040a0208011802120410c09a0c1a404804028a9cde1ddca3df80147441204098c108cad31e4e9574c5fc06b9d8b6ae39a29af1d9c8dd5e21248ac79a57532dec71a8f8d498dd5df2220ba0c27df34f',
        );
    });

    it('Should validate MsgEditNFT provided addresses with network config', function () {
        const params1 = {
            id: 'alphanumericId1234',
            name: 'nft_name',
            sender: 'cro1pndm4ywdf4qtmupa0fqe75krmqed2znjyj6x8f',
            denomId: 'basetcro',
            uri: 'https://someuri',
            data: 'some_data_nft',
        };

        expect(() => new cro.nft.MsgEditNFT(params1)).to.throw('Provided `sender` does not match network selected');
    });

    it('Should throw on getting toRawAminoMsg()', function () {
        const MsgEditNFT = new cro.nft.MsgEditNFT({
            id: 'alphanumericId1234',
            name: 'nft_name',
            sender: 'tcro165tzcrh2yl83g8qeqxueg2g5gzgu57y3fe3kc3',
            denomId: 'basetcro',
            uri: 'https://someuri',
            data: 'some_data_nft',
        });

        expect(() => MsgEditNFT.toRawAminoMsg()).to.throw('Amino encoding format not support for NFT module.');
    });
});
