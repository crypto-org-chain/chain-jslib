import { Registry } from '@cosmjs/proto-signing';
import { toBase64, fromBase64 } from '@cosmjs/encoding';
import { TxRaw, AuthInfo, TxBody, SignerInfo, Tx } from '@cosmjs/proto-signing/build/codec/cosmos/tx/v1beta1/tx';

import * as snakecaseKeys from 'snakecase-keys';
import { cosmos } from '../cosmos/v1beta1/codec/generated/codecimpl';
import { Bytes } from './bytes/bytes';
import { typeUrlMappings } from '../cosmos/v1beta1/types/typeurls';

export class TxDecoder {
    private protoDecodedTxRaw!: TxRaw;

    private libDecodedTxBody!: TxBody;

    private libDecodedAuthInfo!: AuthInfo;

    private libDecodedSignatures!: Uint8Array[];

    private readonly cosmJSRegistry = new Registry(Object.entries(typeUrlMappings));

    /**
     *
     */
    constructor() {
        this.protoDecodedTxRaw = Object.create({});
        this.libDecodedTxBody = Object.create({});
        this.libDecodedAuthInfo = Object.create({});
        this.libDecodedSignatures = Object.create(null);
    }

    isValidHex(h: string) {
        const re = /[0-9A-Fa-f]/g;
        if (!re.test(h)) {
            throw new TypeError('Invalid Hex provided.');
        }
    }

    /**
     * @name fromHex()
     * @param txHex
     * @returns TxDecode
     */
    public fromHex(txHex: string): TxDecoder {
        if (!txHex) {
            throw new TypeError(`Received malformed transaction hex.`);
        }
        const sanitisedTxHex = Bytes.clean0x(txHex);
        try {
            this.isValidHex(sanitisedTxHex);
            const encodedTxBytes = Bytes.fromHexString(sanitisedTxHex).toUint8Array();
            const decodedTxRaw = cosmos.tx.v1beta1.TxRaw.decode(encodedTxBytes)!;
            const libDecodedTx = Tx.decode(encodedTxBytes);
            this.protoDecodedTxRaw = decodedTxRaw;
            this.libDecodedSignatures = libDecodedTx.signatures;
            this.libDecodedAuthInfo = libDecodedTx.authInfo!;

            // Deep decoding for TxBody below
            this.libDecodedTxBody = libDecodedTx.body!;

            return this;
        } catch (error) {
            console.error(error);
            throw new TypeError(`Error decoding provided transaction hex.`);
        }
    }

    /**
     * @name toCosmosJSON()
     */
    public toCosmosJSON() {
        if (!this.protoDecodedTxRaw) {
            throw new TypeError(`Cannot convert ${this.protoDecodedTxRaw} to JSON.`);
        }

        const txObject = {
            tx: {
                body: Object.create({}),
                authInfo: Object.create({}),
                signatures: Object.create([[]]),
            },
        };

        txObject.tx.body = this.getTxBodyJson(this.libDecodedTxBody);
        txObject.tx.signatures = this.getSignaturesJson(this.libDecodedSignatures);
        txObject.tx.authInfo = this.getAuthInfoJson(this.libDecodedAuthInfo);

        const stringifiedTx = JSON.stringify(snakecaseKeys.default(txObject));

        const cosmosApiFormatTxJson = this.typeUrlTransformer(stringifiedTx);

        return cosmosApiFormatTxJson;
    }

    private getTxBodyJson(txBody: TxBody) {
        let obj = Object.create({});
        const txBodyStringified = JSON.stringify(TxBody.toJSON(txBody));

        const parsedTxBody = JSON.parse(txBodyStringified);
        obj = { ...parsedTxBody };
        obj.messages = txBody.messages.map(({ typeUrl, value }) => {
            if (!typeUrl) {
                throw new Error('Missing type_url in Any');
            }
            if (!value) {
                throw new Error('Missing value in Any');
            }
            const decodedParams = this.cosmJSRegistry.decode({ typeUrl, value });
            return { typeUrl, ...decodedParams };
        });
        return obj;
    }

    private getSignaturesJson(signaturesArray: Uint8Array[]): string[] {
        let signatures: string[] = [];
        // Adding Signatures array to final object
        if (signaturesArray) {
            signatures = signaturesArray.map((e) => toBase64(e !== undefined ? e : new Uint8Array()));
        }
        return signatures;
    }

    private getAuthInfoJson(authInfo: AuthInfo) {
        let obj = Object.create({});
        const authInfoStringified = JSON.stringify(AuthInfo.toJSON(authInfo));

        const libParsedAuthInfo = JSON.parse(authInfoStringified);
        obj = { ...libParsedAuthInfo };

        if (authInfo.signerInfos) {
            obj.signerInfos = authInfo.signerInfos.map((e) => (e ? this.getSignerInfoJson(e) : undefined));
        } else {
            obj.signerInfos = [];
        }

        return obj;
    }

    private getSignerInfoJson(signerInfo: SignerInfo) {
        let obj = Object.create({});

        const stringifiedSignerInfo = JSON.stringify(SignerInfo.toJSON(signerInfo) as string);
        const libParsedSignerInfo = JSON.parse(stringifiedSignerInfo);
        const decodedPubkey: cosmos.crypto.ed25519.PubKey | cosmos.crypto.secp256k1.PubKey = this.cosmJSRegistry.decode(
            {
                typeUrl: libParsedSignerInfo.publicKey?.typeUrl!,
                value: fromBase64(libParsedSignerInfo.publicKey?.value!),
            },
        );

        obj = { ...libParsedSignerInfo };
        obj.publicKey = { typeUrl: libParsedSignerInfo.publicKey?.typeUrl!, key: toBase64(decodedPubkey.key) };

        return obj;
    }

    // transforms `type_url` to `@type` to match GoLang's TxDecoder JSON output
    private typeUrlTransformer = (str: string) => str.replace(/type_url/g, '@type');
}
