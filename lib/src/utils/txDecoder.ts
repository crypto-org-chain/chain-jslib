import { Registry } from '@cosmjs/proto-signing';
import { toBase64, fromBase64 } from '@cosmjs/encoding';
import { AuthInfo, TxBody, SignerInfo, Tx } from '@cosmjs/proto-signing/build/codec/cosmos/tx/v1beta1/tx';
import * as snakecaseKeys from 'snakecase-keys';
import { Any } from '@cosmjs/proto-signing/build/codec/google/protobuf/any';
import { cosmos, google } from '../cosmos/v1beta1/codec/generated/codecimpl';
import { Bytes } from './bytes/bytes';
import { typeUrlMappings } from '../cosmos/v1beta1/types/typeurls';
import { SIGN_MODE } from '../transaction/types';
import { Msg } from '../cosmos/v1beta1/types/msg';
import Long from 'long';
import { protoEncodeEd25519PubKey } from '../transaction/msg/staking/MsgCreateValidator';

const cosmJSRegistry = new Registry(Object.entries(typeUrlMappings));

export class TxDecoder {
    private libDecodedTxBody!: TxBody;

    private libDecodedAuthInfo!: AuthInfo;

    private libDecodedSignatures!: Uint8Array[];

    /**
     * Creates TxDecoder instance
     * @constructor
     */
    constructor() {
        this.libDecodedTxBody = Object.create({});
        this.libDecodedAuthInfo = Object.create({});
        this.libDecodedSignatures = Object.create([]);
    }

    private assertHex = (h: string) => {
        const re = /^[a-fA-F0-9]+$/;
        if (!re.test(h)) {
            throw new TypeError('Invalid Hex provided.');
        }
    };

    /**
     * @name fromHex()
     * @param txHex
     * @returns TxDecoder
     */
    public fromHex(txHex: string): TxDecoder {
        if (!txHex) {
            throw new TypeError(`Received malformed transaction hex.`);
        }
        this.assertHex(txHex);
        const sanitisedTxHex = Bytes.clean0x(txHex);
        try {
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
     * Returns CosmosSDK compatible JSON encoded transaction
     * @name toCosmosJSON()
     * @returns {string}
     */
    public toCosmosJSON() {
        const txObject = {
            tx: {
                body: Object.create({}),
                authInfo: Object.create({}),
                signatures: Object.create([[]]),
            },
        };

        txObject.tx.body = getTxBodyJson(this.libDecodedTxBody);
        txObject.tx.signatures = getSignaturesJson(this.libDecodedSignatures);
        txObject.tx.authInfo = getAuthInfoJson(this.libDecodedAuthInfo);

        const stringifiedTx = JSON.stringify(snakecaseKeys.default(txObject));

        const cosmosApiFormatTxJson = typeUrlToCosmosTransformer(stringifiedTx);

        return cosmosApiFormatTxJson;
    }

    public static fromCosmosJSON(jsonTx: string) {
        if (!jsonTx) {
            throw new Error('Error decoding provided Tx JSON.');
        }
        if (!isValidJson(jsonTx)) {
            throw new Error('Provided JSON is not valid.');
        }
        const txStringWithoutSignMode = transformInputJson(jsonTx);
        const txString = placeBackCorrectSignModeText(txStringWithoutSignMode);
        const txObject = JSON.parse(txString);
        const decodedTx: Tx = assertAndReturnValidTx(txObject);
        return decodedTx;
    }
}
export const getSignerInfoJson = (signerInfo: SignerInfo) => {
    const stringifiedSignerInfo = JSON.stringify(SignerInfo.toJSON(signerInfo) as any);
    const libParsedSignerInfo = JSON.parse(stringifiedSignerInfo);
    const decodedPubkey: cosmos.crypto.ed25519.PubKey | cosmos.crypto.secp256k1.PubKey = cosmJSRegistry.decode({
        typeUrl: libParsedSignerInfo.publicKey?.typeUrl!,
        value: fromBase64(libParsedSignerInfo.publicKey?.value!),
    });

    const obj = { ...libParsedSignerInfo };
    obj.publicKey = { typeUrl: libParsedSignerInfo.publicKey?.typeUrl!, key: toBase64(decodedPubkey.key) };

    return obj;
};

export const getSignaturesJson = (signaturesArray: Uint8Array[]): string[] => {
    let signatures: string[] = [];
    // Adding Signatures array to final object
    if (signaturesArray) {
        signatures = signaturesArray.map((e) => toBase64(typeof e !== typeof undefined ? e : new Uint8Array()));
    }
    return signatures;
};

export const getTxBodyJson = (txBody: TxBody) => {
    const txBodyStringified = JSON.stringify(TxBody.toJSON(txBody));
    const parsedTxBody = JSON.parse(txBodyStringified);
    const obj = { ...parsedTxBody };
    obj.messages = txBody.messages.map(({ typeUrl, value }) => {
        return decodeAnyType(typeUrl, value);
    });
    return obj;
};

function decodeAnyType(typeUrl: string, value: Uint8Array) {
    if (!typeUrl) {
        throw new Error('Missing type_url in Any');
    }
    if (!value) {
        throw new Error('Missing value in Any');
    }
    const decodedParams = cosmJSRegistry.decode({ typeUrl, value });
    handleCustomTypes(decodedParams);
    const finalDecodedParams = handleSpecialParams(decodedParams);
    return { typeUrl, ...finalDecodedParams };
}

function handleSpecialParams(decodedParams: any) {
    // handle all MsgSubmitProposal
    // TODO: Make it generic when encounter new cases

    if (decodedParams.content && Object.keys(decodedParams.content).length !== 0) {
        decodedParams.content = decodeAnyType(decodedParams.content.type_url, decodedParams.content.value);
    }
    return decodedParams;
}

export const getAuthInfoJson = (authInfo: AuthInfo) => {
    const authInfoStringified = JSON.stringify(AuthInfo.toJSON(authInfo));

    const libParsedAuthInfo = JSON.parse(authInfoStringified);
    const obj = { ...libParsedAuthInfo };

    if (authInfo.signerInfos) {
        obj.signerInfos = authInfo.signerInfos.map((e) =>
            typeof e !== typeof undefined ? getSignerInfoJson(e) : undefined,
        );
    } else {
        obj.signerInfos = [];
    }

    return obj;
};

// transforms `type_url` to `@type` to match GoLang's TxDecoder JSON output
export const typeUrlToCosmosTransformer = (str: string) => str.replace(/type_url/g, '@type');

const assertAndReturnValidTx = (obj: any): Tx => {
    try {
        let txToDecode: any = obj;
        if (obj.tx !== undefined && obj.tx !== null) {
            txToDecode = obj.tx;
        }
        txToDecode.body.messages = txToDecode.body.messages.map((msg: any) => {
            return encodeTxBodyMsgList(msg);
        });

        txToDecode.authInfo.signerInfos = txToDecode.authInfo.signerInfos.map((signerInfo: any) => {
            return encodeAuthInfoSignerInfos(signerInfo);
        });
        return Tx.fromJSON(txToDecode);
    } catch (error) {
        throw new Error('Provided Tx JSON is not valid.');
    }
};
export const getTxBodyBytes = (txBody: TxBody): Bytes => {
    try {
        return Bytes.fromUint8Array(TxBody.encode(txBody).finish());
    } catch (error) {
        throw new Error('Error getting TxBody bytes');
    }
};

const encodeAuthInfoSignerInfos = (signerInfo: any) => {
    const publicKeyObj = { ...signerInfo.publicKey };
    delete publicKeyObj.typeUrl;

    const encodedValueBytes = cosmJSRegistry.encode({ typeUrl: signerInfo.publicKey.typeUrl, value: publicKeyObj });

    const signerInfoResult = { ...signerInfo };

    signerInfoResult.publicKey = Any.fromPartial({
        typeUrl: signerInfo.publicKey.typeUrl,
        // Removing first 2 elements of bytes array because they are default prefix when encoding
        value: encodedValueBytes.slice(2, encodedValueBytes.length),
    });
    return signerInfoResult;
};

const encodeTxBodyMsgList = (obj: any) => {
    if (!obj.typeUrl) {
        throw new Error('Invalid Msg found in TxBody');
    }

    const msgValueObj = { ...obj };
    delete msgValueObj.typeUrl;
    for (const key in msgValueObj) {
        if (Object.prototype.hasOwnProperty.call(msgValueObj, key)) {
            // Dirty handling MsgProposal types
            if (key === 'content') {
                const proposalMsg = { ...msgValueObj.content };
                delete proposalMsg.typeUrl;
                msgValueObj[key] = google.protobuf.Any.create({
                    type_url: obj.content.typeUrl || obj.content.type_url,
                    value: protoEncodeTxBodyMessage({ typeUrl: obj.content.typeUrl, value: proposalMsg }),
                })
            }

            // Dirty handling MsgCreateValidator type
            if (key === 'pubkey') {
                let pubkey = { ...msgValueObj.pubkey };
                pubkey = protoEncodeEd25519PubKey(Bytes.fromUint8Array(new Uint8Array(Object.values(pubkey.value))))
                msgValueObj[key] = google.protobuf.Any.create({
                    type_url: pubkey.type_url,
                    value: protoEncodeTxBodyMessage({ typeUrl: pubkey.type_url, value: { key: pubkey.value.slice(4, pubkey.value.length) } }),
                })
            }
        }
    }
    const encodedValueBytes = cosmJSRegistry.encode({ typeUrl: obj.typeUrl, value: msgValueObj });

    return Any.fromPartial({
        typeUrl: obj.typeUrl,
        value: encodedValueBytes,
    });
};
const protoEncodeTxBodyMessage = (message: Msg): Uint8Array => {
    const type = typeUrlMappings[message.typeUrl];
    if (!type) {
        throw new Error(`Unrecognized message type ${message.typeUrl}`);
    }
    const created = type.create(message.value);
    return Uint8Array.from(type.encode(created).finish());
};

const isValidJson = (str: string): boolean => {
    try {
        JSON.parse(str);
        return true;
    } catch (error) {
        return false;
    }
};

// transforms `@type` to `type_url`
const typeUrlFromCosmosTransformer = (str: string) => str.replace(/@type/g, 'type_url');

const snakeCaseToCamelCase = (str: string) => str.replace(/([_]\w)/g, (g) => g[1].toUpperCase());

function replaceAll(original: string, search: string, replace: string) {
    return original.split(search).join(replace);
}

const transformInputJson = (input: string): string => {
    try {
        const typeUrlTransformedString = typeUrlFromCosmosTransformer(input);

        let keysList = recursiveSearch(JSON.parse(typeUrlTransformedString))

        let oldToTranfsormedKeysMap: { [x: string]: string; } = Object.create({});
        keysList.forEach(key => {
            oldToTranfsormedKeysMap[key] = snakeCaseToCamelCase(key);
        })

        let finalString: string = typeUrlTransformedString;
        for (const key in oldToTranfsormedKeysMap) {
            if (key !== oldToTranfsormedKeysMap[key]) {
                finalString = replaceAll(finalString, key, oldToTranfsormedKeysMap[key])
            }
        }
        return finalString;
    } catch (error) {
        throw new Error('Error transforming the input string.');
    }
};

const recursiveSearch = (obj: any) => {
    let keys: string[] = [];
    Object.keys(obj).forEach(key => {
        const value = obj[key];
        keys.push(key);
        if (typeof value === 'object') {
            keys.push(...recursiveSearch(value));
        }
    });
    return keys;
};

const placeBackCorrectSignModeText = (str: string): string => {
    return str
        .replace(/SIGNMODEUNSPECIFIED/g, 'SIGN_MODE_UNSPECIFIED')
        .replace(/SIGNMODEDIRECT/g, 'SIGN_MODE_DIRECT')
        .replace(/SIGNMODETEXTUAL/g, 'SIGN_MODE_TEXTUAL')
        .replace(/SIGNMODELEGACYAMINOJSON/g, 'SIGN_MODE_LEGACY_AMINO_JSON');
};

export const getSignModeFromLibDecodedSignMode = (signModeNumber: number) => {
    switch (signModeNumber) {
        case SIGN_MODE.DIRECT:
            return SIGN_MODE.DIRECT;
        case SIGN_MODE.LEGACY_AMINO_JSON:
            return SIGN_MODE.LEGACY_AMINO_JSON;
        default:
            throw new Error(`Received Sign Mode ${signModeNumber} not supported`);
    }
};

const handleCustomTypes = (obj: any) => {
    Object.keys(obj).forEach((k) => {
        if (typeof obj[k] === 'object' && obj[k] !== null) {
            if (obj[k] instanceof Long) {
                // todo: I will fix the below unsuggested version
                obj[k] = obj[k].toString(10); // eslint-disable-line no-param-reassign
            }
            handleCustomTypes(obj[k]);
        }
    });
};