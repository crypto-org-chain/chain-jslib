import { expect } from 'chai';
import { CroNetwork, CroSDK, InitConfigurations } from './cro';
import { fuzzyDescribe } from '../test/mocha-fuzzy/suite';

const anyValidOptions: () => InitConfigurations = () => ({
    network: CroNetwork.Testnet,
});

describe('Testing Cro Initialization configs', function () {
    describe('CroSDK Init', function () {
        fuzzyDescribe('should throw Error when initial config is invalid', function (fuzzy) {
            const testRunner = fuzzy(fuzzy.ObjArg(anyValidOptions()));
            testRunner(function (initConfig) {
                if (initConfig.valid) {
                    return;
                }
                expect(() => CroSDK(initConfig.value)).to.throw('Expected `configs` to be of type `object`');
            });
        });

        it('should return a Cro with the provided network', function () {
            const cro = CroSDK({
                network: CroNetwork.Testnet,
            });

            expect(cro.Options.network).to.eq(CroNetwork.Testnet);
        });
    });
});
