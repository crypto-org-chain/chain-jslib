import 'mocha';
import { expect } from 'chai';

import Big from 'big.js';
import { Network } from '../../../../../network/network';
import { CroSDK, CroNetwork } from '../../../../../core/cro';
import { fuzzyDescribe } from '../../../../../test/mocha-fuzzy/suite';
import { Units } from '../../../../../coin/coin';
import { HDKey } from '../../../../../hdkey/hdkey';
import { Secp256k1KeyPair } from '../../../../../keypair/secp256k1';

const PystaportTestNet: Network = {
    rpcUrl: '',
    defaultNodeUrl: '',
    chainId: 'chainmaind',
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
};
const cro = CroSDK({ network: PystaportTestNet });
const coin = cro.Coin.fromBaseUnit('10000');

describe('Testing TextProposal and its content types', function () {
    const anyContent = new cro.v2.gov.proposal.CommunityPoolSpendProposalV2({
        title: 'Make new cosmos version backward compatible with pre release',
        description: 'Lorem Ipsum ...',
        recipient: 'tcro1x07kkkepfj2hl8etlcuqhej7jj6myqrp48y4hg',
        amount: [coin],
    });

    fuzzyDescribe('should throw Error when TextProposal options is invalid', function (fuzzy) {
        const anyValidProposalSubmission = {
            proposer: 'tcro184lta2lsyu47vwyp2e8zmtca3k5yq85p6c4vp3',
            initialDeposit: new cro.Coin('1200', Units.BASE),
            content: anyContent,
        };
        const testRunner = fuzzy(fuzzy.ObjArg(anyValidProposalSubmission));

        testRunner(function (options) {
            if (options.valid) {
                return;
            }
            expect(() => new cro.v2.gov.proposal.CommunityPoolSpendProposalV2(options.value)).to.throw(
                'Expected `options` to be of type `object`',
            );
        });
    });

    it('Test Signing TextProposal Type', function () {
        const hdKey = HDKey.fromMnemonic(
            'order envelope snack half demand merry help obscure slogan like universe pond gain between brass settle pig float torch drama liberty grace check luxury',
        );

        const privKey = hdKey.derivePrivKey("m/44'/1'/0'/0/0");
        const keyPair = Secp256k1KeyPair.fromPrivKey(privKey);

        const textProposalContent = new cro.v2.gov.proposal.CommunityPoolSpendProposalV2({
            title: 'Text Proposal Title',
            description: 'Lorem Ipsum ... Checking cancel software upgrade',
            recipient: 'tcro1x07kkkepfj2hl8etlcuqhej7jj6myqrp48y4hg',
            amount: [coin],
        });

        const TextProposalChangeParam = new cro.gov.MsgSubmitProposal({
            proposer: 'tcro14sh490wk79dltea4udk95k7mw40wmvf77p0l5a',
            initialDeposit: coin,
            content: textProposalContent,
        });

        const anySigner = {
            publicKey: keyPair.getPubKey(),
            accountNumber: new Big(6),
            accountSequence: new Big(0),
        };

        const rawTx = new cro.RawTransaction();

        const signableTx = rawTx.appendMessage(TextProposalChangeParam).addSigner(anySigner).toSignable();

        const signedTx = signableTx.setSignature(0, keyPair.sign(signableTx.toSignDocumentHash(0))).toSigned();

        const signedTxHex = signedTx.getHexEncoded();
        expect(signedTx.getTxHash()).to.be.eq('BE098DD0B77EC0AF5E57CB4CEBD51B163F3638ADF1AE3FE15F3C3ABACC7E0994');
        expect(signedTxHex).to.be.eql(
            '0abf020abc020a252f636f736d6f732e676f762e763162657461312e4d73675375626d697450726f706f73616c1292020ac9010a372f636f736d6f732e646973747269627574696f6e2e763162657461312e436f6d6d756e697479506f6f6c5370656e6450726f706f73616c128d010a13546578742050726f706f73616c205469746c6512304c6f72656d20497073756d202e2e2e20436865636b696e672063616e63656c20736f66747761726520757067726164651a2b7463726f317830376b6b6b6570666a32686c3865746c63757168656a376a6a366d7971727034387934686722170a08626173657463726f120b313230303030303030303012170a08626173657463726f120b31323030303030303030301a2b7463726f31347368343930776b3739646c7465613475646b39356b376d773430776d7666373770306c356112580a500a460a1f2f636f736d6f732e63727970746f2e736563703235366b312e5075624b657912230a210280c5e37a2bc3e68cc7c4aac78eac8c769cf58ce269ecd4307427aa16c2ba05a412040a0208011800120410c09a0c1a4095f0e26e67968cb8cbb29a259636c8afeeac19e215e9481fe6d929dfd0d34b0515b02005ff71034d713aa8ac8cbcabd9fdaacc39b3236075bf5dfe4d8d64862f',
        );
    });
    describe('fromCosmosJSON', function () {
        it('should throw Error if the JSON is not a TextProposal', function () {
            const json =
                '{ "@type": "/cosmos.bank.v1beta1.MsgCreateValidator", "amount": [{ "denom": "basetcro", "amount": "3478499933290496" }], "from_address": "tcro1x07kkkepfj2hl8etlcuqhej7jj6myqrp48y4hg", "to_address": "tcro184lta2lsyu47vwyp2e8zmtca3k5yq85p6c4vp3" }';
            expect(() =>
                cro.v2.gov.proposal.CommunityPoolSpendProposalV2.fromCosmosMsgJSON(json, CroNetwork.Testnet),
            ).to.throw(
                'Expected /cosmos.distribution.v1beta1.CommunityPoolSpendProposal but got /cosmos.bank.v1beta1.MsgCreateValidator',
            );
        });

        it('should return the TextProposal corresponding to the JSON', function () {
            const json =
                '{"@type":"/cosmos.distribution.v1beta1.CommunityPoolSpendProposal","title": "Text Proposal Title", "description": "Lorem Ipsum ... Checking text proposal","amount": [{ "denom": "basetcro", "amount": "3478499933290496" }], "recipient": "tcro1x07kkkepfj2hl8etlcuqhej7jj6myqrp48y4hg"}';
            const TextProposal = cro.v2.gov.proposal.CommunityPoolSpendProposalV2.fromCosmosMsgJSON(
                json,
                CroNetwork.Testnet,
            );

            expect(TextProposal.title).to.eql('Text Proposal Title');

            expect(TextProposal.description).to.eql('Lorem Ipsum ... Checking text proposal');
            expect(TextProposal.recipient).to.eql('tcro1x07kkkepfj2hl8etlcuqhej7jj6myqrp48y4hg');
        });
    });
});
