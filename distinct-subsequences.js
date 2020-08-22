/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
/**
 * 思路分析
 *  动态规划
 *  S子序列中T出现的个数： S[j] T[i]
 *  1. 当S[j] != T[i]时， 此时对子序列出现的个数没有影响，等于T的前一位在S的前j-1位的子序列的个数
 *      状态转换方程： dp[i][j] = dp[i][j-1]
 *  2. 当S[j] ==T[i]时， 例如：S = ‘baba’ T='ba'，两者最后一位相同 
 *      T在S中出现的次数等于一下两种情况的和：
 *      2.1 ba在baba中出现的个数为1， 即遍历至T的j-1位时出现的个数
 *      2.2 b在bab中出现的个数为2， S[j] = T[i]，ba在baba中出现个数也为2
 * 
 *   状态转移方程： dp[i][j] = dp[i - 1][j - 1] + dp[i][j - 1];
 *  
 * dp[i][j]代表T的前i位在S的前j位的子序列的个数
 */
var numDistinct = function(s, t) {
    s = ' ' + s;
    t = ' ' + t;

    let sLen = s.length;
    let tLen = t.length;

    // 初始化
    let dp = [...new Array(tLen)].map(() => new Array(sLen));
    for (var j = 0; j < sLen; j++) {
        dp[0][j] = 1;
    }
    for (var i = 1; i < tLen; i++) {
        dp[i][0] = 0;
    }

    for (var i = 1; i < tLen; i++) {
        for (var j = 1; j < sLen; j++) {
            if (s[j] == t[i]) {
                dp[i][j] = dp[i - 1][j - 1] + dp[i][j - 1];
            } else {
                dp[i][j] = dp[i][j - 1];
            }
        }
    }

    return dp[tLen - 1][sLen - 1];
};