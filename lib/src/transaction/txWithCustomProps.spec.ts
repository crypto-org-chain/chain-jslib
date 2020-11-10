import 'mocha';
import Big from 'big.js';
import { expect } from 'chai';
import { HDKey } from '../hdkey/hdkey';
import { Secp256k1KeyPair } from '../keypair/secp256k1';
import { CroNetwork, CroSDK } from '../core/cro';
import { Units } from '../coin/coin';

describe('Testing Tx signing with custom parameters', function () {
    it('test passing custom properties', function () {
        const cro = CroSDK({ network: CroNetwork.Testnet });
        const rawTx = new cro.RawTransaction();

        expect(() => rawTx.setGasLimit('1234009AXS')).to.throw(
            'Expected gasLimit value to be a base10 number represented as string, got `1234009AXS`',
        );

        expect(() => rawTx.setFee(new cro.Coin('1-6500', Units.BASE))).to.throw(
            'Expected amount to be a base10 number represented as string, got `1-6500`',
        );
    });

    it('test tx when memo, timeout height, gasLimit and fee were set', function () {
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
        rawTx.setTimeOutHeight(341910);

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
        expect(signedTx.getTxHash()).to.eq('02A10D9E8B8D3AFE69EC56B1FE6ECFE8478C82038452D6BA4E9B189D81FA9908');
        expect(signedTx.getHexEncoded()).to.eq(
            '0aa4010a8c010a1c2f636f736d6f732e62616e6b2e763162657461312e4d736753656e64126c0a2b7463726f313635747a63726832796c3833673871657178756567326735677a6775353779336665336b6333122b7463726f313635747a63726832796c3833673871657178756567326735677a6775353779336665336b63331a100a08626173657463726f120431323130120f48656c6c6f2054657374204d656d6f1896ef14126a0a500a460a1f2f636f736d6f732e63727970746f2e736563703235366b312e5075624b657912230a2103c3d281a28592adce81bee3094f00eae26932cbc682fba239b90f47dac9fe703612040a020801180d12160a100a08626173657463726f12043635303010c08b111a40fe9b30f29bb9a83df3685f5bf8b7e6c34bae9ee8ba93115af4136289354c5bf947698ef3a3c0a1f6092ba7a2069616c436f4bcf6f3ecef11b92ad4d319ec0347',
        );
    });
});
