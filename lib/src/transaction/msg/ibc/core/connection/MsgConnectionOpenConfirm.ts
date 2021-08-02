/* eslint-disable camelcase */
import ow from 'ow';
import Long from 'long';
import { InitConfigurations } from '../../../../../core/cro';
import { CosmosMsg } from '../../../cosmosMsg';
import { Msg } from '../../../../../cosmos/v1beta1/types/msg';
import { COSMOS_MSG_TYPEURL } from '../../../../common/constants/typeurl';
import { validateAddress, AddressType } from '../../../../../utils/address';
import { owMsgConnectionOpenConfirmOptions } from '../../../ow.types';
import * as legacyAmino from '../../../../../cosmos/amino';
import { Bytes } from '../../../../../utils/bytes/bytes';

export const MsgConnectionOpenConfirmIBC = function (config: InitConfigurations) {
    return class MsgConnectionOpenConfirm implements CosmosMsg {
        /** MsgConnectionOpenConfirm connectionId. */
        public connectionId: string;

        /** MsgConnectionOpenConfirm proofAck. */
        public proofAck: Uint8Array;

        /** MsgConnectionOpenConfirm proofHeight. */
        public proofHeight?: IProofHeight | null;

        /** MsgConnectionOpenConfirm signer. */
        public signer: string;

        /**
         * Constructor to create a new IBC.MsgConnectionOpenConfirm
         * @param {MsgConnectionOpenConfirmOptions} options
         * @returns {MsgConnectionOpenConfirm}
         * @throws {Error} when options is invalid
         */
        constructor(options: MsgConnectionOpenConfirmOptions) {
            ow(options, 'options', owMsgConnectionOpenConfirmOptions);
            this.connectionId = options.connectionId;
            this.proofAck = options.proofAck;
            this.proofHeight = options.proofHeight;
            this.signer = options.signer;
            this.validateAddresses();
        }

        /**
         * Returns the raw Msg representation of Ibc.MsgConnectionOpenConfirm
         * @returns {Msg}
         */
        toRawMsg(): Msg {
            return {
                typeUrl: COSMOS_MSG_TYPEURL.ibc.connection.MsgConnectionOpenConfirm,
                value: {
                    connectionId: this.connectionId,
                    proofAck: this.proofAck,
                    proofHeight: this.proofHeight,
                    signer: this.signer,
                },
            };
        }

        // eslint-disable-next-line class-methods-use-this
        toRawAminoMsg(): legacyAmino.Msg {
            throw new Error('IBC Module not supported under amino encoding scheme');
        }

        /**
         * Returns an instance of IBC.MsgConnectionOpenConfirm
         * @param {string} msgJsonStr
         * @param {Network} network
         * @returns {MsgConnectionOpenConfirm}
         */
        public static fromCosmosMsgJSON(msgJsonStr: string): MsgConnectionOpenConfirm {
            const parsedMsg = JSON.parse(msgJsonStr) as MsgConnectionOpenConfirmJSON;
            if (parsedMsg['@type'] !== COSMOS_MSG_TYPEURL.ibc.connection.MsgConnectionOpenConfirm) {
                throw new Error(
                    `Expected ${COSMOS_MSG_TYPEURL.ibc.connection.MsgConnectionOpenConfirm} but got ${parsedMsg['@type']}`,
                );
            }

            try {
                Bytes.fromBase64String(parsedMsg.proof_ack);
            } catch (error) {
                throw new Error('Invalid `proof_ack` received in JSON.');
            }

            let proofHeight;
            if (typeof parsedMsg.proof_height === 'object' && Object.keys(parsedMsg.proof_height).length > 0) {
                proofHeight = {
                    revisionHeight: Long.fromString(parsedMsg.proof_height?.revision_height!),
                    revisionNumber: Long.fromString(parsedMsg.proof_height?.revision_number!),
                };
            }
            return new MsgConnectionOpenConfirm({
                connectionId: parsedMsg.connection_id,
                proofAck: Bytes.fromBase64String(parsedMsg.proof_ack).toUint8Array(),
                proofHeight,
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

export type MsgConnectionOpenConfirmOptions = {
    connectionId: string;
    proofAck: Uint8Array;
    proofHeight?: IProofHeight | null;
    signer: string;
};

export interface IProofHeight {
    revisionNumber: Long;
    revisionHeight: Long;
}

export interface MsgConnectionOpenConfirmJSON {
    '@type': string;
    connection_id: string;
    proof_ack: string;
    proof_height: ProofHeightJSON;
    signer: string;
}
export interface ProofHeightJSON {
    revision_number: string;
    revision_height: string;
}
