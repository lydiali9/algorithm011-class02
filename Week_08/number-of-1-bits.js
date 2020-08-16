/**
 * @param {number} n - a positive integer
 * @return {number}
 */

/**
 * 方法一： for loop： 0 ---> 32
 * 方法二： %2  /2
 * 方法三： &1  x = x >> 1; (32)
 * 方法四： X=X&(X-1)清零最低位的1
 * 方法五： 调用函数懒蛋法
 */
/**
 * 方法一： 循环和位移动
 *  时间复杂度为O(1)
 *  空间复杂度为O(1)
 *  任何数字跟掩码1进行逻辑与运算，都可以获得这个数字的最低位
 *  检查下一位时，将掩码左移一位
 *  
 *  0000 0000 0000 0000 0000 0000 0000 0001 =>
 *  0000 0000 0000 0000 0000 0000 0000 0010
 */
var hammingWeight = function(n) {
    let count = 0;
    let mask = 1;
    for (let i = 0; i < 32; i++) {
        if ((n & mask) != 0) {
            count++;
        }
        mask <<= 1;
    }

    return count;
};

/**
 * 方法二和方法三： %2  /2
 *  ">>>"为无符号左边填充0，">>"为有符号填充
 */
var hammingWeight = function(n) {
    let count = 0;

    while (n) {
        // if (n % 2 === 1) {
        //     count++;
        // }
        if (n & 1 === 1) {
            count++;
        }
        n >>>= 1; // n >>>= 1;
    }

    return count;
};

/**
 * 方法四： X=X&(X-1)清零最低位的1
 *  位操作技巧
 * 
 * 空间复杂度：O(1)
 * 每次把数字最后一个二进制位1反转为0，sum++
 * 当没有1可反的时候，数字变成了0
 * n & (n-1)
 * 清零最低位的1
 * 
 * n数字的二进制的最低位的1总是对应n-1数字的二进制的0
 * 相与后，其它位不变，当前位变成0
 */
var hammingWeight = function(n) {
    let count = 0;

    while (n != 0) {
        count++;
        n &= (n - 1);
    }
    return count;
};

/**
 * 方法五
 *  toString(2)转二进制
 *  正则匹配二进制某个数出现的次数
 */
var hammingWeight = function(n) {
    return (n.toString(2).match(/1/g) || []).length;
};