import Big from 'big.js';
import Long from 'long';
import ow from 'ow';
import { InitConfigurations } from '../../../core/cro';
import { Message } from '../Message';
import { Msg } from '../../../cosmos/v1beta1/types/msg';
import { AddressType, validateAddress } from '../../../utils/address';
import { COSMOS_MSG_TYPEURL } from '../../common/constants/typeurl';
import { owMsgVoteOptions } from '../ow.types';

export enum VoteOptions {
    YES = 'Yes',
    ABSTAIN = 'Abstain',
    NO = 'No',
    NO_WITH_Veto = 'NoWithVeto'
}

export const msgVote = function (config: InitConfigurations) {
    return class MsgVote implements Message {
        public proposalId: Big;

        public voter: string;

        public option: string;

        constructor(options: MsgVoteOptions) {
            ow(options, 'options', owMsgVoteOptions);

            this.proposalId = options.proposalId;
            this.voter = options.voter;
            this.option = options.option;

            this.validate();
        }

        toRawMsg(): Msg {
            const proposal = Long.fromNumber(this.proposalId.toNumber(), true);
            return {
                typeUrl: COSMOS_MSG_TYPEURL.MsgVote,
                value: {
                    proposalId: proposal,
                    voter: this.voter,
                    option: this.option
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
                throw new TypeError('Provided `depositor` doesnt match network selected');
            }
        }
    };
};

export type MsgVoteOptions = {
    proposalId: Big;
    voter: string;
    option: string;
};
