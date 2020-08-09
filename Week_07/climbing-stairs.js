/**
 * @param {number} n
 * @return {number}
 */
/**
 * 方法一： 动态规划 缓存数据
 * 
 * 时间复杂度为O(n)
 * 空间复杂度为O(n)
 */
// var climbStairs = function(n) {
//     if (n < 1) return 0;

//     var dp = new Array(n + 1).fill(0);
//     dp[0] = 1;
//     dp[1] = 1; 

//     for (var i = 2; i < dp.length; i++) {
//         dp[i] = dp[i - 1] + dp[i - 2];
//     }

//     return dp[n];
// };

/**
 * 方法二 ： 压缩了空间
 *     
 * 时间复杂度为O(n)
 * 空间复杂度为O(1)
 *  
 */
var climbStairs = function(n) {
    if (n  <= 2) return n;

    let f1 = 1;
    let f2 = 2;
    let f3 = 3;

    for(var i = 3; i <= n; i++) {
        f3 = f1 + f2;
        f1 = f2;
        f2 = f3;
    }

    return f3;
};