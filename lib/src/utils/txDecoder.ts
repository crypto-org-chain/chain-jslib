import { Registry } from '@cosmjs/proto-signing';
import { toBase64, fromBase64 } from '@cosmjs/encoding';
import { AuthInfo, TxBody, SignerInfo, Tx } from '@cosmjs/proto-signing/build/codec/cosmos/tx/v1beta1/tx';
import * as snakecaseKeys from 'snakecase-keys';
import Long from 'long';
import Big from 'big.js';
import { cosmos, ics23, tendermintV2 } from '../cosmos/v1beta1/codec/generated/codecimpl';
import { Bytes } from './bytes/bytes';
import { typeUrlMappings } from '../cosmos/v1beta1/types/typeurls';
import { COSMOS_MSG_TYPEURL } from '../transaction/common/constants/typeurl';
import { convertSecondsNanosToTZFormat } from './timestamp';

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

    if (typeUrl === COSMOS_MSG_TYPEURL.ibc.MsgTransfer) {
        // if timeoutTimestamp = `undefined` or `null`
        if (typeof decodedParams.timeoutTimestamp === 'undefined' || !decodedParams.timeoutTimestamp) {
            clonedDecodedParams.timeoutTimestamp = '0';
        }
    }
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

    if (typeUrl === COSMOS_MSG_TYPEURL.ibc.MsgUpdateClient) {
        if (decodedParams.header && Object.keys(decodedParams.header).length > 0) {
            clonedDecodedParams.header = decodeAnyType(decodedParams.header.type_url, decodedParams.header.value);

            if (clonedDecodedParams.header.signedHeader) {
                const { signedHeader } = clonedDecodedParams.header;

                /** handle signed_header.header params */
                if (signedHeader.header) {
                    // handle signed_header.header.`time`
                    if (signedHeader.header.time) {
                        clonedDecodedParams.header.signedHeader.header.time = convertSecondsNanosToTZFormat(
                            Long.fromString(signedHeader.header.time.seconds),
                            signedHeader.header.time.nanos,
                        );
                    }

                    // handle signed_header.header.lastBlockId.hash
                    if (signedHeader.header.lastBlockId.hash) {
                        clonedDecodedParams.header.signedHeader.header.lastBlockId.hash = Bytes.fromUint8Array(
                            signedHeader.header.lastBlockId.hash,
                        ).toBase64String();
                    }
                    // handle signed_header.header.lastBlockId.part_set_header.hash
                    if (signedHeader.header.lastBlockId.partSetHeader.hash) {
                        clonedDecodedParams.header.signedHeader.header.lastBlockId.partSetHeader.hash = Bytes.fromUint8Array(
                            signedHeader.header.lastBlockId.partSetHeader.hash,
                        ).toBase64String();
                    }
                    // handle signed_header.header.last_commit_hash
                    if (signedHeader.header.lastCommitHash) {
                        clonedDecodedParams.header.signedHeader.header.lastCommitHash = Bytes.fromUint8Array(
                            signedHeader.header.lastCommitHash,
                        ).toBase64String();
                    }
                    // handle signed_header.header.data_hash
                    if (signedHeader.header.dataHash) {
                        clonedDecodedParams.header.signedHeader.header.dataHash = Bytes.fromUint8Array(
                            signedHeader.header.dataHash,
                        ).toBase64String();
                    }
                    // handle signed_header.header.validators_hash
                    if (signedHeader.header.validatorsHash) {
                        clonedDecodedParams.header.signedHeader.header.validatorsHash = Bytes.fromUint8Array(
                            signedHeader.header.validatorsHash,
                        ).toBase64String();
                    }
                    // handle signed_header.header.next_validators_hash
                    if (signedHeader.header.nextValidatorsHash) {
                        clonedDecodedParams.header.signedHeader.header.nextValidatorsHash = Bytes.fromUint8Array(
                            signedHeader.header.nextValidatorsHash,
                        ).toBase64String();
                    }
                    // handle signed_header.header.consensus_hash
                    if (signedHeader.header.consensusHash) {
                        clonedDecodedParams.header.signedHeader.header.consensusHash = Bytes.fromUint8Array(
                            signedHeader.header.consensusHash,
                        ).toBase64String();
                    }
                    // handle signed_header.header.app_hash
                    if (signedHeader.header.appHash) {
                        clonedDecodedParams.header.signedHeader.header.appHash = Bytes.fromUint8Array(
                            signedHeader.header.appHash,
                        ).toBase64String();
                    }
                    // handle signed_header.header.last_results_hash
                    if (signedHeader.header.lastResultsHash) {
                        clonedDecodedParams.header.signedHeader.header.lastResultsHash = Bytes.fromUint8Array(
                            signedHeader.header.lastResultsHash,
                        ).toBase64String();
                    }
                    // handle signed_header.header.evidence_hash
                    if (signedHeader.header.evidenceHash) {
                        clonedDecodedParams.header.signedHeader.header.evidenceHash = Bytes.fromUint8Array(
                            signedHeader.header.evidenceHash,
                        ).toBase64String();
                    }
                    // handle signed_header.header.proposer_address
                    if (signedHeader.header.proposerAddress) {
                        clonedDecodedParams.header.signedHeader.header.proposerAddress = Bytes.fromUint8Array(
                            signedHeader.header.proposerAddress,
                        ).toBase64String();
                    }
                }

                /* eslint-disable */
                /** handle signed_header.`commit` params */
                if (signedHeader.commit) {
                    if (signedHeader.commit.signatures && signedHeader.commit.signatures.length > 0) {
                        signedHeader.commit.signatures = signedHeader.commit.signatures.map((signatureObj: any) => {
                            // handle signed_header.commit.signatures[].block_id_flag
                            if (signatureObj.blockIdFlag) {
                                signatureObj.blockIdFlag = getBlockIdFlagStringFromValue(signatureObj.blockIdFlag);
                            }
                            // handle signed_header.commit.signatures[].validator_address
                            if (signatureObj.validatorAddress) {
                                signatureObj.validatorAddress = Bytes.fromUint8Array(
                                    signatureObj.validatorAddress,
                                ).toBase64String();
                            }
                            // handle signed_header.commit.signatures[].timestamp
                            if (signatureObj.timestamp) {
                                signatureObj.timestamp = convertSecondsNanosToTZFormat(
                                    Long.fromString(signatureObj.timestamp.seconds),
                                    signatureObj.timestamp.nanos,
                                );
                            }
                            // handle signed_header.commit.signatures[].signature
                            if (signatureObj.signature) {
                                signatureObj.signature = Bytes.fromUint8Array(signatureObj.signature).toBase64String();
                            }
                            return signatureObj;
                        });
                    }

                    // handle signedHeader.commit.blockId
                    if (signedHeader.commit.blockId) {
                        // handle signed_header.commit.block_id.hash
                        if (signedHeader.commit.blockId.hash) {
                            clonedDecodedParams.header.signedHeader.commit.blockId.hash = Bytes.fromUint8Array(
                                clonedDecodedParams.header.signedHeader.commit.blockId.hash,
                            ).toBase64String();
                        }

                        // handle signed_header.commit.block_id.part_set_header.hash
                        if (
                            signedHeader.commit.blockId.partSetHeader &&
                            signedHeader.commit.blockId.partSetHeader.hash
                        ) {
                            clonedDecodedParams.header.signedHeader.commit.blockId.partSetHeader.hash = Bytes.fromUint8Array(
                                clonedDecodedParams.header.signedHeader.commit.blockId.partSetHeader.hash,
                            ).toBase64String();
                        }
                    }
                }
            }

            if (clonedDecodedParams.header.validatorSet && clonedDecodedParams.header.validatorSet) {
                const { validatorSet } = clonedDecodedParams.header;

                // handle validatorSet.validators[]
                if (validatorSet.validators && validatorSet.validators.length > 0) {
                    validatorSet.validators = validatorSet.validators.map((validator: any) => {
                        // validator_set.validators[].address
                        if (validator.address) {
                            validator.address = Bytes.fromUint8Array(validator.address).toBase64String();
                        }

                        // validator_set.validators[].pub_key.ed25519
                        if (validator.pubKey) {
                            // ed25519
                            if (validator.pubKey.ed25519) {
                                validator.pubKey.ed25519 = Bytes.fromUint8Array(
                                    validator.pubKey.ed25519,
                                ).toBase64String();
                            }

                            // secpk256
                            if (validator.pubKey.secpk256) {
                                validator.pubKey.secpk256 = Bytes.fromUint8Array(
                                    validator.pubKey.secpk256,
                                ).toBase64String();
                            }
                        }
                        return validator;
                    });
                }

                if (validatorSet.proposer) {
                    // validator_set.proposer.address
                    if (validatorSet.proposer.address) {
                        clonedDecodedParams.header.validatorSet.proposer.address = Bytes.fromUint8Array(
                            clonedDecodedParams.header.validatorSet.proposer.address,
                        ).toBase64String();
                    }

                    // validator_set.proposer.pub_key.ed25519
                    if (validatorSet.proposer.pubKey) {
                        // ed25519
                        if (validatorSet.proposer.pubKey.ed25519) {
                            clonedDecodedParams.header.validatorSet.proposer.pubKey.ed25519 = Bytes.fromUint8Array(
                                validatorSet.proposer.pubKey.ed25519,
                            ).toBase64String();
                        }
                    }
                }
            }

            if (clonedDecodedParams.header.trustedValidators) {
                const { trustedValidators } = clonedDecodedParams.header;
                if (trustedValidators.validators && trustedValidators.validators.length > 0) {
                    trustedValidators.validators = trustedValidators.validators.map((validator: any) => {
                        // trusted_validators.validators[].address
                        if (validator.address) {
                            validator.address = Bytes.fromUint8Array(validator.address).toBase64String();
                        }

                        // trusted_validators.validators[].pub_key.ed25519
                        if (validator.pubKey) {
                            // ed25519
                            if (validator.pubKey.ed25519) {
                                validator.pubKey.ed25519 = Bytes.fromUint8Array(
                                    validator.pubKey.ed25519,
                                ).toBase64String();
                            }

                            // secpk256
                            if (validator.pubKey.secpk256) {
                                validator.pubKey.secpk256 = Bytes.fromUint8Array(
                                    validator.pubKey.secpk256,
                                ).toBase64String();
                            }
                        }
                        return validator;
                    });
                }
                // trusted_validators.proposer.address
                if (trustedValidators.proposer.address) {
                    clonedDecodedParams.header.trustedValidators.proposer.address = Bytes.fromUint8Array(
                        trustedValidators.proposer.address,
                    ).toBase64String();
                }

                if (trustedValidators.proposer.pubKey) {
                    // trusted_validators.proposer.pub_key.ed25519
                    if (trustedValidators.proposer.pubKey.ed25519) {
                        clonedDecodedParams.header.trustedValidators.proposer.pubKey.ed25519 = Bytes.fromUint8Array(
                            trustedValidators.proposer.pubKey.ed25519,
                        ).toBase64String();
                    }
                }
            }
            /* eslint-enable */
        }
    }

    if (typeUrl === COSMOS_MSG_TYPEURL.ibc.connection.MsgConnectionOpenConfirm) {
        if (decodedParams.proofAck) {
            clonedDecodedParams.proofAck = Bytes.fromUint8Array(decodedParams.proofAck).toBase64String();
        }
    }

    if (typeUrl === COSMOS_MSG_TYPEURL.ibc.connection.MsgConnectionOpenTry) {
        // todo: handle `clientState`

        // counterparty.prefix.keyPrefix
        if (decodedParams.counterparty.prefix && decodedParams.counterparty.prefix.keyPrefix) {
            clonedDecodedParams.counterparty.prefix.keyPrefix = Bytes.fromUint8Array(
                decodedParams.counterparty.prefix.keyPrefix,
            ).toBase64String();
        }

        // proof_init
        if (decodedParams.proofInit) {
            clonedDecodedParams.proofInit = Bytes.fromUint8Array(decodedParams.proofInit).toBase64String();
        }
        // proof_client
        if (decodedParams.proofClient) {
            clonedDecodedParams.proofClient = Bytes.fromUint8Array(decodedParams.proofClient).toBase64String();
        }
        // proof_consensus
        if (decodedParams.proofConsensus) {
            clonedDecodedParams.proofConsensus = Bytes.fromUint8Array(decodedParams.proofConsensus).toBase64String();
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

const getBlockIdFlagStringFromValue = (targetValue: string): string | null => {
    const mayBeBlockIdFlag = Object.values(tendermintV2.types.BlockIDFlag).find((v) => v === targetValue) as
        | tendermintV2.types.BlockIDFlag
        | undefined;
    if (mayBeBlockIdFlag) {
        return tendermintV2.types.BlockIDFlag[mayBeBlockIdFlag] || null;
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
