/**
 * @param {number[][]} grid
 * @return {number}
 */
/**
 * 方法一：
 *  动态规划
 *  a. 子问题
 *  b. 定义程序
 *  c. DP方程
 * 
 *  分为如下三种：
 *  1. 第0行，grid[i][j] = grid[i][j - 1] + grid[i][j]
 *  2. 第0列，grid[i][j] = grid[i - 1][j] + grid[i][j]
 *  3. grid[i][j] = min(grid[i - 1][j], grid[i][j - 1]) + grid[i][j]
 */
var minPathSum = function(grid) {
    if (grid.length == 0) return 0;
    let m = grid.length;
    let n = grid[0].length;

    for(var i = 0; i < m; i++) {
        for(var j = 0; j < n; j++) {
            if (i == 0 && j == 0) {
                grid[i][j] = grid[i][j];
            } else if (i == 0 && j != 0) {
                grid[i][j] = grid[i][j] + grid[i][j-1];
            } else if (i != 0 && j == 0) {
                grid[i][j] = grid[i][j] + grid[i-1][j];
            } else {
                grid[i][j] = Math.min(grid[i - 1][j], grid[i][j - 1]) + grid[i][j];
            }
        }
    }

    return grid[m-1][n-1];
};