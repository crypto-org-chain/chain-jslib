import 'mocha';
import { expect } from 'chai';
import { AddressType, AddressValidator, validateAddress } from './address';
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

    it('check valid address using AddressValidator', function () {
        const addressProps = {
            address: 'tcro165tzcrh2yl83g8qeqxueg2g5gzgu57y3fe3kc3',
            network: CroNetwork.Testnet,
            type: AddressType.USER,
        };

        const addressValidator = new AddressValidator(addressProps);
        expect(addressValidator.isValid()).to.be.eq(true);
    });
});
