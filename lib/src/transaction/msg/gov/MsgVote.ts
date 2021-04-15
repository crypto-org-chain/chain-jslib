import Big from 'big.js';
import Long from 'long';
import ow from 'ow';
import { InitConfigurations } from '../../../core/cro';
import { Msg } from '../../../cosmos/v1beta1/types/msg';
import { AddressType, validateAddress } from '../../../utils/address';
import { COSMOS_MSG_TYPEURL } from '../../common/constants/typeurl';
import { owMsgVoteOptions } from '../ow.types';
import { CosmosMsg } from '../cosmosMsg';
import * as legacyAmino from '../../../cosmos/amino';

export enum VoteOption {
    VOTE_OPTION_UNSPECIFIED = 0,
    VOTE_OPTION_YES = 1,
    VOTE_OPTION_ABSTAIN = 2,
    VOTE_OPTION_NO = 3,
    VOTE_OPTION_NO_WITH_VETO = 4,
}

export const msgVote = function (config: InitConfigurations) {
    return class MsgVote implements CosmosMsg {
        public proposalId: Big;

        public voter: string;

        public option: VoteOption;

        constructor(options: MsgVoteOptions) {
            ow(options, 'options', owMsgVoteOptions);

            this.proposalId = options.proposalId;
            this.voter = options.voter;
            this.option = options.option;

            this.validate();
        }

        // eslint-disable-next-line class-methods-use-this
        toRawAminoMsg(): legacyAmino.Msg {
            throw new Error('Method not implemented.');
        }

        toRawMsg(): Msg {
            const proposal = Long.fromNumber(this.proposalId.toNumber(), true);
            return {
                typeUrl: COSMOS_MSG_TYPEURL.MsgVote,
                value: {
                    proposalId: proposal,
                    voter: this.voter,
                    option: this.option,
                },
            };
        }

        validate() {
            if (
                !validateAddress({
                    address: this.voter,
                    network: config.network,
                    type: AddressType.USER,
                })
            ) {
                throw new TypeError('Provided `voter` doesnt match network selected');
            }
        }
    };
};

export type MsgVoteOptions = {
    proposalId: Big;
    voter: string;
    option: VoteOption;
};
