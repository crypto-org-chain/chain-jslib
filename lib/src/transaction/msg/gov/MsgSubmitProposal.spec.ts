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

        const coin = new cro.Coin('120', Units.CRO);
        const msgSubmitProposal = new cro.gov.MsgSubmitProposal({
            title: 'Make new cosmos version backward compatible with pre release',
            description: 'Lorem Ipsum ... A great proposal to increate backward compatibility and initial work on IBC',
            proposer: 'tcro1nhe3qasy0ayhje95mtsvppyg67d3zswf04sda8',
            initialDeposit: coin,
        });

        const anySigner = {
            publicKey: keyPair.getPubKey(),
            accountNumber: new Big(6),
            accountSequence: new Big(0),
        };

        const rawTx = new cro.RawTransaction();

        const signableTx = rawTx.appendMessage(msgSubmitProposal).addSigner(anySigner).toSignable();

        const signedTx = signableTx.setSignature(0, keyPair.sign(signableTx.toSignDoc(0))).toSigned();

        const signedTxHex = signedTx.getHexEncoded();
        expect(signedTxHex).to.be.eql(
            '0a93030a90030a252f636f736d6f732e676f762e763162657461312e4d73675375626d697450726f706f73616c12e6020a9d020a372f636f736d6f732e646973747269627574696f6e2e763162657461312e436f6d6d756e697479506f6f6c5370656e6450726f706f73616c12e1010a3c4d616b65206e657720636f736d6f732076657273696f6e206261636b7761726420636f6d70617469626c652077697468207072652072656c65617365125b4c6f72656d20497073756d202e2e2e20412067726561742070726f706f73616c20746f20696e637265617465206261636b7761726420636f6d7061746962696c69747920616e6420696e697469616c20776f726b206f6e204942431a2b7463726f316e68653371617379306179686a6539356d74737670707967363764337a73776630347364613822170a08626173657463726f120b313230303030303030303012170a08626173657463726f120b31323030303030303030301a2b7463726f316e68653371617379306179686a6539356d74737670707967363764337a73776630347364613812580a500a460a1f2f636f736d6f732e63727970746f2e736563703235366b312e5075624b657912230a2102046b34d613be4ad7e79dcadf13fb4ce8d8d7ffeee7b554c32e924906d4e5664b12040a0208011800120410c09a0c1a4044e8f4777960420e4759bbe527ba18ad47bafff359d02c1eabb5fa14dd68a7c15373f5773810104d56a4fcb43033cb354b4c4c92c568be99ed1f06422f7d7d60',
        );
    });
});
