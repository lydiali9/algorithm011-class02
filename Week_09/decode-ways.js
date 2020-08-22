/**
 * @param {string} s
 * @return {number}
 */
// 方法一： 如下方法不对， 还是用动态规划
var numDecodings = function(s) {
    if(!s) return 1;
    var cnt = 0;
    if(s[0] !== '0') {
        let b = s.slice(1);
        console.log(b);
        console.log(s);
        cnt += numDecodings(b);
    }
console.log(s);
    if(s.length >= 2 && s[0] === '1' || (s[0] === '2' && s[1] >= 0 && s[1] <= 6)) {
        console.log(s);
        cnt += numDecodings(s.slice(2));
    }    
    return cnt;
};

// 方法二：
/**
 * 动态规划
 *  1. 数组组合， 最大两位数，且小于27， 大于0
 *      1.1 当为一位数字时，形如X；
 *          0时，首字母为0，返回0；
 *          非首字母，跳过，此处组合为0
 *          转移方程： s[i-1] != 0 && dp[i] = dp[i-1] + dp[i];
 *      1.2 当为两位数字时，形如nX
 *          1X时，10-19可以为任何值
 *          转移方程： s[i-2] == 1 && dp[i] = dp[i] + dp[i-2]
 *          2X时，X < 7
 *          转移方程：s[i-2] == 2 && s[i-1] < 7 && dp[i] = dp[i] + dp[i-2]
 *          3X-9X时，n > 3，X为0只能跳过
 *  2. 数字为0时，无解码
 */
var numDecodings = function(s) {
    if (s[0] == 0) return 0;

    let dp = new Array(s.length + 1).fill(0);
    dp[0] = dp[1] = 1;

    for (let i = 2; i <= s.length; i++) {
        if (s[i - 1] != 0) {
            dp[i] += dp[i - 1];
        }

        if (s[i - 2] == 1 || (s[i - 2] == 2 && s[i - 1] < 7)) {
            dp[i] += dp[i - 2];
        }
    }

    return dp[s.length];
}