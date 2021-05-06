import ow from 'ow';
import { Msg } from '../../../cosmos/v1beta1/types/msg';
import { owMsgIssueDenomOptions } from '../ow.types';
import { InitConfigurations } from '../../../core/cro';
import { AddressType, validateAddress } from '../../../utils/address';
import { CosmosMsg } from '../cosmosMsg';
import { COSMOS_MSG_TYPEURL } from '../../common/constants/typeurl';
import * as legacyAmino from '../../../cosmos/amino';

export const msgIssueDenomNFT = function (config: InitConfigurations) {
    return class MsgIssueDenom implements CosmosMsg {
        /** MsgIssueDenom id. */
        public readonly id: string;

        /** MsgIssueDenom name. */
        public readonly name: string;

        /** MsgIssueDenom schema. */
        public readonly schema: string;

        /** MsgIssueDenom sender. */
        public readonly sender: string;

        /**
         * Constructor to create a new MsgIssueDenom
         * @param {MsgIssueDenomOptions} options
         * @returns {MsgIssueDenom}
         * @throws {Error} when options is invalid
         */
        constructor(options: MsgIssueDenomOptions) {
            ow(options, 'options', owMsgIssueDenomOptions);

            this.id = options.id;
            this.name = options.name;
            this.schema = options.schema;
            this.sender = options.sender;

            this.validateAddress();
        }

        /**
         * Returns the raw Msg representation of MsgIssueDenom
         * @returns {Msg}
         */
        toRawMsg(): Msg {
            return {
                typeUrl: COSMOS_MSG_TYPEURL.nft.MsgIssueDenom,
                value: {
                    id: this.id,
                    name: this.name,
                    schema: this.schema,
                    sender: this.sender,
                },
            };
        }

        // eslint-disable-next-line class-methods-use-this
        toRawAminoMsg(): legacyAmino.Msg {
            throw new Error('Amino encoding format not support for NFT module.');
        }

        validateAddress() {
            if (
                !validateAddress({
                    address: this.sender,
                    network: config.network,
                    type: AddressType.USER,
                })
            ) {
                throw new TypeError('Provided `sender` does not match network selected');
            }
        }
    };
};

export type MsgIssueDenomOptions = {
    id: string;
    name: string;
    schema: string;
    sender: string;
};
