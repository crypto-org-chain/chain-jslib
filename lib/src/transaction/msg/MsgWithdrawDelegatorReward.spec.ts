import { expect } from 'chai';
import { fuzzyDescribe } from '../../test/mocha-fuzzy/suite';
import { CroNetwork, CroSDK } from '../../core/cro';

const cro = CroSDK({ network: CroNetwork.Testnet });

describe('Testing MsgWithdrawDelegatorReward', function () {
    fuzzyDescribe('should throw Error when options is invalid', function (fuzzy) {
        const anyValidOptions = {
            delegatorAddress: 'tcrocncl1reyshfdygf7673xm9p8v0xvtd96m6cd6canhu3',
            validatorAddress: 'tcrocncl1reyshfdygf7673xm9p8v0xvtd96m6cd6canhu3xcqa',
        };
        const testRunner = fuzzy(fuzzy.ObjArg(anyValidOptions));

        testRunner(function (options) {
            if (options.valid) {
                return;
            }
            expect(() => new cro.bank.MsgWithdrawDelegatorReward(options.value)).to.throw(
                'Expected `rewardOptions` to be of type `object`',
            );
        });
    });
});
