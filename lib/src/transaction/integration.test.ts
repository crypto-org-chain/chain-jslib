import 'mocha';
import Big from 'big.js';
import { expect } from 'chai';
import { HDKey } from '../hdkey/hdkey';
import { Secp256k1KeyPair } from '../keypair/secp256k1';
import { CroSDK } from '../core/cro';
import { Units } from '../coin/coin';
import { StargateClient, assertIsBroadcastTxSuccess } from '@cosmjs/stargate';
import { Network } from '../network/network';

let customNetwork: Network = {
    chainId: 'chainmaind',
    addressPrefix: 'cro',
    validatorAddressPrefix: 'crocncl',
    validatorPubKeyPrefix: 'crocnclconspub',
    coin: {
        baseDenom: 'basecro',
        croDenom: 'cro',
    },
    bip44Path: {
        coinType: 1,
        account: 0,
    },
};
describe('Integration test suite', function () {
    it('creates a MsgSend Type Transaction and Broadcasts it.', async function () {
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

        const cro = CroSDK({ network: customNetwork });
        const rawTx = new cro.RawTransaction();
        const address1 = new cro.Address(keyPair.getPubKey());
        const address2 = new cro.Address(keyPair2.getPubKey());

        const client = await StargateClient.connect('localhost:26657');

        const msgSend1 = new cro.bank.MsgSend({
            fromAddress: address1.account(),
            toAddress: address2.account(),
            amount: new cro.Coin('100000', Units.BASE),
        });

        const msgSend2 = new cro.bank.MsgSend({
            fromAddress: address2.account(),
            toAddress: address1.account(),
            amount: new cro.Coin('20000', Units.BASE),
        });

        const account1 = await client.getAccount(address1.account());
        const account2 = await client.getAccount(address2.account());

        expect(account1).to.be.not.null;
        expect(account2).to.be.not.null;

        const signableTx = rawTx
            .appendMessage(msgSend1)
            .appendMessage(msgSend2)
            .addSigner({
                publicKey: keyPair.getPubKey(),
                accountNumber: new Big(account1!.accountNumber),
                accountSequence: new Big(account1!.sequence)
            })
            .addSigner({
                publicKey: keyPair2.getPubKey(),
                accountNumber: new Big(account2!.accountNumber),
                accountSequence: new Big(account2!.sequence)
            })
            .toSignable();

        const signedTx = signableTx
            .setSignature(0, keyPair.sign(signableTx.toSignDoc(0)))
            .setSignature(1, keyPair2.sign(signableTx.toSignDoc(1)))
            .toSigned();

        expect(msgSend1.fromAddress).to.eq(account1!.address);
        expect(msgSend1.toAddress).to.eq(account2!.address);

        const broadcastResult = await client.broadcastTx(signedTx.encode().toUint8Array())
        assertIsBroadcastTxSuccess(broadcastResult);

        const { rawLog, transactionHash } = broadcastResult;
        expect(rawLog).to.match(/{"key":"amount","value":"100000basecro"}/);
        expect(transactionHash).to.match(/^[0-9A-F]{64}$/);

    });
});
