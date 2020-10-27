import Big from 'big.js';

const isBigInteger = (val: Big): boolean => {
    return val.cmp(val.toFixed(0)) === 0;
};

export { Big, isBigInteger };
