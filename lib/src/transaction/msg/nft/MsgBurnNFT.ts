import ow from 'ow';
import { Msg } from '../../../cosmos/v1beta1/types/msg';
import { owMsgBurnNFTOptions } from '../ow.types';
import { InitConfigurations } from '../../../core/cro';
import { AddressType, validateAddress } from '../../../utils/address';
import { CosmosMsg } from '../cosmosMsg';
import { COSMOS_MSG_TYPEURL } from '../../common/constants/typeurl';
import * as legacyAmino from '../../../cosmos/amino';

export const msgBurnNFT = function (config: InitConfigurations) {
    return class MsgBurnNFT implements CosmosMsg {
        /** MsgBurnNFT id. */
        public id: string;

        /** MsgBurnNFT denomId. */
        public denomId: string;

        /** MsgBurnNFT sender. */
        public sender: string;

        /**
         * Constructor to create a new MsgBurnNFT
         * @param {MsgBurnNFTOptions} options
         * @returns {MsgBurnNFT}
         * @throws {Error} when options is invalid
         */
        constructor(options: MsgBurnNFTOptions) {
            ow(options, 'options', owMsgBurnNFTOptions);

            this.id = options.id;
            this.denomId = options.denomId;
            this.sender = options.sender;

            this.validateAddress();
        }

        /**
         * Returns the raw Msg representation of MsgBurnNFT
         * @returns {Msg}
         */
        toRawMsg(): Msg {
            return {
                typeUrl: COSMOS_MSG_TYPEURL.nft.MsgBurnNFT,
                value: {
                    id: this.id,
                    denomId: this.denomId,
                    sender: this.sender,
                } as MsgBurnNFTOptions,
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

export type MsgBurnNFTOptions = {
    id: string;
    denomId: string;
    sender: string;
};
