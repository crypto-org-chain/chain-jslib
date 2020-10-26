import 'mocha';
import { expect } from 'chai';
import { fuzzyDescribe } from '../test/mocha-fuzzy/suite';
import { ANY_VALID_SECP256K1_KEY_PAIR } from '../test/assets/keypair';
import { Secp256k1KeyPair } from '../keypair/secp256k1';
import { Bytes } from '../utils/bytes/bytes';

import { account } from './account';

describe('account', function () {
    fuzzyDescribe('should throw Error when argument is invalid', function (fuzzy) {
        const testRunner = fuzzy(
            fuzzy.ObjArg(ANY_VALID_SECP256K1_KEY_PAIR),
            fuzzy.optional(fuzzy.Obj)({ prefix: 'cro' }),
        );

        testRunner(function (keyPair, options) {
            if (!keyPair.valid) {
                const expectedErrMsg =
                    keyPair.type === fuzzy.Obj
                        ? 'Expected object `pubKeySource` to be an instance of `Secp256k1KeyPair`'
                        : 'Expected `pubKeySource` to be of type `object`';

                expect(() => account(keyPair.value, options.value)).to.throw(expectedErrMsg);
            } else if (!options.valid) {
                expect(() => account(keyPair.value, options.value)).to.throw(
                    'Expected `options` to be of type `object`',
                );
            }
        });
    });

    fuzzyDescribe('should Error when prefix option is not a string', function (fuzzy) {
        const anyKeyPair = ANY_VALID_SECP256K1_KEY_PAIR;

        const testRunner = fuzzy(fuzzy.StringArg('cro'));
        testRunner(function (prefix) {
            const options = {
                prefix: prefix.value,
            };

            if (!prefix.valid) {
                expect(() => account(anyKeyPair, options)).to.throw(
                    'Expected property `prefix` to be of type `string`',
                );
            }
        });
    });

    it('should throw Error when the provided public key is not compressed', function () {
        const anyUncompressedPubKey = Bytes.fromHexString(
            '04a52c32db89513a187ceb00a4520b52dec06f583f2e12afcf1da78e370a5358e600c8d4ee1082543ee25647fd9b75d06cd8f0ba12bd319f116e384766dfc177cf',
        );
        const anyOptions = {
            prefix: 'cro',
        };
        expect(() => account(anyUncompressedPubKey, anyOptions)).to.throw(
            'Expected public key to be in compressed form',
        );
    });

    context('When provided with Secp256k1KeyPair', function () {
        it('should return account address with compressed public key with provided bech32 prefix', function () {
            const anyKeyPair = Secp256k1KeyPair.fromPrivKey(
                Bytes.fromHexString('3eddf1bca41330f352c47297ac1c7e85b14c11d373933dfdebf7e369b16a4846'),
            );
            const anyOptions = {
                prefix: 'cro',
            };

            expect(account(anyKeyPair, anyOptions)).to.eq('cro1pndm4ywdf4qtmupa0fqe75krmqed2znjyj6x8f');
        });
    });

    context('When provided with compressed public key in Bytes', function () {
        it('should return account address with the provided public key and bech32 prefix', function () {
            const anyPubKey = Bytes.fromHexString('03a52c32db89513a187ceb00a4520b52dec06f583f2e12afcf1da78e370a5358e6');
            const anyOptions = {
                prefix: 'cro',
            };
            expect(account(anyPubKey, anyOptions)).to.eq('cro1pndm4ywdf4qtmupa0fqe75krmqed2znjyj6x8f');
        });
    });
});
