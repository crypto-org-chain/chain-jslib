import Big from 'big.js';
import { Coin } from './coin/coin';
import { HDWallet } from './hdwallet/hdwallet';
import { Secp256k1KeyPair } from './keypair/secp256k1';
import address from './address';
import utils from './utils';

// The maximum number of decimal places of the results of operations involving division
// By default it is 20. Here we explicitly set it to 20 for correctness.
Big.DP = 20;

export default {
    address,
    utils,

    Coin,
    HDWallet,
    Secp256k1KeyPair,
};
