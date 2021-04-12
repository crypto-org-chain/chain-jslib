import 'mocha';
import { expect } from 'chai';

import Big from 'big.js';
import { Network } from '../../../../network/network';
import { CroSDK } from '../../../../core/cro';
import { Units } from '../../../../coin/coin';
import { fuzzyDescribe } from '../../../../test/mocha-fuzzy/suite';
import { HDKey } from '../../../../hdkey/hdkey';
import { Secp256k1KeyPair } from '../../../../keypair/secp256k1';

const PystaportTestNet: Network = {
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

describe('Testing CancelSoftwareUpgradeProposal and its content types', function () {
    const anyContent = new cro.gov.proposal.CancelSoftwareUpgradeProposal({
        title: 'Make new cosmos version backward compatible with pre release',
        description: 'Lorem Ipsum ...',
    });

    fuzzyDescribe('should throw Error when CancelSoftwareUpgradeProposal options is invalid', function (fuzzy) {
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
            expect(() => new cro.gov.proposal.CancelSoftwareUpgradeProposal(options.value)).to.throw(
                'Expected `options` to be of type `object`',
            );
        });
    });

    it('Test Signing CancelSoftwareUpgradeProposal Type', function () {
        const hdKey = HDKey.fromMnemonic(
            'order envelope snack half demand merry help obscure slogan like universe pond gain between brass settle pig float torch drama liberty grace check luxury',
        );

        const privKey = hdKey.derivePrivKey("m/44'/1'/0'/0/0");
        const keyPair = Secp256k1KeyPair.fromPrivKey(privKey);

        const coin = new cro.Coin('120', Units.CRO);

        const cancelSoftwareUpgradeContent = new cro.gov.proposal.CancelSoftwareUpgradeProposal({
            title: 'Cancel a software upgrade proposal',
            description: 'Lorem Ipsum ... Checking cancel software upgrade',
        });

        const CancelSoftwareUpgradeProposalChangeParam = new cro.gov.MsgSubmitProposal({
            proposer: 'tcro14sh490wk79dltea4udk95k7mw40wmvf77p0l5a',
            initialDeposit: coin,
            content: cancelSoftwareUpgradeContent,
        });

        const anySigner = {
            publicKey: keyPair.getPubKey(),
            accountNumber: new Big(6),
            accountSequence: new Big(0),
        };

        const rawTx = new cro.RawTransaction();

        const signableTx = rawTx
            .appendMessage(CancelSoftwareUpgradeProposalChangeParam)
            .addSigner(anySigner)
            .toSignable();

        const signedTx = signableTx.setSignature(0, keyPair.sign(signableTx.toSignDocumentHash(0))).toSigned();

        const signedTxHex = signedTx.getHexEncoded();
        expect(signedTx.getTxHash()).to.be.eq('6FB3CF0CC2EA44A0F85E36D9FC22B0D6DA12E5F1F34742AFF553CDA94F843311');
        expect(signedTxHex).to.be.eql(
            '0a85020a82020a252f636f736d6f732e676f762e763162657461312e4d73675375626d697450726f706f73616c12d8010a8f010a352f636f736d6f732e757067726164652e763162657461312e43616e63656c536f6674776172655570677261646550726f706f73616c12560a2243616e63656c206120736f66747761726520757067726164652070726f706f73616c12304c6f72656d20497073756d202e2e2e20436865636b696e672063616e63656c20736f667477617265207570677261646512170a08626173657463726f120b31323030303030303030301a2b7463726f31347368343930776b3739646c7465613475646b39356b376d773430776d7666373770306c356112580a500a460a1f2f636f736d6f732e63727970746f2e736563703235366b312e5075624b657912230a210280c5e37a2bc3e68cc7c4aac78eac8c769cf58ce269ecd4307427aa16c2ba05a412040a0208011800120410c09a0c1a4027db503252eb62270faa07e6b0f62d88e3434bf3db7cb07ed7ddb2c5429d12c9241449323875d8b3b7cd359a1e23c2137aef72102e707f9f50bc2e64618b3e89',
        );
    });
});
