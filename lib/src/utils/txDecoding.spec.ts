import 'mocha';
import { expect } from 'chai';
import { TxBody } from '@cosmjs/proto-signing/build/codec/cosmos/tx/v1beta1/tx';
import { Any } from '@cosmjs/stargate/build/codec/google/protobuf/any';
import Long from 'long';
import { TxDecoder } from './txDecoder';

describe('TxDecoder', function () {
    it('should throw on certain places', function () {
        const txDecoder = new TxDecoder();

        expect(() => {
            txDecoder.fromHex(
                '0A94010A91010A1C2F636F736D6F732E62616E6B2E763162657461312E4D736753656E6412710A2B7463726F31666D70726D30736A79366C7A396C6C7637726C746E307632617A7A7763777A766B326C73796E122B7463726F31373832676E39687A7161766563756B64617171636C76736E70636B346D747A3376777A70786C1A150A08626173657463726F120931303030303030303012690A500A460A1F2F636F736D6F732E63727970746F2E736563703235366B312E5075624B657912230A210359A154BA210C489DA46626A4D631C6F8A471A2FBDA342164DD5FC4A158901F2612040A02087F180412150A100A08626173657463726F12043130303010904E1A40E812FBA1D50115CDDD534C7675B838E6CE7169CDD5AD312182696CABB76F05B82B9557EE1A2842A5579B363F0A5F2E487F7228A81FBF81E125E58F264A29DA07RRTTGG',
            );
        }).to.throw('Error decoding provided transaction hex.');

        expect(() => {
            txDecoder.fromHex('');
        }).to.throw('Received malformed transaction hex.');
    });

    it('should throw on empty messages array', function () {
        const txDecoder = new TxDecoder();
        const txDecoded = txDecoder.fromHex(
            '0A94010A91010A1C2F636F736D6F732E62616E6B2E763162657461312E4D736753656E6412710A2B7463726F31666D70726D30736A79366C7A396C6C7637726C746E307632617A7A7763777A766B326C73796E122B7463726F31373832676E39687A7161766563756B64617171636C76736E70636B346D747A3376777A70786C1A150A08626173657463726F120931303030303030303012690A500A460A1F2F636F736D6F732E63727970746F2E736563703235366B312E5075624B657912230A210359A154BA210C489DA46626A4D631C6F8A471A2FBDA342164DD5FC4A158901F2612040A02087F180412150A100A08626173657463726F12043130303010904E1A40E812FBA1D50115CDDD534C7675B838E6CE7169CDD5AD312182696CABB76F05B82B9557EE1A2842A5579B363F0A5F2E487F7228A81FBF81E125E58F264A29DA07',
        );
        // @ts-ignore
        txDecoded.libDecodedTxBody = TxBody.fromPartial({
            timeoutHeight: Long.fromNumber(0),
            messages: [
                Any.fromPartial({
                    typeUrl: '',
                    value: new Uint8Array(),
                }),
            ],
        });

        expect(() => {
            txDecoder.toCosmosJSON();
        }).to.throw('Missing type_url in Any');
    });

    it('should decode the transaction correctly', function () {
        const txDecoder = new TxDecoder();
        expect(
            txDecoder
                .fromHex(
                    '0A94010A91010A1C2F636F736D6F732E62616E6B2E763162657461312E4D736753656E6412710A2B7463726F31666D70726D30736A79366C7A396C6C7637726C746E307632617A7A7763777A766B326C73796E122B7463726F31373832676E39687A7161766563756B64617171636C76736E70636B346D747A3376777A70786C1A150A08626173657463726F120931303030303030303012690A500A460A1F2F636F736D6F732E63727970746F2E736563703235366B312E5075624B657912230A210359A154BA210C489DA46626A4D631C6F8A471A2FBDA342164DD5FC4A158901F2612040A02087F180412150A100A08626173657463726F12043130303010904E1A40E812FBA1D50115CDDD534C7675B838E6CE7169CDD5AD312182696CABB76F05B82B9557EE1A2842A5579B363F0A5F2E487F7228A81FBF81E125E58F264A29DA07',
                )
                .toCosmosJSON(),
        ).equal(
            JSON.stringify({
                tx: {
                    body: {
                        messages: [
                            {
                                '@type': '/cosmos.bank.v1beta1.MsgSend',
                                amount: [{ denom: 'basetcro', amount: '100000000' }],
                                from_address: 'tcro1fmprm0sjy6lz9llv7rltn0v2azzwcwzvk2lsyn',
                                to_address: 'tcro1782gn9hzqavecukdaqqclvsnpck4mtz3vwzpxl',
                            },
                        ],
                        memo: '',
                        timeout_height: '0',
                        extension_options: [],
                        non_critical_extension_options: [],
                    },
                    auth_info: {
                        signer_infos: [
                            {
                                public_key: {
                                    '@type': '/cosmos.crypto.secp256k1.PubKey',
                                    key: 'A1mhVLohDEidpGYmpNYxxvikcaL72jQhZN1fxKFYkB8m',
                                },
                                mode_info: { single: { mode: 'SIGN_MODE_LEGACY_AMINO_JSON' } },
                                sequence: '4',
                            },
                        ],
                        fee: {
                            amount: [{ denom: 'basetcro', amount: '1000' }],
                            gas_limit: '10000',
                            payer: '',
                            granter: '',
                        },
                    },
                    signatures: [
                        '6BL7odUBFc3dU0x2dbg45s5xac3VrTEhgmlsq7dvBbgrlVfuGihCpVebNj8KXy5If3IoqB+/geEl5Y8mSinaBw==',
                    ],
                },
            }),
        );
    });
});
