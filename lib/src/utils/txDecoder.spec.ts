/* eslint-disable */
import 'mocha';
import { expect } from 'chai';
import { TxBody } from '@cosmjs/proto-signing/build/codec/cosmos/tx/v1beta1/tx';
import { Any } from 'cosmjs-types/google/protobuf/any';
import Long from 'long';
import Big from 'big.js';
import { TxDecoder } from './txDecoder';
import { Bytes } from './bytes/bytes';
import { Secp256k1KeyPair } from '../keypair/secp256k1';
import { CroNetwork } from '../core/cro';
import { SIGN_MODE } from '../transaction/types';
import { SignableTransactionV2 } from '../transaction/v2.signable';

describe('TxDecoder', function () {
    it('should throw on certain places', function () {
        const txDecoder = new TxDecoder();

        expect(() => {
            txDecoder.fromHex(
                '0A94010A91010A1C2F636F736D6F732E62616E6B2E763162657461312E4D736753656E6412710A2B7463726F31666D70726D30736A79366C7A396C6C7637726C746E307632617A7A7763777A766B326C73796E122B7463726F31373832676E39687A7161766563756B64617171636C76736E70636B346D747A3376777A70786C1A150A08626173657463726F120931303030303030303012690A500A460A1F2F636F736D6F732E63727970746F2E736563703235366B312E5075624B657912230A210359A154BA210C489DA46626A4D631C6F8A471A2FBDA342164DD5FC4A158901F2612040A02087F180412150A100A08626173657463726F12043130303010904E1A40E812FBA1D50115CDDD534C79CDD5AD312182696CABB76F05B82B9557EE1A2842A5579B363F0A5F2E487F7228A81FBF81E125E58F264A29DA07',
            );
        }).to.throw('Error decoding provided transaction hex.');

        expect(() => {
            txDecoder.fromHex('');
        }).to.throw('Received malformed transaction hex.');

        expect(() => {
            txDecoder.fromHex('INVALID_HEX');
        }).to.throw('Invalid Hex provided.');
    });

    it('should decode correctly on empty auth_info and signatures', function () {
        const txDecoder = new TxDecoder();

        expect(
            txDecoder
                .fromHex(
                    '0a540a520a1b2f636f736d6f732e676f762e763162657461312e4d7367566f7465123308e0f64b122b7463726f3138346c7461326c7379753437767779703265387a6d746361336b35797138357036633476703318021200',
                )
                .toCosmosJSON(),
        ).to.equal(JSON.stringify(emptyAuthInfoTxObject));
    });

    it('should throw on multi-signature', function () {
        const txDecoder = new TxDecoder();
        const txBytes = Bytes.fromBase64String('CpQBCpEBChwvY29zbW9zLmJhbmsudjFiZXRhMS5Nc2dTZW5kEnEKK3Rjcm8xMnlnd2R2ZnZndDRjNzJlMG11N2g2Z21mdjl5d2gzNHI5a2FjanISK3Rjcm8xMnlnd2R2ZnZndDRjNzJlMG11N2g2Z21mdjl5d2gzNHI5a2FjanIaFQoIYmFzZXRjcm8SCTEwMDAwMDAwMBKxAgqoAgqIAgopL2Nvc21vcy5jcnlwdG8ubXVsdGlzaWcuTGVnYWN5QW1pbm9QdWJLZXkS2gEIAxJGCh8vY29zbW9zLmNyeXB0by5zZWNwMjU2azEuUHViS2V5EiMKIQMmHiFA8uJvK1ug4G0W1/pPLiZ+Ora8MsrgRPO9ZUbAxBJGCh8vY29zbW9zLmNyeXB0by5zZWNwMjU2azEuUHViS2V5EiMKIQIXveFFPdAc68u/wp8cyiSeVxSSaieLvHDr/a6ut9gf2RJGCh8vY29zbW9zLmNyeXB0by5zZWNwMjU2azEuUHViS2V5EiMKIQILzYXwxGx61Az+IAaYhDpsTKIPgRwhIOEgePSj1Ae5vhIbEhkKBQgDEgHgEgQKAgh/EgQKAgh/EgQKAgh/EgQQwJoMGsYBCkAqnZ+kKTI2KNThqP4bi67jdF4vUItthnQjzzUbbpVrNS1L1JzRKAk8p3JAD/ZcJv5NrYH6nj/XA3BIY5aDGORRCkC+o5tK8zr8OZLuFIwias8t7v2U6u8XXrfNFL6uF3TyBSpvmW8BwCRZDFkwKosz6ryg6rObF6NCpheN0t+e7j+UCkCntQCqbypaLXA8RD0o7B/Gb5iQqD5jpOR0hd7rVQZ1xm+g6bKXS6Vd+vpNlzXmCUD1h8AxgEkKWxN5cQzL/0ZW');

        expect(() => txDecoder.fromHex(txBytes.toHexString()).toCosmosJSON()).to.throw("Cannot read properties of undefined (reading 'length')");
    });

    it('should throw on invalid tx body messages array', function () {
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

    it('should decode and re-encode Cosmos JSON tx correctly', function () {
        const signableTx = new SignableTransactionV2({
            rawTxJSON: JSON.stringify(cosmosTxObject),
            network: CroNetwork.TestnetCroeseid4,
            signerAccounts: []
        })
        signableTx.importSignerAccounts([{ accountNumber: new Big(0), publicKey: Bytes.fromBase64String('AiPJOV1BAT5kcMjSfai3WFBVT6raP+PoEmYMvfRTSoXX'), signMode: SIGN_MODE.DIRECT }])
        signableTx.setSignerAccountNumberAtIndex(0, new Big(179));
        const keyPair = Secp256k1KeyPair.fromPrivKey(
            Bytes.fromHexString('60300d38b56590fe22439d3eaa77d494ba9b5c93d2cec0b3639bdd51c3e3fa49'),
        );
        const signature = keyPair.sign(signableTx.toSignDocumentHash(0));
        signableTx.setSignature(0, signature);
        const encodedHex = signableTx.toSigned().encode().toHexString();
        const txDecoder = new TxDecoder();
        expect(txDecoder.fromHex(encodedHex).toCosmosJSON()).to.equal(JSON.stringify(cosmosTxObject));
    });

    it('should decode and re-encode Cosmos JSON tx correctly for LEGACY MODE', function () {
        const signableTx = new SignableTransactionV2({
            rawTxJSON: JSON.stringify(cosmosTxObject_Legacy),
            network: CroNetwork.TestnetCroeseid4,
            signerAccounts: []
        })
        signableTx.importSignerAccounts([{ accountNumber: new Big(0), publicKey: Bytes.fromBase64String('AiPJOV1BAT5kcMjSfai3WFBVT6raP+PoEmYMvfRTSoXX'), signMode: SIGN_MODE.LEGACY_AMINO_JSON }])
        signableTx.setSignerAccountNumberAtIndex(0, new Big(179));
        const keyPair = Secp256k1KeyPair.fromPrivKey(
            Bytes.fromHexString('60300d38b56590fe22439d3eaa77d494ba9b5c93d2cec0b3639bdd51c3e3fa49'),
        );
        const signature = keyPair.sign(signableTx.toSignDocumentHash(0));
        signableTx.setSignature(0, signature);
        const encodedHex = signableTx.toSigned().encode().toHexString();
        const txDecoder = new TxDecoder();
        cosmosTxObject_Legacy.auth_info.fee.amount = [{ denom: 'basetcro', amount: '1000000000000' }];
        expect(txDecoder.fromHex(encodedHex).toCosmosJSON()).to.equal(JSON.stringify(cosmosTxObject_Legacy));
    });
    it('should decode the transaction correctly', function () {
        const txDecoder = new TxDecoder();
        expect(
            txDecoder
                .fromHex(
                    '0a9b010a8c010a1c2f636f736d6f732e62616e6b2e763162657461312e4d736753656e64126c0a2b7463726f31667a63727a61336a3466323637376a667578756c6b6733337a36383532717371733868783530122b7463726f31667a63727a61336a3466323637376a667578756c6b6733337a363835327173717338687835301a100a08626173657463726f120431303030120a616d696e6f2074657374126b0a500a460a1f2f636f736d6f732e63727970746f2e736563703235366b312e5075624b657912230a210223c9395d41013e6470c8d27da8b75850554faada3fe3e812660cbdf4534a85d712040a020801180112170a110a08626173657463726f1205313030303010a08d061a4031f4c489b98decb367972790747139c7706f54aafd9e5a3a5ada4f72c7b017646f1eb5cb1bdf518603d5d8991466a13c3f68844dcd9b168b5d4ca0cb5ea514bc',
                )
                .toCosmosJSON(),
        ).equal(JSON.stringify(cosmosTxObject));
    });

    context('`MsgCreateValidator`', function () {

        it('should decode `MsgCreateValidator` correctly', function () {
            const txDecoder = new TxDecoder();
            expect(
                txDecoder
                    .fromHex(
                        '0ab4020ab1020a2a2f636f736d6f732e7374616b696e672e763162657461312e4d736743726561746556616c696461746f721282020a2a0a0a6869746573685465737412001a0022166869746573682e676f656c4063727970746f2e636f6d2a0012100a03302e311203302e321a04302e30311a0131222b7463726f313635747a63726832796c3833673871657178756567326735677a6775353779336665336b63332a2f7463726f636e636c316a3770656a386b706c656d347774353070346866766e64687577356a707278787874656e767232430a1d2f636f736d6f732e63727970746f2e656432353531392e5075624b657912220a20ca4c63b3e731a331e236ea6d5c81c448854a41c8f50f0828eecc0e5ecdc769333a1c0a08626173657463726f12103132303030353030303030303030303012580a500a460a1f2f636f736d6f732e63727970746f2e736563703235366b312e5075624b657912230a2103fd0d560b6c4aa1ca16721d039a192867c3457e19dad553edb98e7ba88b159c2712040a0208011802120410c09a0c1a40f659741d05e997666313a98b545398937b6aa40d884f1f2bf5aed8a281b5118d1123d11e98db388a6cf303a2c41341b6602b685d967aebf4b74af67d767dbd45',
                    )
                    .toCosmosJSON(),
            ).to.deep.equal(JSON.stringify({ "body": { "messages": [{ "@type": "/cosmos.staking.v1beta1.MsgCreateValidator", "description": { "moniker": "hiteshTest", "identity": "", "website": "", "security_contact": "hitesh.goel@crypto.com", "details": "" }, "commission": { "rate": "0.1", "max_rate": "0.2", "max_change_rate": "0.01" }, "min_self_delegation": "1", "delegator_address": "tcro165tzcrh2yl83g8qeqxueg2g5gzgu57y3fe3kc3", "validator_address": "tcrocncl1j7pej8kplem4wt50p4hfvndhuw5jprxxxtenvr", "pubkey": { "@type": "/cosmos.crypto.ed25519.PubKey", "key": "ykxjs+cxozHiNuptXIHESIVKQcj1Dwgo7swOXs3HaTM=" }, "value": { "denom": "basetcro", "amount": "1200050000000000" } }], "memo": "", "timeout_height": "0", "extension_options": [], "non_critical_extension_options": [] }, "auth_info": { "signer_infos": [{ "public_key": { "@type": "/cosmos.crypto.secp256k1.PubKey", "key": "A/0NVgtsSqHKFnIdA5oZKGfDRX4Z2tVT7bmOe6iLFZwn" }, "mode_info": { "single": { "mode": "SIGN_MODE_DIRECT" } }, "sequence": "2" }], "fee": { "amount": [], "gas_limit": "200000", "payer": "", "granter": "" } }, "signatures": ["9ll0HQXpl2ZjE6mLVFOYk3tqpA2ITx8r9a7YooG1EY0RI9EemNs4imzzA6LEE0G2YCtoXZZ66/S3SvZ9dn29RQ=="] }));
        });

        it('should decode `MsgCreateValidator` with no-decimal commission rates', function () {
            const txDecoder = new TxDecoder();
            expect(
                txDecoder
                    .fromHex(
                        '0ac1020abe020a2a2f636f736d6f732e7374616b696e672e763162657461312e4d736743726561746556616c696461746f72128f020a0c0a0a68697465736854657374123b0a1231303030303030303030303030303030303012123230303030303030303030303030303030301a1131303030303030303030303030303030301a0131222b7463726f313635747a63726832796c3833673871657178756567326735677a6775353779336665336b63332a2f7463726f636e636c316a3770656a386b706c656d347774353070346866766e64687577356a707278787874656e767232430a1d2f636f736d6f732e63727970746f2e656432353531392e5075624b657912220a20ca4c63b3e731a331e236ea6d5c81c448854a41c8f50f0828eecc0e5ecdc769333a1c0a08626173657463726f12103132303030353030303030303030303012580a500a460a1f2f636f736d6f732e63727970746f2e736563703235366b312e5075624b657912230a2103fd0d560b6c4aa1ca16721d039a192867c3457e19dad553edb98e7ba88b159c2712040a0208011802120410c09a0c1a40a9eed865dffb95abbc633512f17e7993d9e54678f205b8e9043112285d1965c62e75dd0ac3f50305aa35d26d3fa2ea8a4b0302e04a9cbe8fde994df114da46d5'
                        ,
                    )
                    .toCosmosJSON(),
            ).to.deep.equal(JSON.stringify({ "body": { "messages": [{ "@type": "/cosmos.staking.v1beta1.MsgCreateValidator", "description": { "moniker": "hiteshTest" }, "commission": { "rate": "100000000000000000", "max_rate": "200000000000000000", "max_change_rate": "10000000000000000" }, "min_self_delegation": "1", "delegator_address": "tcro165tzcrh2yl83g8qeqxueg2g5gzgu57y3fe3kc3", "validator_address": "tcrocncl1j7pej8kplem4wt50p4hfvndhuw5jprxxxtenvr", "pubkey": { "@type": "/cosmos.crypto.ed25519.PubKey", "key": "ykxjs+cxozHiNuptXIHESIVKQcj1Dwgo7swOXs3HaTM=" }, "value": { "denom": "basetcro", "amount": "1200050000000000" } }], "memo": "", "timeout_height": "0", "extension_options": [], "non_critical_extension_options": [] }, "auth_info": { "signer_infos": [{ "public_key": { "@type": "/cosmos.crypto.secp256k1.PubKey", "key": "A/0NVgtsSqHKFnIdA5oZKGfDRX4Z2tVT7bmOe6iLFZwn" }, "mode_info": { "single": { "mode": "SIGN_MODE_DIRECT" } }, "sequence": "2" }], "fee": { "amount": [], "gas_limit": "200000", "payer": "", "granter": "" } }, "signatures": ["qe7YZd/7lau8YzUS8X55k9nlRnjyBbjpBDESKF0ZZcYudd0Kw/UDBao10m0/ouqKSwMC4Eqcvo/emU3xFNpG1Q=="] }));
        });
    })

    context('`MsgEditValidator`', function () {
        it('should decode `MsgEditValidator` correctly', function () {
            const txDecoder = new TxDecoder();
            expect(
                txDecoder
                    .fromHex(
                        '0aa7010aa4010a282f636f736d6f732e7374616b696e672e763162657461312e4d73674564697456616c696461746f7212780a2a0a0a6869746573685465737412001a0022166869746573682e676f656c4063727970746f2e636f6d2a00122f7463726f636e636c316a3770656a386b706c656d347774353070346866766e64687577356a707278787874656e76721a14302e3130303030303030303030303030303030302203312e3012580a500a460a1f2f636f736d6f732e63727970746f2e736563703235366b312e5075624b657912230a2103fd0d560b6c4aa1ca16721d039a192867c3457e19dad553edb98e7ba88b159c2712040a0208011802120410c09a0c1a4087e81b3b9706a35520778ed9099560c86b3ce8aaec3b384cc9720c89d3e044ab2601240a0d83f6a2e683e370c828b27dca8117de53eea269065c034e45e820f3',
                    )
                    .toCosmosJSON(),
            ).to.deep.equal(JSON.stringify({ "body": { "messages": [{ "@type": "/cosmos.staking.v1beta1.MsgEditValidator", "description": { "moniker": "hiteshTest", "identity": "", "website": "", "security_contact": "hitesh.goel@crypto.com", "details": "" }, "validator_address": "tcrocncl1j7pej8kplem4wt50p4hfvndhuw5jprxxxtenvr", "commission_rate": "0.100000000000000000", "min_self_delegation": "1.0" }], "memo": "", "timeout_height": "0", "extension_options": [], "non_critical_extension_options": [] }, "auth_info": { "signer_infos": [{ "public_key": { "@type": "/cosmos.crypto.secp256k1.PubKey", "key": "A/0NVgtsSqHKFnIdA5oZKGfDRX4Z2tVT7bmOe6iLFZwn" }, "mode_info": { "single": { "mode": "SIGN_MODE_DIRECT" } }, "sequence": "2" }], "fee": { "amount": [], "gas_limit": "200000", "payer": "", "granter": "" } }, "signatures": ["h+gbO5cGo1Ugd47ZCZVgyGs86KrsOzhMyXIMidPgRKsmASQKDYP2ouaD43DIKLJ9yoEX3lPuomkGXANORegg8w=="] }));
        });
        it('should decode `MsgEditValidator` with no-decimal points', function () {
            const txDecoder = new TxDecoder();
            expect(
                txDecoder
                    .fromHex(
                        '0aa5010aa2010a282f636f736d6f732e7374616b696e672e763162657461312e4d73674564697456616c696461746f7212760a2a0a0a6869746573685465737412001a0022166869746573682e676f656c4063727970746f2e636f6d2a00122f7463726f636e636c316a3770656a386b706c656d347774353070346866766e64687577356a707278787874656e76721a123130303030303030303030303030303030302203312e3012580a500a460a1f2f636f736d6f732e63727970746f2e736563703235366b312e5075624b657912230a2103fd0d560b6c4aa1ca16721d039a192867c3457e19dad553edb98e7ba88b159c2712040a0208011802120410c09a0c1a40fe79a59e66813e4848d3c807ccf4a8f8b4cb91e0a4db97aa2e61dba4db2b4c9b100e4ebbc20dc7a08015a0bd6b1ef040be4a3e9584edb5f66b843d8c6b389432',
                    )
                    .toCosmosJSON(),
            ).to.deep.equal(JSON.stringify({ "body": { "messages": [{ "@type": "/cosmos.staking.v1beta1.MsgEditValidator", "description": { "moniker": "hiteshTest", "identity": "", "website": "", "security_contact": "hitesh.goel@crypto.com", "details": "" }, "validator_address": "tcrocncl1j7pej8kplem4wt50p4hfvndhuw5jprxxxtenvr", "commission_rate": "100000000000000000", "min_self_delegation": "1.0" }], "memo": "", "timeout_height": "0", "extension_options": [], "non_critical_extension_options": [] }, "auth_info": { "signer_infos": [{ "public_key": { "@type": "/cosmos.crypto.secp256k1.PubKey", "key": "A/0NVgtsSqHKFnIdA5oZKGfDRX4Z2tVT7bmOe6iLFZwn" }, "mode_info": { "single": { "mode": "SIGN_MODE_DIRECT" } }, "sequence": "2" }], "fee": { "amount": [], "gas_limit": "200000", "payer": "", "granter": "" } }, "signatures": ["/nmlnmaBPkhI08gHzPSo+LTLkeCk25eqLmHbpNsrTJsQDk67wg3HoIAVoL1rHvBAvko+lYTttfZrhD2MaziUMg=="] }));
        });
        it('should decode `MsgEditValidator` with `null` commissionRate', function () {
            const txDecoder = new TxDecoder();
            expect(
                txDecoder
                    .fromHex(
                        '0a8c010a89010a282f636f736d6f732e7374616b696e672e763162657461312e4d73674564697456616c696461746f72125d0a2a0a0a6869746573685465737412001a0022166869746573682e676f656c4063727970746f2e636f6d2a00122f7463726f636e636c316a3770656a386b706c656d347774353070346866766e64687577356a707278787874656e767212580a500a460a1f2f636f736d6f732e63727970746f2e736563703235366b312e5075624b657912230a2103fd0d560b6c4aa1ca16721d039a192867c3457e19dad553edb98e7ba88b159c2712040a0208011802120410c09a0c1a4022b05d1e95eda3a4a492d2bec1a48daa22cf618ab8e20d8a0db371c8989fcbe219376830131f16a5551bfd893f2f7c70bdffa8416e9781fe7707cc437e6cef45',
                    )
                    .toCosmosJSON(),
            ).to.deep.equal(JSON.stringify({ "body": { "messages": [{ "@type": "/cosmos.staking.v1beta1.MsgEditValidator", "description": { "moniker": "hiteshTest", "identity": "", "website": "", "security_contact": "hitesh.goel@crypto.com", "details": "" }, "validator_address": "tcrocncl1j7pej8kplem4wt50p4hfvndhuw5jprxxxtenvr", "commission_rate": null, "min_self_delegation": null }], "memo": "", "timeout_height": "0", "extension_options": [], "non_critical_extension_options": [] }, "auth_info": { "signer_infos": [{ "public_key": { "@type": "/cosmos.crypto.secp256k1.PubKey", "key": "A/0NVgtsSqHKFnIdA5oZKGfDRX4Z2tVT7bmOe6iLFZwn" }, "mode_info": { "single": { "mode": "SIGN_MODE_DIRECT" } }, "sequence": "2" }], "fee": { "amount": [], "gas_limit": "200000", "payer": "", "granter": "" } }, "signatures": ["IrBdHpXto6SkktK+waSNqiLPYYq44g2KDbNxyJify+IZN2gwEx8WpVUb/Yk/L3xwvf+oQW6Xgf53B8xDfmzvRQ=="] }));
        });
    })

    context('`MsgUnjail`', function () {
        it('should decode `MsgUnjail` correctly', function () {
            const txDecoder = new TxDecoder();
            expect(
                txDecoder
                    .fromHex(
                        '0a590a570a222f636f736d6f732e736c617368696e672e763162657461312e4d7367556e6a61696c12310a2f7463726f636e636c316a3770656a386b706c656d347774353070346866766e64687577356a707278787874656e767212580a500a460a1f2f636f736d6f732e63727970746f2e736563703235366b312e5075624b657912230a2103fd0d560b6c4aa1ca16721d039a192867c3457e19dad553edb98e7ba88b159c2712040a0208011802120410c09a0c1a40186e87b0b41928e69a1211c1fb5ebcb4c11fa6350f5cc830fa5f38f36f37f66e00d062707672b5d4ebf98cd5e3c7c4b40562707321bb9e8f2d3d605d8beb7b13',
                    )
                    .toCosmosJSON(),
            ).to.deep.equal(JSON.stringify({ "body": { "messages": [{ "@type": "/cosmos.slashing.v1beta1.MsgUnjail", "validator_addr": "tcrocncl1j7pej8kplem4wt50p4hfvndhuw5jprxxxtenvr" }], "memo": "", "timeout_height": "0", "extension_options": [], "non_critical_extension_options": [] }, "auth_info": { "signer_infos": [{ "public_key": { "@type": "/cosmos.crypto.secp256k1.PubKey", "key": "A/0NVgtsSqHKFnIdA5oZKGfDRX4Z2tVT7bmOe6iLFZwn" }, "mode_info": { "single": { "mode": "SIGN_MODE_DIRECT" } }, "sequence": "2" }], "fee": { "amount": [], "gas_limit": "200000", "payer": "", "granter": "" } }, "signatures": ["GG6HsLQZKOaaEhHB+168tMEfpjUPXMgw+l8482839m4A0GJwdnK11Ov5jNXjx8S0BWJwcyG7no8tPWBdi+t7Ew=="] }));
        });
    })

    it('should decode the transaction correctly FOR CUSTOM MESSAGE PARAMS', function () {
        const txDecoder = new TxDecoder();
        expect(
            txDecoder
                .fromHex(
                    '0aaf010a94010a1c2f636f736d6f732e62616e6b2e763162657461312e4d736753656e6412740a2b7463726f3138346c7461326c7379753437767779703265387a6d746361336b357971383570366334767033122b7463726f3138746b3839646472346c6733326535387370356b66726d3065676c646c6366753430777738301a180a08626173657463726f120c39393032323733303630373512116c656761637920616d696e6f206a736f6e1880c2d72f126c0a520a460a1f2f636f736d6f732e63727970746f2e736563703235366b312e5075624b657912230a2103c3d281a28592adce81bee3094f00eae26932cbc682fba239b90f47dac9fe703612040a02087f18b4820112160a100a08626173657463726f12043130303010a0c21e1a40af360b6fc4c6ee0129b16f09da17a126138cccacf2c5c67a9cd5aa79e911f4b30c069c07cbd863164dec3df102f5c622351d489354cc44a5c5f0c6e5614f5835',
                )
                .toCosmosJSON(),
        ).equal(JSON.stringify(nonZeroTimeoutHeight));
    });

    it('should decode the transaction correctly FOR `MsgUpdateClient`', function () {
        const txDecoder = new TxDecoder();
        expect(
            txDecoder
                .fromHex(
                    '0aa7080aa4080a232f6962632e636f72652e636c69656e742e76312e4d7367557064617465436c69656e7412fc070a08636c69656e74496412c2070a262f6962632e6c69676874636c69656e74732e74656e6465726d696e742e76312e4865616465721297070acb040a90030a04080b1000120b636f736d6f736875622d3418e9a2d702220608904e10e8072a480a20a16c45b687cff41c14f566bcf46b185e6a2aa1400b657530a2a9fe0de6f855c7122408011220133851ed2b01923ebc33d5e7bf04837af7ac4afdcd6130aa4a68791fb9b12e753220aad5b05f681ae03694bc7c96583a0259db7637617061c420e307102f5b303f023a20e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b85542203e100a3435f7f0121710cd944379546aa2ce5f7e5d75e7463bc083dc1e2e560a4a203e100a3435f7f0121710cd944379546aa2ce5f7e5d75e7463bc083dc1e2e560a52200f2908883a105c793b74495eb7d6df2eea479ed7fc9349206a65cb0f9987a0b85a206b8a281cab99367e7568549ece0f715ab08125b2e6d635b02c5a71f015f4b54f6220e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b8556a20e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b8557214cc87f56b58621811e2b5a47f38c6166e295ce36e12b50108e9a2d70210001a480a20a33f095d6a016c99c2cb3b5be268ddaf39e1b3d533ab5b3a65676595bdff750f122408011220494c5dbfc5bed9a6812e1615b9b9b823fd99c5efdf05d2854e65268ccf8c1f3f22620802121483f47d7747b0f633a6ba0df49b7dcf61f90aa1b01a0608904e10904e2240229b45ef7906e4fb9e63c938f769aeed49cf3d92be5d453eddfac00f1481450e7ec53127bcb93b7a4bf4443e37bdb3661cccc31a1ef58a1b6400a393dce22608129d010a4a0a1483f47d7747b0f633a6ba0df49b7dcf61f90aa1b012220a205b8e7d29b771f8b250edd2d50125bab007dda96a8d4525e7bdce77afd68ec7fa18d5eabd0620f9bcf4aaffffffffff01124a0a1483f47d7747b0f633a6ba0df49b7dcf61f90aa1b012220a205b8e7d29b771f8b250edd2d50125bab007dda96a8d4525e7bdce77afd68ec7fa18d5eabd0620f9bcf4aaffffffffff0118dcadc95b1a07080410eca1d702229d010a4a0a1483f47d7747b0f633a6ba0df49b7dcf61f90aa1b012220a205b8e7d29b771f8b250edd2d50125bab007dda96a8d4525e7bdce77afd68ec7fa18d5eabd0620f9bcf4aaffffffffff01124a0a1483f47d7747b0f633a6ba0df49b7dcf61f90aa1b012220a205b8e7d29b771f8b250edd2d50125bab007dda96a8d4525e7bdce77afd68ec7fa18d5eabd0620f9bcf4aaffffffffff0118dcadc95b1a2b7463726f313573667570643236737036716633376c6c3571367875663333306b37646639746e767271687412580a500a460a1f2f636f736d6f732e63727970746f2e736563703235366b312e5075624b657912230a2103fd0d560b6c4aa1ca16721d039a192867c3457e19dad553edb98e7ba88b159c2712040a0208011802120410c09a0c1a4073919aa75f9f5e86b9d353ad5420f8b52199d600b5506c575f516e3964c86b3c5be9757f4a423492d52786657afdc2bce10a5aea7198dab1fd6d6c0d2463e521',
                )
                .toCosmosJSON(),
        ).equal(JSON.stringify({ "body": { "messages": [{ "@type": "/ibc.core.client.v1.MsgUpdateClient", "client_id": "clientId", "header": { "@type": "/ibc.lightclients.tendermint.v1.Header", "signed_header": { "header": { "version": { "block": "11", "app": "0" }, "chain_id": "cosmoshub-4", "height": "5624169", "time": "1970-01-01T02:46:40.1000Z", "last_block_id": { "hash": "oWxFtofP9BwU9Wa89GsYXmoqoUALZXUwoqn+Deb4Vcc=", "part_set_header": { "total": 1, "hash": "EzhR7SsBkj68M9XnvwSDevesSv3NYTCqSmh5H7mxLnU=" } }, "last_commit_hash": "qtWwX2ga4DaUvHyWWDoCWdt2N2FwYcQg4wcQL1swPwI=", "data_hash": "47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=", "validators_hash": "PhAKNDX38BIXEM2UQ3lUaqLOX35ddedGO8CD3B4uVgo=", "next_validators_hash": "PhAKNDX38BIXEM2UQ3lUaqLOX35ddedGO8CD3B4uVgo=", "consensus_hash": "DykIiDoQXHk7dElet9bfLupHntf8k0kgamXLD5mHoLg=", "app_hash": "a4ooHKuZNn51aFSezg9xWrCBJbLm1jWwLFpx8BX0tU8=", "last_results_hash": "47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=", "evidence_hash": "47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=", "proposer_address": "zIf1a1hiGBHitaR/OMYWbilc424=" }, "commit": { "signatures": [{ "block_id_flag": "BLOCK_ID_FLAG_COMMIT", "validator_address": "g/R9d0ew9jOmug30m33PYfkKobA=", "timestamp": "1970-01-01T02:46:40.10000Z", "signature": "IptF73kG5PueY8k492mu7UnPPZK+XUU+3frADxSBRQ5+xTEnvLk7ekv0RD43vbNmHMzDGh71ihtkAKOT3OImCA==" }], "height": "5624169", "round": 0, "block_id": { "hash": "oz8JXWoBbJnCyztb4mjdrznhs9Uzq1s6ZWdllb3/dQ8=", "part_set_header": { "total": 1, "hash": "SUxdv8W+2aaBLhYVubm4I/2Zxe/fBdKFTmUmjM+MHz8=" } } } }, "validator_set": { "validators": [{ "address": "g/R9d0ew9jOmug30m33PYfkKobA=", "pub_key": { "ed25519": "W459Kbdx+LJQ7dLVASW6sAfdqWqNRSXnvc53r9aOx/o=" }, "voting_power": "13595989", "proposer_priority": "-178446727" }], "proposer": { "address": "g/R9d0ew9jOmug30m33PYfkKobA=", "pub_key": { "ed25519": "W459Kbdx+LJQ7dLVASW6sAfdqWqNRSXnvc53r9aOx/o=" }, "voting_power": "13595989", "proposer_priority": "-178446727" }, "total_voting_power": "192042716" }, "trusted_height": { "revision_number": "4", "revision_height": "5624044" }, "trusted_validators": { "validators": [{ "address": "g/R9d0ew9jOmug30m33PYfkKobA=", "pub_key": { "ed25519": "W459Kbdx+LJQ7dLVASW6sAfdqWqNRSXnvc53r9aOx/o=" }, "voting_power": "13595989", "proposer_priority": "-178446727" }], "proposer": { "address": "g/R9d0ew9jOmug30m33PYfkKobA=", "pub_key": { "ed25519": "W459Kbdx+LJQ7dLVASW6sAfdqWqNRSXnvc53r9aOx/o=" }, "voting_power": "13595989", "proposer_priority": "-178446727" }, "total_voting_power": "192042716" } }, "signer": "tcro15sfupd26sp6qf37ll5q6xuf330k7df9tnvrqht" }], "memo": "", "timeout_height": "0", "extension_options": [], "non_critical_extension_options": [] }, "auth_info": { "signer_infos": [{ "public_key": { "@type": "/cosmos.crypto.secp256k1.PubKey", "key": "A/0NVgtsSqHKFnIdA5oZKGfDRX4Z2tVT7bmOe6iLFZwn" }, "mode_info": { "single": { "mode": "SIGN_MODE_DIRECT" } }, "sequence": "2" }], "fee": { "amount": [], "gas_limit": "200000", "payer": "", "granter": "" } }, "signatures": ["c5Gap1+fXoa501OtVCD4tSGZ1gC1UGxXX1FuOWTIazxb6XV/SkI0ktUnhmV6/cK84Qpa6nGY2rH9bWwNJGPlIQ=="] }));
    });
    it('should decode the transaction correctly FOR `MsgCreateClient`', function () {
        const txDecoder = new TxDecoder();
        expect(
            txDecoder
                .fromHex(
                    '0ab4020ab1020a232f6962632e636f72652e636c69656e742e76312e4d7367437265617465436c69656e741289020aa0010a2b2f6962632e6c69676874636c69656e74732e74656e6465726d696e742e76312e436c69656e74537461746512710a12746573746e65742d63726f65736569642d311204080110011a06086410a08d062206086410a08d062a06086410a08d063204086410643a040864106442280a0d08051005180520022a0300010212110a02010210011800200a2a03000102300518904e20904e4a036962635000580012370a2e2f6962632e6c69676874636c69656e74732e74656e6465726d696e742e76312e436f6e73656e737573537461746512051a030102031a2b7463726f313573667570643236737036716633376c6c3571367875663333306b37646639746e767271687412580a500a460a1f2f636f736d6f732e63727970746f2e736563703235366b312e5075624b657912230a2103fd0d560b6c4aa1ca16721d039a192867c3457e19dad553edb98e7ba88b159c2712040a0208011802120410c09a0c1a40d4414a8cc77c85b9afcc53b76b4aaec7b793973c19f7a2a5b2c35c3d9fd80a0c51e11e77d42a190479e0a99ba02c7b957d5aec76afc9129835c178e19d42d237',
                )
                .toCosmosJSON(),
        ).equal(JSON.stringify({ "body": { "messages": [{ "@type": "/ibc.core.client.v1.MsgCreateClient", "client_state": { "@type": "/ibc.lightclients.tendermint.v1.ClientState", "proof_specs": [{ "leaf_spec": { "hash": "BITCOIN", "prehash_key": "BITCOIN", "prehash_value": "BITCOIN", "length": "VAR_RLP", "prefix": "AAEC" }, "inner_spec": { "child_order": [1, 2], "child_size": 1, "min_prefix_length": 0, "max_prefix_length": 10, "empty_child": null, "hash": "BITCOIN" }, "max_depth": 10000, "min_depth": 10000 }], "upgrade_path": ["ibc"], "chain_id": "testnet-croeseid-1", "trust_level": { "numerator": "1", "denominator": "1" }, "trusting_period": "100s", "unbonding_period": "100s", "max_clock_drift": "100s", "frozen_height": { "revision_number": "100", "revision_height": "100" }, "latest_height": { "revision_number": "100", "revision_height": "100" }, "allow_update_after_expiry": false, "allow_update_after_misbehaviour": false }, "consensus_state": { "@type": "/ibc.lightclients.tendermint.v1.ConsensusState", "next_validators_hash": "010203" }, "signer": "tcro15sfupd26sp6qf37ll5q6xuf330k7df9tnvrqht" }], "memo": "", "timeout_height": "0", "extension_options": [], "non_critical_extension_options": [] }, "auth_info": { "signer_infos": [{ "public_key": { "@type": "/cosmos.crypto.secp256k1.PubKey", "key": "A/0NVgtsSqHKFnIdA5oZKGfDRX4Z2tVT7bmOe6iLFZwn" }, "mode_info": { "single": { "mode": "SIGN_MODE_DIRECT" } }, "sequence": "2" }], "fee": { "amount": [], "gas_limit": "200000", "payer": "", "granter": "" } }, "signatures": ["1EFKjMd8hbmvzFO3a0qux7eTlzwZ96KlssNcPZ/YCgxR4R531CoZBHngqZugLHuVfVrsdq/JEpg1wXjhnULSNw=="] }));
    });
    it('should decode the transaction correctly FOR `MsgConnectionOpenConfirm`', function () {
        const txDecoder = new TxDecoder();
        expect(
            txDecoder
                .fromHex(
                    '0aa4020aa1020a302f6962632e636f72652e636f6e6e656374696f6e2e76312e4d7367436f6e6e656374696f6e4f70656e436f6e6669726d12ec010a0c636f6e6e656374696f6e2d3012a5010aea040ae7040a1a636f6e6e656374696f6e732f636f6e6e656374696f6e2d31303912610a1030372d74656e6465726d696e742d333912230a0131120d4f524445525f4f524445524544120f4f524445525f554e4f524445524544180322260a0f30372d74656e6465726d696e742d30120c636f6e6e656374696f6e2d301a050a036962631a0e0801180120012a060002e6b1ae05222c080112280204e6b1ae052096d7f01a07080410eca1d702222b7463726f313573667570643236737036716633376c6c3571367875663333306b37646639746e767271687412580a500a460a1f2f636f736d6f732e63727970746f2e736563703235366b312e5075624b657912230a2103fd0d560b6c4aa1ca16721d039a192867c3457e19dad553edb98e7ba88b159c2712040a0208011802120410c09a0c1a40d229e4846fa7efaaa1574ac5bda529cc60f43bfbf621fbca66e099bcb3af34e4090f929b8d2ccaa871595a9e6dd5a3fe521717dc5bc510c5e7e9be8dfc7bfc35',
                )
                .toCosmosJSON(),
        ).equal(JSON.stringify({ "body": { "messages": [{ "@type": "/ibc.core.connection.v1.MsgConnectionOpenConfirm", "connection_id": "connection-0", "proof_ack": "CuoECucEChpjb25uZWN0aW9ucy9jb25uZWN0aW9uLTEwORJhChAwNy10ZW5kZXJtaW50LTM5EiMKATESDU9SREVSX09SREVSRUQSD09SREVSX1VOT1JERVJFRBgDIiYKDzA3LXRlbmRlcm1pbnQtMBIMY29ubmVjdGlvbi0wGgUKA2liYxoOCAEYASABKgYAAuaxrgUiLAgBEigCBOaxrgUgltfw", "proof_height": { "revision_number": "4", "revision_height": "5624044" }, "signer": "tcro15sfupd26sp6qf37ll5q6xuf330k7df9tnvrqht" }], "memo": "", "timeout_height": "0", "extension_options": [], "non_critical_extension_options": [] }, "auth_info": { "signer_infos": [{ "public_key": { "@type": "/cosmos.crypto.secp256k1.PubKey", "key": "A/0NVgtsSqHKFnIdA5oZKGfDRX4Z2tVT7bmOe6iLFZwn" }, "mode_info": { "single": { "mode": "SIGN_MODE_DIRECT" } }, "sequence": "2" }], "fee": { "amount": [], "gas_limit": "200000", "payer": "", "granter": "" } }, "signatures": ["0inkhG+n76qhV0rFvaUpzGD0O/v2IfvKZuCZvLOvNOQJD5KbjSzKqHFZWp5t1aP+UhcX3FvFEMXn6b6N/Hv8NQ=="] }));
    });
    it('should decode `MsgConnectionOpenTry` correctly', function () {
        const txDecoder = new TxDecoder();
        expect(
            txDecoder
                .fromHex(
                    '0aa7170aa4170a2c2f6962632e636f72652e636f6e6e656374696f6e2e76312e4d7367436f6e6e656374696f6e4f70656e54727912f3160a0f30372d74656e6465726d696e742d3012001a0022290a1030372d74656e6465726d696e742d3339120e636f6e6e656374696f6e2d3130391a050a03696263280032210a0131120c4f524445524f524445524544120e4f52444552554e4f5244455245443a07080410ec98d70242b7060adc040ad9040a1a636f6e6e656374696f6e732f636f6e6e656374696f6e2d31303912530a1030372d74656e6465726d696e742d333912230a0131120d4f524445525f4f524445524544120f4f524445525f554e4f524445524544180122180a0f30372d74656e6465726d696e742d301a050a036962631a0e0801180120012a060002d4b1ae05222c080112280204d4b1ae052096d7f0fdba34083b5898d347edfbfbbf1f968c471391f69cfe408f6bb0de743120222c080112280406d4b1ae05201f31bea2a2993df8b6bcd4b872255b71bfd833fb37c607c0e4b1fe6cd0d04ae920222c08011228060ad4b1ae052056618c26ac2faea333d1af7a21464c87df120ec0869a5bed6cabc0318853506120222c08011228081ad4b1ae0520cbcc6c857ab02218811af71be0f36ae4b22a9ced0e5076a28e485046a47b8eaa20222e080112070a26d4b1ae05201a21208b508c514e677c7f8e2eef7484eca3f4074c761e2e2e6e73b4144124b09b46d4222e080112070c58d4b1ae05201a2120a15b43e7827ea0c76bda049eb8af99d2704baeed8350bd671c266846aabd7dbe222d080112290e9c01d4b1ae0520bd6697f9c3d6330a0288543943d7aca3e0d5e1de5f1fb092a6af24d8a939f2aa20222f0801120810a602d4b1ae05201a21201106cd57f27f0f0e4d5b24c9ad69313e5ef3f0d6e58c79c8f80818e6341385bd222f0801120812de03d4b1ae05201a2120b7b204d60777389fa960aa53584a316f3074a5e98677afe79b9cd0c212609f62222d0801122916860cd4b1ae052027ff652d2c5831b7e5aa5eb00607d86409fcf379d1a59a93c197f077b9e6ead9200ad5010ad2010a036962631220b9fe976fb3ce9220c113cedbd7a8e33654aa14b0ac6d52bd342c86fcdf8ebe7d1a090801180120012a0100222708011201011a20f956de7f0419af4109cc1974e1f137230abd2b8cb9f527775eecca1a88170f222225080112210105a5a5a4e19e08f87ae92010ca023a1a92629c6710ae1cbb28efc6e539aacf3e222508011221016c8defde2f514dfc0f414c1f216ee93cd8cbc36c7fb4362f9cd66431ed97e822222708011201011a20049597477e69780d27290c5a446e45d8ead38eab143dcfa559737b0819d5cf244ae2070a87060a84060a24636c69656e74732f30372d74656e6465726d696e742d33392f636c69656e74537461746512c2010a2b2f6962632e6c69676874636c69656e74732e74656e6465726d696e742e76312e436c69656e7453746174651292010a1a63727970746f2d6f72672d636861696e2d6d61696e6e65742d311204080110031a040880ea4922050880d493012a0308d80432003a05080110d74142190a090801180120012a0100120c0a02000110211804200c300142190a090801180120012a0100120c0a02000110201801200130014a07757067726164654a1075706772616465644942435374617465500158011a0e0801180120012a060002d4b1ae05222e080112070204d4b1ae05201a212021afa31f920ad80cc97dbc2d50930e8d1faf040e3d0d4c82d9c61a1c18cbf98c222c080112280408d4b1ae05209a7fb7f61f5e58d46262d327fe5f597cacab4515676e13858cf761ea91321d8020222e080112070610d4b1ae05201a2120e140aad320cab4acceecf4aa8c19a9ee76d401895cbf0db41fa4fb9d138ac48f222c080112280820d4b1ae0520f1d4c8cf0fd548dfc4908fd230fd1b438eb9727b172279bef1e2165dbe29280520222e080112070a2ad4b1ae05201a212019b0655aa367603d3360b41f4bc237b5010e049d2e06af546d887d17004c7374222e080112070c66d4b1ae05201a21200a9250a2fd891c0392530325d02db55ebeb42b24d892e953c44d7690d3cca8b6222d080112290eae01d4b1ae052061c211a10f3343cda38ffe3b508937880cd12a52ea748c4a6134c617c69d0ed320222d0801122910ea01d4b1ae0520e6f0c13c29cc4fbc0f941f1ab737ab4962ab6656949ccb91575a78661908643420222d0801122912ea02d4b1ae0520f18ad71aae009d201acf938be932c63b98d65eed2266db0c11e91f68f18c543f20222d0801122914a808d4b1ae052055a5492d665f23e1c1917938cff166ca217eb10a09b0c7729ffbf872e069566b20222f0801120816860cd4b1ae05201a21206b96c95da8f21f092c33a78391c23d1692167a841e5f8450f2578c43c9ce80f80ad5010ad2010a036962631220b9fe976fb3ce9220c113cedbd7a8e33654aa14b0ac6d52bd342c86fcdf8ebe7d1a090801180120012a0100222708011201011a20f956de7f0419af4109cc1974e1f137230abd2b8cb9f527775eecca1a88170f222225080112210105a5a5a4e19e08f87ae92010ca023a1a92629c6710ae1cbb28efc6e539aacf3e222508011221016c8defde2f514dfc0f414c1f216ee93cd8cbc36c7fb4362f9cd66431ed97e822222708011201011a20049597477e69780d27290c5a446e45d8ead38eab143dcfa559737b0819d5cf2452af070ad4050ad1050a2f636c69656e74732f30372d74656e6465726d696e742d33392f636f6e73656e7375735374617465732f312d383430371286010a2e2f6962632e6c69676874636c69656e74732e74656e6465726d696e742e76312e436f6e73656e737573537461746512540a0c0893d8f2820610fe8edac60312220a202f91b0403dcac16a7e3c565e43c473d29ba3c49bdc1e7f4115dddcc0e160dbde1a2015d4a1bd346a1c32898a55ee9e4095e035f19b0fabbd98c7f3798948f564929e1a0e0801180120012a060002d4b1ae05222e080112070204d4b1ae05201a2120390e107da915f545496db87c621174feb7add0af41b18e2289a3c08c05faad5c222c080112280408d4b1ae0520cf12973db134c9f7acf0702199dc16b589c16601b91c639dbf61ab8dbead02f820222c080112280610d4b1ae052066f93e42fb9c9d9232aefb47b065fc61c42de229f88701679d0e21be3ff193d220222c080112280820d4b1ae0520f1d4c8cf0fd548dfc4908fd230fd1b438eb9727b172279bef1e2165dbe29280520222e080112070a2ad4b1ae05201a212019b0655aa367603d3360b41f4bc237b5010e049d2e06af546d887d17004c7374222e080112070c66d4b1ae05201a21200a9250a2fd891c0392530325d02db55ebeb42b24d892e953c44d7690d3cca8b6222d080112290eae01d4b1ae052061c211a10f3343cda38ffe3b508937880cd12a52ea748c4a6134c617c69d0ed320222d0801122910ea01d4b1ae0520e6f0c13c29cc4fbc0f941f1ab737ab4962ab6656949ccb91575a78661908643420222d0801122912ea02d4b1ae0520f18ad71aae009d201acf938be932c63b98d65eed2266db0c11e91f68f18c543f20222d0801122914a808d4b1ae052055a5492d665f23e1c1917938cff166ca217eb10a09b0c7729ffbf872e069566b20222f0801120816860cd4b1ae05201a21206b96c95da8f21f092c33a78391c23d1692167a841e5f8450f2578c43c9ce80f80ad5010ad2010a036962631220b9fe976fb3ce9220c113cedbd7a8e33654aa14b0ac6d52bd342c86fcdf8ebe7d1a090801180120012a0100222708011201011a20f956de7f0419af4109cc1974e1f137230abd2b8cb9f527775eecca1a88170f222225080112210105a5a5a4e19e08f87ae92010ca023a1a92629c6710ae1cbb28efc6e539aacf3e222508011221016c8defde2f514dfc0f414c1f216ee93cd8cbc36c7fb4362f9cd66431ed97e822222708011201011a20049597477e69780d27290c5a446e45d8ead38eab143dcfa559737b0819d5cf245a05080110d741622b7463726f313573667570643236737036716633376c6c3571367875663333306b37646639746e767271687412580a500a460a1f2f636f736d6f732e63727970746f2e736563703235366b312e5075624b657912230a2103fd0d560b6c4aa1ca16721d039a192867c3457e19dad553edb98e7ba88b159c2712040a0208011802120410c09a0c1a40e8c37cdb1be95db31bd759e610619ec538f54c8873e6e2efc4f26fa52388a79976606e23f9329b8aaadb4c472bb2da36c58bd9a4101cad0bd36049cd59672529',
                )
                .toCosmosJSON(),
        ).to.deep.equal(JSON.stringify({ "body": { "messages": [{ "@type": "/ibc.core.connection.v1.MsgConnectionOpenTry", "counterparty_versions": [{ "features": ["ORDERORDERED", "ORDERUNORDERED"], "identifier": "1" }], "client_id": "07-tendermint-0", "previous_connection_id": "", "client_state": {}, "counterparty": { "client_id": "07-tendermint-39", "connection_id": "connection-109", "prefix": { "key_prefix": "aWJj" } }, "delay_period": "0", "proof_height": { "revision_number": "4", "revision_height": "5622892" }, "proof_init": "CtwECtkEChpjb25uZWN0aW9ucy9jb25uZWN0aW9uLTEwORJTChAwNy10ZW5kZXJtaW50LTM5EiMKATESDU9SREVSX09SREVSRUQSD09SREVSX1VOT1JERVJFRBgBIhgKDzA3LXRlbmRlcm1pbnQtMBoFCgNpYmMaDggBGAEgASoGAALUsa4FIiwIARIoAgTUsa4FIJbX8P26NAg7WJjTR+37+78floxHE5H2nP5Aj2uw3nQxICIsCAESKAQG1LGuBSAfMb6iopk9+La81LhyJVtxv9gz+zfGB8Dksf5s0NBK6SAiLAgBEigGCtSxrgUgVmGMJqwvrqMz0a96IUZMh98SDsCGmlvtbKvAMYhTUGEgIiwIARIoCBrUsa4FIMvMbIV6sCIYgRr3G+DzauSyKpztDlB2oo5IUEake46qICIuCAESBwom1LGuBSAaISCLUIxRTmd8f44u73SE7KP0B0x2Hi4ubnO0FEEksJtG1CIuCAESBwxY1LGuBSAaISChW0Pngn6gx2vaBJ64r5nScEuu7YNQvWccJmhGqr19viItCAESKQ6cAdSxrgUgvWaX+cPWMwoCiFQ5Q9eso+DV4d5fH7CSpq8k2Kk58qogIi8IARIIEKYC1LGuBSAaISARBs1X8n8PDk1bJMmtaTE+XvPw1uWMecj4CBjmNBOFvSIvCAESCBLeA9SxrgUgGiEgt7IE1gd3OJ+pYKpTWEoxbzB0pemGd6/nm5zQwhJgn2IiLQgBEikWhgzUsa4FICf/ZS0sWDG35apesAYH2GQJ/PN50aWak8GX8He55urZIArVAQrSAQoDaWJjEiC5/pdvs86SIMETztvXqOM2VKoUsKxtUr00LIb8346+fRoJCAEYASABKgEAIicIARIBARog+VbefwQZr0EJzBl04fE3Iwq9K4y59Sd3XuzKGogXDyIiJQgBEiEBBaWlpOGeCPh66SAQygI6GpJinGcQrhy7KO/G5Tmqzz4iJQgBEiEBbI3v3i9RTfwPQUwfIW7pPNjLw2x/tDYvnNZkMe2X6CIiJwgBEgEBGiAElZdHfml4DScpDFpEbkXY6tOOqxQ9z6VZc3sIGdXPJA==", "proof_client": "CocGCoQGCiRjbGllbnRzLzA3LXRlbmRlcm1pbnQtMzkvY2xpZW50U3RhdGUSwgEKKy9pYmMubGlnaHRjbGllbnRzLnRlbmRlcm1pbnQudjEuQ2xpZW50U3RhdGUSkgEKGmNyeXB0by1vcmctY2hhaW4tbWFpbm5ldC0xEgQIARADGgQIgOpJIgUIgNSTASoDCNgEMgA6BQgBENdBQhkKCQgBGAEgASoBABIMCgIAARAhGAQgDDABQhkKCQgBGAEgASoBABIMCgIAARAgGAEgATABSgd1cGdyYWRlShB1cGdyYWRlZElCQ1N0YXRlUAFYARoOCAEYASABKgYAAtSxrgUiLggBEgcCBNSxrgUgGiEgIa+jH5IK2AzJfbwtUJMOjR+vBA49DUyC2cYaHBjL+YwiLAgBEigECNSxrgUgmn+39h9eWNRiYtMn/l9ZfKyrRRVnbhOFjPdh6pEyHYAgIi4IARIHBhDUsa4FIBohIOFAqtMgyrSszuz0qowZqe521AGJXL8NtB+k+50TisSPIiwIARIoCCDUsa4FIPHUyM8P1UjfxJCP0jD9G0OOuXJ7FyJ5vvHiFl2+KSgFICIuCAESBwoq1LGuBSAaISAZsGVao2dgPTNgtB9Lwje1AQ4EnS4Gr1RtiH0XAExzdCIuCAESBwxm1LGuBSAaISAKklCi/YkcA5JTAyXQLbVevrQrJNiS6VPETXaQ08yotiItCAESKQ6uAdSxrgUgYcIRoQ8zQ82jj/47UIk3iAzRKlLqdIxKYTTGF8adDtMgIi0IARIpEOoB1LGuBSDm8ME8KcxPvA+UHxq3N6tJYqtmVpScy5FXWnhmGQhkNCAiLQgBEikS6gLUsa4FIPGK1xquAJ0gGs+Ti+kyxjuY1l7tImbbDBHpH2jxjFQ/ICItCAESKRSoCNSxrgUgVaVJLWZfI+HBkXk4z/FmyiF+sQoJsMdyn/v4cuBpVmsgIi8IARIIFoYM1LGuBSAaISBrlsldqPIfCSwzp4ORwj0WkhZ6hB5fhFDyV4xDyc6A+ArVAQrSAQoDaWJjEiC5/pdvs86SIMETztvXqOM2VKoUsKxtUr00LIb8346+fRoJCAEYASABKgEAIicIARIBARog+VbefwQZr0EJzBl04fE3Iwq9K4y59Sd3XuzKGogXDyIiJQgBEiEBBaWlpOGeCPh66SAQygI6GpJinGcQrhy7KO/G5Tmqzz4iJQgBEiEBbI3v3i9RTfwPQUwfIW7pPNjLw2x/tDYvnNZkMe2X6CIiJwgBEgEBGiAElZdHfml4DScpDFpEbkXY6tOOqxQ9z6VZc3sIGdXPJA==", "proof_consensus": "CtQFCtEFCi9jbGllbnRzLzA3LXRlbmRlcm1pbnQtMzkvY29uc2Vuc3VzU3RhdGVzLzEtODQwNxKGAQouL2liYy5saWdodGNsaWVudHMudGVuZGVybWludC52MS5Db25zZW5zdXNTdGF0ZRJUCgwIk9jyggYQ/o7axgMSIgogL5GwQD3KwWp+PFZeQ8Rz0pujxJvcHn9BFd3cwOFg294aIBXUob00ahwyiYpV7p5AleA18ZsPq72Yx/N5iUj1ZJKeGg4IARgBIAEqBgAC1LGuBSIuCAESBwIE1LGuBSAaISA5DhB9qRX1RUltuHxiEXT+t63Qr0GxjiKJo8CMBfqtXCIsCAESKAQI1LGuBSDPEpc9sTTJ96zwcCGZ3Ba1icFmAbkcY52/YauNvq0C+CAiLAgBEigGENSxrgUgZvk+QvucnZIyrvtHsGX8YcQt4in4hwFnnQ4hvj/xk9IgIiwIARIoCCDUsa4FIPHUyM8P1UjfxJCP0jD9G0OOuXJ7FyJ5vvHiFl2+KSgFICIuCAESBwoq1LGuBSAaISAZsGVao2dgPTNgtB9Lwje1AQ4EnS4Gr1RtiH0XAExzdCIuCAESBwxm1LGuBSAaISAKklCi/YkcA5JTAyXQLbVevrQrJNiS6VPETXaQ08yotiItCAESKQ6uAdSxrgUgYcIRoQ8zQ82jj/47UIk3iAzRKlLqdIxKYTTGF8adDtMgIi0IARIpEOoB1LGuBSDm8ME8KcxPvA+UHxq3N6tJYqtmVpScy5FXWnhmGQhkNCAiLQgBEikS6gLUsa4FIPGK1xquAJ0gGs+Ti+kyxjuY1l7tImbbDBHpH2jxjFQ/ICItCAESKRSoCNSxrgUgVaVJLWZfI+HBkXk4z/FmyiF+sQoJsMdyn/v4cuBpVmsgIi8IARIIFoYM1LGuBSAaISBrlsldqPIfCSwzp4ORwj0WkhZ6hB5fhFDyV4xDyc6A+ArVAQrSAQoDaWJjEiC5/pdvs86SIMETztvXqOM2VKoUsKxtUr00LIb8346+fRoJCAEYASABKgEAIicIARIBARog+VbefwQZr0EJzBl04fE3Iwq9K4y59Sd3XuzKGogXDyIiJQgBEiEBBaWlpOGeCPh66SAQygI6GpJinGcQrhy7KO/G5Tmqzz4iJQgBEiEBbI3v3i9RTfwPQUwfIW7pPNjLw2x/tDYvnNZkMe2X6CIiJwgBEgEBGiAElZdHfml4DScpDFpEbkXY6tOOqxQ9z6VZc3sIGdXPJA==", "consensus_height": { "revision_number": "1", "revision_height": "8407" }, "signer": "tcro15sfupd26sp6qf37ll5q6xuf330k7df9tnvrqht" }], "memo": "", "timeout_height": "0", "extension_options": [], "non_critical_extension_options": [] }, "auth_info": { "signer_infos": [{ "public_key": { "@type": "/cosmos.crypto.secp256k1.PubKey", "key": "A/0NVgtsSqHKFnIdA5oZKGfDRX4Z2tVT7bmOe6iLFZwn" }, "mode_info": { "single": { "mode": "SIGN_MODE_DIRECT" } }, "sequence": "2" }], "fee": { "amount": [], "gas_limit": "200000", "payer": "", "granter": "" } }, "signatures": ["6MN82xvpXbMb11nmEGGexTj1TIhz5uLvxPJvpSOIp5l2YG4j+TKbiqrbTEcrsto2xYvZpBAcrQvTYEnNWWclKQ=="] }));
    });
});

let cosmosTxObject = {
    body: {
        messages: [
            {
                '@type': '/cosmos.bank.v1beta1.MsgSend',
                amount: [{ denom: 'basetcro', amount: '1000' }],
                from_address: 'tcro1fzcrza3j4f2677jfuxulkg33z6852qsqs8hx50',
                to_address: 'tcro1fzcrza3j4f2677jfuxulkg33z6852qsqs8hx50',
            },
        ],
        memo: 'amino test',
        timeout_height: '0',
        extension_options: [],
        non_critical_extension_options: [],
    },
    auth_info: {
        signer_infos: [
            {
                public_key: {
                    '@type': '/cosmos.crypto.secp256k1.PubKey',
                    key: 'AiPJOV1BAT5kcMjSfai3WFBVT6raP+PoEmYMvfRTSoXX',
                },
                mode_info: { single: { mode: 'SIGN_MODE_DIRECT' } },
                sequence: '1',
            },
        ],
        fee: { amount: [{ denom: 'basetcro', amount: '10000' }], gas_limit: '100000', payer: '', granter: '' },
    },
    signatures: ['YZa18j6HATqUEIvvHoMJuKSOGlmMYuggNUG6q2rSkcld+QZWun5dC6V6ITFkAzHNfAUMt4PhB4fLh4ZNhEgUjw=='],
};

let cosmosTxObject_Legacy = JSON.parse(JSON.stringify(cosmosTxObject));
cosmosTxObject_Legacy.auth_info.signer_infos[0].mode_info.single.mode = 'SIGN_MODE_LEGACY_AMINO_JSON';
cosmosTxObject_Legacy.auth_info.fee.amount = [{ denom: 'basetcro', amount: '1000000000000' }];
cosmosTxObject_Legacy.signatures[0] =
    'I92la+N7fdwts7/hjr6kuK6krXoazc2Pc9IEBg8s5eIJ/boH9/OxrlDwwqBRvyfTlXI3fJ9Gl9BjgRn/y4Pxkg==';

let cosmosTxObject_UNRECOGNIZED = JSON.parse(JSON.stringify(cosmosTxObject));
cosmosTxObject_UNRECOGNIZED.auth_info.signer_infos[0].mode_info.single.mode = 'UNRECOGNIZED';

let emptyAuthInfoTxObject = {
    body: {
        messages: [
            {
                '@type': '/cosmos.gov.v1beta1.MsgVote',
                proposal_id: "1244000",
                voter: 'tcro184lta2lsyu47vwyp2e8zmtca3k5yq85p6c4vp3',
                option: 2,
            },
        ],
        memo: '',
        timeout_height: '0',
        extension_options: [],
        non_critical_extension_options: [],
    },
    auth_info: { signer_infos: [] },
    signatures: [],
};

const nonZeroTimeoutHeight = { "body": { "messages": [{ "@type": "/cosmos.bank.v1beta1.MsgSend", "amount": [{ "denom": "basetcro", "amount": "990227306075" }], "from_address": "tcro184lta2lsyu47vwyp2e8zmtca3k5yq85p6c4vp3", "to_address": "tcro18tk89ddr4lg32e58sp5kfrm0egldlcfu40ww80" }], "memo": "legacy amino json", "timeout_height": "100000000", "extension_options": [], "non_critical_extension_options": [] }, "auth_info": { "signer_infos": [{ "public_key": { "@type": "/cosmos.crypto.secp256k1.PubKey", "key": "A8PSgaKFkq3Ogb7jCU8A6uJpMsvGgvuiObkPR9rJ/nA2" }, "mode_info": { "single": { "mode": "SIGN_MODE_LEGACY_AMINO_JSON" } }, "sequence": "16692" }], "fee": { "amount": [{ "denom": "basetcro", "amount": "1000" }], "gas_limit": "500000", "payer": "", "granter": "" } }, "signatures": ["rzYLb8TG7gEpsW8J2hehJhOMzKzyxcZ6nNWqeekR9LMMBpwHy9hjFk3sPfEC9cYiNR1Ik1TMRKXF8MblYU9YNQ=="] };

let multipleFeeAmountsTx = JSON.parse(JSON.stringify(cosmosTxObject));
multipleFeeAmountsTx.auth_info.fee.amount = [
    { denom: 'tcro', amount: '10000' },
    { denom: 'tcro', amount: '10000' },
];
