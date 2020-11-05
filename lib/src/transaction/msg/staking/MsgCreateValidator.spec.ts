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

describe('Testing MsgCreateValidator', function () {
    fuzzyDescribe('should throw Error when options is invalid', function (fuzzy) {
        const anyValidOptions = {
            description: {
                moniker: 'hiteshTest',
                identity: '',
                website: '',
                securityContact: 'hitesh.goel@crypto.com',
                details: '',
            },
            commission: {
                rate: '0.100000000000000000',
                maxRate: '0.200000000000000000',
                maxChangeRate: '0.010000000000000000',
            },
            minSelfDelegation: '1',
            delegatorAddress: 'tcro1j7pej8kplem4wt50p4hfvndhuw5jprxxn5625q',
            validatorAddress: 'tcrocncl1j7pej8kplem4wt50p4hfvndhuw5jprxxxtenvr',
            pubkey: 'tcrocnclconspub1zcjduepqzp60e9aq8ek2zjedejhg0ncj00ncmcnqu37k09r5fmstlyfaakhsyqw3rc',
            value: new cro.Coin('1000', Units.BASE),
        };
        const testRunner = fuzzy(fuzzy.ObjArg(anyValidOptions));

        testRunner(function (options) {
            if (options.valid) {
                return;
            }
            expect(() => new cro.staking.MsgCreateValidator(options.value)).to.throw(
                'Expected `options` to be of type `object`',
            );
        });
    });

    it('Test MsgCreateValidator conversion', function () {
        const coin = new cro.Coin('12000500', Units.BASE);

        const msgSend = new cro.staking.MsgCreateValidator({
            description: {
                moniker: 'hiteshTest',
                identity: '',
                website: '',
                securityContact: 'hitesh.goel@crypto.com',
                details: '',
            },
            commission: {
                rate: '0.100000000000000000',
                maxRate: '0.200000000000000000',
                maxChangeRate: '0.010000000000000000',
            },
            pubkey: 'tcrocnclconspub1zcjduepqzp60e9aq8ek2zjedejhg0ncj00ncmcnqu37k09r5fmstlyfaakhsyqw3rc',
            minSelfDelegation: '1.0',
            delegatorAddress: 'tcro165tzcrh2yl83g8qeqxueg2g5gzgu57y3fe3kc3',
            validatorAddress: 'tcrocncl1j7pej8kplem4wt50p4hfvndhuw5jprxxxtenvr',
            value: coin,
        });

        const rawMsg: Msg = {
            typeUrl: '/cosmos.staking.v1beta1.MsgCreateValidator',
            value: {
                description: {
                    moniker: 'hiteshTest',
                    identity: '',
                    website: '',
                    securityContact: 'hitesh.goel@crypto.com',
                    details: '',
                },
                commission: {
                    rate: '0.100000000000000000',
                    maxRate: '0.200000000000000000',
                    maxChangeRate: '0.010000000000000000',
                },
                pubkey: 'tcrocnclconspub1zcjduepqzp60e9aq8ek2zjedejhg0ncj00ncmcnqu37k09r5fmstlyfaakhsyqw3rc',
                minSelfDelegation: '1.0',
                delegatorAddress: 'tcro165tzcrh2yl83g8qeqxueg2g5gzgu57y3fe3kc3',
                validatorAddress: 'tcrocncl1j7pej8kplem4wt50p4hfvndhuw5jprxxxtenvr',
                value: coin.toCosmosCoin(),
            },
        };

        expect(msgSend.toRawMsg()).to.eqls(rawMsg);
    });

    it('Test appendTxBody MsgCreateValidator Tx signing', function () {
        const anyKeyPair = Secp256k1KeyPair.fromPrivKey(
            Bytes.fromHexString('66633d18513bec30dd11a209f1ceb1787aa9e2069d5d47e590174dc9665102b3'),
        );
        const coin = new cro.Coin('12000500', Units.CRO);

        const msgCreateValidator = new cro.staking.MsgCreateValidator({
            description: {
                moniker: 'hiteshTest',
                identity: '',
                website: '',
                securityContact: 'hitesh.goel@crypto.com',
                details: '',
            },
            commission: {
                rate: '0.100000000000000000',
                maxRate: '0.200000000000000000',
                maxChangeRate: '0.010000000000000000',
            },
            pubkey: 'tcrocnclconspub1zcjduepqzp60e9aq8ek2zjedejhg0ncj00ncmcnqu37k09r5fmstlyfaakhsyqw3rc',
            minSelfDelegation: '1.0',
            delegatorAddress: 'tcro165tzcrh2yl83g8qeqxueg2g5gzgu57y3fe3kc3',
            validatorAddress: 'tcrocncl1j7pej8kplem4wt50p4hfvndhuw5jprxxxtenvr',
            value: coin,
        });

        const anySigner = {
            publicKey: anyKeyPair.getPubKey(),
            accountNumber: new Big(0),
            accountSequence: new Big(2),
        };

        const rawTx = new cro.RawTransaction();
        const signableTx = rawTx.appendMessage(msgCreateValidator).addSigner(anySigner).toSignable();
        const signedTx = signableTx.setSignature(0, anyKeyPair.sign(signableTx.toSignDoc(0))).toSigned();
        const signedTxHex = signedTx.encode().toHexString();
        expect(signedTxHex).to.be.eql(
            '0af7020af4020a2a2f636f736d6f732e7374616b696e672e763162657461312e4d736743726561746556616c696461746f7212c5020a2a0a0a6869746573685465737412001a0022166869746573682e676f656c4063727970746f2e636f6d2a0012420a14302e3130303030303030303030303030303030301214302e3230303030303030303030303030303030301a14302e3031303030303030303030303030303030301a03312e30222b7463726f313635747a63726832796c3833673871657178756567326735677a6775353779336665336b63332a2f7463726f636e636c316a3770656a386b706c656d347774353070346866766e64687577356a707278787874656e767232527463726f636e636c636f6e73707562317a636a64756570717a7036306539617138656b327a6a6564656a6867306e636a30306e636d636e717533376b30397235666d73746c796661616b68737971773372633a1c0a08626173657463726f12103132303030353030303030303030303012580a500a460a1f2f636f736d6f732e63727970746f2e736563703235366b312e5075624b657912230a2103fd0d560b6c4aa1ca16721d039a192867c3457e19dad553edb98e7ba88b159c2712040a0208011802120410c09a0c1a40f46c1187e7993b691dc06ee84626327e30fdf2404d1ec500b7562d33b6e74a4e1f48a25f639cbf9f6cc9eceaf8fc515e300e2e920664d4bb1990b912f0533a27',
        );
    });

    it('Should validate MsgCreateValidator provided addresses with network config', function () {
        const coin = new cro.Coin('12000500', Units.BASE);

        const params1 = {
            description: {
                moniker: 'hiteshTest',
                identity: '',
                website: '',
                securityContact: 'hitesh.goel@crypto.com',
                details: '',
            },
            commission: {
                rate: '0.100000000000000000',
                maxRate: '0.200000000000000000',
                maxChangeRate: '0.010000000000000000',
            },
            pubkey: 'tcrocnclconspub1zcjduepqzp60e9aq8ek2zjedejhg0ncj00ncmcnqu37k09r5fmstlyfaakhsyqw3rc',
            minSelfDelegation: '1.0',
            delegatorAddress: 'cro1pndm4ywdf4qtmupa0fqe75krmqed2znjyj6x8f',
            validatorAddress: 'cro1pndm4ywdf4qtmupa0fqe75krmqed2znjyj6x8f',
            value: coin,
        };

        const params2 = {
            description: {
                moniker: 'hiteshTest',
                identity: '',
                website: '',
                securityContact: 'hitesh.goel@crypto.com',
                details: '',
            },
            commission: {
                rate: '0.100000000000000000',
                maxRate: '0.200000000000000000',
                maxChangeRate: '0.010000000000000000',
            },
            pubkey: 'tcrocnclconspub1zcjduepqzp60e9aq8ek2zjedejhg0ncj00ncmcnqu37k09r5fmstlyfaakhsyqw3rc',
            minSelfDelegation: '1.0',
            delegatorAddress: 'cro1pndm4ywdf4qtmupa0fqe75krmqed2znjyj6x8f',
            validatorAddress: 'cro1pndm4ywdf4qtmupa0fqe75krmqed2znjyj6x8f',
            value: coin,
        };

        const params3 = {
            description: {
                moniker: 'hiteshTest',
                identity: '',
                website: '',
                securityContact: 'hitesh.goel@crypto.com',
                details: '',
            },
            commission: {
                rate: '0.100000000000000000',
                maxRate: '0.200000000000000000',
                maxChangeRate: '0.010000000000000000',
            },
            pubkey: 'tcrocnclconspub1zcjduepqzp60e9aq8ek2zjedejhg0ncj00ncmcnqu37k09r5fmstlyfaakhsyqw3rc',
            minSelfDelegation: '1.0',
            delegatorAddress: 'tcro165tzcrh2yl83g8qeqxueg2g5gzgu57y3fe3kc3',
            validatorAddress: 'tcrocncl1j7pej8kplem4wt50p4hfvndhuw5jprxxxtenr',
            value: coin,
        };
        expect(() => new cro.staking.MsgCreateValidator(params1)).to.throw(
            'Provided keys does not belong to same network',
        );
        expect(() => new cro.staking.MsgCreateValidator(params2)).to.throw(
            'Provided keys does not belong to same network',
        );
        expect(() => new cro.staking.MsgCreateValidator(params3)).to.throw(
            'Invalid checksum for tcrocncl1j7pej8kplem4wt50p4hfvndhuw5jprxxxtenr',
        );
    });
});
