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

describe('Testing MsgCreateVestingAccount', function () {
    describe('fromCosmosJSON', function () {
        it('should throw Error if the JSON is not a MsgCreateVestingAccount', function () {
            const json =
                '{ "@type": "/cosmos.bank.v1beta1.MsgCreateValidator", "amount": { "denom": "basetcro", "amount": "3478499933290496" }, "from_address": "tcro1x07kkkepfj2hl8etlcuqhej7jj6myqrp48y4hg", "to_address": "tcro184lta2lsyu47vwyp2e8zmtca3k5yq85p6c4vp3" }';
            expect(() => cro.accounts.MsgCreateVestingAccount.fromCosmosMsgJSON(json)).to.throw(
                'Expected /cosmos.vesting.v1beta1.MsgCreateVestingAccount but got /cosmos.bank.v1beta1.MsgCreateValidator',
            );
        });
        it('should throw Error when the from field is missing', function () {
            const json =
                '{ "@type": "/cosmos.vesting.v1beta1.MsgCreateVestingAccount", "amount": { "denom": "basetcro", "amount": "3478499933290496" }, "to_address": "tcro184lta2lsyu47vwyp2e8zmtca3k5yq85p6c4vp3", "end_time": "1000000", "delayed": true  }';
            expect(() => cro.accounts.MsgCreateVestingAccount.fromCosmosMsgJSON(json)).to.throw(
                'Expected property `fromAddress` to be of type `string` but received type `undefined` in object `options`',
            );
        });
        it('should throw Error when the to field is missing', function () {
            const json =
                '{ "@type": "/cosmos.vesting.v1beta1.MsgCreateVestingAccount", "amount": { "denom": "basetcro", "amount": "3478499933290496" }, "from_address": "tcro1x07kkkepfj2hl8etlcuqhej7jj6myqrp48y4hg", "end_time": "1000000", "delayed": true  }';
            expect(() => cro.accounts.MsgCreateVestingAccount.fromCosmosMsgJSON(json)).to.throw(
                'Expected property `toAddress` to be of type `string` but received type `undefined` in object `options`',
            );
        });
        it('should throw Error when the amount field is missing', function () {
            const json =
                '{ "@type": "/cosmos.vesting.v1beta1.MsgCreateVestingAccount", "from_address": "tcro1x07kkkepfj2hl8etlcuqhej7jj6myqrp48y4hg" , "to_address": "tcro184lta2lsyu47vwyp2e8zmtca3k5yq85p6c4vp3", "end_time": "1000000", "delayed": true  }';
            expect(() => cro.accounts.MsgCreateVestingAccount.fromCosmosMsgJSON(json)).to.throw(
                'Invalid amount in the Msg.',
            );
        });
        it('should throw on invalid `fromAddress`', function () {
            const json =
                '{ "@type": "/cosmos.vesting.v1beta1.MsgCreateVestingAccount", "amount": { "denom": "basetcro", "amount": "3478499933290496" }, "from_address": "cro1pndm4ywdf4qtmupa0fqe75krmqed2znjyj6x8f", "to_address": "tcro184lta2lsyu47vwyp2e8zmtca3k5yq85p6c4vp3", "end_time": "1000000", "delayed": true  }';

            expect(() => cro.accounts.MsgCreateVestingAccount.fromCosmosMsgJSON(json)).to.throw(
                'Provided `fromAddress` does not match network selected',
            );
        });
        it('should throw on invalid `toAddress`', function () {
            const json =
                '{ "@type": "/cosmos.vesting.v1beta1.MsgCreateVestingAccount", "amount": { "denom": "basetcro", "amount": "3478499933290496" }, "from_address": "tcro184lta2lsyu47vwyp2e8zmtca3k5yq85p6c4vp3", "to_address": "cro1pndm4ywdf4qtmupa0fqe75krmqed2znjyj6x8f", "end_time": "1000000", "delayed": true  }';

            expect(() => cro.accounts.MsgCreateVestingAccount.fromCosmosMsgJSON(json)).to.throw(
                'Provided `toAddress` does not match network selected',
            );
        });
        it('should return the MsgCreateVestingAccount corresponding to the JSON', function () {
            const json =
                '{ "@type": "/cosmos.vesting.v1beta1.MsgCreateVestingAccount", "amount": { "denom": "basetcro", "amount": "3478499933290496" }, "from_address": "tcro1x07kkkepfj2hl8etlcuqhej7jj6myqrp48y4hg", "to_address": "tcro184lta2lsyu47vwyp2e8zmtca3k5yq85p6c4vp3", "end_time": "1000000", "delayed": true }';
            const MsgCreateVestingAccount = cro.accounts.MsgCreateVestingAccount.fromCosmosMsgJSON(json);
            expect(MsgCreateVestingAccount.fromAddress).to.eql('tcro1x07kkkepfj2hl8etlcuqhej7jj6myqrp48y4hg');
            expect(MsgCreateVestingAccount.toAddress).to.eql('tcro184lta2lsyu47vwyp2e8zmtca3k5yq85p6c4vp3');
            expect(MsgCreateVestingAccount.amount.toCosmosCoin().amount).to.eql('3478499933290496');
            expect(MsgCreateVestingAccount.amount.toCosmosCoin().denom).to.eql('basetcro');
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
            expect(() => new cro.accounts.MsgCreateVestingAccount(options.value)).to.throw(
                'Expected `options` to be of type `object`',
            );
        });
    });

    it('Test MsgCreateVestingAccount conversion', function () {
        const coin = new cro.Coin('12000500', Units.BASE);

        const MsgCreateVestingAccount = new cro.accounts.MsgCreateVestingAccount({
            fromAddress: 'tcro165tzcrh2yl83g8qeqxueg2g5gzgu57y3fe3kc3',
            toAddress: 'tcro184lta2lsyu47vwyp2e8zmtca3k5yq85p6c4vp3',
            amount: coin,
            delayed: true,
            endTime: Long.fromString('1000000'),
        });

        const rawMsg: Msg = {
            typeUrl: '/cosmos.vesting.v1beta1.MsgCreateVestingAccount',
            value: {
                fromAddress: 'tcro165tzcrh2yl83g8qeqxueg2g5gzgu57y3fe3kc3',
                toAddress: 'tcro184lta2lsyu47vwyp2e8zmtca3k5yq85p6c4vp3',
                amount: {
                    denom: 'basetcro',
                    amount: '12000500',
                },
                delayed: true,
                endTime: Long.fromString('1000000'),
            },
        };

        expect(MsgCreateVestingAccount.toRawMsg()).to.eqls(rawMsg);
    });

    it('Test appendTxBody MsgCreateVestingAccount Tx signing', function () {
        const anyKeyPair = Secp256k1KeyPair.fromPrivKey(
            Bytes.fromHexString('66633d18513bec30dd11a209f1ceb1787aa9e2069d5d47e590174dc9665102b3'),
        );
        const coin = new cro.Coin('12000500', Units.CRO);

        const MsgCreateVestingAccount = new cro.accounts.MsgCreateVestingAccount({
            fromAddress: 'tcro165tzcrh2yl83g8qeqxueg2g5gzgu57y3fe3kc3',
            toAddress: 'tcro184lta2lsyu47vwyp2e8zmtca3k5yq85p6c4vp3',
            amount: coin,
            delayed: true,
            endTime: Long.fromString('1000000'),
        });

        const anySigner = {
            publicKey: anyKeyPair.getPubKey(),
            accountNumber: new Big(0),
            accountSequence: new Big(2),
        };

        const rawTx = new cro.RawTransaction();

        const signableTx = rawTx.appendMessage(MsgCreateVestingAccount).addSigner(anySigner).toSignable();

        const signedTx = signableTx.setSignature(0, anyKeyPair.sign(signableTx.toSignDocumentHash(0))).toSigned();

        const signedTxHex = signedTx.encode().toHexString();
        expect(signedTxHex).to.be.eql(
            '0a96010a93010a2f2f636f736d6f732e76657374696e672e763162657461312e4d736743726561746556657374696e674163636f756e7412600a2b7463726f313635747a63726832796c3833673871657178756567326735677a6775353779336665336b6333122b7463726f3138346c7461326c7379753437767779703265387a6d746361336b35797138357036633476703320c0843d280112580a500a460a1f2f636f736d6f732e63727970746f2e736563703235366b312e5075624b657912230a2103fd0d560b6c4aa1ca16721d039a192867c3457e19dad553edb98e7ba88b159c2712040a0208011802120410c09a0c1a40df1e553c5bb66a2697186cb717d04ba997f0c921de36df1b50e51a1ae05c1e9d42693bad19336625b75ff1087ebf58e5f532ce103b2986a581e462dc5d59ced4',
        );
    });

    it('Should validate MsgCreateVestingAccount provided addresses with network config', function () {
        const coin = new cro.Coin('12000500', Units.BASE);

        const params1 = {
            fromAddress: 'cro1pndm4ywdf4qtmupa0fqe75krmqed2znjyj6x8f',
            toAddress: 'tcro184lta2lsyu47vwyp2e8zmtca3k5yq85p6c4vp3',
            amount: coin,
            delayed: true,
            endTime: Long.fromString('1000000'),
        };

        const params2 = {
            fromAddress: 'tcro165tzcrh2yl83g8qeqxueg2g5gzgu57y3fe3kc3',
            toAddress: 'cro1pndm4ywdf4qtmupa0fqe75krmqed2znjyj6x8f',
            amount: coin,
            delayed: true,
            endTime: Long.fromString('1000000'),
        };

        const params3 = {
            fromAddress: 'tcro1pndm4ywdf4qtmupa0fqe75krmqed2znjyj6x8fzqa',
            toAddress: 'cro184lta2lsyu47vwyp2e8zmtca3k5yq85p6c4vp3',
            amount: coin,
            delayed: true,
            endTime: Long.fromString('1000000'),
        };

        expect(() => new cro.accounts.MsgCreateVestingAccount(params1)).to.throw(
            'Provided `fromAddress` does not match network selected',
        );
        expect(() => new cro.accounts.MsgCreateVestingAccount(params2)).to.throw(
            'Provided `toAddress` does not match network selected',
        );
        expect(() => new cro.accounts.MsgCreateVestingAccount(params3)).to.throw(
            'Invalid checksum for tcro1pndm4ywdf4qtmupa0fqe75krmqed2znjyj6x8fzqa',
        );
    });
});
