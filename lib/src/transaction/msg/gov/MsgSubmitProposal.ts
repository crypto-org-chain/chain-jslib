import { InitConfigurations } from '../../../core/cro';
import { Message } from '../Message';
import { Msg } from '../../../cosmos/v1beta1/types/msg';
import { ICoin } from '../../../coin/coin';
import { COSMOS_MSG_TYPEURL } from '../../common/constants/typeurl';
import { AddressType, validateAddress } from '../../../utils/address';

// https://github.com/cosmos/cosmos-sdk/blob/8de96d16f9f72afb576af7bf6d9351d37cd1d828/x/gov/types/gov.pb.go#L122
export const msgSubmitProposal = function (config: InitConfigurations) {
    return class MsgSubmitProposal implements Message {
        public readonly title: string;

        public readonly description: string;

        public readonly proposer: string;

        public readonly initialDeposit: ICoin;

        constructor(options: ProposalOptions) {
            // TODO : ow validation

            this.title = options.title;
            this.description = options.description;
            this.proposer = options.proposer;
            this.initialDeposit = options.initialDeposit;
        }

        toRawMsg(): Msg {
            const cosmosAmount = this.initialDeposit.toCosmosCoin();
            return {
                typeUrl: COSMOS_MSG_TYPEURL.MsgSubmitProposal,
                value: {
                    title: this.title,
                    description: this.description,
                    proposer: this.proposer,
                    initialDeposit: [
                        {
                            denom: cosmosAmount.denom,
                            amount: cosmosAmount.amount,
                        },
                    ],
                },
            };
        }

        validate() {
            if (
                !validateAddress({
                    address: this.proposer,
                    network: config.network,
                    type: AddressType.USER,
                })
            ) {
                throw new TypeError('Provided `depositor` doesnt match network selected');
            }
        }
    };
};

export type ProposalOptions = {
    title: string;
    description: string;
    proposer: string;
    initialDeposit: ICoin;
};
