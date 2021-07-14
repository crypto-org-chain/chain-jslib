import 'mocha';
import { expect } from 'chai';

import Big from 'big.js';
import Long from 'long';
import { Network } from '../../../../network/network';
import { CroSDK, CroNetwork } from '../../../../core/cro';
import { Units } from '../../../../coin/coin';
import { fuzzyDescribe } from '../../../../test/mocha-fuzzy/suite';
import { HDKey } from '../../../../hdkey/hdkey';
import { Secp256k1KeyPair } from '../../../../keypair/secp256k1';

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

describe('Testing SoftwareUpgradeProposal and its content types', function () {
    const anyContent = new cro.gov.proposal.SoftwareUpgradeProposal({
        title: 'Make new cosmos version backward compatible with pre release',
        description: 'Lorem Ipsum ...',
        plan: {
            height: Long.fromNumber(1000, true),
            name: 'name',
            info: 'info',
            time: { nanos: 10000000, seconds: Long.fromNumber(12312312) },
        },
    });

    fuzzyDescribe('should throw Error when SoftwareUpgradeProposal options is invalid', function (fuzzy) {
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
            // console.log(options.value)
            expect(() => new cro.gov.proposal.SoftwareUpgradeProposal(options.value)).to.throw(
                'Expected `options` to be of type `object`',
            );
        });
    });

    it('Test Signing SoftwareUpgradeProposal Type', function () {
        const hdKey = HDKey.fromMnemonic(
            'order envelope snack half demand merry help obscure slogan like universe pond gain between brass settle pig float torch drama liberty grace check luxury',
        );

        const privKey = hdKey.derivePrivKey("m/44'/1'/0'/0/0");
        const keyPair = Secp256k1KeyPair.fromPrivKey(privKey);

        const coin = new cro.Coin('120', Units.CRO);

        const softwareUpgradeContent = new cro.gov.proposal.SoftwareUpgradeProposal({
            title: 'Propose a new software upgrade proposal',
            description: 'Lorem Ipsum ... Checking software upgrade proposal',
            plan: {
                height: Long.fromNumber(1000, true),
                name: 'name',
                info: 'info',
                time: { nanos: 10000000, seconds: Long.fromNumber(12312312) },
            },
        });

        const SoftwareUpgradeProposalChangeParam = new cro.gov.MsgSubmitProposal({
            proposer: 'tcro14sh490wk79dltea4udk95k7mw40wmvf77p0l5a',
            initialDeposit: coin,
            content: softwareUpgradeContent,
        });

        const anySigner = {
            publicKey: keyPair.getPubKey(),
            accountNumber: new Big(6),
            accountSequence: new Big(0),
        };

        const rawTx = new cro.RawTransaction();

        const signableTx = rawTx.appendMessage(SoftwareUpgradeProposalChangeParam).addSigner(anySigner).toSignable();

        const signedTx = signableTx.setSignature(0, keyPair.sign(signableTx.toSignDocumentHash(0))).toSigned();

        const signedTxHex = signedTx.getHexEncoded();
        expect(signedTx.getTxHash()).to.be.eq('502DF71E81377B3471596F7D04F287CFA4E9A1016B0CAA0CB1E7FD786C8B3CC4');
        expect(signedTxHex).to.be.eql(
            '0aa3020aa0020a252f636f736d6f732e676f762e763162657461312e4d73675375626d697450726f706f73616c12f6010aad010a2f2f636f736d6f732e757067726164652e763162657461312e536f6674776172655570677261646550726f706f73616c127a0a2750726f706f73652061206e657720736f66747761726520757067726164652070726f706f73616c12324c6f72656d20497073756d202e2e2e20436865636b696e6720736f66747761726520757067726164652070726f706f73616c1a1b0a046e616d65120a08f8bdef051080ade20418e8072204696e666f12170a08626173657463726f120b31323030303030303030301a2b7463726f31347368343930776b3739646c7465613475646b39356b376d773430776d7666373770306c356112580a500a460a1f2f636f736d6f732e63727970746f2e736563703235366b312e5075624b657912230a210280c5e37a2bc3e68cc7c4aac78eac8c769cf58ce269ecd4307427aa16c2ba05a412040a0208011800120410c09a0c1a40a5b7174278f1cc4caae7a8b098ac477ea282595a8d0cc318587992ca7a42434a49923c2a85cd058516d538823868c141f4f5dc6975738d3e22f5bf347cb08da3',
        );
    });
    describe('fromCosmosJSON', function () {
        it('should throw Error if the JSON is not a SoftwareUpgradeProposal', function () {
            const json =
                '{ "@type": "/cosmos.bank.v1beta1.MsgCreateValidator", "amount": [{ "denom": "basetcro", "amount": "3478499933290496" }], "from_address": "tcro1x07kkkepfj2hl8etlcuqhej7jj6myqrp48y4hg", "to_address": "tcro184lta2lsyu47vwyp2e8zmtca3k5yq85p6c4vp3" }';
            expect(() => cro.gov.proposal.SoftwareUpgradeProposal.fromCosmosMsgJSON(json, CroNetwork.Testnet)).to.throw(
                'Expected /cosmos.upgrade.v1beta1.SoftwareUpgradeProposal but got /cosmos.bank.v1beta1.MsgCreateValidator',
            );
        });

        it('should return the SoftwareUpgradeProposal corresponding to the JSON', function () {
            const json = `{"@type":"/cosmos.upgrade.v1beta1.SoftwareUpgradeProposal","title": "Text Proposal Title", "description": "Lorem Ipsum ... Checking text proposal",
             "plan": {
                    "height": "1000",
                    "name": "name",
                    "info": "info",
                    "time": { "nanos": "10000000", "seconds": "12312312" }
                }}`;
            const SoftwareUpgradeProposal = cro.gov.proposal.SoftwareUpgradeProposal.fromCosmosMsgJSON(
                json,
                CroNetwork.Testnet,
            );

            expect(SoftwareUpgradeProposal.title).to.eql('Text Proposal Title');

            expect(SoftwareUpgradeProposal.description).to.eql('Lorem Ipsum ... Checking text proposal');
        });
    });
});
