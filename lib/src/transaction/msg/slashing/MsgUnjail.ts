/* eslint-disable camelcase */
import ow from 'ow';
import { Msg } from '../../../cosmos/v1beta1/types/msg';
import { CosmosMsg } from '../cosmosMsg';
import { owMsgUnjailOptions } from '../ow.types';
import { InitConfigurations } from '../../../core/cro';
import { validateAddress, AddressType } from '../../../utils/address';
import { COSMOS_MSG_TYPEURL } from '../../common/constants/typeurl';
import * as legacyAmino from '../../../cosmos/amino';

export interface MsgUnjailRaw {
    '@type': string;
    validator_addr: string;
}

export interface Amount {
    denom: string;
    amount: string;
}

export const msgUnjail = function (config: InitConfigurations) {
    return class MsgUnjail implements CosmosMsg {
        /** MsgUnjail validatorAddress. */
        public validatorAddress: string;

        /**
         * Constructor to create a new MsgSend
         * @param {IMsgUnjail} options
         * @returns {MsgUnjail}
         * @throws {Error} when options is invalid
         */
        constructor(options: IMsgUnjail) {
            ow(options, 'options', owMsgUnjailOptions);
            this.validatorAddress = options.validatorAddress;
            this.validateAddresses();
        }

        // eslint-disable-next-line class-methods-use-this
        toRawAminoMsg(): legacyAmino.Msg {
            return {
                type: 'cosmos-sdk/MsgUnjail',
                value: {
                    validator_addr: this.validatorAddress,
                },
            } as legacyAmino.MsgUnjail;
        }

        /**
         * Returns the raw Msg representation of MsgUnjail
         * @returns {Msg}
         */
        toRawMsg(): Msg {
            return {
                typeUrl: COSMOS_MSG_TYPEURL.slashing.MsgUnjail,
                value: {
                    validatorAddr: this.validatorAddress,
                },
            };
        }

        /**
         * Returns an instance of MsgUnjail
         * @param {string} msgJsonStr
         * @param {Network} network
         * @returns {MsgUnjail}
         */
        public static fromCosmosMsgJSON(msgJsonStr: string): MsgUnjail {
            const parsedMsg = JSON.parse(msgJsonStr) as MsgUnjailRaw;
            if (parsedMsg['@type'] !== COSMOS_MSG_TYPEURL.slashing.MsgUnjail) {
                throw new Error(`Expected ${COSMOS_MSG_TYPEURL.slashing.MsgUnjail} but got ${parsedMsg['@type']}`);
            }

            return new MsgUnjail({
                validatorAddress: parsedMsg.validator_addr,
            });
        }

        validateAddresses(): void {
            const { network } = config;

            if (!validateAddress({ network, address: this.validatorAddress, type: AddressType.VALIDATOR })) {
                throw new TypeError('Provided `validatorAddress` doesnt match network selected');
            }
        }
    };
};

export type IMsgUnjail = {
    validatorAddress: string;
};
