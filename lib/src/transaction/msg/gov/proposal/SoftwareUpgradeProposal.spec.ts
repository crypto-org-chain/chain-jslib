import 'mocha';
import { expect } from 'chai';

import Big from 'big.js';
import Long from 'long';
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
        expect(signedTx.getTxHash()).to.be.eq('ED16C31448FDF56FA8964E57F5294617B50032894272582D4BD3932D1C7AAB92');
        expect(signedTxHex).to.be.eql(
            '0a9c020a99020a252f636f736d6f732e676f762e763162657461312e4d73675375626d697450726f706f73616c12ef010aa6010a2f2f636f736d6f732e757067726164652e763162657461312e536f6674776172655570677261646550726f706f73616c12730a2243616e63656c206120736f66747761726520757067726164652070726f706f73616c12304c6f72656d20497073756d202e2e2e20436865636b696e672063616e63656c20736f66747761726520757067726164651a1b0a046e616d65120a08f8bdef051080ade20418e8072204696e666f12170a08626173657463726f120b31323030303030303030301a2b7463726f31347368343930776b3739646c7465613475646b39356b376d773430776d7666373770306c356112580a500a460a1f2f636f736d6f732e63727970746f2e736563703235366b312e5075624b657912230a210280c5e37a2bc3e68cc7c4aac78eac8c769cf58ce269ecd4307427aa16c2ba05a412040a0208011800120410c09a0c1a40b2782e3f0612ae275b3667ec562ef26ff4ceb5c1a356d5b443a8b4d04e7f7f283fc15cd1b9aaef57b2a5db404e4fc7c2600f81ec7f34e989af5e02e721e07149',
        );
    });
});
