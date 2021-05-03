import { Registry } from '@cosmjs/proto-signing';
import { toBase64, fromBase64 } from '@cosmjs/encoding';
import { AuthInfo, TxBody, SignerInfo, Tx } from '@cosmjs/proto-signing/build/codec/cosmos/tx/v1beta1/tx';

import * as snakecaseKeys from 'snakecase-keys';
import { cosmos } from '../cosmos/v1beta1/codec/generated/codecimpl';
import { Bytes } from './bytes/bytes';
import { typeUrlMappings } from '../cosmos/v1beta1/types/typeurls';
import { camelCase } from 'lodash';
import { AuthInfo as AuthInfoLib, TxBody as TxBodyLib } from '../cosmos/v1beta1/types/tx';
import { rawTransaction, TransactionSigner } from '../transaction/raw';
import { Network } from '../network/network';
import { CroNetwork, CroSDK } from '../core/cro';
import { Units, ICoin } from '../coin/coin';
import { SIGN_MODE } from '../transaction/types';


export class TxDecoder {
    private libDecodedTxBody!: TxBody;

    private libDecodedAuthInfo!: AuthInfo;

    private libDecodedSignatures!: Uint8Array[];

    private readonly cosmJSRegistry = new Registry(Object.entries(typeUrlMappings));

    /**
     * Creates TxDecoder instance
     * @constructor
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
     * @returns TxDecoder
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

        txObject.tx.body = this.getTxBodyJson(this.libDecodedTxBody);
        txObject.tx.signatures = this.getSignaturesJson(this.libDecodedSignatures);
        txObject.tx.authInfo = this.getAuthInfoJson(this.libDecodedAuthInfo);

        const stringifiedTx = JSON.stringify(snakecaseKeys.default(txObject));

        const cosmosApiFormatTxJson = typeUrlToCosmosTransformer(stringifiedTx);

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
            signatures = signaturesArray.map((e) => toBase64(typeof e !== typeof undefined ? e : new Uint8Array()));
        }
        return signatures;
    };

    public getAuthInfoJson(authInfo: AuthInfo) {
        const authInfoStringified = JSON.stringify(AuthInfo.toJSON(authInfo));

        const libParsedAuthInfo = JSON.parse(authInfoStringified);
        const obj = { ...libParsedAuthInfo };

        if (authInfo.signerInfos) {
            obj.signerInfos = authInfo.signerInfos.map((e) =>
                typeof e !== typeof undefined ? this.getSignerInfoJson(e) : undefined,
            );
        } else {
            obj.signerInfos = [];
        }

        return obj;
    }

    private getSignerInfoJson(signerInfo: SignerInfo) {
        const stringifiedSignerInfo = JSON.stringify(SignerInfo.toJSON(signerInfo) as any);
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

    public static fromCosmosJSON(jsonTx: string, network: Network = CroNetwork.Testnet) {
        if (!jsonTx) {
            throw new Error("Error decoding provided Tx JSON.");
        }

        if (isValidJson(jsonTx)) {
            throw new Error("Provided JSON is not valid.");
        }

        const txString = transformInputJson(jsonTx);
        const txObject = JSON.parse(txString);
        const decodedTx: Tx = assertOrReturnValidTx(txObject);

        if (!decodedTx.authInfo || !decodedTx.body) {
            throw new Error("Invalid JSON provided.");
        }

        // Todo: Looks like we need to support `nonCriticalExtensionOptions` and `extensionOptions`
        if (decodedTx.body.nonCriticalExtensionOptions.length > 0 || decodedTx.body.extensionOptions.length > 0) {
            throw new Error("JSON Decoder doesn't support 'nonCriticalExtensionOptions' or 'extensionOptions'");
        }
        /**
         *  txBody: TxBody;
    authInfo: AuthInfo;
    signerAccounts: SignerAccount[];
    network: Network; x 
         */

        const croSdk = CroSDK({ network });
        const rawTx = new croSdk.RawTransaction();
        rawTx.setMemo(decodedTx.body.memo);
        rawTx.setTimeOutHeight(decodedTx.body.timeoutHeight.toString(10))

        // WOrk on authInfo

        // Considering only first element as we support non-array mode
        const feeAmountString = decodedTx.authInfo.fee?.amount[0]!.amount!;
        const feeAmountDenom = decodedTx.authInfo.fee?.amount[0]!.denom;
        const gasLimitString = decodedTx.authInfo.fee?.gasLimit.toString(10)!;

        let feeCoin: ICoin;
        if (feeAmountDenom === network.coin.baseDenom) {
            feeCoin = croSdk.Coin.fromBaseUnit(feeAmountString);
        } else {
            feeCoin = croSdk.Coin.fromCRO(feeAmountString);
        }

        let decodedSignerInfos: TransactionSigner[] = [];
        if (decodedTx.authInfo.signerInfos.length > 0) {
            // // let signerData;
            // const anySigner = {
            //     publicKey: anyKeyPair.getPubKey(),
            //     accountNumber: new Big(0),
            //     accountSequence: new Big(2),
            // };
            decodedSignerInfos = decodedTx.authInfo.signerInfos.map((signerInfo) => {
                const publicKey = Bytes.fromUint8Array(signerInfo.publicKey?.value!);
                // Todo: keeping it default for now, it must be patched
                const accountNumber = new Big(0);

                const accountSequence = new Big(signerInfo.sequence.toString())
                const signMode = SIGN_MODE.DIRECT //== signerInfo.modeInfo?.single?.mode.valueOf()
                return {
                    publicKey,
                    accountNumber,
                    accountSequence,
                    signMode
                } as TransactionSigner
            })
        }

        rawTx.setFee(feeCoin);
        rawTx.setGasLimit(gasLimitString);
        
        // Adding decoded SignerData to the raw transaction
        decodedSignerInfos.forEach(rawTx.addSigner)

        if (decodedTx.signatures.length > 0) {
            // Return a SignedTransaction Instance

        } else {
            // Return a SignableTransaction Instance

        }
    }
}


// transforms `type_url` to `@type` to match GoLang's TxDecoder JSON output
export const typeUrlToCosmosTransformer = (str: string) => str.replace(/type_url/g, '@type');

const assertOrReturnValidTx = (obj: any): Tx => {
    try {
        let decodedTx: Tx, txToDecode: any = obj;
        if (obj.tx !== undefined && obj.tx !== null) {
            txToDecode = obj.tx;
        }
        decodedTx = Tx.fromJSON(obj);
        return decodedTx;
    } catch (error) {
        throw new Error("Provided Tx JSON is not valid.");
    }
}

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

//
const transformInputJson = (input: string): string => {
    let snakeCaseTx = typeUrlFromCosmosTransformer(input);
    let camelCaseTx = camelCase(snakeCaseTx);
    return camelCaseTx;
}