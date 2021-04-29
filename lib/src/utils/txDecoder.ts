import { Registry } from '@cosmjs/proto-signing';
import { toBase64, fromBase64 } from '@cosmjs/encoding';
import { AuthInfo, TxBody, SignerInfo, Tx } from '@cosmjs/proto-signing/build/codec/cosmos/tx/v1beta1/tx';

import * as snakecaseKeys from 'snakecase-keys';
import { cosmos } from '../cosmos/v1beta1/codec/generated/codecimpl';
import { Bytes } from './bytes/bytes';
import { typeUrlMappings } from '../cosmos/v1beta1/types/typeurls';

export class TxDecoder {
    private libDecodedTxBody!: TxBody;

    private libDecodedAuthInfo!: AuthInfo;

    private libDecodedSignatures!: Uint8Array[];

    private readonly cosmJSRegistry = new Registry(Object.entries(typeUrlMappings));

    /**
     *
     */
    constructor() {
        this.libDecodedTxBody = Object.create({});
        this.libDecodedAuthInfo = Object.create({});
        this.libDecodedSignatures = Object.create([]);
    }

    private isValidHex = (h: string) => {
        const re = /[0-9A-Fa-f]/g;
        if (!re.test(h)) {
            throw new TypeError('Invalid Hex provided.');
        }
    };

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
            const libDecodedTx = Tx.decode(encodedTxBytes);
            this.libDecodedSignatures = libDecodedTx.signatures;
            this.libDecodedAuthInfo = libDecodedTx.authInfo!;

            // Deep decoding for TxBody below
            this.libDecodedTxBody = libDecodedTx.body!;

            return this;
        } catch (error) {
            throw new TypeError(`Error decoding provided transaction hex.`);
        }
    }

    /**
     * @name toCosmosJSON()
     */
    public toCosmosJSON() {
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

    public getTxBodyJson(txBody: TxBody) {
        const txBodyStringified = JSON.stringify(TxBody.toJSON(txBody));

        const parsedTxBody = JSON.parse(txBodyStringified);
        const obj = { ...parsedTxBody };
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

    public getSignaturesJson = (signaturesArray: Uint8Array[]): string[] => {
        let signatures: string[] = [];
        // Adding Signatures array to final object
        if (signaturesArray) {
            signatures = signaturesArray.map((e) => toBase64(e !== undefined ? e : new Uint8Array()));
        }
        return signatures;
    };

    public getAuthInfoJson(authInfo: AuthInfo) {
        const authInfoStringified = JSON.stringify(AuthInfo.toJSON(authInfo));

        const libParsedAuthInfo = JSON.parse(authInfoStringified);
        const obj = { ...libParsedAuthInfo };

        if (authInfo.signerInfos) {
            obj.signerInfos = authInfo.signerInfos.map((e) => (e ? this.getSignerInfoJson(e) : undefined));
        } else {
            obj.signerInfos = [];
        }

        return obj;
    }

    private getSignerInfoJson(signerInfo: SignerInfo) {
        const stringifiedSignerInfo = JSON.stringify(SignerInfo.toJSON(signerInfo) as string);
        const libParsedSignerInfo = JSON.parse(stringifiedSignerInfo);
        const decodedPubkey: cosmos.crypto.ed25519.PubKey | cosmos.crypto.secp256k1.PubKey = this.cosmJSRegistry.decode(
            {
                typeUrl: libParsedSignerInfo.publicKey?.typeUrl!,
                value: fromBase64(libParsedSignerInfo.publicKey?.value!),
            },
        );

        const obj = { ...libParsedSignerInfo };
        obj.publicKey = { typeUrl: libParsedSignerInfo.publicKey?.typeUrl!, key: toBase64(decodedPubkey.key) };

        return obj;
    }

    // transforms `type_url` to `@type` to match GoLang's TxDecoder JSON output
    public typeUrlTransformer = (str: string) => str.replace(/type_url/g, '@type');
}
