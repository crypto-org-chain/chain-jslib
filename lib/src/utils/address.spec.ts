import 'mocha';
import { expect } from 'chai';
import {
    AddressType,
    AddressValidator,
    validateAddress,
    getBech32AddressFromEVMAddress,
    isHexPrefixed,
    isHexStrict,
    isUint8Array,
    stripHexPrefix,
    uint8ArrayToHexString,
    ensureIfUint8Array,
    isAddress,
    checkAddressCheckSum,
} from './address';
import { CroNetwork } from '../core/cro';

describe('Validate address against network and checksums', function () {
    it('check valid address', function () {
        expect(
            validateAddress({
                address: 'tcro165tzcrh2yl83g8qeqxueg2g5gzgu57y3fe3kc3',
                network: CroNetwork.Testnet,
                type: AddressType.USER,
            }),
        ).to.be.eq(true);
    });

    it('check invalid address with respect to network', function () {
        expect(
            validateAddress({
                address: 'cro1pndm4ywdf4qtmupa0fqe75krmqed2znjyj6x8f',
                network: CroNetwork.Testnet,
                type: AddressType.USER,
            }),
        ).to.be.eq(false);
    });

    it('check invalid address with respect to checksum', function () {
        expect(() =>
            validateAddress({
                address: 'tcro1pndm4ywdf4qtmupa0fqe75krmqed2znjyj6x8fzqa',
                network: CroNetwork.Testnet,
                type: AddressType.USER,
            }),
        ).to.throw('Invalid checksum for tcro1pndm4ywdf4qtmupa0fqe75krmqed2znjyj6x8fzqa');
    });

    it('check validator address', function () {
        expect(
            validateAddress({
                address: 'tcrocncl1reyshfdygf7673xm9p8v0xvtd96m6cd6canhu3',
                network: CroNetwork.Testnet,
                type: AddressType.VALIDATOR,
            }),
        ).to.be.eq(true);

        expect(() =>
            validateAddress({
                address: 'tcrocncl1reyshfdygf7673xm9p8v0xvtd96m6cd6canhu3xcqa',
                network: CroNetwork.Testnet,
                type: AddressType.VALIDATOR,
            }),
        ).to.throw('Invalid checksum for tcrocncl1reyshfdygf7673xm9p8v0xvtd96m6cd6canhu3xcqa');
    });

    describe('Hex and Bytes conversion checking', function () {
        const address = {
            tendermint: 'cro1pndm4ywdf4qtmupa0fqe75krmqed2znjyj6x8f',
            EVM: '0xD47286f025F947482a2C374Fb70e9D4c94d809CF',
        };
        it('isHexPrefixed should return false for tendermint address', function () {
            expect(isHexPrefixed(address.tendermint)).to.be.eq(false);
        });

        it('isHexPrefixed should return true for EVM address', function () {
            expect(isHexPrefixed(address.EVM)).to.be.eq(true);
        });

        it('isHexStrict should return true for hexString', function () {
            expect(isHexStrict('0xc1912')).to.be.eq(true);
        });
        it('isHexStrict should return false for hex', function () {
            expect(isHexStrict(0xc1912)).to.be.eq(false);
        });
        it('isHexStrict should return false for normal string', function () {
            expect(isHexStrict('c1912')).to.be.eq(false);
        });
        it('isHexStrict should return false for number', function () {
            expect(isHexStrict(345)).to.be.eq(false);
        });
        it('isUint8Array should return true for Uint8Array instance', function () {
            expect(isUint8Array(new Uint8Array([21, 31]))).to.be.eq(true);
        });
        it('isUint8Array should return true for Buffer instance', function () {
            expect(isUint8Array(Buffer.from([21, 31]))).to.be.eq(true);
        });
        it('isUint8Array should return false for string', function () {
            expect(isUint8Array('string')).to.be.eq(false);
        });
        it(`stripHexPrefix should return ${address.tendermint} without modification`, function () {
            expect(stripHexPrefix(address.tendermint)).to.be.eq(address.tendermint);
        });
        it(`stripHexPrefix should trim '0x' from ${address.EVM}`, function () {
            expect(stripHexPrefix(address.EVM)).to.be.eq('D47286f025F947482a2C374Fb70e9D4c94d809CF');
        });
        it(`uint8ArrayToHexString convert empty Uint8Array to HexString`, function () {
            expect(uint8ArrayToHexString(new Uint8Array(4))).to.be.eq('0x00000000');
        });
        it(`uint8ArrayToHexString convert Uint8Array to HexString`, function () {
            expect(uint8ArrayToHexString(new Uint8Array([0x1f, 0x2f, 0x3f, 0x4f]))).to.be.eq('0x1f2f3f4f');
        });
        it(`ensureIfUint8Array should return Uint8Array instance with Uint8Array input`, function () {
            expect(ensureIfUint8Array(new Uint8Array([21, 31]))).to.be.instanceOf(Uint8Array);
        });
        it(`ensureIfUint8Array should return Array instance with non-array input`, function () {
            expect(ensureIfUint8Array([21, 31])).to.be.instanceOf(Array);
        });
        it(`isAddress should return false for valid EVM address`, function () {
            expect(isAddress(address.tendermint)).to.be.eq(false);
        });
        it(`isAddress should return true for valid EVM address`, function () {
            expect(isAddress(address.EVM)).to.be.eq(true);
        });
        it(`isAddress should return true for valid trimmed EVM address`, function () {
            expect(isAddress(stripHexPrefix(address.EVM))).to.be.eq(true);
        });
        it(`checkAddressCheckSum should return true for valid EVM address`, function () {
            expect(checkAddressCheckSum(address.EVM)).to.be.eq(true);
        });
        it(`checkAddressCheckSum should return false for invalid EVM address`, function () {
            expect(checkAddressCheckSum('0x6c46a1e212f127a6a8787b456a243c0d')).to.be.eq(false);
        });
    });

    describe('AddressValidator', function () {
        it('validate should throw Error when the address is invalid', function () {
            const addressProps = {
                address: 'tcrocncl1reyshfdygf7673xm9p8v0xvtd96m6cd6canhu3xcqa',
                network: CroNetwork.Testnet,
                type: AddressType.USER,
            };

            const addressValidator = new AddressValidator(addressProps);
            expect(() => addressValidator.validate()).to.to.throw(
                'Invalid checksum for tcrocncl1reyshfdygf7673xm9p8v0xvtd96m6cd6canhu3xcqa',
            );
        });

        it('validate should return true when the address', function () {
            const addressProps = {
                address: 'tcro165tzcrh2yl83g8qeqxueg2g5gzgu57y3fe3kc3',
                network: CroNetwork.Testnet,
                type: AddressType.USER,
            };

            const addressValidator = new AddressValidator(addressProps);
            expect(addressValidator.validate()).to.be.eq(true);
        });

        it('isValid should return false when the address is invalid', function () {
            const addressProps = {
                address: 'tcrocncl1reyshfdygf7673xm9p8v0xvtd96m6cd6canhu3xcqa',
                network: CroNetwork.Testnet,
                type: AddressType.USER,
            };

            const addressValidator = new AddressValidator(addressProps);
            expect(addressValidator.isValid()).to.be.eq(false);
        });

        it('isValid should return true when the address', function () {
            const addressProps = {
                address: 'tcro165tzcrh2yl83g8qeqxueg2g5gzgu57y3fe3kc3',
                network: CroNetwork.Testnet,
                type: AddressType.USER,
            };

            const addressValidator = new AddressValidator(addressProps);
            expect(addressValidator.isValid()).to.be.eq(true);
        });

        it('`getBech32AddressFromEVMAddress` should return converted address', function () {
            expect(getBech32AddressFromEVMAddress('0xD47286f025F947482a2C374Fb70e9D4c94d809CF', 'eth')).to.be.eq(
                'eth163egdup9l9r5s23vxa8mwr5afj2dszw04malry',
            );
            expect(getBech32AddressFromEVMAddress('D47286f025F947482a2C374Fb70e9D4c94d809CF', 'eth')).to.be.eq(
                'eth163egdup9l9r5s23vxa8mwr5afj2dszw04malry',
            );
        });

        it('`getBech32AddressFromEVMAddress` should throw on invalid address', function () {
            expect(() => getBech32AddressFromEVMAddress('eth163egdup9l9r5s23vxa8mwr5afj2dszw04malry', 'eth')).to.throw(
                'Please provide a valid EVM compatible address.',
            );
        });
    });
});
