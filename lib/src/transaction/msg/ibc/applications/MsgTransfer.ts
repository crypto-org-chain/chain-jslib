import ow from 'ow';
import Long from 'long';
import { Msg } from '../../../../cosmos/v1beta1/types/msg';
import { ICoin } from '../../../../coin/coin';
import { owMsgTransferIBCOptions } from '../../ow.types';
import { InitConfigurations } from '../../../../core/cro';
import { AddressType, validateAddress, isValidBech32Address } from '../../../../utils/address';
import { CosmosMsg } from '../../cosmosMsg';
import { COSMOS_MSG_TYPEURL } from '../../../common/constants/typeurl';
import * as legacyAmino from '../../../../cosmos/amino';

export const msgTransferIBC = function (config: InitConfigurations) {
    return class MsgTransfer implements CosmosMsg {
        /** MsgTransfer sourcePort. */
        public sourcePort: string;

        /** MsgTransfer sourceChannel. */
        public sourceChannel: string;

        /** MsgTransfer token. */
        public token?: ICoin | null;

        /** MsgTransfer sender. */
        public sender: string;

        /** MsgTransfer receiver. */
        public receiver: string;

        /** MsgTransfer timeoutHeight. */
        public timeoutHeight?: IHeight | null;

        /** MsgTransfer timeoutTimestamp. */
        public timeoutTimestamp: Long;

        /**
         * Constructor to create a new IBC.MsgTransfer
         * @param {MsgTransferOptions} options
         * @returns {MsgTransfer}
         * @throws {Error} when options is invalid
         */
        constructor(options: MsgTransferOptions) {
            ow(options, 'options', owMsgTransferIBCOptions);
            this.sourcePort = options.sourcePort;
            this.sourceChannel = options.sourceChannel;
            this.token = options.token;
            this.sender = options.sender;
            this.receiver = options.receiver;
            this.timeoutHeight = options.timeoutHeight;
            this.timeoutTimestamp = options.timeoutTimestamp;

            this.validateAddresses();
        }

        /**
         * Returns the raw Msg representation of IBCTransfer
         * @returns {Msg}
         */
        toRawMsg(): Msg {
            return {
                typeUrl: COSMOS_MSG_TYPEURL.ibc.MsgTransfer,
                value: {
                    sourcePort: this.sourcePort,
                    sourceChannel: this.sourceChannel,
                    token: this.token?.toCosmosCoin(),
                    sender: this.sender,
                    receiver: this.receiver,
                    timeoutHeight: this.timeoutHeight,
                    timeoutTimestamp: this.timeoutTimestamp,
                } as MsgTransferOptions,
            };
        }

        // eslint-disable-next-line class-methods-use-this
        toRawAminoMsg(): legacyAmino.Msg {
            throw new Error('IBC Module not supported under amino encoding scheme');
        }

        // @Todo: The `receiver` can belong to other network also? Right?
        // Introduced a new validation method
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

            if (!isValidBech32Address(this.receiver)) {
                throw new TypeError('Provided `receiver` is not a valid Bech-32 encoded address');
            }
        }
    };
};

export type MsgTransferOptions = {
    sourcePort: string;
    sourceChannel: string;
    token?: ICoin | null;
    sender: string;
    receiver: string;
    timeoutHeight?: IHeight | null;
    timeoutTimestamp: Long;
};

export type IHeight = {
    revisionNumber: Long;
    revisionHeight: Long;
};
