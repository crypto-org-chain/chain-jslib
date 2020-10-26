import Big from 'big.js';
import { Coin } from './coin';

// The maximum number of decimal places of the results of operations involving division
// By default it is 20. Here we explicitly set it to 20 for correctness.
Big.DP = 20;

const cro = {
    Coin,
};
export default cro;
