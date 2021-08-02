/* eslint-disable camelcase */
import ow from 'ow';
import Long from 'long';
import { InitConfigurations } from '../../../../../core/cro';
import { CosmosMsg } from '../../../cosmosMsg';
import { Msg } from '../../../../../cosmos/v1beta1/types/msg';
import { COSMOS_MSG_TYPEURL } from '../../../../common/constants/typeurl';
import { validateAddress, AddressType } from '../../../../../utils/address';
import { owMsgConnectionOpenTryOptions } from '../../../ow.types';
import * as legacyAmino from '../../../../../cosmos/amino';
import { Bytes } from '../../../../../utils/bytes/bytes';
import { ibc } from '../../../../../cosmos/v1beta1/codec/generated/codecimpl';

export const MsgConnectionOpenTryIBC = function (config: InitConfigurations) {
    return class MsgConnectionOpenTry implements CosmosMsg {
        /** MsgConnectionOpenTry clientId. */
        public clientId: string;

        /** MsgConnectionOpenTry previousConnectionId. */
        public previousConnectionId: string;

        /** MsgConnectionOpenTry clientState. */
        public clientState?: ibc.lightclients.tendermint.v1.IClientState | null;

        /** MsgConnectionOpenTry counterparty. */
        public counterparty?: Counterparty | null;

        /** MsgConnectionOpenTry delayPeriod. */
        public delayPeriod: Long;

        /** MsgConnectionOpenTry counterpartyVersions. */
        public counterpartyVersions: CounterpartyVersion[];

        /** MsgConnectionOpenTry proofHeight. */
        public proofHeight?: IHeight | null;

        /** MsgConnectionOpenTry proofInit. */
        public proofInit: Uint8Array;

        /** MsgConnectionOpenTry proofClient. */
        public proofClient: Uint8Array;

        /** MsgConnectionOpenTry proofConsensus. */
        public proofConsensus: Uint8Array;

        /** MsgConnectionOpenTry consensusHeight. */
        public consensusHeight?: IHeight | null;

        /** MsgConnectionOpenTry signer. */
        public signer: string;

        /**
         * Constructor to create a new IBC.MsgConnectionOpenTry
         * @param {MsgConnectionOpenTryOptions} options
         * @returns {MsgConnectionOpenTry}
         * @throws {Error} when options is invalid
         */
        constructor(options: MsgConnectionOpenTryOptions) {
            ow(options, 'options', owMsgConnectionOpenTryOptions);
            this.clientId = options.clientId;
            this.previousConnectionId = options.previousConnectionId;
            this.clientState = options.clientState;
            this.counterparty = options.counterparty;
            this.delayPeriod = options.delayPeriod;
            this.counterpartyVersions = options.counterpartyVersions;
            this.proofHeight = options.proofHeight;
            this.proofInit = options.proofInit;
            this.proofClient = options.proofClient;
            this.proofConsensus = options.proofConsensus;
            this.consensusHeight = options.consensusHeight;
            this.signer = options.signer;

            this.validateAddresses();
        }

        /**
         * Returns the raw Msg representation of Ibc.MsgConnectionOpenTry
         * @returns {Msg}
         */
        toRawMsg(): Msg {
            return {
                typeUrl: COSMOS_MSG_TYPEURL.ibc.connection.MsgConnectionOpenTry,
                value: {
                    clientId: this.clientId,
                    previousConnectionId: this.previousConnectionId,
                    clientState: this.clientState,
                    counterparty: this.counterparty,
                    delayPeriod: this.delayPeriod,
                    counterpartyVersions: this.counterpartyVersions,
                    proofHeight: this.proofHeight,
                    proofInit: this.proofInit,
                    proofClient: this.proofClient,
                    proofConsensus: this.proofConsensus,
                    consensusHeight: this.consensusHeight,
                    signer: this.signer,
                },
            };
        }

        // eslint-disable-next-line class-methods-use-this
        toRawAminoMsg(): legacyAmino.Msg {
            throw new Error('IBC Module not supported under amino encoding scheme');
        }

        /**
         * Returns an instance of IBC.MsgConnectionOpenTry
         * @param {string} msgJsonStr
         * @param {Network} network
         * @returns {MsgConnectionOpenTry}
         */
        public static fromCosmosMsgJSON(msgJsonStr: string): MsgConnectionOpenTry {
            const parsedMsg = JSON.parse(msgJsonStr) as MsgConnectionOpenTryJSON;
            if (parsedMsg['@type'] !== COSMOS_MSG_TYPEURL.ibc.connection.MsgConnectionOpenTry) {
                throw new Error(
                    `Expected ${COSMOS_MSG_TYPEURL.ibc.connection.MsgConnectionOpenTry} but got ${parsedMsg['@type']}`,
                );
            }

            try {
                Bytes.fromBase64String(parsedMsg.proof_init);
                Bytes.fromBase64String(parsedMsg.proof_client);
                Bytes.fromBase64String(parsedMsg.proof_consensus);
            } catch (error) {
                throw new Error('Invalid Base64 string received in JSON.');
            }

            // TODO: Not support `client_state`, Will need another issue
            if (parsedMsg.client_state && Object.keys(parsedMsg.client_state).length > 0) {
                throw new Error('MsgConnectionOpenTry doesnot support `client_state` JSON decoding.');
            }

            let proofHeight;
            let consensusHeight;
            let counterparty;
            if (typeof parsedMsg.proof_height === 'object' && Object.keys(parsedMsg.proof_height).length > 0) {
                proofHeight = {
                    revisionHeight: Long.fromString(parsedMsg.proof_height?.revision_height!),
                    revisionNumber: Long.fromString(parsedMsg.proof_height?.revision_number!),
                };
            }
            if (typeof parsedMsg.consensus_height === 'object' && Object.keys(parsedMsg.consensus_height).length > 0) {
                consensusHeight = {
                    revisionNumber: Long.fromString(parsedMsg.consensus_height.revision_number),
                    revisionHeight: Long.fromString(parsedMsg.consensus_height.revision_height),
                };
            }
            if (typeof counterparty === 'object' && Object.keys(parsedMsg.counterparty).length > 0) {
                counterparty = {
                    clientId: parsedMsg.counterparty.client_id,
                    connectionId: parsedMsg.counterparty.connection_id,
                    prefix: {
                        keyPrefix: parsedMsg.counterparty.prefix.key_prefix,
                    },
                };
            }

            let counterPartyVersionList: CounterpartyVersion[] = [];
            if (typeof parsedMsg.counterparty_versions === 'object' && parsedMsg.counterparty_versions.length > 0) {
                counterPartyVersionList = parsedMsg.counterparty_versions.map((counterpartyVersion) => {
                    return {
                        identifier: counterpartyVersion.identifier,
                        features: counterpartyVersion.features,
                    };
                });
            }

            return new MsgConnectionOpenTry({
                clientId: parsedMsg.client_id,
                previousConnectionId: parsedMsg.previous_connection_id,
                clientState: undefined, // TODO, keeping default `undefined`
                counterparty,
                delayPeriod: Long.fromString(parsedMsg.delay_period),
                counterpartyVersions: counterPartyVersionList,
                proofHeight,
                proofInit: Bytes.fromBase64String(parsedMsg.proof_init).toUint8Array(),
                proofClient: Bytes.fromBase64String(parsedMsg.proof_client).toUint8Array(),
                proofConsensus: Bytes.fromBase64String(parsedMsg.proof_consensus).toUint8Array(),
                consensusHeight,
                signer: parsedMsg.signer,
            });
        }

        validateAddresses() {
            if (
                !validateAddress({
                    address: this.signer,
                    network: config.network,
                    type: AddressType.USER,
                })
            ) {
                throw new TypeError('Provided `signer` does not match network selected');
            }
        }
    };
};

export interface MsgConnectionOpenTryOptions {
    clientId: string;
    previousConnectionId: string;
    clientState?: ibc.lightclients.tendermint.v1.IClientState | null;
    counterparty?: Counterparty | null;
    delayPeriod: Long;
    counterpartyVersions: CounterpartyVersion[];
    proofHeight?: IHeight | null;
    proofInit: Uint8Array;
    proofClient: Uint8Array;
    proofConsensus: Uint8Array;
    consensusHeight?: IHeight | null;
    signer: string;
}
export interface CounterpartyVersion {
    identifier: string;
    features: string[];
}
export interface Counterparty {
    clientId: string;
    connectionId: string;
    prefix: Prefix;
}
export interface Prefix {
    keyPrefix: string;
}
export interface IHeight {
    revisionNumber: Long;
    revisionHeight: Long;
}

/** JSON TYPES * */

export interface MsgConnectionOpenTryJSON {
    '@type': string;
    client_id: string;
    previous_connection_id: string;
    client_state: ClientStateJSON;
    counterparty: CounterpartyJSON;
    delay_period: string;
    counterparty_versions: CounterpartyVersion[];
    proof_height: Height;
    proof_init: string;
    proof_client: string;
    proof_consensus: string;
    consensus_height: Height;
    signer: string;
}

export interface ClientStateJSON {
    '@type': string;
    chain_id: string;
    trust_level: TrustLevelJSON;
    trusting_period: string;
    unbonding_period: string;
    max_clock_drift: string;
    frozen_height: Height;
    latest_height: Height;
    proof_specs: ProofSpecJSON[];
    upgrade_path: string[];
    allow_update_after_expiry: boolean;
    allow_update_after_misbehaviour: boolean;
}
export interface Height {
    revision_number: string;
    revision_height: string;
}

export interface ProofSpecJSON {
    leaf_spec: LeafSpecJSON;
    inner_spec: InnerSpecJSON;
    max_depth: number;
    min_depth: number;
}

export interface InnerSpecJSON {
    child_order: number[];
    child_size: number;
    min_prefix_length: number;
    max_prefix_length: number;
    empty_child: null;
    hash: string;
}

export interface LeafSpecJSON {
    hash: string;
    prehash_key: string;
    prehash_value: string;
    length: string;
    prefix: string;
}

export interface TrustLevelJSON {
    numerator: string;
    denominator: string;
}

export interface CounterpartyJSON {
    client_id: string;
    connection_id: string;
    prefix: PrefixJSON;
}

export interface PrefixJSON {
    key_prefix: string;
}
