import 'mocha';
import { expect } from 'chai';
import { AddressType, AddressValidator, validateAddress, getBech32AddressFromEVMAddress } from './address';
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
