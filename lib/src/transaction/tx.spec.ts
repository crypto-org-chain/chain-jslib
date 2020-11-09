import 'mocha';
import Big from 'big.js';
import { expect } from 'chai';
import { HDKey } from '../hdkey/hdkey';
import { Secp256k1KeyPair } from '../keypair/secp256k1';
import { CroNetwork, CroSDK } from '../core/cro';
import { Units } from '../coin/coin';

describe('Testing Tx signing with more parameters', function () {
    it('test tx when memo and timeout height were set', function () {
        const hdKey = HDKey.fromMnemonic(
            'curtain maid fetch push pilot frozen speak motion island pigeon habit suffer gap purse royal hollow among orange pluck mutual eager cement void panther',
        );

        const privKey = hdKey.derivePrivKey("m/44'/1'/0'/0/0");
        const keyPair = Secp256k1KeyPair.fromPrivKey(privKey);

        const cro = CroSDK({ network: CroNetwork.Testnet });
        const rawTx = new cro.RawTransaction();

        const feeAmount = new cro.Coin('6500', Units.BASE);

        // Custom properties set
        rawTx.setMemo('Hello Test Memo');
        rawTx.setGasLimit('280000');
        rawTx.setFee(feeAmount);

        const msgSend1 = new cro.bank.MsgSend({
            fromAddress: 'tcro165tzcrh2yl83g8qeqxueg2g5gzgu57y3fe3kc3',
            toAddress: 'tcro165tzcrh2yl83g8qeqxueg2g5gzgu57y3fe3kc3',
            amount: new cro.Coin('1210', Units.BASE),
        });

        const signableTx = rawTx
            .appendMessage(msgSend1)
            .addSigner({
                publicKey: keyPair.getPubKey(),
                accountNumber: new Big(41),
                accountSequence: new Big(13),
            })
            .toSignable();

        const signedTx = signableTx.setSignature(0, keyPair.sign(signableTx.toSignDoc(0))).toSigned();
        // expect(signedTx.getTxHash()).to.eq('0837A9EBB5B4FBE608894D9C69685F2998C47847ABC56297ED465C978E81D5EF');
        expect(signedTx.getHexEncoded()).to.eq(
            '0aa0010a8c010a1c2f636f736d6f732e62616e6b2e763162657461312e4d736753656e64126c0a2b7463726f313635747a63726832796c3833673871657178756567326735677a6775353779336665336b6333122b7463726f313635747a63726832796c3833673871657178756567326735677a6775353779336665336b63331a100a08626173657463726f120431323130120f48656c6c6f2054657374204d656d6f126a0a500a460a1f2f636f736d6f732e63727970746f2e736563703235366b312e5075624b657912230a2103c3d281a28592adce81bee3094f00eae26932cbc682fba239b90f47dac9fe703612040a020801180d12160a100a08626173657463726f12043635303010c08b111a40efe76f09c720864285ddc2e8b4f48b83f6d647fa944d56c5431822d95e10c2a328a8de0c3a9c70341db576f6d5e3b66974ab2e91c43ef8155f93e531733fcb7c',
        );
    });
});
