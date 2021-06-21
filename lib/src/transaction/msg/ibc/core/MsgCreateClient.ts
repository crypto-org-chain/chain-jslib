import ow from 'ow';
import { google } from '../../../../cosmos/v1beta1/codec/generated/codecimpl';
import { InitConfigurations } from '../../../../core/cro';
import { CosmosMsg } from '../../cosmosMsg';
import { Msg } from '../../../../cosmos/v1beta1/types/msg';
import { COSMOS_MSG_TYPEURL } from '../../../common/constants/typeurl';
import { validateAddress, AddressType } from '../../../../utils/address';
import { owMsgCreateClientOptions } from '../../ow.types';
import * as legacyAmino from '../../../../cosmos/amino';

export const msgCreateClientIBC = function (config: InitConfigurations) {
    return class MsgCreateClient implements CosmosMsg {
        /** MsgCreateClient clientState. */
        public clientState?: google.protobuf.IAny | null;

        /** MsgCreateClient consensusState. */
        public consensusState?: google.protobuf.IAny | null;

        /** MsgCreateClient signer. */
        public signer: string;

        /**
         * Constructor to create a new IBC.MsgCreateClient
         * @param {MsgCreateClientOptions} options
         * @returns {MsgCreateClient}
         * @throws {Error} when options is invalid
         */
        constructor(options: MsgCreateClientOptions) {
            ow(options, 'options', owMsgCreateClientOptions);
            this.clientState = options.clientState;
            this.consensusState = options.consensusState;
            this.signer = options.signer;
            this.validateAddresses();
        }

        /**
         * Returns the raw Msg representation of IBCTransfer
         * @returns {Msg}
         */
        toRawMsg(): Msg {
            return {
                typeUrl: COSMOS_MSG_TYPEURL.ibc.MsgCreateClient,
                value: {
                    clientState: this.clientState,
                    consensusState: this.consensusState,
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

export type MsgCreateClientOptions = {
    clientState?: google.protobuf.IAny | null;
    consensusState?: google.protobuf.IAny | null;
    signer: string;
};
