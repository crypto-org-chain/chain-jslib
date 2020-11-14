import ow from 'ow';
import { Msg } from '../../../cosmos/v1beta1/types/msg';
import { Message } from '../Message';
import { ICoin } from '../../../coin/coin';
import { owMsgCreateValidatorOptions } from '../ow.types';
import { InitConfigurations } from '../../../core/cro';
import { validateAddress, AddressType } from '../../../utils/address';
import { IDescription } from '../../common/interface/IDescription';
import { COSMOS_MSG_TYPEURL } from '../../common/constants/typeurl';
import { ICommissionRates } from '../../common/interface/ICommissionRates';
import { google, cosmos } from '../../../cosmos/v1beta1/codec';
import { Bytes } from '../../../utils/bytes/bytes';

export const msgCreateValidator = function (config: InitConfigurations) {
    return class MsgCreateValidator implements Message {
        public readonly description: IDescription;

        public readonly commission: ICommissionRates;

        public minSelfDelegation: string;

        public delegatorAddress: string;

        public validatorAddress: string;

        public pubkey: string;

        public value: ICoin;

        /**
         * Constructor to create a new MsgSend
         * @param {MsgCreateValidatorParams} options
         * @returns {MsgCreateValidator}
         * @throws {Error} when options is invalid
         */
        constructor(options: MsgCreateValidatorParams) {
            ow(options, 'options', owMsgCreateValidatorOptions);
            this.description = options.description;
            this.commission = options.commission;
            this.minSelfDelegation = options.minSelfDelegation;
            this.delegatorAddress = options.delegatorAddress;
            this.validatorAddress = options.validatorAddress;
            this.pubkey = options.pubkey;
            this.value = options.value;
            this.validateAddresses();
        }

        /**
         * Returns the raw Msg representation of MsgCreateValidator
         * @returns {Msg}
         */
        toRawMsg(): Msg {
            const cosmosCoin = this.value.toCosmosCoin();
            const pubkeyEncoded = protoEncodeEd25519PubKey(Bytes.fromBase64String(this.pubkey));
            return {
                typeUrl: COSMOS_MSG_TYPEURL.MsgCreateValidator,
                value: {
                    description: this.description,
                    commission: this.commission,
                    minSelfDelegation: this.minSelfDelegation,
                    delegatorAddress: this.delegatorAddress,
                    validatorAddress: this.validatorAddress,
                    pubkey: pubkeyEncoded,
                    value: {
                        denom: cosmosCoin.denom,
                        amount: cosmosCoin.amount,
                    },
                },
            };
        }

        validateAddresses(): void {
            if (
                !validateAddress({
                    address: this.delegatorAddress,
                    network: config.network,
                    type: AddressType.USER,
                })
            ) {
                throw new TypeError('Provided `delegatorAddress` doesnt match network selected');
            }

            if (
                !validateAddress({
                    address: this.validatorAddress,
                    network: config.network,
                    type: AddressType.VALIDATOR,
                })
            ) {
                throw new TypeError('Provided `validatorAddress` doesnt match network selected');
            }
        }
    };
};

export type MsgCreateValidatorParams = {
    description: IDescription;
    commission: ICommissionRates;
    minSelfDelegation: string;
    delegatorAddress: string;
    validatorAddress: string;
    pubkey: string;
    value: ICoin;
};

export const protoEncodeEd25519PubKey = (pubKey: Bytes): google.protobuf.IAny => {
    const pubKeyProto = cosmos.crypto.ed25519.PubKey.create({
        key: pubKey.toUint8Array(),
    });
    return google.protobuf.Any.create({
        type_url: COSMOS_MSG_TYPEURL.PubKey.ed25519,
        value: Uint8Array.from(cosmos.crypto.ed25519.PubKey.encode(pubKeyProto).finish()),
    });
};
