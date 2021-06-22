import ow from 'ow';
import { google } from '../../../../cosmos/v1beta1/codec/generated/codecimpl';
import { InitConfigurations } from '../../../../core/cro';
import { CosmosMsg } from '../../cosmosMsg';
import { Msg } from '../../../../cosmos/v1beta1/types/msg';
import { COSMOS_MSG_TYPEURL } from '../../../common/constants/typeurl';
import { validateAddress, AddressType } from '../../../../utils/address';
import { owMsgUpgradeClientOptions } from '../../ow.types';
import * as legacyAmino from '../../../../cosmos/amino';

export const msgUpgradeClientIBC = function (config: InitConfigurations) {
    return class MsgUpgradeClient implements CosmosMsg {
        /** MsgUpgradeClient clientId. */
        public clientId: string;

        /** MsgUpgradeClient clientState. */
        public clientState?: google.protobuf.IAny | null;

        /** MsgUpgradeClient consensusState. */
        public consensusState?: google.protobuf.IAny | null;

        /** MsgUpgradeClient proofUpgradeClient. */
        public proofUpgradeClient: Uint8Array;

        /** MsgUpgradeClient proofUpgradeConsensusState. */
        public proofUpgradeConsensusState: Uint8Array;

        /** MsgUpgradeClient signer. */
        public signer: string;

        /**
         * Constructor to create a new IBC.MsgUpgradeClient
         * @param {MsgUpgradeClientOptions} options
         * @returns {MsgUpgradeClient}
         * @throws {Error} when options is invalid
         */
        constructor(options: MsgUpgradeClientOptions) {
            ow(options, 'options', owMsgUpgradeClientOptions);
            this.clientId = options.clientId;
            this.clientState = options.clientState;
            this.proofUpgradeClient = options.proofUpgradeClient;
            this.proofUpgradeConsensusState = options.proofUpgradeConsensusState;
            this.signer = options.signer;
            this.validateAddresses();
        }

        /**
         * Returns the raw Msg representation of Ibc.MsgUpgradeClient
         * @returns {Msg}
         */
        toRawMsg(): Msg {
            return {
                typeUrl: COSMOS_MSG_TYPEURL.ibc.MsgUpgradeClient,
                value: {
                    clientId: this.clientId,
                    clientState: this.clientState,
                    proofUpgradeClient: this.proofUpgradeClient,
                    proofUpgradeConsensusState: this.proofUpgradeConsensusState,
                    signer: this.signer,
                },
            };
        }

        // eslint-disable-next-line class-methods-use-this
        toRawAminoMsg(): legacyAmino.Msg {
            throw new Error('IBC Module not supported under amino encoding scheme');
        }

        validateAddresses() {
            // TODO: Can `signer` be from non-CRO network
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

export type MsgUpgradeClientOptions = {
    clientId: string;

    clientState?: google.protobuf.IAny | null;

    consensusState?: google.protobuf.IAny | null;

    proofUpgradeClient: Uint8Array;

    proofUpgradeConsensusState: Uint8Array;

    signer: string;
};
