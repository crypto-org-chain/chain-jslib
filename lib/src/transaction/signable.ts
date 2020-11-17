// Copyright © 2018–2020 IOV SAS (licensed under the Apache License, Version 2.0)
// Copyright © 2020 Confio UO (licensed under the Apache License, Version 2.0)
// Copyright © 2020 Simon Warta (licensed under the Apache License, Version 2.0)
// Modifications Copyright (c) 2018 - 2020, Foris Limited (licensed under the Apache License, Version 2.0)
import Big from 'big.js';
import ow, { NumberPredicate } from 'ow';
import Long from 'long';
import secp256k1 from 'secp256k1';

import { cosmos, google } from '../cosmos/v1beta1/codec';
import { Msg } from '../cosmos/v1beta1/types/msg';
import { omitDefaults } from '../cosmos/v1beta1/adr27';
import { AuthInfo, TxBody, TxRaw } from '../cosmos/v1beta1/types/tx';
import { typeUrlMappings } from '../cosmos/v1beta1/types/typeurls';
import { sha256 } from '../utils/hash';
import { Network } from '../network/network';
import { Bytes } from '../utils/bytes/bytes';
import { EMPTY_SIGNATURE, SignerAccount } from './types';
import { owSignableTransactionParams } from './ow.types';
import { owBytes } from '../utils/bytes/ow.types';
import { SignedTransaction } from './signed';

/**
 * SignableTransaction is a prepared transaction ready to be signed
 */
export class SignableTransaction {
    private txRaw: TxRaw;

    private network: Network;

    private signerAccounts: SignerAccount[] = [];

    /**
     * Constructor to create a SignableTransaction
     * @param {SignableTransactionParams} params
     * @returns {SignableTransaction}
     * @throws {Error} when params is invalid or the transaction
     */
    public constructor(params: SignableTransactionParams) {
        ow(params, 'params', owSignableTransactionParams);

        if (params.txBody.value.messages.length === 0) {
            throw new TypeError('Expected message in `txBody` of `params`, got none');
        }
        if (params.authInfo.signerInfos.length === 0) {
            throw new TypeError('Expected signer in `signerInfos` of `authInfo` of `params`, got none');
        }
        if (params.signerAccounts.length === 0) {
            throw new TypeError('Expected signer in `signerInfos` of `authInfo` of `params`, got none');
        }

        const bodyBytes = encodeTxBody(params.txBody);
        const authInfoBytes = encodeAuthInfo(params.authInfo);
        this.txRaw = {
            bodyBytes,
            authInfoBytes,
            signatures: params.authInfo.signerInfos.map(() => EMPTY_SIGNATURE),
        };
        this.network = params.network;
        this.signerAccounts = params.signerAccounts;
    }

    /**
     * Returns the SignDoc of the specified index
     * @param {number} index
     * @returns {Bytes}
     * @throws {Error} when index is invalid
     * @memberof SignableTransaction
     */
    public toSignDoc(index: number): Bytes {
        ow(index, 'index', this.owIndex());

        return sha256(
            makeSignDoc(
                this.txRaw.bodyBytes,
                this.txRaw.authInfoBytes,
                this.network.chainId,
                this.signerAccounts[index].accountNumber,
            ),
        );
    }

    /**
     * Set signature of the specified signer index
     * @param {number} index index to set the signature
     * @param {Bytes} signature
     * @throws {Error} when index or signature is invalid
     * @memberof SignableTransaction
     */
    public setSignature(index: number, signature: Bytes): SignableTransaction {
        ow(index, 'index', this.owIndex());
        ow(signature, 'signature', owBytes());

        const pubKey = this.signerAccounts[index].publicKey;
        const signDoc = this.toSignDoc(index);
        if (!secp256k1.ecdsaVerify(signature.toUint8Array(), signDoc.toUint8Array(), pubKey.toUint8Array())) {
            throw new Error('Invalid signature');
        }

        this.txRaw.signatures[index] = signature;

        return this;
    }

    /**
     * Returns true when the signer index is already signed
     * @param {index} index
     * @returns {boolean}
     * @throws {Error} when index is invalid
     * @memberof SignableTransaction
     */
    public isIndexSigned(index: number): boolean {
        ow(index, 'index', this.owIndex());

        return !this.txRaw.signatures[index].isEqual(EMPTY_SIGNATURE);
    }

    private owIndex(): NumberPredicate {
        return ow.number.integer.greaterThanOrEqual(0).validate((val) => ({
            validator: val < this.signerAccounts.length,
            message: (label: string) => `Expected \`${label}\` to be within signer size, got \`${val}\``,
        }));
    }

    /**
     * Returns TxRaw
     * @returns {TxRaw}
     * @memberof SignableTransaction
     */
    public getTxRaw(): Readonly<TxRaw> {
        return this.txRaw;
    }

    /**
     * Return network of the transaction
     * @returns {string}
     * @memberof Transaction
     */
    public getNetwork(): Readonly<Network> {
        return this.network;
    }

    /**
     * Return signed version of the transaction
     * @returns {SignedTransaction}
     * @memberof Transaction
     */
    public toSigned(): SignedTransaction {
        if (!this.isCompletelySigned()) {
            throw new Error('Transaction is not completed signed');
        }
        return new SignedTransaction(this.txRaw);
    }

    /**
     * Returns true when the transaction is completely signed
     * @returns {boolean}
     * @memberof Transaction
     */
    public isCompletelySigned(): boolean {
        return this.txRaw.signatures.every((signature) => !signature.isEqual(EMPTY_SIGNATURE));
    }
}

export type SignableTransactionParams = {
    txBody: TxBody;
    authInfo: AuthInfo;
    signerAccounts: SignerAccount[];
    network: Network;
};

/**
 * Encode TxBody to protobuf binary
 */
const encodeTxBody = (txBody: TxBody): Bytes => {
    const wrappedMessages = txBody.value.messages.map((message) => {
        const messageBytes = encodeTxBodyMessage(message);
        return google.protobuf.Any.create({
            type_url: message.typeUrl,
            value: messageBytes,
        });
    });
    const txBodyProto = cosmos.tx.v1beta1.TxBody.create({
        ...txBody,
        messages: wrappedMessages,
    });

    if (txBody.value.memo) {
        txBodyProto.memo = txBody.value.memo;
    }

    if (txBody.value.timeoutHeight) {
        txBodyProto.timeoutHeight = Long.fromNumber(txBody.value.timeoutHeight);
    }
    return Bytes.fromUint8Array(cosmos.tx.v1beta1.TxBody.encode(txBodyProto).finish());
};

/**
 * Encode TxBody message to protobuf binary
 */
const encodeTxBodyMessage = (message: Msg): Uint8Array => {
    const type = typeUrlMappings[message.typeUrl];
    if (!type) {
        throw new Error(`Unrecognized message type ${message.typeUrl}`);
    }
    const created = type.create(message.value);
    return Uint8Array.from(type.encode(created).finish());
};

const DEFAULT_GAS_LIMIT = 200_000;
const getGasLimit = (authInfo: AuthInfo): Long.Long => {
    const defaultGasLimit = Long.fromNumber(DEFAULT_GAS_LIMIT);
    return authInfo.fee.gasLimit !== undefined && authInfo.fee.gasLimit !== null
        ? Long.fromNumber(authInfo.fee.gasLimit.toNumber())
        : defaultGasLimit;
};

/**
 * Encode AuthInfo message to protobuf binary
 */
const encodeAuthInfo = (authInfo: AuthInfo): Bytes => {
    const encodableAuthInfo: cosmos.tx.v1beta1.IAuthInfo = {
        signerInfos: authInfo.signerInfos.map(
            ({ publicKey, modeInfo, sequence }): cosmos.tx.v1beta1.ISignerInfo => ({
                publicKey: protoEncodePubKey(publicKey),
                modeInfo,
                sequence: sequence ? Long.fromString(sequence.toString()) : undefined,
            }),
        ),
        fee: {
            amount: authInfo.fee.amount !== undefined ? [authInfo.fee.amount.toCosmosCoin()] : [],
            gasLimit: getGasLimit(authInfo),
        },
    };

    return Bytes.fromUint8Array(cosmos.tx.v1beta1.AuthInfo.encode(encodableAuthInfo).finish());
};

/**
 * Encode public key to protobuf Any JS structure
 */
const protoEncodePubKey = (pubKey: Bytes): google.protobuf.IAny => {
    const pubKeyProto = cosmos.crypto.secp256k1.PubKey.create({
        key: pubKey.toUint8Array(),
    });
    return google.protobuf.Any.create({
        type_url: '/cosmos.crypto.secp256k1.PubKey',
        value: Uint8Array.from(cosmos.crypto.secp256k1.PubKey.encode(pubKeyProto).finish()),
    });
};

/**
 * Generate SignDoc binary bytes ready to be signed
 */
const makeSignDoc = (txBodyBytes: Bytes, authInfoBytes: Bytes, chainId: string, accountNumber: Big): Bytes => {
    const signDoc = omitDefaults({
        bodyBytes: txBodyBytes.toUint8Array(),
        authInfoBytes: authInfoBytes.toUint8Array(),
        chainId,
    });
    const signDocProto = cosmos.tx.v1beta1.SignDoc.create(signDoc);
    signDocProto.accountNumber = Long.fromNumber(accountNumber.toNumber());

    return Bytes.fromUint8Array(cosmos.tx.v1beta1.SignDoc.encode(signDocProto).finish());
};
