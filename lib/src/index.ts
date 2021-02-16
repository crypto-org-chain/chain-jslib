import Big from 'big.js';
import { HDKey } from './hdkey/hdkey';
import { Secp256k1KeyPair } from './keypair/secp256k1';
import utils from './utils';
import { CroNetwork, CroSDK } from './core/cro';
import { Units } from './coin/coin';
import { cosmos } from './cosmos/v1beta1/codec';
// eslint-disable-next-line no-undef
import Tx = cosmos.tx.v1beta1.Tx;

// The maximum number of decimal places of the results of operations involving division
// By default it is 20. Here we explicitly set it to 20 for correctness.
Big.DP = 20;

const _ = {
    utils,
    HDKey,
    Secp256k1KeyPair,
    CroSDK,
    CroNetwork,
    Units,
    Tx,
};

export = _;
