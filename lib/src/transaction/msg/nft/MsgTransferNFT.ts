import ow from 'ow';
import { Msg } from '../../../cosmos/v1beta1/types/msg';
import { owMsgTransferNFTOptions } from '../ow.types';
import { InitConfigurations } from '../../../core/cro';
import { AddressType, validateAddress } from '../../../utils/address';
import { CosmosMsg } from '../cosmosMsg';
import { COSMOS_MSG_TYPEURL } from '../../common/constants/typeurl';
import * as legacyAmino from '../../../cosmos/amino';

export const msgTransferNFT = function (config: InitConfigurations) {
    return class MsgTransferNFT implements CosmosMsg {
        /** MsgTransferNFT id. */
        public id: string;

        /** MsgTransferNFT denomId. */
        public denomId: string;

        /** MsgTransferNFT name. */
        public name: string;

        /** MsgTransferNFT uri. */
        public uri: string;

        /** MsgTransferNFT data. */
        public data: string;

        /** MsgTransferNFT sender. */
        public sender: string;

        /** MsgTransferNFT recipient. */
        public recipient: string;

        /**
         * Constructor to create a new MsgTransferNFT
         * @param {MsgTransferNFTOptions} options
         * @returns {MsgTransferNFT}
         * @throws {Error} when options is invalid
         */
        constructor(options: MsgTransferNFTOptions) {
            ow(options, 'options', owMsgTransferNFTOptions);

            this.id = options.id;
            this.name = options.name;
            this.sender = options.sender;
            this.denomId = options.denomId;
            this.uri = options.uri;
            this.data = options.data;
            this.recipient = options.recipient;

            this.validateAddresses();
        }

        /**
         * Returns the raw Msg representation of MsgTransferNFT
         * @returns {Msg}
         */
        toRawMsg(): Msg {
            return {
                typeUrl: COSMOS_MSG_TYPEURL.nft.MsgTransferNFT,
                value: {
                    id: this.id,
                    name: this.name,
                    sender: this.sender,
                    denomId: this.denomId,
                    uri: this.uri,
                    data: this.data,
                    recipient: this.recipient,
                },
            };
        }

        // eslint-disable-next-line class-methods-use-this
        toRawAminoMsg(): legacyAmino.Msg {
            throw new Error('Amino encoding format not support for NFT module.');
        }

        validateAddresses() {
            if (
                !validateAddress({
                    address: this.sender,
                    network: config.network,
                    type: AddressType.USER,
                })
            ) {
                throw new TypeError('Provided `sender` does not match network selected');
            }

            if (
                !validateAddress({
                    address: this.recipient,
                    network: config.network,
                    type: AddressType.USER,
                })
            ) {
                throw new TypeError('Provided `recipient` does not match network selected');
            }
        }
    };
};

export type MsgTransferNFTOptions = {
    id: string;
    denomId: string;
    name: string;
    uri: string;
    data: string;
    sender: string;
    recipient: string;
};
