import { Factory } from 'rosie';
import Big from 'big.js';
import { Chance } from 'chance';

import { Secp256k1KeyPair } from '../keypair/secp256k1';
import { Network } from '../network/network';
import { Msg } from '../cosmos/v1beta1/types/msg';
import { TransactionSigner } from './raw';
import { SignableTransaction, SignableTransactionParams } from './signable';
import { cosmos } from '../cosmos/v1beta1/codec';
import { TxRaw } from '../cosmos/v1beta1/types/tx';
import { CroNetwork, CroSDK } from '../core/cro';

const chance = new Chance();

export type MessageSuite = {
    network: Network; // option
    keyPair: Secp256k1KeyPair;
    message: Msg;
};
const cro = CroSDK({ network: CroNetwork.Testnet });

export const MessageSuiteFactory = new Factory<MessageSuite>()
    .option('network', CroNetwork.Testnet)
    .attr('keyPair', () => Secp256k1KeyPair.generateRandom())
    .attr('message', ['network', 'keyPair'], (_: Network, keyPair: Secp256k1KeyPair) => ({
        typeUrl: '/cosmos.bank.v1beta1.MsgSend',
        value: {
            fromAddress: new cro.Address(keyPair.getPubKey()).account(),
            toAddress: 'tcro184lta2lsyu47vwyp2e8zmtca3k5yq85p6c4vp3',
            amount: [
                {
                    denom: 'basetcro',
                    amount: chance.integer().toString(),
                },
            ],
        },
    }));

export const TransactionSignerFactory = new Factory<TransactionSigner & { keyPair: Secp256k1KeyPair }>()
    .option('keyPair', () => Secp256k1KeyPair.generateRandom())
    .attr('publicKey', ['keyPair'], (keyPair: Secp256k1KeyPair) => keyPair.getPubKey())
    .attrs({
        accountNumber: new Big(chance.integer({ min: 0 })),
        accountSequence: new Big(chance.integer({ min: 0 })),
    });

export type SignableTransactionParamsSuite = {
    network: Network; // option
    keyPair: Secp256k1KeyPair;
    params: SignableTransactionParams;
};
export const SignableTransactionParamsSuiteFactory = new Factory<SignableTransactionParamsSuite>()
    .option('network', CroNetwork.Testnet)
    .attr('keyPair', () => Secp256k1KeyPair.generateRandom())
    .attr(
        'params',
        ['network', 'keyPair'],
        (network: Network, keyPair: Secp256k1KeyPair): SignableTransactionParams => {
            const { message } = MessageSuiteFactory.build(
                {},
                {
                    keyPair,
                },
            );
            const pubKey = keyPair.getPubKey();

            return {
                txBody: {
                    typeUrl: '/cosmos.tx.v1beta1.TxBody',
                    value: {
                        messages: [message],
                    },
                },
                authInfo: {
                    signerInfos: [
                        {
                            publicKey: pubKey,
                            modeInfo: {
                                single: {
                                    mode: cosmos.tx.signing.v1beta1.SignMode.SIGN_MODE_DIRECT,
                                },
                            },
                            sequence: new Big(chance.integer({ min: 0 })),
                        },
                    ],
                    fee: {
                        gasLimit: new Big(chance.integer({ min: 0 })),
                    },
                },
                network,
                signerAccounts: [
                    {
                        publicKey: pubKey,
                        accountNumber: new Big(chance.integer({ min: 0 })),
                    },
                ],
            };
        },
    );

export const txRawFactory = {
    build: (): TxRaw => {
        const { keyPair, params } = SignableTransactionParamsSuiteFactory.build();
        const signableTx = new SignableTransaction(params);
        const signDoc = signableTx.toSignDoc(0);

        const signature = keyPair.sign(signDoc);
        signableTx.setSignature(0, signature);

        return signableTx.getTxRaw();
    },
};
