import { expect } from 'chai';
import { Testnet } from '../network/network';
import { Cro, InitConfigurations } from './cro';
import { fuzzyDescribe } from '../test/mocha-fuzzy/suite';

const anyValidOptions: () => InitConfigurations = () => ({
    network: Testnet,
});

describe('Testing Cro Initialization configs', function () {
    describe('Cro init constructor', function () {
        fuzzyDescribe('should throw Error when initial config is invalid', function (fuzzy) {
            const testRunner = fuzzy(fuzzy.ObjArg(anyValidOptions()));
            testRunner(function (initConfig) {
                if (initConfig.valid) {
                    return;
                }
                expect(() => new Cro(initConfig.value)).to.throw('Expected `configs` to be of type `object`');
            });
        });

        it('should return a Cro with the provided network', function () {
            const cro = new Cro({
                network: Testnet,
            });

            expect(cro.configs.network).to.eq(Testnet);
        });
    });
});
