import ow from 'ow';
import Long from 'long';
import { ibc, google } from '../../../../cosmos/v1beta1/codec/generated/codecimpl';
import { Msg } from '../../../../cosmos/v1beta1/types/msg';
import { COSMOS_MSG_TYPEURL } from '../../../common/constants/typeurl';
import * as legacyAmino from '../../../../cosmos/amino';
import { IGoogleAny } from '../IGoogleAny';
import { owConsensusStateOptions } from '../../ow.types';

export const msgConsensusState = function () {
    return class ConsensusState implements IGoogleAny, ibc.lightclients.tendermint.v1.ConsensusState {
        /** ConsensusState timestamp. */
        public timestamp?: IDuration | null;

        /** ConsensusState root. */
        public root?: IMerkleRoot | null;

        /** ConsensusState nextValidatorsHash. */
        public nextValidatorsHash: Uint8Array;

        /**
         * Constructor to create a new IBC.ConsensusState
         * @param {ConsensusStateOptions} options
         * @returns {ConsensusState}
         * @throws {Error} when options is invalid
         */
        constructor(options: ConsensusStateOptions) {
            ow(options, 'options', owConsensusStateOptions);

            this.timestamp = options.timestamp;
            this.root = options.root;
            this.nextValidatorsHash = options.nextValidatorsHash;
        }

        getEncoded(): google.protobuf.Any {
            const ConsensusStateOptions = {
                timestamp: this.timestamp,
                root: this.root,
                nextValidatorsHash: this.nextValidatorsHash,
            };

            const ConsensusStateWrapped = ibc.lightclients.tendermint.v1.ConsensusState.create(ConsensusStateOptions);
            return google.protobuf.Any.create({
                type_url: COSMOS_MSG_TYPEURL.ibc.LightClients.ConsensusState,
                value: ibc.lightclients.tendermint.v1.ConsensusState.encode(ConsensusStateWrapped).finish(),
            });
        }

        /**
         * Returns the raw Msg representation of Ibc.ConsensusState
         * @returns {Msg}
         */
        toRawMsg(): Msg {
            return {
                typeUrl: COSMOS_MSG_TYPEURL.ibc.LightClients.ConsensusState,
                value: {
                    timestamp: this.timestamp,
                    root: this.root,
                    nextValidatorsHash: this.nextValidatorsHash,
                },
            };
        }

        // eslint-disable-next-line class-methods-use-this
        toRawAminoMsg(): legacyAmino.Msg {
            throw new Error('IBC Module not supported under amino encoding scheme');
        }

        /**
         * Returns an instance of IBC.ConsensusState
         * @param {string} msgJsonStr
         * @param {Network} network
         * @returns {ConsensusState}
         */
        public static fromCosmosMsgJSON(_msgJsonStr: string): ConsensusState {
            throw new Error('IBC Module does not support JSON decoding.');
        }
    };
};

export type ConsensusStateOptions = {
    timestamp?: IDuration | null;
    root?: IMerkleRoot | null;
    nextValidatorsHash: Uint8Array;
};

export interface IDuration {
    seconds: Long;
    nanos: number;
}

export interface IMerkleRoot {
    hash: Uint8Array | null;
}
