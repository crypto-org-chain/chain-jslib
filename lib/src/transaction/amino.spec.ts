import 'mocha';
import { expect } from 'chai';
import Big from 'big.js';

import { CroNetwork, CroSDK } from '../core/cro';
import { HDKey } from '../hdkey/hdkey';
import { Secp256k1KeyPair } from '../keypair/secp256k1';
import { SIGN_MODE } from './types';

describe('Amino JSON sign mode', function () {
    it.only('should work', function () {
        const menmonic =
            'source knee choice chef exact recall craft satoshi coffee intact fun eternal sudden client quote recall sausage injury return duck bottom security like title';
        const hdKey = HDKey.fromMnemonic(menmonic);
        const privKey = hdKey.derivePrivKey("m/44'/1'/0'/0/0");
        const keyPair = Secp256k1KeyPair.fromPrivKey(privKey);

        const cro = CroSDK({ network: CroNetwork.Testnet });
        const msg = new cro.bank.MsgSend({
            fromAddress: new cro.Address(keyPair).account(),
            toAddress: 'tcro1fzcrza3j4f2677jfuxulkg33z6852qsqs8hx50',
            amount: cro.Coin.fromBaseUnit('1000'),
        });

        const rawTx = new cro.RawTransaction();
        const signableTx = rawTx
            .appendMessage(msg)
            .addSigner({
                publicKey: keyPair.getPubKey(),
                accountNumber: new Big('179'),
                accountSequence: new Big('0'),
                signMode: SIGN_MODE.LEGACY_AMINO_JSON,
            })
            .setFee(cro.Coin.fromBaseUnit('10000'))
            .setGasLimit('100000')
            .setMemo('amino test')
            .setTimeOutHeight(12345)
            .toSignable();

        const signature = keyPair.sign(signableTx.toSignDoc(0));
        const expectedSignature =
            'VKTiDDdbkf4HHeSF+Y30DGy/DBeWzMU1nbk+V2qtj9oqVkhy1zleWx0WqUlo/hjv9bvAEbq0JZQA7RQuFwKwSg==';
        expect(signature.toBase64String()).to.eq(expectedSignature);

        const signedTx = signableTx.setSignature(0, signature).toSigned();

        const expectedTxHex =
            '0a9e010a8c010a1c2f636f736d6f732e62616e6b2e763162657461312e4d736753656e64126c0a2b7463726f31667a63727a61336a3466323637376a667578756c6b6733337a36383532717371733868783530122b7463726f31667a63727a61336a3466323637376a667578756c6b6733337a363835327173717338687835301a100a08626173657463726f120431303030120a616d696e6f207465737418b96012690a4e0a460a1f2f636f736d6f732e63727970746f2e736563703235366b312e5075624b657912230a210223c9395d41013e6470c8d27da8b75850554faada3fe3e812660cbdf4534a85d712040a02087f12170a110a08626173657463726f1205313030303010a08d061a4054a4e20c375b91fe071de485f98df40c6cbf0c1796ccc5359db93e576aad8fda2a564872d7395e5b1d16a94968fe18eff5bbc011bab4259400ed142e1702b04a';
        expect(signedTx.getHexEncoded()).to.eq(expectedTxHex);
    });
});
