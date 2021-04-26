/* eslint-disable */
import { expect } from 'chai';
import Big from 'big.js';
import { fuzzyDescribe } from '../../../test/mocha-fuzzy/suite';
import { CroSDK } from '../../../core/cro';
import { Secp256k1KeyPair } from '../../../keypair/secp256k1';
import { Bytes } from '../../../utils/bytes/bytes';
import * as legacyAmino from '../../../cosmos/amino';

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

describe('Testing MsgSetWithdrawAddress', function () {
    fuzzyDescribe('should throw Error when options is invalid', function (fuzzy) {
        const anyValidOptions = {
            delegatorAddress: 'tcro165tzcrh2yl83g8qeqxueg2g5gzgu57y3fe3kc3',
            withdrawAddress: 'tcro165tzcrh2yl83g8qeqxueg2g5gzgu57y3fe3kc3',
        };
        const testRunner = fuzzy(fuzzy.ObjArg(anyValidOptions));

        testRunner(function (options) {
            if (options.valid) {
                return;
            }
            expect(() => new cro.distribution.MsgSetWithdrawAddress(options.value)).to.throw(
                'Expected `rewardOptions` to be of type `object`',
            );
        });
    });

    it('Test appending MsgSetWithdrawAddress and signing it', function () {
        const anyKeyPair = Secp256k1KeyPair.fromPrivKey(
            Bytes.fromHexString('66633d18513bec30dd11a209f1ceb1787aa9e2069d5d47e590174dc9665102b3'),
        );

        const MsgSetWithdrawAddress = new cro.distribution.MsgSetWithdrawAddress({
            delegatorAddress: 'tcro165tzcrh2yl83g8qeqxueg2g5gzgu57y3fe3kc3',
            withdrawAddress: 'tcro165tzcrh2yl83g8qeqxueg2g5gzgu57y3fe3kc3',
        });

        const anySigner = {
            publicKey: anyKeyPair.getPubKey(),
            accountNumber: new Big(0),
            accountSequence: new Big(10),
        };

        const rawTx = new cro.RawTransaction();

        const signableTx = rawTx.appendMessage(MsgSetWithdrawAddress).addSigner(anySigner).toSignable();

        const signedTx = signableTx.setSignature(0, anyKeyPair.sign(signableTx.toSignDocumentHash(0))).toSigned();

        const signedTxHex = signedTx.encode().toHexString();
        expect(signedTxHex).to.be.eql(
            '0a650a630a322f636f736d6f732e646973747269627574696f6e2e763162657461312e4d7367536574576974686472617741646472657373122d0a2b7463726f313635747a63726832796c3833673871657178756567326735677a6775353779336665336b633312580a500a460a1f2f636f736d6f732e63727970746f2e736563703235366b312e5075624b657912230a2103fd0d560b6c4aa1ca16721d039a192867c3457e19dad553edb98e7ba88b159c2712040a020801180a120410c09a0c1a407a98473a7ffdb8563e0d4adb598e1bff1d16b708d2709d953ca11d8ea53152c93d509c54b8956eaec0fd887654fb6074bd23559126af8501d9643d192f0618bb',
        );
    });

    describe('Testing MsgSetWithdrawAddress json', function () {
        it('Test MsgSetWithdrawAddress conversion for amino json', function () {
            const MsgWithdrawDelegatatorReward = new cro.distribution.MsgSetWithdrawAddress({
                delegatorAddress: 'tcro165tzcrh2yl83g8qeqxueg2g5gzgu57y3fe3kc3',
                withdrawAddress: 'tcro165tzcrh2yl83g8qeqxueg2g5gzgu57y3fe3kc3',
            });

            const rawMsg: legacyAmino.Msg = {
                type: 'cosmos-sdk/MsgSetWithdrawAddress',
                value: {
                    delegator_address: 'tcro165tzcrh2yl83g8qeqxueg2g5gzgu57y3fe3kc3',
                    withdraw_address: 'tcro165tzcrh2yl83g8qeqxueg2g5gzgu57y3fe3kc3',
                },
            };

            expect(MsgWithdrawDelegatatorReward.toRawAminoMsg()).to.eqls(rawMsg);
        });
    });

    describe('Testing throw scenarios', function () {
        it('Should throw on invalid delegatorAddress', function () {
            expect(() => {
                new cro.distribution.MsgSetWithdrawAddress({
                    delegatorAddress: 'cro1xh3dqgljnydpwelzqf265edryrqrq7wzacx2nr',
                    withdrawAddress: 'tcro165tzcrh2yl83g8qeqxueg2g5gzgu57y3fe3kc3',
                });
            }).to.throw('Provided `delegatorAddress` doesnt match network selected');
        });

        it('Should throw on invalid withdrawAddress', function () {
            expect(() => {
                new cro.distribution.MsgSetWithdrawAddress({
                    delegatorAddress: 'tcro165tzcrh2yl83g8qeqxueg2g5gzgu57y3fe3kc3',
                    withdrawAddress: 'cro1xh3dqgljnydpwelzqf265edryrqrq7wzacx2nr',
                });
            }).to.throw('Provided `withdrawAddress` doesnt match network selected');
        });
    });
});
