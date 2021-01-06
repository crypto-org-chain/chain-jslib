import ow from 'ow';
import { Msg } from '../../../cosmos/v1beta1/types/msg';
import { CosmosMsg } from '../cosmosMsg';
import { owMsgEditValidatorOptions } from '../ow.types';
import { InitConfigurations } from '../../../core/cro';
import { validateAddress, AddressType } from '../../../utils/address';
import { IDescription } from '../../common/interface/IDescription';
import { COSMOS_MSG_TYPEURL } from '../../common/constants/typeurl';
import * as legacyAmino from '../../../cosmos/amino';

export const msgEditValidator = function (config: InitConfigurations) {
    return class MsgEditValidator implements CosmosMsg {
        public readonly description: IDescription;

        public minSelfDelegation: string | null;

        public commissionRate: string | null;

        public validatorAddress: string;

        /**
         * Constructor to create a new MsgSend
         * @param {MsgCreateEditOptions} options
         * @returns {MsgEditValidator}
         * @throws {Error} when options is invalid
         */
        constructor(options: MsgCreateEditOptions) {
            ow(options, 'options', owMsgEditValidatorOptions);
            this.description = options.description;
            this.commissionRate = options.commissionRate;
            this.minSelfDelegation = options.minSelfDelegation;
            this.validatorAddress = options.validatorAddress;
            this.validateAddresses();
        }

        // eslint-disable-next-line class-methods-use-this
        toRawAminoMsg(): legacyAmino.Msg {
            throw new Error('Method not implemented.');
        }

        /**
         * Returns the raw Msg representation of MsgCreateValidator
         * @returns {Msg}
         */
        toRawMsg(): Msg {
            return {
                typeUrl: COSMOS_MSG_TYPEURL.MsgEditValidator,
                value: {
                    description: this.description,
                    commissionRate: this.commissionRate,
                    minSelfDelegation: this.minSelfDelegation,
                    validatorAddress: this.validatorAddress,
                },
            };
        }

        validateAddresses(): void {
            const { network } = config;

            if (!validateAddress({ network, address: this.validatorAddress, type: AddressType.VALIDATOR })) {
                throw new TypeError('Provided `validatorAddress` doesnt match network selected');
            }
        }
    };
};

export type MsgCreateEditOptions = {
    description: IDescription;
    commissionRate: string | null;
    minSelfDelegation: string | null;
    validatorAddress: string;
};
