/**
 * @param {number} n
 * @return {string[][]}
 */
/**
 * 方法一： 递归 
 * 思路分析：
 *  1. 皇后在每一行都会有n个列可选，相当于状态树的每一层都有n个分叉
 *  2. 走下一个分层前需要判断攻击范围，每次成功都储存当前所在的列，行数则为当前遍历到的状态树层次
 *      也是存入数组元素的序列；
 *  3. 若走到了最底层，则表示当前存储的状态符合条件
 */
var solveNQueens = function(n) {
    var res = [];
    var cols = new Set(); // 垂直线的攻击位置
    var pies = new Set(); // 向左对角线攻击的位置
    var nas = new Set(); // 向右对角线攻击的位置

    // 递归生成皇后的位置
    var recurison = function(row, queens) {
        if (row >= n) {
            // 由于queens在reverse会被修改，所以这里克隆一份
            res.push(queens.slice(0));
            return;
        }
        // 遍历列
        for (var col = 0; col < n; col++) {
            // 判断是否在攻击范围， 是则continue
            if (cols.has(col) || pies.has(col + row) || nas.has(col - row)) {
                continue;
            }

            cols.add(col);
            pies.add(col + row);
            nas.add(col - row);
            queens.push(col);

            // dills down
            recurison(row + 1, queens);

            // reverse status
            queens.pop();
            cols.delete(col);
            pies.delete(col + row);
            nas.delete(col - row);
        }
    }

    // 生成棋盘
    var generateCheckerboard = function() {
        return res.map(queens => {
            return queens.map(q => {
                return new Array(n).fill().map((k, i) => {
                    return i === q ? 'Q' : '.'
                }).join('');
            });
        })
    }

    recurison(0, []);
    return generateCheckerboard();
};