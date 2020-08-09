/**
 * @param {character[][]} grid
 * @return {number}
 */
/**
 * 1. DFS
 * 深度优先搜索
 *  时间复杂度为O(MN)
 *  空间复杂度为O(MN)
 */
// var numIslands = function(grid) {
//     if (grid.length == 0) return 0;
//     let res = 0;
//     let rows = grid.length;
//     let cols = grid[0].length;

//     for(var i = 0; i < rows; i++) {
//         for(var j = 0; j < cols; j++) {
//             if(grid[i][j] == '1') {
//                 helper(grid, i, j, rows, cols);
//                 res++;
//             }
//         }
//     }

//     return res;
// };

// var helper = function(grid, i, j, rows, cols) {
//     // 判断不符合条件
//     if(i < 0 || j < 0 || i >= rows || j >= cols || grid[i][j] == '0') return;

//     // 将符合条件的标记为0
//     grid[i][j] = 0;

//     // 深度搜索上下左右
//     helper(grid, i + 1, j, rows, cols);
//     helper(grid, i - 1, j, rows, cols);
//     helper(grid, i, j + 1, rows, cols);
//     helper(grid, i, j - 1, rows, cols);
// }

/**
 * 2. 类似题目 朋友圈
 * 区别
此题是m * n的矩阵，不是n * n的矩阵
parent和rank数组元素命名要将i和j联系起来
union查找合并的时候，也要把两个是陆地的元素传进去
 */
var numIslands = function(grid) {
    if (grid.length == 0) return 0;

    let rows = grid.length;
    let cols = grid[0].length;
    let count = 0;
    let parent = [];
    let rank = [];

    let find = function(p) {
        if(p != parent[p]) {
            parent[p] = parent[parent[p]];
            p = parent[p];
        }

        return p;
    }

    let union = function(p, q) {
        let rootP = find(p);
        let rootQ = find(q);

        if (rootP == rootQ) return;
        
        if (rank[rootP] > rank[rootQ]) {
            parent[rootQ] = rootP;
        } else if (rank[rootP] < rank[rootQ]) {
            parent[rootP] = rootQ;
        } else {
            parent[rootP] = rootQ;
            rank[rootQ]++;
        }

        count--;
    }

    for (var i = 0; i < rows; i++) {
        for (var j = 0; j < cols; j++) {
            if(grid[i][j] == 1) {
                parent[i * cols + j] = i * cols + j;
                count++;
            }
            rank[i * cols + j] = 0;
        }
    }

    for (var i = 0; i < rows; i++) {
        for (var j = 0; j < cols; j++) {
            if (grid[i][j] == 1) {
                grid[i][j] = 0;
                i - 1 >= 0 && grid[i - 1][j] == 1 && union(i * cols + j, (i - 1) * cols + j);
                j - 1 >= 0 && grid[i][j -1 ] == 1 && union(i * cols + j, i * cols + j - 1);
                i + 1 < rows && grid[i + 1][j] == 1 && union(i * cols + j, (i + 1) * cols + j);
                j + 1 < cols && grid[i][j + 1] == 1 && union(i * cols + j, i * cols + j + 1);
            }
        }
    }

    return count;
};