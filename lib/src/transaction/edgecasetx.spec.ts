import 'mocha';
import Big from 'big.js';
import { expect } from 'chai';
import { Network } from '../network/network';
import { HDKey } from '../hdkey/hdkey';
import { CroSDK } from '../core/cro';
import { Secp256k1KeyPair } from '../keypair/secp256k1';
import { Units } from '../coin/coin';

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

describe('Testing edge case Txs with 0 account numbers or 0 sequence', function () {
    it('test tx with 0 account number', function () {
        const hdKey = HDKey.fromMnemonic(
            'ramp sock spice enrich exhibit skate empower process kit pudding olive mesh friend camp labor coconut devote shell argue system pig then provide nose',
        );
        const cro = CroSDK({ network: PystaportTestNet });

        const privKey = hdKey.derivePrivKey("m/44'/1'/0'/0/0");
        const keyPair = Secp256k1KeyPair.fromPrivKey(privKey);
        const rawTx = new cro.RawTransaction();

        rawTx.setMemo('Hello Test Memo');

        const msgSend1 = new cro.bank.MsgSend({
            fromAddress: 'tcro15rsn69ze9r7g52tk0u6cyhu4edep88dxgtzm65',
            toAddress: 'tcro1l4gxejy8qxl3vxcxv7vpk4cqu8qhrz2nfxxr2p',
            amount: new cro.Coin('1210', Units.BASE),
        });

        const signableTx = rawTx
            .appendMessage(msgSend1)
            .addSigner({
                publicKey: keyPair.getPubKey(),
                accountNumber: new Big(0),
                accountSequence: new Big(1),
            })
            .toSignable();

        const signedTx = signableTx.setSignature(0, keyPair.sign(signableTx.toSignDoc(0))).toSigned();
        expect(signedTx.getTxHash()).to.eq('5481CCE07ACEF891F701AFEDC746C3478DDFEBFE524F5161ED09BB396F045B46');
        expect(signedTx.getHexEncoded()).to.eq(
            '0aa0010a8c010a1c2f636f736d6f732e62616e6b2e763162657461312e4d736753656e64126c0a2b7463726f313572736e36397a65397237673532746b3075366379687534656465703838647867747a6d3635122b7463726f316c346778656a793871786c3376786378763776706b34637175387168727a326e6678787232701a100a08626173657463726f120431323130120f48656c6c6f2054657374204d656d6f12580a500a460a1f2f636f736d6f732e63727970746f2e736563703235366b312e5075624b657912230a21028dc6ea491defbae760b9cf97b513208942816be5efdc28d3959e6994dfcc458b12040a0208011801120410c09a0c1a40c212f25dfc6758ae42c78079cba83f5d7bedf0dc5e03261e2ee67ee46e55eb6a5820e4c865b0a18c28ee838f5da3dac2e7b84e67dc8fb3449e83597a995da6da',
        );
    });

    it('test tx when sequence is 0', function () {
        const hdKey = HDKey.fromMnemonic(
            'team school reopen cave banner pass autumn march immune album hockey region baby critic insect armor pigeon owner number velvet romance flight blame tone',
        );
        const cro = CroSDK({ network: PystaportTestNet });

        const privKey = hdKey.derivePrivKey("m/44'/1'/0'/0/0");
        const keyPair = Secp256k1KeyPair.fromPrivKey(privKey);
        const rawTx = new cro.RawTransaction();

        console.log('address >> ', new cro.Address(keyPair).account());
        rawTx.setMemo('Hello Test Memo');

        const msgSend1 = new cro.bank.MsgSend({
            fromAddress: 'tcro1l4gxejy8qxl3vxcxv7vpk4cqu8qhrz2nfxxr2p',
            toAddress: 'tcro12z3awt3kkh0u58hmw85lhtdg67d44pwu62x8sa',
            amount: new cro.Coin('2210', Units.BASE),
        });

        const signableTx = rawTx
            .appendMessage(msgSend1)
            .addSigner({
                publicKey: keyPair.getPubKey(),
                accountNumber: new Big(6),
                accountSequence: new Big(0),
            })
            .toSignable();

        const signedTx = signableTx.setSignature(0, keyPair.sign(signableTx.toSignDoc(0))).toSigned();
        expect(signedTx.getTxHash()).to.eq('D0F76CAF5FBB7CCE330FC32EA86905994FE18730A4A00505474B5E62570B73A0');
        expect(signedTx.getHexEncoded()).to.eq(
            '0aa0010a8c010a1c2f636f736d6f732e62616e6b2e763162657461312e4d736753656e64126c0a2b7463726f316c346778656a793871786c3376786378763776706b34637175387168727a326e667878723270122b7463726f31327a33617774336b6b6830753538686d7738356c6874646736376434347077753632783873611a100a08626173657463726f120432323130120f48656c6c6f2054657374204d656d6f12580a500a460a1f2f636f736d6f732e63727970746f2e736563703235366b312e5075624b657912230a21030bf28c5f92c336db4703791691fa650fee408690b0a22c5ee4afb7e2508d32a712040a0208011800120410c09a0c1a40f7a03f0510596020b41b3ba7729a248b357a7ab857cf9c7956b2a20d750a859e36f2254829151cbb986f42b0cce1eb0ac17805ffb34b0de860b36062a4338441',
        );
    });
});
