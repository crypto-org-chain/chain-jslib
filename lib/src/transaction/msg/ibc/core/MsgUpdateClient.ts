import ow from 'ow';
import { google } from '../../../../cosmos/v1beta1/codec/generated/codecimpl';
import { InitConfigurations } from '../../../../core/cro';
import { CosmosMsg } from '../../cosmosMsg';
import { Msg } from '../../../../cosmos/v1beta1/types/msg';
import { COSMOS_MSG_TYPEURL } from '../../../common/constants/typeurl';
import { validateAddress, AddressType } from '../../../../utils/address';
import { owMsgUpdateClientOptions } from '../../ow.types';
import * as legacyAmino from '../../../../cosmos/amino';

export const msgUpdateClientIBC = function (config: InitConfigurations) {
    return class MsgUpdateClient implements CosmosMsg {
        /** MsgUpdateClient clientId. */
        public clientId: string;

        /** MsgUpdateClient header. */
        public header?: google.protobuf.IAny | null;

        /** MsgUpdateClient signer. */
        public signer: string;

        /**
         * Constructor to create a new IBC.MsgUpdateClient
         * @param {MsgUpdateClientOptions} options
         * @returns {MsgUpdateClient}
         * @throws {Error} when options is invalid
         */
        constructor(options: MsgUpdateClientOptions) {
            ow(options, 'options', owMsgUpdateClientOptions);
            this.clientId = options.clientId;
            this.header = options.header;
            this.signer = options.signer;
            this.validateAddresses();
        }

        /**
         * Returns the raw Msg representation of Ibc.MsgUpdateClient
         * @returns {Msg}
         */
        toRawMsg(): Msg {
            return {
                typeUrl: COSMOS_MSG_TYPEURL.ibc.MsgUpdateClient,
                value: {
                    clientId: this.clientId,
                    header: this.header,
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

export type MsgUpdateClientOptions = {
    clientId: string;
    header?: google.protobuf.IAny | null;
    signer: string;
};
