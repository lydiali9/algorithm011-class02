/**
 * @param {character[][]} grid
 * @return {number}
 */

/**
 * DFS
 * 时间复杂度为O(m + n)
 * 空间复杂度为O(m + n)
 */
var numIslands = function(grid) {
    if (grid.length == 0) return 0;
    let res = 0;
    let rows = grid.length;
    let cols = grid[0].length;

    for (var i = 0; i < rows; i++) {
        for (var j = 0; j < cols; j++) {
            if (grid[i][j] == '1') {
                helper(grid, i, j, rows, cols);
                res++;
            }
        }
    }

    return res;
};

var helper = function(grid, i, j, rows, cols) {
    // judge if the params are all right
    if (i < 0 || j < 0 || i > rows - 1 || j > cols - 1 || grid[i][j] == '0') return;

    // 标记已经访问过了
    grid[i][j] = 0;

    // 判断上下左右的值是否为1，然后标记为0；
    helper(grid, i - 1, j, rows, cols); // 上
    helper(grid, i + 1, j, rows, cols); // 下
    helper(grid, i, j - 1, rows, cols); // 左
    helper(grid, i, j + 1, rows, cols); // 右
}