import 'mocha';
import { expect } from 'chai';
import Big from 'big.js';
import { fuzzyDescribe } from '../../test/mocha-fuzzy/suite';
import { Msg } from '../../cosmos/v1beta1/types/msg';
import { Secp256k1KeyPair } from '../../keypair/secp256k1';
import { Bytes } from '../../utils/bytes/bytes';
import { Units } from '../../coin/coin';
import { CroNetwork, CroSDK } from '../../core/cro';

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
            expect(() => new cro.bank.MsgBeginRedelegate(options.value)).to.throw(
                'Expected `options` to be of type `object`',
            );
        });
    });

    it('Test MsgBeginRedelegate conversion', function () {
        const coin = new cro.Coin('12000500', Units.BASE);

        const msgSend = new cro.bank.MsgBeginRedelegate({
            delegatorAddress: 'tcro1j7pej8kplem4wt50p4hfvndhuw5jprxxn5625q',
            validatorDstAddress: 'tcrocncl1j7pej8kplem4wt50p4hfvndhuw5jprxxxtenvr',
            validatorSrcAddress: 'tcrocncl1j7pej8kplem4wt50p4hfvndhuw5jprxxxtenvr',
            amount: coin,
        });

        const rawMsg: Msg = {
            typeUrl: '/cosmos.staking.v1beta1.MsgBeginRedelegate',
            value: {
                delegatorAddress: 'tcro1j7pej8kplem4wt50p4hfvndhuw5jprxxn5625q',
                validatorDstAddress: 'tcrocncl1j7pej8kplem4wt50p4hfvndhuw5jprxxxtenvr',
                validatorSrcAddress: 'tcrocncl1j7pej8kplem4wt50p4hfvndhuw5jprxxxtenvr',
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

        const MsgBeginRedelegate = new cro.bank.MsgBeginRedelegate({
            delegatorAddress: 'tcro1j7pej8kplem4wt50p4hfvndhuw5jprxxn5625q',
            validatorDstAddress: 'tcrocncl1j7pej8kplem4wt50p4hfvndhuw5jprxxxtenvr',
            validatorSrcAddress: 'tcrocncl1j7pej8kplem4wt50p4hfvndhuw5jprxxxtenvr',
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
            '0adf010adc010a2a2f636f736d6f732e7374616b696e672e763162657461312e4d7367426567696e526564656c656761746512ad010a2b7463726f316a3770656a386b706c656d347774353070346866766e64687577356a707278786e3536323571122f7463726f636e636c316a3770656a386b706c656d347774353070346866766e64687577356a707278787874656e76721a2f7463726f636e636c316a3770656a386b706c656d347774353070346866766e64687577356a707278787874656e7672221c0a08626173657463726f12103132303030353030303030303030303012580a500a460a1f2f636f736d6f732e63727970746f2e736563703235366b312e5075624b657912230a2103fd0d560b6c4aa1ca16721d039a192867c3457e19dad553edb98e7ba88b159c2712040a0208011802120410c09a0c1a402941642c53a6ed1b1129821da87282c9b321f9fec97b87741708efd39b929da62ff56067b0d40ce0a5478c58983742361fa8d57d14828c4d51df61ae3b28095f',
        );
    });

    it('Should validate MsgBeginRedelegate provided addresses with network config', function () {
        const coin = new cro.Coin('12000500', Units.BASE);

        const params1 = {
            delegatorAddress: 'tcro1j7pej8kplem4wt50p4hfvndhuw5jprxxn5625q',
            validatorDstAddress: 'crocncl1j7pej8kplem4wt50p4hfvndhuw5jprxxxtenvr',
            validatorSrcAddress: 'tcrocncl1j7pej8kplem4wt50p4hfvndhuw5jprxxxtenvr',
            amount: coin,
        };

        const params3 = {
            delegatorAddress: 'tcro1j7pej8kplem4wt50p4hfvndhuw5jprxxn5625',
            validatorDstAddress: 'tcrocncl1j7pej8kplem4wt50p4hfvndhuw5jprxxxtenvr',
            validatorSrcAddress: 'tcrocncl1j7pej8kplem4wt50p4hfvndhuw5jprxxxtenvr',
            amount: coin,
        };

        expect(() => new cro.bank.MsgBeginRedelegate(params1)).to.throw(
            'Provided keys does not belong to same network',
        );
        expect(() => new cro.bank.MsgBeginRedelegate(params3)).to.throw(
            'Invalid checksum for tcro1j7pej8kplem4wt50p4hfvndhuw5jprxxn5625',
        );
    });
});
