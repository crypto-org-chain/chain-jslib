import { expect } from 'chai';
import Big from 'big.js';
import { fuzzyDescribe } from '../../test/mocha-fuzzy/suite';
import { CroNetwork, CroSDK } from '../../core/cro';
import { Secp256k1KeyPair } from '../../keypair/secp256k1';
import { Bytes } from '../../utils/bytes/bytes';

const cro = CroSDK({ network: CroNetwork.Testnet });

describe('Testing MsgWithdrawDelegatorReward', function () {
    fuzzyDescribe('should throw Error when options is invalid', function (fuzzy) {
        const anyValidOptions = {
            delegatorAddress: 'tcro165tzcrh2yl83g8qeqxueg2g5gzgu57y3fe3kc3',
            validatorAddress: 'tcrocncl1reyshfdygf7673xm9p8v0xvtd96m6cd6canhu3xcqa',
        };
        const testRunner = fuzzy(fuzzy.ObjArg(anyValidOptions));

        testRunner(function (options) {
            if (options.valid) {
                return;
            }
            expect(() => new cro.bank.MsgWithdrawDelegatorReward(options.value)).to.throw(
                'Expected `rewardOptions` to be of type `object`',
            );
        });
    });

    it('Test appending MsgWithdrawDelegatorReward and signing it', function () {
        const anyKeyPair = Secp256k1KeyPair.fromPrivKey(
            Bytes.fromHexString('66633d18513bec30dd11a209f1ceb1787aa9e2069d5d47e590174dc9665102b3'),
        );

        const msgWithdrawDelegatorReward = new cro.bank.MsgWithdrawDelegatorReward({
            delegatorAddress: 'tcro165tzcrh2yl83g8qeqxueg2g5gzgu57y3fe3kc3',
            validatorAddress: 'tcrocncl1reyshfdygf7673xm9p8v0xvtd96m6cd6canhu3',
        });

        const anySigner = {
            publicKey: anyKeyPair.getPubKey(),
            accountNumber: new Big(0),
            accountSequence: new Big(10),
        };

        const rawTx = new cro.RawTransaction();

        const signableTx = rawTx.appendMessage(msgWithdrawDelegatorReward).addSigner(anySigner).toSignable();

        const signedTx = signableTx.setSignature(0, anyKeyPair.sign(signableTx.toSignDoc(0))).toSigned();

        const signedTxHex = signedTx.getHexEncoded();
        expect(signedTxHex).to.be.eql(
            '0a9c010a99010a372f636f736d6f732e646973747269627574696f6e2e763162657461312e4d7367576974686472617744656c656761746f72526577617264125e0a2b7463726f313635747a63726832796c3833673871657178756567326735677a6775353779336665336b6333122f7463726f636e636c317265797368666479676637363733786d39703876307876746439366d3663643663616e68753312580a500a460a1f2f636f736d6f732e63727970746f2e736563703235366b312e5075624b657912230a2103fd0d560b6c4aa1ca16721d039a192867c3457e19dad553edb98e7ba88b159c2712040a020801180a120410c09a0c1a40daa9871a7ee666f0d7dfada6f5dcc542f86de16403f9d1c0deca99bca0dc0aad13d225a8db994a56a82ce1d98457a90afce4e7b9b07c1f73a10b931c8165c4b3',
        );
    });
});
