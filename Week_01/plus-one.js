/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let len = digits.length;
    for(var i = len - 1; i >= 0; i--) {
        digits[i]++;
        digits[i]%=10;
        if(digits[i] != 0) {
            return digits;
        } 
    }
    digits.unshift(1);
    return digits;
};