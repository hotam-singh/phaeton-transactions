"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BigNum = require("@phaetonhq/bignum");
const constants_1 = require("../constants");
const validation_1 = require("./validation");
const BASE_10 = 10;
const PHAETON_MAX_DECIMAL_POINTS = 8;
const getDecimalPlaces = (amount) => (amount.split('.')[1] || '').length;
exports.convertBeddowsToPHA = (beddowsAmount) => {
    if (typeof beddowsAmount !== 'string') {
        throw new Error('Cannot convert non-string amount');
    }
    if (getDecimalPlaces(beddowsAmount)) {
        throw new Error('Beddows amount should not have decimal points');
    }
    const beddowsAmountBigNum = new BigNum(beddowsAmount);
    if (validation_1.isGreaterThanMaxTransactionAmount(beddowsAmountBigNum)) {
        throw new Error('Beddows amount out of range');
    }
    const lskAmountBigNum = beddowsAmountBigNum.div(constants_1.FIXED_POINT);
    return lskAmountBigNum.toString(BASE_10);
};
exports.convertPHAToBeddows = (lskAmount) => {
    if (typeof lskAmount !== 'string') {
        throw new Error('Cannot convert non-string amount');
    }
    if (getDecimalPlaces(lskAmount) > PHAETON_MAX_DECIMAL_POINTS) {
        throw new Error('PHA amount has too many decimal points');
    }
    const lskAmountBigNum = new BigNum(lskAmount);
    const beddowsAmountBigNum = lskAmountBigNum.mul(constants_1.FIXED_POINT);
    if (validation_1.isGreaterThanMaxTransactionAmount(beddowsAmountBigNum)) {
        throw new Error('PHA amount out of range');
    }
    return beddowsAmountBigNum.toString();
};
exports.prependPlusToPublicKeys = (publicKeys) => publicKeys.map(publicKey => `+${publicKey}`);
exports.prependMinusToPublicKeys = (publicKeys) => publicKeys.map(publicKey => `-${publicKey}`);
//# sourceMappingURL=format.js.map
