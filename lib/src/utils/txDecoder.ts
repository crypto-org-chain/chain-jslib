import { Registry } from '@cosmjs/proto-signing';
import { toBase64, fromBase64 } from '@cosmjs/encoding';
import { AuthInfo, TxBody, SignerInfo, Tx } from '@cosmjs/proto-signing/build/codec/cosmos/tx/v1beta1/tx';
import * as snakecaseKeys from 'snakecase-keys';
import Long from 'long';
import Big from 'big.js';
import { cosmos, ics23 } from '../cosmos/v1beta1/codec/generated/codecimpl';
import { Bytes } from './bytes/bytes';
import { typeUrlMappings } from '../cosmos/v1beta1/types/typeurls';
import { COSMOS_MSG_TYPEURL } from '../transaction/common/constants/typeurl';

const cosmJSRegistry = new Registry(Object.entries(typeUrlMappings));
const DISPLAY_DIVISION_STRING = '1000000000000000000';

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
            body: Object.create({}),
            authInfo: Object.create({}),
            signatures: Object.create([[]]),
        };

        txObject.body = getTxBodyJson(this.libDecodedTxBody);
        txObject.signatures = getSignaturesJson(this.libDecodedSignatures);
        txObject.authInfo = getAuthInfoJson(this.libDecodedAuthInfo);

        const stringifiedTx = JSON.stringify(snakecaseKeys.default(txObject));

        const cosmosApiFormatTxJson = typeUrlToCosmosTransformer(stringifiedTx);

        return cosmosApiFormatTxJson;
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
    const finalDecodedParams = handleSpecialParams(decodedParams, typeUrl);
    return { typeUrl, ...finalDecodedParams };
}

function handleSpecialParams(decodedParams: any, typeUrl: string) {
    // handle all `MsgSubmitProposal` related messages
    const clonedDecodedParams = { ...decodedParams };
    if (decodedParams.content && Object.keys(decodedParams.content).length !== 0) {
        clonedDecodedParams.content = decodeAnyType(decodedParams.content.type_url, decodedParams.content.value);
    }

    // handle `MsgCreateValidator`
    if (typeUrl === COSMOS_MSG_TYPEURL.MsgCreateValidator) {
        clonedDecodedParams.pubkey = decodeAnyType(decodedParams.pubkey.type_url, decodedParams.pubkey.value);
        clonedDecodedParams.pubkey.key = Bytes.fromUint8Array(clonedDecodedParams.pubkey.key).toBase64String();

        // Check if the `commission` object values are represented already in `float`
        /*eslint-disable */
        for (const key in decodedParams.commission) {
            const rateString = decodedParams.commission[key];
            const splitRateByDecimal = rateString.split('.');

            // if `string` has `NO` decimal place
            if (splitRateByDecimal.length === 1) {
                const rateToBig = new Big(rateString);
                clonedDecodedParams.commission[key] = rateToBig.div(new Big(DISPLAY_DIVISION_STRING)).toFixed(18);
            }
            // If `string` has `ONE` decimal place
            else if (splitRateByDecimal.length === 2) {
                const rateToBig = new Big(rateString);
                clonedDecodedParams.commission[key] = rateToBig.toFixed(18);
            }
        }
    }

    // handle `MsgEditValidator`
    if (typeUrl === COSMOS_MSG_TYPEURL.MsgEditValidator) {
        if (decodedParams.commissionRate === "" || typeof decodedParams.commissionRate === "undefined") {
            clonedDecodedParams.commissionRate = null;
        } else {
            const rateString = decodedParams.commissionRate;
            const splitRateByDecimal = rateString.split('.');

            // if `string` has `NO` decimal place
            if (splitRateByDecimal.length === 1) {
                const rateToBig = new Big(rateString);
                clonedDecodedParams.commissionRate = rateToBig.div(new Big(DISPLAY_DIVISION_STRING)).toFixed(18);
            }
            // If `string` has `ONE` decimal place
            else if (splitRateByDecimal.length === 2) {
                const rateToBig = new Big(rateString);
                clonedDecodedParams.commissionRate = rateToBig.toFixed(18);
            }
        }

        // use `null` in case minSelfDelegation is undefined
        if (decodedParams.minSelfDelegation === "" || typeof decodedParams.minSelfDelegation === "undefined") {
            clonedDecodedParams.minSelfDelegation = null;
        }

    }
    /* eslint-enable */

    if (typeUrl === COSMOS_MSG_TYPEURL.ibc.MsgCreateClient) {
        // if clientState = `undefined` or `null`
        if (decodedParams.clientState && Object.keys(decodedParams.clientState).length > 0) {
            clonedDecodedParams.clientState = decodeAnyType(
                decodedParams.clientState.type_url,
                decodedParams.clientState.value,
            );

            // handle trusting_period
            if (
                clonedDecodedParams.clientState.trustingPeriod &&
                clonedDecodedParams.clientState.trustingPeriod.seconds
            ) {
                clonedDecodedParams.clientState.trustingPeriod = `${clonedDecodedParams.clientState.trustingPeriod.seconds}s`;
            }
            // handle unbonding_period
            if (
                clonedDecodedParams.clientState.unbondingPeriod &&
                clonedDecodedParams.clientState.unbondingPeriod.seconds
            ) {
                clonedDecodedParams.clientState.unbondingPeriod = `${clonedDecodedParams.clientState.unbondingPeriod.seconds}s`;
            }
            // handle max_clock_drift
            if (
                clonedDecodedParams.clientState.maxClockDrift &&
                clonedDecodedParams.clientState.maxClockDrift.seconds
            ) {
                clonedDecodedParams.clientState.maxClockDrift = `${clonedDecodedParams.clientState.maxClockDrift.seconds}s`;
            }

            // handle proofSpecs
            if (clonedDecodedParams.clientState.proofSpecs && clonedDecodedParams.clientState.proofSpecs.length > 0) {
                clonedDecodedParams.clientState.proofSpecs = clonedDecodedParams.clientState.proofSpecs.map(
                    (proofSpec: any) => {
                        // handle `leafSpec`
                        if (proofSpec.leafSpec) {
                            if (proofSpec.leafSpec.hash) {
                                /* eslint-disable */
                                proofSpec.leafSpec.hash = getHashOpStringFromValue(proofSpec.leafSpec.hash);
                                /* eslint-enable */
                            }
                            if (proofSpec.leafSpec.prehashKey) {
                                /* eslint-disable */
                                proofSpec.leafSpec.prehashKey = getHashOpStringFromValue(proofSpec.leafSpec.prehashKey);
                                /* eslint-enable */
                            }
                            if (proofSpec.leafSpec.prehashValue) {
                                /* eslint-disable */
                                proofSpec.leafSpec.prehashValue = getHashOpStringFromValue(
                                    proofSpec.leafSpec.prehashValue,
                                );
                                /* eslint-enable */
                            }
                            if (proofSpec.leafSpec.length) {
                                /* eslint-disable */
                                proofSpec.leafSpec.length = getLengthOpStringFromValue(proofSpec.leafSpec.length);
                                /* eslint-enable */
                            }
                            if (proofSpec.leafSpec.prefix) {
                                /* eslint-disable */
                                proofSpec.leafSpec.prefix = Bytes.fromUint8Array(
                                    proofSpec.leafSpec.prefix,
                                ).toBase64String();
                                /* eslint-enable */
                            }
                        }

                        // handle `innerSpec`
                        if (proofSpec.innerSpec) {
                            /* eslint-disable */
                            proofSpec.innerSpec.emptyChild = null; // should be Bytes.fromUint8Array(proofSpec.innerSpec.emptyChild).toBase64String();
                            /* eslint-enable */

                            if (proofSpec.innerSpec.hash) {
                                /* eslint-disable */
                                proofSpec.innerSpec.hash = getHashOpStringFromValue(proofSpec.innerSpec.hash);
                                /* eslint-enable */
                            }
                        }

                        return proofSpec;
                    },
                );
            }
        }

        // if consensusState = `undefined` or `null`
        if (decodedParams.consensusState && Object.keys(decodedParams.consensusState).length > 0) {
            clonedDecodedParams.consensusState = decodeAnyType(
                decodedParams.consensusState.type_url,
                decodedParams.consensusState.value,
            );

            if (clonedDecodedParams.consensusState.nextValidatorsHash) {
                // Below is a valid Tx Hash hence using .toHexString
                clonedDecodedParams.consensusState.nextValidatorsHash = Bytes.fromUint8Array(
                    clonedDecodedParams.consensusState.nextValidatorsHash,
                ).toHexString();
            }
        }
    }

    return clonedDecodedParams;
}

const getHashOpStringFromValue = (targetValue: number): string | null => {
    const mayBeHashOp = Object.values(ics23.HashOp).find((v) => v === targetValue) as ics23.HashOp | undefined;
    if (mayBeHashOp) {
        return ics23.HashOp[mayBeHashOp] || null;
    }
    return null;
};

const getLengthOpStringFromValue = (targetValue: number): string | null => {
    const mayBeLengthOp = Object.values(ics23.LengthOp).find((v) => v === targetValue) as ics23.LengthOp | undefined;
    if (mayBeLengthOp) {
        return ics23.LengthOp[mayBeLengthOp] || null;
    }
    return null;
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

const handleCustomTypes = (obj: any) => {
    Object.keys(obj).forEach((k) => {
        if (typeof obj[k] === 'object' && obj[k] !== null) {
            if (obj[k] instanceof Long) {
                // Recursively keeping same object
                obj[k] = obj[k].toString(10); // eslint-disable-line no-param-reassign
            }
            handleCustomTypes(obj[k]);
        }
    });
};
