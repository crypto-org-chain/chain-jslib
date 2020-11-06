import { expect } from 'chai';
import Big from 'big.js';
import { CroNetwork, CroSDK } from '../../../core/cro';
import { fuzzyDescribe } from '../../../test/mocha-fuzzy/suite';
import { Secp256k1KeyPair } from '../../../keypair/secp256k1';
import { Bytes } from '../../../utils/bytes/bytes';

const cro = CroSDK({ network: CroNetwork.Testnet });

describe('Testing MsgWithdrawValidatorCommission', function () {
    fuzzyDescribe('should throw Error when constructor options is invalid', function (fuzzy) {
        const anyValidOptions = {
            validatorAddress: 'tcrocncl1reyshfdygf7673xm9p8v0xvtd96m6cd6canhu3xcqa',
        };
        const testRunner = fuzzy(fuzzy.ObjArg(anyValidOptions));

        testRunner(function (options) {
            if (options.valid) {
                return;
            }
            expect(() => new cro.distribution.MsgWithdrawValidatorCommission(options.value)).to.throw(
                'Expected `commissionWithdrawalOptions` to be of type `object`',
            );
        });
    });

    it('Test appending MsgWithdrawValidatorCommission and signing it', function () {
        const anyKeyPair = Secp256k1KeyPair.fromPrivKey(
            Bytes.fromHexString('66633d18513bec30dd11a209f1ceb1787aa9e2069d5d47e590174dc9665102b3'),
        );

        const msgWithdrawValidatorCommission = new cro.distribution.MsgWithdrawValidatorCommission({
            validatorAddress: 'tcrocncl1reyshfdygf7673xm9p8v0xvtd96m6cd6canhu3',
        });

        const commissionSigner = {
            publicKey: anyKeyPair.getPubKey(),
            accountNumber: new Big(0),
            accountSequence: new Big(10),
        };

        const rawTx = new cro.RawTransaction();

        const signableTx = rawTx.appendMessage(msgWithdrawValidatorCommission).addSigner(commissionSigner).toSignable();

        const signedCommissionWithdrawTx = signableTx
            .setSignature(0, anyKeyPair.sign(signableTx.toSignDoc(0)))
            .toSigned();

        const signedTxHex = signedCommissionWithdrawTx.encode().toHexString();
        expect(signedTxHex).to.be.eql(
            '0a720a700a3b2f636f736d6f732e646973747269627574696f6e2e763162657461312e4d7367576974686472617756616c696461746f72436f6d6d697373696f6e12310a2f7463726f636e636c317265797368666479676637363733786d39703876307876746439366d3663643663616e68753312580a500a460a1f2f636f736d6f732e63727970746f2e736563703235366b312e5075624b657912230a2103fd0d560b6c4aa1ca16721d039a192867c3457e19dad553edb98e7ba88b159c2712040a020801180a120410c09a0c1a40eacb5c1efc752e0be0c76292b2954c88b9bb6c600ca9a054516b91fb430964e44c87a10584ad4048620cfc0f0b2269088df9ed1c3e9e2f78e5ed646c27f70135',
        );
    });
});
