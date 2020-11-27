import 'mocha';
import { expect } from 'chai';

import { fuzzyDescribe } from '../../../test/mocha-fuzzy/suite';
import { Units } from '../../../coin/coin';
import { CroNetwork, CroSDK } from '../../../core/cro';

const cro = CroSDK({ network: CroNetwork.Testnet });

describe('Testing MsgSubmitPropsal', function () {
    fuzzyDescribe('should throw Error when options is invalid', function (fuzzy) {
        const anyValidOptions = {
            title: 'Make new cosmos version backward compatible with pre release',
            description: 'Lorem Ipsum ... A great proposal to increate backward compatibility and initial work on IBC',
            proposer: 'tcro184lta2lsyu47vwyp2e8zmtca3k5yq85p6c4vp3',
            initialDeposit: new cro.Coin('1200', Units.BASE),
        };
        const testRunner = fuzzy(fuzzy.ObjArg(anyValidOptions));

        testRunner(function (options) {
            if (options.valid) {
                return;
            }
            expect(() => new cro.gov.MsgSubmitProposal(options.value)).to.throw(
                'Expected `options` to be of type `object`',
            );
        });
    });
});
