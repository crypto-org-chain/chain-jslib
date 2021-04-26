import ow from 'ow';
import { CosmosMsg } from '../cosmosMsg';
import { Msg } from '../../../cosmos/v1beta1/types/msg';
import { InitConfigurations } from '../../../core/cro';
import { AddressType, validateAddress } from '../../../utils/address';
import { owMsgFundCommunityPoolOptions } from '../ow.types';
import { COSMOS_MSG_TYPEURL } from '../../common/constants/typeurl';
import * as legacyAmino from '../../../cosmos/amino';
import { ICoin } from '../../../coin/coin';

export const msgFundCommunityPool = function (config: InitConfigurations) {
    return class MsgFundCommunityPool implements CosmosMsg {
        // Normal user addresses with (t)cro prefix
        public readonly depositor: string;

        public amount: ICoin;

        /**
         * Constructor to create a new MsgFundCommunityPool
         * @param {MsgFundCommunityPoolOptions} options
         * @returns {MsgFundCommunityPool}
         * @throws {Error} when options is invalid
         */
        constructor(options: MsgFundCommunityPoolOptions) {
            ow(options, 'communityPoolOptions', owMsgFundCommunityPoolOptions);

            this.depositor = options.depositor;
            this.amount = options.amount;

            this.validateAddresses();
        }

        // eslint-disable-next-line class-methods-use-this
        toRawAminoMsg(): legacyAmino.Msg {
            return {
                type: 'cosmos-sdk/MsgFundCommunityPool',
                value: {
                    depositor: this.depositor,
                    amount: this.amount.toCosmosCoins(),
                },
            } as legacyAmino.MsgFundCommunityPool;
        }

        /**
         * Returns the raw Msg representation of MsgFundCommunityPool
         * @returns {Msg}
         */
        toRawMsg(): Msg {
            return {
                typeUrl: COSMOS_MSG_TYPEURL.distribution.MsgFundCommunityPool,
                value: {
                    depositor: this.depositor,
                    amount: this.amount,
                },
            };
        }

        validateAddresses() {
            if (
                !validateAddress({
                    address: this.depositor,
                    network: config.network,
                    type: AddressType.USER,
                })
            ) {
                throw new TypeError('Provided `depositor` address doesnt match network selected');
            }
        }
    };
};

export type MsgFundCommunityPoolOptions = {
    depositor: string;
    amount: ICoin;
};
