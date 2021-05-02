/* eslint-disable */
import { expect } from 'chai';
import Big from 'big.js';
import { fuzzyDescribe } from '../../../test/mocha-fuzzy/suite';
import { CroSDK } from '../../../core/cro';
import { Secp256k1KeyPair } from '../../../keypair/secp256k1';
import { Bytes } from '../../../utils/bytes/bytes';
import * as legacyAmino from '../../../cosmos/amino';
import { Units } from '../../../coin/coin';

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
let amount = new cro.Coin('1000', Units.BASE)

describe('Testing MsgFundCommunityPool', function () {
    fuzzyDescribe('should throw Error when options is invalid', function (fuzzy) {
        const anyValidOptions = {
            depositor: 'tcro165tzcrh2yl83g8qeqxueg2g5gzgu57y3fe3kc3',
            amount,
        };
        const testRunner = fuzzy(fuzzy.ObjArg(anyValidOptions));

        testRunner(function (options) {
            if (options.valid) {
                return;
            }
            expect(() => new cro.distribution.MsgFundCommunityPool(options.value)).to.throw(
                'Expected `communityPoolOptions` to be of type `object`',
            );
        });
    });

    it('Test appending MsgFundCommunityPool and signing it', function () {
        const anyKeyPair = Secp256k1KeyPair.fromPrivKey(
            Bytes.fromHexString('66633d18513bec30dd11a209f1ceb1787aa9e2069d5d47e590174dc9665102b3'),
        );

        const MsgFundCommunityPool = new cro.distribution.MsgFundCommunityPool({
            depositor: 'tcro165tzcrh2yl83g8qeqxueg2g5gzgu57y3fe3kc3',
            amount,
        });

        const anySigner = {
            publicKey: anyKeyPair.getPubKey(),
            accountNumber: new Big(0),
            accountSequence: new Big(10),
        };

        const rawTx = new cro.RawTransaction();

        const signableTx = rawTx.appendMessage(MsgFundCommunityPool).addSigner(anySigner).toSignable();

        const signedTx = signableTx.setSignature(0, anyKeyPair.sign(signableTx.toSignDocumentHash(0))).toSigned();

        const signedTxHex = signedTx.encode().toHexString();
        expect(signedTxHex).to.be.eql(
            '0a640a620a312f636f736d6f732e646973747269627574696f6e2e763162657461312e4d736746756e64436f6d6d756e697479506f6f6c122d122b7463726f313635747a63726832796c3833673871657178756567326735677a6775353779336665336b633312580a500a460a1f2f636f736d6f732e63727970746f2e736563703235366b312e5075624b657912230a2103fd0d560b6c4aa1ca16721d039a192867c3457e19dad553edb98e7ba88b159c2712040a020801180a120410c09a0c1a40dea8c5292e72ca736bc189d6214fdb44e45c1ad0cc91314d81e90f2d825124b2331a9aad56c2ba6af63071dc5d7e0a18712e68d473387033346de78f4cfdacf7',
        );
    });

    describe('Testing MsgFundCommunityPool json', function () {
        it('Test MsgFundCommunityPool conversion for amino json', function () {
            const MsgWithdrawDelegatatorReward = new cro.distribution.MsgFundCommunityPool({
                depositor: 'tcro165tzcrh2yl83g8qeqxueg2g5gzgu57y3fe3kc3',
                amount,
            });

            const rawMsg: legacyAmino.Msg = {
                type: 'cosmos-sdk/MsgFundCommunityPool',
                value: {
                    depositor: 'tcro165tzcrh2yl83g8qeqxueg2g5gzgu57y3fe3kc3',
                    amount: amount.toCosmosCoins(),
                },
            };

            expect(MsgWithdrawDelegatatorReward.toRawAminoMsg()).to.eqls(rawMsg);
        });
    });

    describe('Testing throw scenarios', function () {
        it('Should throw on invalid depositor', function () {
            expect(() => {
                new cro.distribution.MsgFundCommunityPool({
                    depositor: 'cro1xh3dqgljnydpwelzqf265edryrqrq7wzacx2nr',
                    amount,
                });
            }).to.throw('Provided `depositor` address doesnt match network selected');
        });
    });
});
