import 'mocha';
import { expect } from 'chai';
import Big from 'big.js';

import Long from 'long';
import { fuzzyDescribe } from '../../../test/mocha-fuzzy/suite';
import { Msg } from '../../../cosmos/v1beta1/types/msg';
import { Secp256k1KeyPair } from '../../../keypair/secp256k1';
import { Bytes } from '../../../utils/bytes/bytes';
import { Units } from '../../../coin/coin';
import { CroSDK } from '../../../core/cro';

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

describe('Testing DelayedVestingAccount', function () {
    describe('fromCosmosJSON', function () {
        it('should throw Error if the JSON is not a DelayedVestingAccount', function () {
            const json =
                '{ "@type": "/cosmos.bank.v1beta1.MsgCreateValidator", "amount": { "denom": "basetcro", "amount": "3478499933290496" }, "from_address": "tcro1x07kkkepfj2hl8etlcuqhej7jj6myqrp48y4hg", "to_address": "tcro184lta2lsyu47vwyp2e8zmtca3k5yq85p6c4vp3" }';
            expect(() => cro.accounts.DelayedVestingAccount.fromCosmosMsgJSON(json)).to.throw(
                'Expected /cosmos.vesting.v1beta1.DelayedVestingAccount but got /cosmos.bank.v1beta1.MsgCreateValidator',
            );
        });
        it('should return the DelayedVestingAccount corresponding to the JSON', function () {
            const json = `{"@type":"/cosmos.vesting.v1beta1.DelayedVestingAccount","base_vesting_account":{"base_account":{"address":"cro18n9xzc576np866k2ze3x5fwp8wvelf52avtwdf","pub_key":{"@type":"/cosmos.crypto.secp256k1.PubKey","key":"Argwi2l2NcgtYU2NSPknoeciqOBDWZgv96O7Q3iOK1ei"},"account_number":"67","sequence":"8"},"original_vesting":[{"denom":"basecro","amount":"606902735563"}],"delegated_free":[{"denom":"basecro","amount":"2647264437"}],"delegated_vesting":[{"denom":"basecro","amount":"606902735563"}],"end_time":"1648170000"}}`;
            const DelayedVestingAccount = cro.accounts.DelayedVestingAccount.fromCosmosMsgJSON(json);

            expect(DelayedVestingAccount.endTime.toString()).to.eql('1648170000');

            expect(DelayedVestingAccount.delegatedVesting[0].toCosmosCoin().amount).to.eql('606902735563');
            expect(DelayedVestingAccount.delegatedVesting[0].toCosmosCoin().denom).to.eql('basecro');

            expect(DelayedVestingAccount.delegatedFree[0].toCosmosCoin().amount).to.eql('2647264437');
            expect(DelayedVestingAccount.delegatedFree[0].toCosmosCoin().denom).to.eql('basecro');

            expect(DelayedVestingAccount.originalVesting[0].toCosmosCoin().amount).to.eql('606902735563');
            expect(DelayedVestingAccount.originalVesting[0].toCosmosCoin().denom).to.eql('basecro');
        });
    });

    fuzzyDescribe('should throw Error when options is invalid', function (fuzzy) {
        const anyValidOptions = {
            fromAddress: 'tcro165tzcrh2yl83g8qeqxueg2g5gzgu57y3fe3kc3',
            toAddress: 'tcro184lta2lsyu47vwyp2e8zmtca3k5yq85p6c4vp3',
            amount: new cro.Coin('1000', Units.BASE),
        };
        const testRunner = fuzzy(fuzzy.ObjArg(anyValidOptions));

        testRunner(function (options) {
            if (options.valid) {
                return;
            }
            expect(() => new cro.accounts.DelayedVestingAccount(options.value)).to.throw(
                'Expected `options` to be of type `object`',
            );
        });
    });

    it('Test DelayedVestingAccount conversion', function () {
        const DelayedVestingAccount = new cro.accounts.DelayedVestingAccount({
            baseAccount: {
                address: 'tcro165tzcrh2yl83g8qeqxueg2g5gzgu57y3fe3kc3',
                pubKey: null,
                accountNumber: Long.fromString('10'),
                sequence: Long.fromString('10'),
            },
            originalVesting: [cro.v2.CoinV2.fromCustomAmountDenom('111111', 'basetcro')],
            delegatedFree: [cro.v2.CoinV2.fromCustomAmountDenom('111111', 'basetcro')],
            delegatedVesting: [cro.v2.CoinV2.fromCustomAmountDenom('111111', 'basetcro')],
            endTime: Long.fromString('1648170000'),
        });

        const rawMsg: Msg = {
            typeUrl: '/cosmos.vesting.v1beta1.DelayedVestingAccount',
            value: {
                baseVestingAccount: {
                    baseAccount: {
                        accountNumber: Long.fromString('10'),
                        address: 'tcro165tzcrh2yl83g8qeqxueg2g5gzgu57y3fe3kc3',
                        sequence: Long.fromString('10'),
                    },
                    delegatedFree: [
                        {
                            amount: '111111',
                            denom: 'basetcro',
                        },
                    ],
                    delegatedVesting: [
                        {
                            amount: '111111',
                            denom: 'basetcro',
                        },
                    ],
                    endTime: Long.fromString('1648170000'),
                    originalVesting: [
                        {
                            amount: '111111',
                            denom: 'basetcro',
                        },
                    ],
                },
            },
        };

        expect(DelayedVestingAccount.toRawMsg()).to.eqls(rawMsg);
    });

    it('Test appendTxBody DelayedVestingAccount Tx signing', function () {
        const anyKeyPair = Secp256k1KeyPair.fromPrivKey(
            Bytes.fromHexString('66633d18513bec30dd11a209f1ceb1787aa9e2069d5d47e590174dc9665102b3'),
        );

        const DelayedVestingAccount = new cro.accounts.DelayedVestingAccount({
            baseAccount: {
                address: 'tcro165tzcrh2yl83g8qeqxueg2g5gzgu57y3fe3kc3',
                pubKey: null,
                accountNumber: Long.fromString('10'),
                sequence: Long.fromString('10'),
            },
            originalVesting: [cro.v2.CoinV2.fromCustomAmountDenom('111111', 'basetcro')],
            delegatedFree: [cro.v2.CoinV2.fromCustomAmountDenom('111111', 'basetcro')],
            delegatedVesting: [cro.v2.CoinV2.fromCustomAmountDenom('111111', 'basetcro')],
            endTime: Long.fromString('1648170000'),
        });

        const anySigner = {
            publicKey: anyKeyPair.getPubKey(),
            accountNumber: new Big(0),
            accountSequence: new Big(2),
        };

        const rawTx = new cro.RawTransaction();

        const signableTx = rawTx.appendMessage(DelayedVestingAccount).addSigner(anySigner).toSignable();

        const signedTx = signableTx.setSignature(0, anyKeyPair.sign(signableTx.toSignDocumentHash(0))).toSigned();

        const signedTxHex = signedTx.encode().toHexString();
        expect(signedTxHex).to.be.eql(
            '0aab010aa8010a2d2f636f736d6f732e76657374696e672e763162657461312e44656c6179656456657374696e674163636f756e7412770a750a310a2b7463726f313635747a63726832796c3833673871657178756567326735677a6775353779336665336b6333180a200a12120a08626173657463726f12063131313131311a120a08626173657463726f120631313131313122120a08626173657463726f12063131313131312890a8f4910612580a500a460a1f2f636f736d6f732e63727970746f2e736563703235366b312e5075624b657912230a2103fd0d560b6c4aa1ca16721d039a192867c3457e19dad553edb98e7ba88b159c2712040a0208011802120410c09a0c1a409e4105e3d17d411f722f69afff864e6d22c2d4cc5a66b4b2ec77b6fb512401f67ba8615e61f16b6db243e33e376ce7252190d5ee202346f06b189523fb6c05d6',
        );
    });
});
