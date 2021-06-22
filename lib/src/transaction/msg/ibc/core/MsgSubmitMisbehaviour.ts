import ow from 'ow';
import { google } from '../../../../cosmos/v1beta1/codec/generated/codecimpl';
import { InitConfigurations } from '../../../../core/cro';
import { CosmosMsg } from '../../cosmosMsg';
import { Msg } from '../../../../cosmos/v1beta1/types/msg';
import { COSMOS_MSG_TYPEURL } from '../../../common/constants/typeurl';
import { validateAddress, AddressType } from '../../../../utils/address';
import { owMsgSubmitMisbehaviourOptions } from '../../ow.types';
import * as legacyAmino from '../../../../cosmos/amino';

export const msgSubmitMisbehaviourIBC = function (config: InitConfigurations) {
    return class MsgSubmitMisbehaviour implements CosmosMsg {
        /** MsgSubmitMisbehaviour clientId. */
        public clientId: string;

        /** MsgSubmitMisbehaviour misbehaviour. */
        public misbehaviour?: google.protobuf.IAny | null;

        /** MsgSubmitMisbehaviour signer. */
        public signer: string;

        /**
         * Constructor to create a new IBC.MsgSubmitMisbehaviour
         * @param {MsgSubmitMisbehaviourOptions} options
         * @returns {MsgSubmitMisbehaviour}
         * @throws {Error} when options is invalid
         */
        constructor(options: MsgSubmitMisbehaviourOptions) {
            ow(options, 'options', owMsgSubmitMisbehaviourOptions);
            this.clientId = options.clientId;
            this.misbehaviour = options.misbehaviour;
            this.signer = options.signer;
            this.validateAddresses();
        }

        /**
         * Returns the raw Msg representation of Ibc.MsgSubmitMisbehaviour
         * @returns {Msg}
         */
        toRawMsg(): Msg {
            return {
                typeUrl: COSMOS_MSG_TYPEURL.ibc.MsgSubmitMisbehaviour,
                value: {
                    clientId: this.clientId,
                    misbehaviour: this.misbehaviour,
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

export type MsgSubmitMisbehaviourOptions = {
    clientId: string;
    misbehaviour?: google.protobuf.IAny | null;
    signer: string;
};
