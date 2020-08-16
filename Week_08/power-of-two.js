/**
 * @param {number} n
 * @return {boolean}
 */
/**
 * 方法一： 取模
 *  判断n是以2为底的整数
 */
var isPowerOfTwo = function(n) {
    while(n > 1) {
        n /= 2;
    }

    if(n == 1) {
        return true;
    } else {
        return false;
    }
};

/**
 * 方法二：2的幂数的数字的二进制特点 + 位操作
 */
var isPowerOfTwo = function(n) {
    return n > 0 && (n & (n - 1)) == 0;
};