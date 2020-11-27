import 'mocha';
import { expect } from 'chai';

import Big from 'big.js';
import { fuzzyDescribe } from '../../../test/mocha-fuzzy/suite';
import { Units } from '../../../coin/coin';
import { CroSDK } from '../../../core/cro';
import { Msg } from '../../../cosmos/v1beta1/types/msg';
import { HDKey } from '../../../hdkey/hdkey';
import { Secp256k1KeyPair } from '../../../keypair/secp256k1';
import { Network } from '../../../network/network';

const PystaportTestNet: Network = {
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

describe('Testing MsgSubmitProposal', function () {
    fuzzyDescribe('should throw Error when options is invalid', function (fuzzy) {
        const anyValidOptions = {
            title: 'Make new cosmos version backward compatible with pre release',
            description: 'Lorem Ipsum ... A great proposal to increate backward compatibility and initial work on IBC',
            proposer: 'tcro184lta2lsyu47vwyp2e8zmtca3k5yq85p6c4vp3',
            initialDeposit: new cro.Coin('1200', Units.BASE),
        };
        const testRunner = fuzzy(fuzzy.ObjArg(anyValidOptions));

        testRunner(function (options) {
            if (options.valid) {
                return;
            }
            expect(() => new cro.gov.MsgSubmitProposal(options.value)).to.throw(
                'Expected `options` to be of type `object`',
            );
        });
    });

    it('Test MsgSubmitProposal conversion', function () {
        const coin = new cro.Coin('12000500', Units.BASE);

        const msgSubmitProposal = new cro.gov.MsgSubmitProposal({
            title: 'Make new cosmos version backward compatible with pre release',
            description: 'Lorem Ipsum ... A great proposal to increate backward compatibility and initial work on IBC',
            proposer: 'tcro184lta2lsyu47vwyp2e8zmtca3k5yq85p6c4vp3',
            initialDeposit: coin,
        });

        const rawMsg: Msg = {
            typeUrl: '/cosmos.gov.v1beta1.MsgSubmitProposal',
            value: {
                proposer: 'tcro184lta2lsyu47vwyp2e8zmtca3k5yq85p6c4vp3',
                content: {
                    title: 'Make new cosmos version backward compatible with pre release',
                    description:
                        'Lorem Ipsum ... A great proposal to increate backward compatibility and initial work on IBC',
                },
                initialDeposit: [
                    {
                        denom: 'basetcro',
                        amount: '12000500',
                    },
                ],
            },
        };
        expect(msgSubmitProposal.toRawMsg()).to.eqls(rawMsg);
    });

    it('Test appendTxBody MsgSubmitProposal Tx signing', function () {
        const hdKey = HDKey.fromMnemonic(
            'guilt shield sting fluid wet east video business fold agree capital galaxy rapid almost melt piano taste guide spoil pull pigeon wood fit escape',
        );

        const privKey = hdKey.derivePrivKey("m/44'/1'/0'/0/0");
        const keyPair = Secp256k1KeyPair.fromPrivKey(privKey);

        console.log(`address: ${new cro.Address(keyPair).account()}`);

        const coin = new cro.Coin('12500', Units.CRO);
        const msgSubmitProposal = new cro.gov.MsgSubmitProposal({
            title: 'Make new cosmos version backward compatible with pre release',
            description: 'Lorem Ipsum ... A great proposal to increate backward compatibility and initial work on IBC',
            proposer: 'tcro1nhe3qasy0ayhje95mtsvppyg67d3zswf04sda8',
            initialDeposit: coin,
        });

        const anySigner = {
            publicKey: keyPair.getPubKey(),
            accountNumber: new Big(0),
            accountSequence: new Big(0),
        };

        const rawTx = new cro.RawTransaction();

        const signableTx = rawTx.appendMessage(msgSubmitProposal).addSigner(anySigner).toSignable();

        const signedTx = signableTx.setSignature(0, keyPair.sign(signableTx.toSignDoc(0))).toSigned();

        const signedTxHex = signedTx.encode().toHexString();
        expect(signedTxHex).to.be.eql(
            '0a730a710a1e2f636f736d6f732e676f762e763162657461312e4d73674465706f736974124f08e0f64b122b7463726f3138346c7461326c7379753437767779703265387a6d746361336b3579713835703663347670331a1c0a08626173657463726f12103132303030353030303030303030303012580a500a460a1f2f636f736d6f732e63727970746f2e736563703235366b312e5075624b657912230a21030bf28c5f92c336db4703791691fa650fee408690b0a22c5ee4afb7e2508d32a712040a0208011800120410c09a0c1a40ba8c80028a85015ac737ca56603bef0a82e0fbd83f701ccbba02a4f381e5ee4a3d83af13cd02f1e9c1e8b386995d8468c2db1db73952c30fac6114004fe269c0',
        );
    });
});
