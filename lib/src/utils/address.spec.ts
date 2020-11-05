import 'mocha';
import { expect } from 'chai';
import { Type, isValidAddress } from './address';
import { CroNetwork } from '../core/cro';

describe('Validate address against network and checksums', function () {
    it('check valid address', function () {
        expect(
            isValidAddress({
                address: 'tcro165tzcrh2yl83g8qeqxueg2g5gzgu57y3fe3kc3',
                network: CroNetwork.Testnet,
                addressType: Type.USER,
            }),
        ).to.be.eq(true);
    });

    it('check invalid address with respect to network', function () {
        expect(
            isValidAddress({
                address: 'cro1pndm4ywdf4qtmupa0fqe75krmqed2znjyj6x8f',
                network: CroNetwork.Testnet,
                addressType: Type.USER,
            }),
        ).to.be.eq(false);
    });

    it('check invalid address with respect to checksum', function () {
        expect(() =>
            isValidAddress({
                address: 'tcro1pndm4ywdf4qtmupa0fqe75krmqed2znjyj6x8fzqa',
                network: CroNetwork.Testnet,
                addressType: Type.USER,
            }),
        ).to.throw('Invalid checksum for tcro1pndm4ywdf4qtmupa0fqe75krmqed2znjyj6x8fzqa');
    });

    it('check validator address', function () {
        expect(
            isValidAddress({
                address: 'tcrocncl1reyshfdygf7673xm9p8v0xvtd96m6cd6canhu3',
                network: CroNetwork.Testnet,
                addressType: Type.VALIDATOR,
            }),
        ).to.be.eq(true);

        expect(() =>
            isValidAddress({
                address: 'tcrocncl1reyshfdygf7673xm9p8v0xvtd96m6cd6canhu3xcqa',
                network: CroNetwork.Testnet,
                addressType: Type.VALIDATOR,
            }),
        ).to.throw('Invalid checksum for tcrocncl1reyshfdygf7673xm9p8v0xvtd96m6cd6canhu3xcqa');
    });
});
