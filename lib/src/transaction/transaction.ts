// Copyright © 2018–2020 IOV SAS (licensed under the Apache License, Version 2.0)
// Copyright © 2020 Confio UO (licensed under the Apache License, Version 2.0)
// Copyright © 2020 Simon Warta (licensed under the Apache License, Version 2.0)
// Modifications Copyright (c) 2018 - 2020, Foris Limited (licensed under the Apache License, Version 2.0)
import ow from 'ow';
import Big from 'big.js';
import Long from 'long';

import { cosmos, google } from '../cosmos/v1beta1/codec';
import { omitDefaults } from '../cosmos/v1beta1/adr27';
import { owMsg, Msg } from '../cosmos/v1beta1/types/msg';
import { AuthInfo, TxBody, TxRaw } from '../cosmos/v1beta1/types/tx';
import { typeUrlMappings } from '../cosmos/v1beta1/types/typeurls';
import { owOptions, owSigner } from './ow.types';
import { Secp256k1KeyPair } from '../keypair/secp256k1';
import { Bytes } from '../utils/bytes/bytes';
import { sha256 } from '../utils/hash';
import { isValidSepc256k1PublicKey } from '../utils/secp256k1';
import { isBigInteger } from '../utils/big';
import { owSecp256k1KeyPair } from '../keypair/ow.types';
import { MsgSend } from './msg/msgsend';

export class Transaction {
    private txBody: TxBody = {
        typeUrl: '/cosmos.tx.v1beta1.TxBody',
        value: {
            messages: [],
        },
    };

    private authInfo: AuthInfo = {
        signerInfos: [],
        fee: {
            gasLimit: new Big(200000),
        },
    };

    private txRaw?: TxRaw;

    private chainId: string;

    private signerAccountNumbers: SignerAccountNumber[] = [];

    /**
     * Constructor to create a new Transaction
     * @param {TransactionOption} options
     * @returns {Transaction}
     * @throws {Error} when options is invalid
     */
    public constructor(options: TransactionOptions) {
        ow(options, 'options', owOptions);

        this.chainId = options.chainId;
    }

    /**
     * Append Cosmos message to transaction
     * @param {Msg} message one of the supported Cosmos message
     * @returns {Transaction}
     * @throws {Error} when message is invalid
     * @memberof Transaction
     */
    public appendTxBodyMessage(message: Msg): Transaction {
        ow(message, 'message', owMsg);

        if (this.hasSignature()) {
            throw new Error(`Transaction already signing`);
        }

        this.txBody.value.messages.push(message);

        return this;
    }

    public appendTxBodyMsgSend(message: MsgSend): Transaction {
        return this.appendTxBodyMessage(message.toMsg());
    }

    /**
     * Add a signer to the transaction. The signer orders will follow the order of adding it.
     * @param {TransactionSigner} signer
     * @param {Bytes} signer.publicKey signer public key
     * @param {Big} signer.accountNumber  account number of the signer address
     * @param {Big} signer.accountSequence account sequence of the signer address
     * @returns {Transaction}
     * @throws {Error} when argument is invalid
     * @memberof Transaction
     */
    public addSigner(signer: TransactionSigner): Transaction {
        ow(signer, 'signer', owSigner);

        const publicKeyResult = isValidSepc256k1PublicKey(signer.publicKey);
        if (!publicKeyResult.ok) {
            throw new TypeError(publicKeyResult.err('signer'));
        }

        if (!isBigInteger(signer.accountNumber) && signer.accountNumber.gte(0)) {
            throw new TypeError(`Expected accountNumber to be of positive integer, got \`${signer.accountNumber}\``);
        }
        if (!isBigInteger(signer.accountSequence) && signer.accountSequence.gte(0)) {
            throw new TypeError(`Expected accountNumber to be of positive integer, got \`${signer.accountNumber}\``);
        }

        if (this.hasSignature()) {
            throw new Error(`Transaction already signing`);
        }

        this.authInfo.signerInfos.push({
            publicKey: signer.publicKey,
            // TODO: support multisig
            modeInfo: {
                single: {
                    mode: cosmos.tx.signing.v1beta1.SignMode.SIGN_MODE_DIRECT,
                },
            },
            sequence: signer.accountSequence,
        });
        this.signerAccountNumbers.push([signer.publicKey, signer.accountNumber]);

        return this;
    }

    /**
     * Sign the transaction of specified signer index using KeyPair
     * @param {number} index index of the signer
     * @param {Secp256k1KeyPair} keyPair KeyPair to sign the transaction
     * @returns {Transaction}
     * @throws {Error} when argument is invalid
     * @memberof Transaction
     */
    public sign(index: number, keyPair: Secp256k1KeyPair): Transaction {
        ow(index, 'index', ow.number.integer.greaterThanOrEqual(0));
        ow(keyPair, 'keyPair', owSecp256k1KeyPair());

        if (!this.isIndexValid(index)) {
            throw new Error(`Expected \`index\` to be within signer size, got \`${index}\``);
        }

        const pubKey = this.signerAccountNumbers[index][0];
        const accountNumber = this.signerAccountNumbers[index][1];
        if (!keyPair.getPubKey().isEqual(pubKey)) {
            throw new Error(
                `Expected \`keyPair\` to be able to sign the public key at index \`${index}\`, but couldn't`,
            );
        }

        this.prepareTxRaw();

        const signDoc = makeSignDoc(this.txRaw!.bodyBytes, this.txRaw!.authInfoBytes, this.chainId, accountNumber);
        const signDocBytes = sha256(signDoc);
        const signature = keyPair.sign(signDocBytes);

        this.txRaw!.signatures[index] = signature;

        return this;
    }

    private prepareTxRaw() {
        if (this.txRaw) {
            return;
        }

        const bodyBytes = encodeTxBody(this.txBody);
        const authInfoBytes = encodeAuthInfo(this.authInfo);
        this.txRaw = {
            bodyBytes,
            authInfoBytes,
            signatures: this.authInfo.signerInfos.map(() => EMPTY_SIGNATURE),
        };
    }

    /**
     * Encode the TxRaw to binary for broadcast
     * @throws {Error} when the transaction is not completely signed
     * @memberof Transaction
     */
    public encode(): Bytes {
        if (!this.isCompletelySigned()) {
            throw new Error('Transaction is not completely signed');
        }
        return encodeTxRaw(this.txRaw!);
    }

    /**
     * Returns TxBody
     * @returns {TxBody}
     * @memberof Transaction
     */
    public getTxBody(): Readonly<TxBody> {
        return this.txBody;
    }

    /**
     * Returns AuthInfo
     * @returns {AuthInfo}
     * @memberof Transaction
     */
    public getAuthInfo(): Readonly<AuthInfo> {
        return this.authInfo;
    }

    /**
     * Returns TxRaw when the transaction has started signing
     * @returns {TxRaw | undefined}
     * @memberof Transaction
     */
    public getTxRaw(): Readonly<TxRaw | undefined> {
        return this.txRaw;
    }

    /**
     * Returns true when the transaction has at least one signature
     * @returns {boolean}
     * @memberof Transaction
     */
    public hasSignature(): boolean {
        return !!this.txRaw && this.txRaw.signatures.some((signature) => !signature.isEqual(EMPTY_SIGNATURE));
    }

    /**
     * Returns true when the signer index is already signed
     * @param {index} index
     * @returns {boolean}
     * @throws {Error} when index is invalid
     * @memberof Transaction
     */
    public isIndexSigned(index: number): boolean {
        ow(index, 'index', ow.number.integer);

        if (!this.isIndexValid(index)) {
            throw new Error(`Expected \`index\` to be within signer size, got \`${index}\``);
        }

        if (!this.hasSignature()) {
            return false;
        }

        return !this.txRaw!.signatures[index].isEqual(EMPTY_SIGNATURE);
    }

    private isIndexValid(index: number): boolean {
        return index < this.authInfo.signerInfos.length;
    }

    /**
     * Return chain id of the transaction
     * @returns {string}
     * @memberof Transaction
     */
    public getChainId(): Readonly<string> {
        return this.chainId;
    }

    /**
     * Return signer account numbers array
     * @returns {SignerAccountNumber[]}
     * @memberof Transaction
     */
    public getSignerAccountNumbers(): Readonly<SignerAccountNumber[]> {
        return this.signerAccountNumbers;
    }

    /**
     * Returns transaction hash in uppercase
     * @returns {string}
     * @throws {Error} when transaction is not completely signed
     * @memberof Transaction
     */
    public getTxHash(): string {
        if (!this.isCompletelySigned()) {
            throw new Error('Transaction is not completely signed');
        }

        return sha256(this.encode()).toHexString().toUpperCase();
    }

    /**
     * Returns true when the transaction is completely signed
     * @returns {boolean}
     * @memberof Transaction
     */
    public isCompletelySigned(): boolean {
        return this.hasSignature() && this.txRaw!.signatures.every((signature) => !signature.isEqual(EMPTY_SIGNATURE));
    }

    // TODO: Coin needs to support network
    // public setFee(coin: Coin): Transaction {}

    // TODO:
    // public setGasLimit()

    // TODO: support offline signing (export and import)
    // public export(): Bytes
    // public static import(transaction: Bytes)
}

export type TransactionOptions = {
    chainId: string;
};

export type TransactionSigner = {
    publicKey: Bytes;
    accountNumber: Big;
    accountSequence: Big;
};

type SignerAccountNumber = [PublicKey, Big];
type PublicKey = Bytes;

/**
 * Encode TxBody to protobuf binary
 * @param {TxBody} txBody
 * @throws {Error} when message type corresponding protobuf is not found
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
    return Bytes.fromUint8Array(cosmos.tx.v1beta1.TxBody.encode(txBodyProto).finish());
};

/**
 * Encode TxBody message to protobuf binary
 * @param {Msg} message
 * @throws {Error} when message type corresponding protobuf is not found
 */
const encodeTxBodyMessage = (message: Msg): Uint8Array => {
    const type = typeUrlMappings[message.typeUrl];
    if (!type) {
        throw new Error(`Unrecognized message type ${message.typeUrl}`);
    }
    const created = type.create(message.value);
    return Uint8Array.from(type.encode(created).finish());
};

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
            // TODO:
            // amount: feeAmount,
            gasLimit: Long.fromNumber(200000),
        },
    };
    return Bytes.fromUint8Array(cosmos.tx.v1beta1.AuthInfo.encode(encodableAuthInfo).finish());
};

const protoEncodePubKey = (pubKey: Bytes): google.protobuf.IAny => {
    const pubKeyProto = cosmos.crypto.secp256k1.PubKey.create({
        key: pubKey.toUint8Array(),
    });
    return google.protobuf.Any.create({
        type_url: '/cosmos.crypto.secp256k1.PubKey',
        value: Uint8Array.from(cosmos.crypto.secp256k1.PubKey.encode(pubKeyProto).finish()),
    });
};

const makeSignDoc = (txBodyBytes: Bytes, authInfoBytes: Bytes, chainId: string, accountNumber: Big): Bytes => {
    const signDoc = omitDefaults({
        bodyBytes: txBodyBytes.toUint8Array(),
        authInfoBytes: authInfoBytes.toUint8Array(),
        chainId,
        accountNumber: Long.fromString(accountNumber.toString()),
    });
    const signDocProto = cosmos.tx.v1beta1.SignDoc.create(signDoc);
    return Bytes.fromUint8Array(cosmos.tx.v1beta1.SignDoc.encode(signDocProto).finish());
};

const encodeTxRaw = (txRaw: TxRaw): Bytes => {
    const encodableTxRaw = {
        bodyBytes: txRaw.bodyBytes.toUint8Array(),
        authInfoBytes: txRaw.authInfoBytes.toUint8Array(),
        signatures: txRaw.signatures.map((signature) => signature.toUint8Array()),
    };
    const txRawProto = cosmos.tx.v1beta1.TxRaw.create(encodableTxRaw);
    return Bytes.fromUint8Array(cosmos.tx.v1beta1.TxRaw.encode(txRawProto).finish());
};

const EMPTY_SIGNATURE = Bytes.fromHexString('00');
