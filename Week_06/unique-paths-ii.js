/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
/**
 * 解题思路：
 *  动态规划
 *  1. dp[i][j]表示的是走到第i行j列的时候，总共有多少种走法。
 *  2. 每个位置只能从左边走过来，或者从上边走过来，只有这两个方向。如果从上边走过来，走法有dp[i-1][j]种。
 *     如果是从左边走过来，走法是dp[i][j-1]种，总共走法是dp[i-1][j]+dp[i][j-1]。 
 *  3. 所以状态转移方程是 dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
 *  4. 边界条件，因为在obstacleGrid[0][0]等于0的时候，dp[1][1]=1,所以这里
 *     要么dp[0][1] = 1，
 *     要么dp[1][0] = 1，这两个都是可以的。
 * 
 * 时间复杂度为O(mn)
 * 空间复杂度为O(mn)
 */
// var uniquePathsWithObstacles = function(obstacleGrid) {
//     let rows = obstacleGrid.length;
//     let cols = obstacleGrid[0].length;

//     let dp = new Array(rows);
//     for(var i = 0; i < rows; i++) {
//         dp[i] = new Array(cols);
//     }

//     for(var i = 0; i < rows; ++i) {
//         for(var j = 0; j < cols; ++j) {
//             if(obstacleGrid[i][j] == 1) {
//                 dp[i][j] = 0;
//                 continue;
//             }
//             if(i == 0 && j == 0) {
//                 dp[i][j] = 1;
//                 continue;
//             } else if(i == 0) {
//                  dp[i][j] = dp[i][j-1];
//                  continue;
//             } else if(j == 0) {
//                 dp[i][j] = dp[i-1][j];
//                 continue;
//             }
//             dp[i][j] = dp[i-1][j] + dp[i][j-1];
//         }
//     }
//     return dp[rows-1][cols-1];
// };

var uniquePathsWithObstacles = function(obstacleGrid) {
    let rows = obstacleGrid.length;
    let cols = obstacleGrid[0].length;

    if(obstacleGrid[0][0] == 1){
        return 0;
    }

    let dp = new Array(rows+1).fill(new Array(cols+1).fill(0))
    dp[1][1] = 1
    
    for(var i = 1; i <= rows; i++) {
        for(var j = 1; j <= cols; j++) {
            if(obstacleGrid[i-1][j-1] == 1) {
                dp[i][j] = 0;
            } else {
                dp[i][j] = dp[i-1][j] + dp[i][j-1];
            }
        }
    }
    return dp[rows][cols];
};