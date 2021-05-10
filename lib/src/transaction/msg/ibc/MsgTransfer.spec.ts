import 'mocha';
import { expect } from 'chai';
import Big from 'big.js';

import Long from 'long';
import { fuzzyDescribe } from '../../../test/mocha-fuzzy/suite';
import { Msg } from '../../../cosmos/v1beta1/types/msg';
import { Secp256k1KeyPair } from '../../../keypair/secp256k1';
import { Bytes } from '../../../utils/bytes/bytes';
import { CroSDK } from '../../../core/cro';
import { COSMOS_MSG_TYPEURL } from '../../common/constants/typeurl';

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

const tokenAmount = cro.Coin.fromBaseUnit('1234');
const timeoutHeight = {
    revisionNumber: Long.fromString('0'),
    revisionHeight: Long.fromString('1708515'),
};

describe('Testing MsgTransfer', function () {
    fuzzyDescribe('should throw Error when options is invalid', function (fuzzy) {
        const anyValidOptions = {
            sourcePort: 'transfer',
            sourceChannel: 'channel-33',
            token: tokenAmount,
            sender: 'tcro15sfupd26sp6qf37ll5q6xuf330k7df9tnvrqht',
            receiver: 'cosmos1vw4ucaeagtduv5ep4sa95e3aqzqpsk5meda08c',
            timeoutHeight,
            timeoutTimestamp: Long.fromString('1620640362229420996'),
        };

        const testRunner = fuzzy(fuzzy.ObjArg(anyValidOptions));

        testRunner(function (options) {
            if (options.valid) {
                return;
            }
            expect(() => new cro.ibc.MsgTransfer(options.value)).to.throw('Expected `options` to be of type `object`');
        });
    });

    it('Test MsgTransfer conversion', function () {
        const MsgTransfer = new cro.ibc.MsgTransfer({
            sourcePort: 'transfer',
            sourceChannel: 'channel-33',
            token: tokenAmount,
            sender: 'tcro15sfupd26sp6qf37ll5q6xuf330k7df9tnvrqht',
            receiver: 'cosmos1vw4ucaeagtduv5ep4sa95e3aqzqpsk5meda08c',
            timeoutHeight,
            timeoutTimestamp: Long.fromString('1620640362229420996'),
        });

        const rawMsg: Msg = {
            typeUrl: COSMOS_MSG_TYPEURL.ibc.MsgTransfer,
            value: {
                sourcePort: 'transfer',
                sourceChannel: 'channel-33',
                token: tokenAmount.toCosmosCoin(),
                sender: 'tcro15sfupd26sp6qf37ll5q6xuf330k7df9tnvrqht',
                receiver: 'cosmos1vw4ucaeagtduv5ep4sa95e3aqzqpsk5meda08c',
                timeoutHeight,
                timeoutTimestamp: Long.fromString('1620640362229420996'),
            },
        };

        expect(MsgTransfer.toRawMsg()).to.eqls(rawMsg);
    });

    it('Test appendTxBody MsgTransfer Tx signing', function () {
        const anyKeyPair = Secp256k1KeyPair.fromPrivKey(
            Bytes.fromHexString('66633d18513bec30dd11a209f1ceb1787aa9e2069d5d47e590174dc9665102b3'),
        );

        const MsgTransfer = new cro.ibc.MsgTransfer({
            sourcePort: 'transfer',
            sourceChannel: 'channel-33',
            token: tokenAmount,
            sender: 'tcro15sfupd26sp6qf37ll5q6xuf330k7df9tnvrqht',
            receiver: 'cosmos1vw4ucaeagtduv5ep4sa95e3aqzqpsk5meda08c',
            timeoutHeight,
            timeoutTimestamp: Long.fromString('1620640362229420996'),
        });

        const anySigner = {
            publicKey: anyKeyPair.getPubKey(),
            accountNumber: new Big(0),
            accountSequence: new Big(2),
        };

        const rawTx = new cro.RawTransaction();

        const signableTx = rawTx.appendMessage(MsgTransfer).addSigner(anySigner).toSignable();

        const signedTx = signableTx.setSignature(0, anyKeyPair.sign(signableTx.toSignDocumentHash(0))).toSigned();

        const signedTxHex = signedTx.encode().toHexString();
        expect(signedTxHex).to.be.eql(
            '0ac7010ac4010a292f6962632e6170706c69636174696f6e732e7472616e736665722e76312e4d73675472616e736665721296010a087472616e73666572120a6368616e6e656c2d33331a100a08626173657463726f120431323334222b7463726f313573667570643236737036716633376c6c3571367875663333306b37646639746e76727168742a2d636f736d6f7331767734756361656167746475763565703473613935653361717a7170736b356d6564613038633206080010e3a36838c4a7e1daaafaeabe1612580a500a460a1f2f636f736d6f732e63727970746f2e736563703235366b312e5075624b657912230a2103fd0d560b6c4aa1ca16721d039a192867c3457e19dad553edb98e7ba88b159c2712040a0208011802120410c09a0c1a40f1032ff3d1b53682d8038e4a06d7c1fadf17858a619e32cc3fa5f9463b35c6194f7ebff606dbe142fe63f3d978da2e4372831ea96faf94c80153416667bcd321',
        );
    });

    it('Should validate MsgTransfer provided addresses with network config', function () {
        const params1 = {
            sourcePort: 'transfer',
            sourceChannel: 'channel-33',
            token: tokenAmount,
            sender: 'cosmos1vw4ucaeagtduv5ep4sa95e3aqzqpsk5meda08c',
            receiver: 'cosmos1vw4ucaeagtduv5ep4sa95e3aqzqpsk5meda08c',
            timeoutHeight,
            timeoutTimestamp: Long.fromString('1620640362229420996'),
        };

        expect(() => new cro.ibc.MsgTransfer(params1)).to.throw('Provided `sender` does not match network selected');
    });

    it('Should validate MsgTransfer provided `receiver` address', function () {
        const params1 = {
            sourcePort: 'transfer',
            sourceChannel: 'channel-33',
            token: tokenAmount,
            sender: 'tcro15sfupd26sp6qf37ll5q6xuf330k7df9tnvrqht',
            receiver: '0x7e00664398A54AE12648CAe2785c36d00dd51672',
            timeoutHeight,
            timeoutTimestamp: Long.fromString('1620640362229420996'),
        };

        expect(() => new cro.ibc.MsgTransfer(params1)).to.throw(
            'Provided `receiver` is not a valid Bech-32 encoded address',
        );
    });

    it('Should throw on getting toRawAminoMsg()', function () {
        const MsgTransfer = new cro.ibc.MsgTransfer({
            sourcePort: 'transfer',
            sourceChannel: 'channel-33',
            token: tokenAmount,
            sender: 'tcro15sfupd26sp6qf37ll5q6xuf330k7df9tnvrqht',
            receiver: 'cosmos1vw4ucaeagtduv5ep4sa95e3aqzqpsk5meda08c',
            timeoutHeight,
            timeoutTimestamp: Long.fromString('1620640362229420996'),
        });

        expect(() => MsgTransfer.toRawAminoMsg()).to.throw('IBC Module not supported under amino encoding scheme');
    });
});
