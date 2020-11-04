import 'mocha';
import { expect } from 'chai';
import { isValidAddress } from './address';
import { CroNetwork } from '../core/cro';

describe('Validate address against network and checksums', function () {
    it('check valid address', function () {
        expect(isValidAddress('tcro165tzcrh2yl83g8qeqxueg2g5gzgu57y3fe3kc3', CroNetwork.Testnet)).to.be.eq(true);
    });

    it('check invalid address with respect to network', function () {
        expect(isValidAddress('cro1pndm4ywdf4qtmupa0fqe75krmqed2znjyj6x8f', CroNetwork.Testnet)).to.be.eq(false);
    });

    it('check invalid address with respect to checksum', function () {
        expect(() => isValidAddress('tcro1pndm4ywdf4qtmupa0fqe75krmqed2znjyj6x8fzqa', CroNetwork.Testnet)).to.throw(
            'Invalid checksum for tcro1pndm4ywdf4qtmupa0fqe75krmqed2znjyj6x8fzqa',
        );
    });
});
