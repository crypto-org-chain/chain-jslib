import ow from 'ow';
import Long from 'long';
import { ibc, ics23, google } from '../../../../cosmos/v1beta1/codec/generated/codecimpl';
import { Msg } from '../../../../cosmos/v1beta1/types/msg';
import { COSMOS_MSG_TYPEURL } from '../../../common/constants/typeurl';
import * as legacyAmino from '../../../../cosmos/amino';
import { IGoogleAny } from '../IGoogleAny';
import { owClientStateOptions } from '../../ow.types';

export const msgClientState = function () {
    return class ClientState implements IGoogleAny, ibc.lightclients.tendermint.v1.IClientState {
        /** ClientState chainId. */
        public chainId: string;

        /** ClientState trustLevel. */
        public trustLevel?: IFraction;

        /** ClientState trustingPeriod. */
        public trustingPeriod?: IDuration;

        /** ClientState unbondingPeriod. */
        public unbondingPeriod?: IDuration;

        /** ClientState maxClockDrift. */
        public maxClockDrift?: IDuration;

        /** ClientState frozenHeight. */
        public frozenHeight?: IHeight;

        /** ClientState latestHeight. */
        public latestHeight?: IHeight;

        /** ClientState proofSpecs. */
        public proofSpecs: ics23.IProofSpec[];

        /** ClientState upgradePath. */
        public upgradePath: string[];

        /** ClientState allowUpdateAfterExpiry. */
        public allowUpdateAfterExpiry: boolean;

        /** ClientState allowUpdateAfterMisbehaviour. */
        public allowUpdateAfterMisbehaviour: boolean;

        /**
         * Constructor to create a new IBC.ClientState
         * @param {ClientStateOptions} options
         * @returns {ClientState}
         * @throws {Error} when options is invalid
         */
        constructor(options: ClientStateOptions) {
            ow(options, 'options', owClientStateOptions);

            this.chainId = options.chainId;
            this.trustLevel = options.trustLevel;
            this.trustingPeriod = options.trustingPeriod;
            this.unbondingPeriod = options.unbondingPeriod;
            this.maxClockDrift = options.maxClockDrift;
            this.frozenHeight = options.frozenHeight;
            this.latestHeight = options.latestHeight;
            this.proofSpecs = options.proofSpecs;
            this.upgradePath = options.upgradePath;
            this.allowUpdateAfterExpiry = options.allowUpdateAfterExpiry;
            this.allowUpdateAfterMisbehaviour = options.allowUpdateAfterMisbehaviour;
        }

        getEncoded(): google.protobuf.Any {
            const clientStateOptions = {
                chainId: this.chainId,
                trustLevel: this.trustLevel,
                trustingPeriod: this.trustingPeriod,
                unbondingPeriod: this.unbondingPeriod,
                maxClockDrift: this.maxClockDrift,
                frozenHeight: this.frozenHeight,
                latestHeight: this.latestHeight,
                proofSpecs: this.proofSpecs,
                upgradePath: this.upgradePath,
                allowUpdateAfterExpiry: this.allowUpdateAfterExpiry,
                allowUpdateAfterMisbehaviour: this.allowUpdateAfterMisbehaviour,
            };

            const clientStateWrapped = ibc.lightclients.tendermint.v1.ClientState.create(clientStateOptions);
            return google.protobuf.Any.create({
                type_url: COSMOS_MSG_TYPEURL.ibc.LightClients.ClientState,
                value: ibc.lightclients.tendermint.v1.ClientState.encode(clientStateWrapped).finish(),
            });
        }

        /**
         * Returns the raw Msg representation of Ibc.ClientState
         * @returns {Msg}
         */
        toRawMsg(): Msg {
            return {
                typeUrl: COSMOS_MSG_TYPEURL.ibc.LightClients.ClientState,
                value: {
                    chainId: this.chainId,
                    trustLevel: this.trustLevel,
                    trustingPeriod: this.trustingPeriod,
                    unbondingPeriod: this.unbondingPeriod,
                    maxClockDrift: this.maxClockDrift,
                    frozenHeight: this.frozenHeight,
                    latestHeight: this.latestHeight,
                    proofSpecs: this.proofSpecs,
                    upgradePath: this.upgradePath,
                    allowUpdateAfterExpiry: this.allowUpdateAfterExpiry,
                    allowUpdateAfterMisbehaviour: this.allowUpdateAfterMisbehaviour,
                },
            };
        }

        // eslint-disable-next-line class-methods-use-this
        toRawAminoMsg(): legacyAmino.Msg {
            throw new Error('IBC Module not supported under amino encoding scheme');
        }

        /**
         * Returns an instance of IBC.ClientState
         * @param {string} msgJsonStr
         * @param {Network} network
         * @returns {ClientState}
         */
        public static fromCosmosMsgJSON(_msgJsonStr: string): ClientState {
            throw new Error('IBC Module does not support JSON decoding.');
        }
    };
};

export type ClientStateOptions = {
    chainId: string;
    trustLevel?: IFraction;
    trustingPeriod?: IDuration;
    unbondingPeriod?: IDuration;
    maxClockDrift?: IDuration;
    frozenHeight?: IHeight;
    latestHeight?: IHeight;
    proofSpecs: ics23.ProofSpec[];
    upgradePath: string[];
    allowUpdateAfterExpiry: boolean;
    allowUpdateAfterMisbehaviour: boolean;
};

export interface IFraction {
    numerator: Long;
    denominator: Long;
}

export interface IDuration {
    seconds: Long;
    nanos: number;
}

export interface IHeight {
    revisionNumber: Long;
    revisionHeight: Long;
}
