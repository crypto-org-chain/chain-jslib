import { expect } from 'chai';
import { fuzzyDescribe } from '../test/mocha-fuzzy/suite';

import { CroNetwork, CroSDK } from '../core/cro';

const cro = CroSDK({ network: CroNetwork.Testnet });

describe('CroClient', function () {
    describe('connect', function () {
        fuzzyDescribe('should throw Error when the provided argument is not url', function (fuzzy) {
            const testRunner = fuzzy(fuzzy.StringArg('test'));
            testRunner(
                async function (args0) {
                    if (args0.valid) {
                        return;
                    }
                    try {
                        await cro.CroClient.connect(args0.value);
                    } catch (e) {
                        expect(e.toString()).to.be.contain(
                            'ArgumentError: Expected `endpoint` to be of type `string` but received type',
                        );
                    }
                },
                { invalidArgsOnly: true },
            );
        });

        context('When input is a string', function () {
            it('should throw Error when the provided string is not a url', async function () {
                try {
                    await cro.CroClient.connect('invalid');
                } catch (e) {
                    expect(e.toString()).to.be.equals(
                        'ArgumentError: Expected string `endpoint` to be an url, got `invalid`',
                    );
                }
            });
        });
    });
});
