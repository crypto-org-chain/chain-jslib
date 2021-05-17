import { Registry } from '@cosmjs/proto-signing';
import { toBase64, fromBase64 } from '@cosmjs/encoding';
import { AuthInfo, TxBody, SignerInfo, Tx } from '@cosmjs/proto-signing/build/codec/cosmos/tx/v1beta1/tx';
import * as snakecaseKeys from 'snakecase-keys';
import Big from 'big.js';
import { Any } from '@cosmjs/proto-signing/build/codec/google/protobuf/any';
import { cosmos } from '../cosmos/v1beta1/codec/generated/codecimpl';
import { Bytes } from './bytes/bytes';
import { typeUrlMappings } from '../cosmos/v1beta1/types/typeurls';
import { TransactionSigner } from '../transaction/raw';
import { Network } from '../network/network';
import { CroNetwork, CroSDK } from '../core/cro';
import { ICoin } from '../coin/coin';
import { SIGN_MODE } from '../transaction/types';

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

    public static fromCosmosJSON(jsonTx: string, network: Network = CroNetwork.Testnet) {
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

        if (!decodedTx.authInfo || !decodedTx.body) {
            throw new Error('Provided JSON is invalid.');
        }

        // Todo: Looks like we need to support `nonCriticalExtensionOptions` and `extensionOptions`
        if (decodedTx.body.nonCriticalExtensionOptions.length > 0 || decodedTx.body.extensionOptions.length > 0) {
            throw new Error("JSON Decoder doesn't support 'nonCriticalExtensionOptions' or 'extensionOptions'");
        }

        /**
         * Creating a RawTransaction instance
         *
         */
        const croSdk = CroSDK({ network });
        const rawTx = new croSdk.RawTransaction();

        /**
         * Lower section handles `authInfo` related values derivation
         *
         */
        const gasLimitString = decodedTx.authInfo.fee?.gasLimit.toString(10)!;

        // Default `Fee` used as ZERO(0)
        let feeCoin = croSdk.Coin.fromBaseUnit('0');

        if (
            (decodedTx.authInfo.fee?.amount && decodedTx.authInfo.fee?.amount.length > 1) ||
            decodedTx.authInfo.fee?.amount.length! < 1
        ) {
            // @todo: revisit this in IBC
            throw new Error('Invalid fee amount provided.');
        }

        //  Note: Considering only first element as we support non-array mode
        const feeAmountString = decodedTx.authInfo.fee?.amount[0]!.amount!;
        const feeAmountDenom = decodedTx.authInfo.fee?.amount[0]!.denom;

        if (feeAmountDenom && feeAmountString) {
            if (feeAmountDenom === network.coin.baseDenom) {
                feeCoin = croSdk.Coin.fromBaseUnit(feeAmountString);
            } else {
                feeCoin = croSdk.Coin.fromCRO(feeAmountString);
            }
        }

        /**
         * Lower section handles `signerInfos` part of `authInfo`
         */
        let decodedSignerInfos: TransactionSigner[] = [];
        if (decodedTx.authInfo.signerInfos.length > 0) {
            decodedSignerInfos = decodedTx.authInfo.signerInfos.map((signerInfo) => {
                const publicKey = Bytes.fromUint8Array(signerInfo.publicKey?.value!);
                // NOTE: keeping accountNumber default -1 for now, it MUST be patched
                const accountNumber = new Big(-1);
                const accountSequence = new Big(signerInfo.sequence.toString());
                const signMode = getSignModeFromLibDecodedSignMode(signerInfo.modeInfo?.single?.mode.valueOf()!);
                return {
                    publicKey,
                    accountNumber,
                    accountSequence,
                    signMode,
                } as TransactionSigner;
            });
        }

        /**
         *
         * Adding available values to the rawTx instance
         */
        rawTx.setMemo(decodedTx.body.memo);
        rawTx.setTimeOutHeight(decodedTx.body.timeoutHeight.toString(10));
        rawTx.setFee((feeCoin as unknown) as ICoin);
        rawTx.setGasLimit(gasLimitString);
        decodedSignerInfos.forEach((signerInfo) => {
            rawTx.addSigner(signerInfo);
        });

        /**
         * Creating a `SignableTransaction` instance
         * It must be patched for accountNumber information using `.setSignerAccountNumberAtIndex()`
         */
        const signableTx = rawTx.toSignable();

        signableTx.setTxBodyBytes(getTxBodyBytes(decodedTx.body));

        return signableTx;
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
        if (!typeUrl) {
            throw new Error('Missing type_url in Any');
        }
        if (!value) {
            throw new Error('Missing value in Any');
        }
        const decodedParams = cosmJSRegistry.decode({ typeUrl, value });
        return { typeUrl, ...decodedParams };
    });
    return obj;
};
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

    const encodedValueBytes = cosmJSRegistry.encode({ typeUrl: obj.typeUrl, value: msgValueObj });

    return Any.fromPartial({
        typeUrl: obj.typeUrl,
        value: encodedValueBytes,
    });
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

const transformInputJson = (input: string): string => {
    try {
        const camelCaseTx = snakeCaseToCamelCase(typeUrlFromCosmosTransformer(input));
        return camelCaseTx;
    } catch (error) {
        throw new Error('Error transforming the input string.');
    }
};

const placeBackCorrectSignModeText = (str: string): string => {
    return str
        .replace(/SIGNMODEUNSPECIFIED/g, 'SIGN_MODE_UNSPECIFIED')
        .replace(/SIGNMODEDIRECT/g, 'SIGN_MODE_DIRECT')
        .replace(/SIGNMODETEXTUAL/g, 'SIGN_MODE_TEXTUAL')
        .replace(/SIGNMODELEGACYAMINOJSON/g, 'SIGN_MODE_LEGACY_AMINO_JSON');
};

const getSignModeFromLibDecodedSignMode = (signModeNumber: number) => {
    switch (signModeNumber) {
        case SIGN_MODE.DIRECT:
            return SIGN_MODE.DIRECT;
        case SIGN_MODE.LEGACY_AMINO_JSON:
            return SIGN_MODE.LEGACY_AMINO_JSON;
        default:
            throw new Error(`Received Sign Mode ${signModeNumber} not supported`);
    }
};
