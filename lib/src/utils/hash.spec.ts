import 'mocha';
import { expect } from 'chai';
import { sha256 } from './hash';
import { Bytes } from './bytes/bytes';

describe('sha256', function () {
    it('should pass test vectors', function () {
        expect(sha256(Bytes.fromHexString('616263')).toHexString()).to.eq(
            'ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad',
        );
        expect(sha256(Bytes.fromHexString('')).toHexString()).to.eq(
            'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855',
        );
    });
});
