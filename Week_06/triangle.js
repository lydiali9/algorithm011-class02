/**
 * @param {number[][]} triangle
 * @return {number}
 */
/**
 * 1. brute-force 递归 n层： left or right： 2^n
 * 2. DP
 *    a:重复性（分治）problem(i, j) = min(sub(i+1, j), sub(i+1, j+1)) + a[i,j];
 *    b:定义状态数组 f[i,j]
 *    c:DP方程 f[i,j] = = min(f[i+1, j], f[i+1, j+1]) + a[i,j];
 */
var minimumTotal = function(triangle) {
    for(var i = triangle.length - 2; i >= 0; --i) {
        for(var j = 0; j < triangle[i].length; ++j) {
            triangle[i][j] += Math.min(triangle[i+1][j], triangle[i+1][j+1]);
            console.table(triangle);
        }
    }
    return triangle[0][0];
};