import 'mocha';
import { expect } from 'chai';
import Big from 'big.js';
import { fuzzyDescribe } from '../../../test/mocha-fuzzy/suite';
import { Msg } from '../../../cosmos/v1beta1/types/msg';
import { Secp256k1KeyPair } from '../../../keypair/secp256k1';
import { Bytes } from '../../../utils/bytes/bytes';
import { Units } from '../../../coin/coin';
import { CroNetwork, CroSDK } from '../../../core/cro';

const cro = CroSDK({ network: CroNetwork.Testnet });

describe('Testing MsgBeginRedelegate', function () {
    fuzzyDescribe('should throw Error when options is invalid', function (fuzzy) {
        const anyValidOptions = {
            delegatorAddress: 'tcro1j7pej8kplem4wt50p4hfvndhuw5jprxxn5625q',
            validatorDstAddress: 'tcrocncl1j7pej8kplem4wt50p4hfvndhuw5jprxxxtenvr',
            validatorSrcAddress: 'tcrocncl1j7pej8kplem4wt50p4hfvndhuw5jprxxxtenvr',
            amount: new cro.Coin('1000', Units.BASE),
        };
        const testRunner = fuzzy(fuzzy.ObjArg(anyValidOptions));

        testRunner(function (options) {
            if (options.valid) {
                return;
            }
            expect(() => new cro.staking.MsgBeginRedelegate(options.value)).to.throw(
                'Expected `options` to be of type `object`',
            );
        });
    });

    it('Test MsgBeginRedelegate conversion', function () {
        const coin = new cro.Coin('12000500', Units.BASE);

        const msgSend = new cro.staking.MsgBeginRedelegate({
            delegatorAddress: 'tcro1j7pej8kplem4wt50p4hfvndhuw5jprxxn5625q',
            validatorDstAddress: 'tcrocncl1j7pej8kplem4wt50p4hfvndhuw5jprxxxtenvr',
            validatorSrcAddress: 'tcrocncl16mmzexp3zqfpgqtnn927m5ph560qgxrs52a3wx',
            amount: coin,
        });

        const rawMsg: Msg = {
            typeUrl: '/cosmos.staking.v1beta1.MsgBeginRedelegate',
            value: {
                delegatorAddress: 'tcro1j7pej8kplem4wt50p4hfvndhuw5jprxxn5625q',
                validatorDstAddress: 'tcrocncl1j7pej8kplem4wt50p4hfvndhuw5jprxxxtenvr',
                validatorSrcAddress: 'tcrocncl16mmzexp3zqfpgqtnn927m5ph560qgxrs52a3wx',
                amount: coin.toCosmosCoin(),
            },
        };

        expect(msgSend.toRawMsg()).to.eqls(rawMsg);
    });

    it('Test appendTxBody MsgBeginRedelegate Tx signing', function () {
        const anyKeyPair = Secp256k1KeyPair.fromPrivKey(
            Bytes.fromHexString('66633d18513bec30dd11a209f1ceb1787aa9e2069d5d47e590174dc9665102b3'),
        );
        const coin = new cro.Coin('12000500', Units.CRO);

        const MsgBeginRedelegate = new cro.staking.MsgBeginRedelegate({
            delegatorAddress: 'tcro1j7pej8kplem4wt50p4hfvndhuw5jprxxn5625q',
            validatorDstAddress: 'tcrocncl1j7pej8kplem4wt50p4hfvndhuw5jprxxxtenvr',
            validatorSrcAddress: 'tcrocncl16mmzexp3zqfpgqtnn927m5ph560qgxrs52a3wx',
            amount: coin,
        });

        const anySigner = {
            publicKey: anyKeyPair.getPubKey(),
            accountNumber: new Big(0),
            accountSequence: new Big(2),
        };

        const rawTx = new cro.RawTransaction();
        const signableTx = rawTx.appendMessage(MsgBeginRedelegate).addSigner(anySigner).toSignable();
        const signedTx = signableTx.setSignature(0, anyKeyPair.sign(signableTx.toSignDoc(0))).toSigned();
        const signedTxHex = signedTx.encode().toHexString();
        expect(signedTxHex).to.be.eql(
            '0adf010adc010a2a2f636f736d6f732e7374616b696e672e763162657461312e4d7367426567696e526564656c656761746512ad010a2b7463726f316a3770656a386b706c656d347774353070346866766e64687577356a707278786e3536323571122f7463726f636e636c31366d6d7a657870337a7166706771746e6e3932376d35706835363071677872733532613377781a2f7463726f636e636c316a3770656a386b706c656d347774353070346866766e64687577356a707278787874656e7672221c0a08626173657463726f12103132303030353030303030303030303012580a500a460a1f2f636f736d6f732e63727970746f2e736563703235366b312e5075624b657912230a2103fd0d560b6c4aa1ca16721d039a192867c3457e19dad553edb98e7ba88b159c2712040a0208011802120410c09a0c1a40031f10c078d57779f701e247974c24b0f236b33159629bf07a024322b3cedf583cf1e5c7afd3c2dccbf007f87bcccb3a85bcffb6dda95ef8f62b37624f88473c',
        );
    });

    it('Should validate MsgBeginRedelegate provided addresses with network config', function () {
        const coin = new cro.Coin('12000500', Units.BASE);

        const params2 = {
            delegatorAddress: 'tcro1j7pej8kplem4wt50p4hfvndhuw5jprxxn5625q',
            validatorDstAddress: 'tcrocncl1j7pej8kplem4wt50p4hfvndhuw5jprxxxtenvr',
            validatorSrcAddress: 'tcrocncl1j7pej8kplem4wt50p4hfvndhuw5jprxxxtenvr',
            amount: coin,
        };

        const params3 = {
            delegatorAddress: 'tcro1j7pej8kplem4wt50p4hfvndhuw5jprxxn5625',
            validatorDstAddress: 'tcrocncl1j7pej8kplem4wt50p4hfvndhuw5jprxxxtenvr',
            validatorSrcAddress: 'tcrocncl16mmzexp3zqfpgqtnn927m5ph560qgxrs52a3wx',
            amount: coin,
        };

        expect(() => new cro.staking.MsgBeginRedelegate(params2)).to.throw(
            'Source and destination validator addresses cannot be the same.',
        );
        expect(() => new cro.staking.MsgBeginRedelegate(params3)).to.throw(
            'Invalid checksum for tcro1j7pej8kplem4wt50p4hfvndhuw5jprxxn5625',
        );
    });
});
