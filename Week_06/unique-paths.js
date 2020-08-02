/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
/**
 * 方法一：
 *  动态规划
 *  机器人只能向下或者向右移动一步
 *  1. 从左上角到右下角的走法 = 从右边开始走的路径总数 + 从下边开始走的路径总数
 *  所以动态方程 dp[i][j] = dp[i][j-1] + dp[i-1][j]
 *  2. 初始值第一行和第一列的值为：
 *  dp[i][0] = 1;
 *  dp[0][j] = 1;
 *  
 */
var uniquePaths = function(m, n) {
    // 初始化二维数组
    var dp = new Array(m+1).fill(1);

    for(var i = 0; i < m; i++) {
        dp[i] = new Array(n+1).fill(1);
    }

    for(var i = 1; i < m; i++) {
        for(var j = 1; j < n; j++) {
            dp[i][j] = dp[i][j-1] + dp[i-1][j];
        }
    }

    return dp[m-1][n-1];
};