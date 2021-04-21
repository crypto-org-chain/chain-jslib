import 'mocha';
import { Secp256k1KeyPair } from '../keypair/secp256k1';
import { Bytes } from './bytes/bytes';
import { Units } from '../coin/coin';
import Big from 'big.js';

import { cosmos } from "../cosmos/v1beta1/codec";
import { CroSDK } from '../core/cro';

import { Registry,/*decodePubkey*/ } from '@cosmjs/proto-signing'
// import { COSMOS_MSG_TYPEURL } from '../transaction/common/constants/typeurl';
import { typeUrlMappings } from '../cosmos/v1beta1/types/typeurls';
import { SignMode } from '@cosmjs/proto-signing/build/codec/cosmos/tx/signing/v1beta1/signing';
import { toBase64 } from '@cosmjs/encoding';
// import { AuthInfo } from '@cosmjs/proto-signing/build/codec/cosmos/tx/v1beta1/tx';
// import { SignerInfo } from '@cosmjs/proto-signing/build/codec/cosmos/tx/v1beta1/tx';
// import { toBase64 } from '@cosmjs/encoding';
// import { Any } from '@cosmjs/proto-signing/build/codec/google/protobuf/any';
// import { Type, Field } from 'protobufjs';
// import { TxBody } from '@cosmjs/proto-signing/build/codec/cosmos/tx/v1beta1/tx';

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
    },
});

describe('isBigInteger', function () {
    it('should return false if the Big is not integer', function () {
        const anyKeyPair = Secp256k1KeyPair.fromPrivKey(
            Bytes.fromHexString('66633d18513bec30dd11a209f1ceb1787aa9e2069d5d47e590174dc9665102b3'),
        );
        const coin = new cro.Coin('12000500', Units.CRO);

        const msgSend = new cro.bank.MsgSend({
            fromAddress: 'tcro165tzcrh2yl83g8qeqxueg2g5gzgu57y3fe3kc3',
            toAddress: 'tcro184lta2lsyu47vwyp2e8zmtca3k5yq85p6c4vp3',
            amount: coin,
        });

        const anySigner = {
            publicKey: anyKeyPair.getPubKey(),
            accountNumber: new Big(0),
            accountSequence: new Big(2),
        };

        const rawTx = new cro.RawTransaction();

        const signableTx = rawTx.appendMessage(msgSend).addSigner(anySigner).toSignable();

        const signedTx = signableTx.setSignature(0, anyKeyPair.sign(signableTx.toSignDocumentHash(0))).toSigned();

        const signedTxHex = signedTx.encode().toUint8Array();

        signedTxHex.forEach(v => v)

        let localtx = '0A94010A91010A1C2F636F736D6F732E62616E6B2E763162657461312E4D736753656E6412710A2B7463726F31666D70726D30736A79366C7A396C6C7637726C746E307632617A7A7763777A766B326C73796E122B7463726F31373832676E39687A7161766563756B64617171636C76736E70636B346D747A3376777A70786C1A150A08626173657463726F120931303030303030303012690A500A460A1F2F636F736D6F732E63727970746F2E736563703235366B312E5075624B657912230A210359A154BA210C489DA46626A4D631C6F8A471A2FBDA342164DD5FC4A158901F2612040A02087F180412150A100A08626173657463726F12043130303010904E1A40E812FBA1D50115CDDD534C7675B838E6CE7169CDD5AD312182696CABB76F05B82B9557EE1A2842A5579B363F0A5F2E487F7228A81FBF81E125E58F264A29DA07';


        const txbytes = Bytes.fromHexString(localtx).toUint8Array()

        // console.log(cosmos.tx.v1beta1.TxBody.decode(signedTxHex))
        // console.log(cosmos.tx.v1beta1.TxRaw.decode(signedTxHex))

        let decodedTxRaw = cosmos.tx.v1beta1.TxRaw.decode(txbytes)
        let decodedTx = cosmos.tx.v1beta1.Tx.decode(txbytes)!

        // console.log(Object.entries(typeUrlMappings))
        let registry = new Registry(Object.entries(typeUrlMappings));
        
        console.log('decodedTx', toBase64(decodedTx?.body?.messages![0].value!))
        console.log('BasicDecodr.decode', JSON.stringify(decodedTx!.authInfo!))
        console.log(registry.decodeTxBody(decodedTxRaw.bodyBytes))
        let decodedPubkey: cosmos.crypto.secp256k1.PubKey = registry.decode(
            {
                typeUrl: decodedTx!.authInfo!.signerInfos![0].publicKey!.type_url!,
                value: decodedTx!.authInfo!.signerInfos![0].publicKey!.value!
            });

        // SignerInfo.decode(decodedTxRaw.authInfoBytes)
        // A1mhVLohDEidpGYmpNYxxvikcaL72jQhZN1fxKFYkB8m
        console.log('SignerInfo.toJSON(decodedPubkey)', toBase64(decodedPubkey.key))
        console.log(SignMode[decodedTx!.authInfo!.signerInfos![0].modeInfo!.single!.mode!])
        // console.log(toBase64(decodedTxRaw.signatures[0]))
        // `console.log('decodedTx!.authInfo!.signerInfos![0].publicKey!.value!',
        //     Any.toJSON(
        //         {
        //             typeUrl: decodedTx!.authInfo!.signerInfos![0].publicKey!.type_url!,
        //             value: decodedTx!.authInfo!.signerInfos![0].publicKey!.value!
        //         }))`

        // console.log('decodedTx!.authInfo!.signerInfos![0].publicKey!.value!', decodePubkey() tendermint.crypto.PublicKey.decode().ed25519))
    });
});
