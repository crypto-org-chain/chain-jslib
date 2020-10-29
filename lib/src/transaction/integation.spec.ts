import 'mocha';
import Big from 'big.js';

import { RawTransaction } from './raw';
import { Testnet } from '../network/network';
import { HDKey } from '../hdkey/hdkey';
import { Secp256k1KeyPair } from '../keypair/secp256k1';

// TODO: to be removed/replaced by more proper integration tests
describe('Integration tests (to be removed)', function () {
    it('transaction integration test', function () {
        const hdKey = HDKey.fromMnemonic(
            'cattle brisk menu chat roast asthma brisk seat whisper prevent town bomb test minimum coconut rent orbit wish caught embody clever turtle track duck',
        );
        const hdKey2 = HDKey.fromMnemonic(
            'curtain maid fetch push pilot frozen speak motion island pigeon habit suffer gap purse royal hollow among orange pluck mutual eager cement void panther',
        );
        const privKey = hdKey.derivePrivKey("m/44'/1'/0'/0/0");
        const privKey2 = hdKey2.derivePrivKey("m/44'/1'/0'/0/0");
        const keyPair = Secp256k1KeyPair.fromPrivKey(privKey);
        const keyPair2 = Secp256k1KeyPair.fromPrivKey(privKey2);

        const rawTx = new RawTransaction({ network: Testnet });
        const signableTx = rawTx
            .addMessage({
                typeUrl: '/cosmos.bank.v1beta1.MsgSend',
                value: {
                    fromAddress: 'tcro165tzcrh2yl83g8qeqxueg2g5gzgu57y3fe3kc3',
                    toAddress: 'tcro184lta2lsyu47vwyp2e8zmtca3k5yq85p6c4vp3',
                    amount: [
                        {
                            denom: 'basetcro',
                            amount: '1000',
                        },
                    ],
                },
            })
            .addMessage({
                typeUrl: '/cosmos.bank.v1beta1.MsgSend',
                value: {
                    fromAddress: 'tcro184lta2lsyu47vwyp2e8zmtca3k5yq85p6c4vp3',
                    toAddress: 'tcro165tzcrh2yl83g8qeqxueg2g5gzgu57y3fe3kc3',
                    amount: [
                        {
                            denom: 'basetcro',
                            amount: '2000',
                        },
                    ],
                },
            })
            .addSigner({
                publicKey: keyPair.getPubKey(),
                accountNumber: new Big(20),
                accountSequence: new Big(8378),
            })
            .addSigner({
                publicKey: keyPair2.getPubKey(),
                accountNumber: new Big(21),
                accountSequence: new Big(8369),
            })
            .toSignable();

        const signedTx = signableTx
            .setSignature(0, keyPair.sign(signableTx.toSignDoc(0)))
            .setSignature(1, keyPair2.sign(signableTx.toSignDoc(1)))
            .toSigned();

        const txHex = signedTx.encode();
        // eslint-disable-next-line no-console
        console.log(`0x${txHex.toHexString()}`);
        // eslint-disable-next-line no-console
        console.log('TxHash', signedTx.getTxHash());
    });
});
