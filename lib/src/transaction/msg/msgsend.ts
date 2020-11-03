import ow from 'ow';
import { Msg } from '../../cosmos/v1beta1/types/msg';
import { Message } from './Message';
import { ICoin } from '../../coin/coin';
import { owMsgSendOptions } from './ow.types';

export class MsgSend implements Message {
    public readonly fromAddress: string;

    public readonly toAddress: string;

    public amount: ICoin;

    /**
     * Constructor to create a new MsgSend
     * @param {MsgSendOptions} options
     * @returns {MsgSend}
     * @throws {Error} when options is invalid
     */
    constructor(options: MsgSendOptions) {
        ow(options, 'options', owMsgSendOptions);
        this.fromAddress = options.fromAddress;
        this.toAddress = options.toAddress;
        this.amount = options.amount;
    }

    /**
     * Returns the raw Msg representation of MsgSend
     * @returns {Msg}
     */
    toRawMsg(): Msg {
        this.validateAddresses();
        const cosmosCoin = this.amount.toCosmosCoin();
        return {
            typeUrl: '/cosmos.bank.v1beta1.MsgSend',
            value: {
                fromAddress: this.fromAddress,
                toAddress: this.toAddress,
                amount: [
                    {
                        denom: cosmosCoin.denom,
                        amount: cosmosCoin.amount,
                    },
                ],
            },
        };
    }

    validateAddresses() {
        const currentNetwork = this.amount.getNetwork();
        const prefix = currentNetwork.addressPrefix;

        if (!this.fromAddress.startsWith(prefix)) {
            throw new TypeError('Provided `fromAddress` doesnt match network selected');
        }

        if (!this.toAddress.startsWith(prefix)) {
            throw new TypeError('Provided `toAddress` doesnt match network selected');
        }
    }
}

/// TODO: Should now only take amount as raw value and its denom since Coin is not anymore top level accessible

export type MsgSendOptions = {
    fromAddress: string;
    toAddress: string;
    amount: ICoin;
};
