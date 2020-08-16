/**
 * @param {number} n
 * @return {number}
 */
/**
 * 方法一递归
 *  思路分析：
 *  1. 皇后在每一行都会有n个列可以选择，相当于状态树的每一层都有n个分叉
 *  2. 走下一个分层前需要判断攻击范围，每次成功都存储当前的列，行数则为当前遍历到的状态树的层次，也是存入数组元素的序列
 *  3. 若走到了最底层，则表示当前存储的状态符合条件
 */
var totalNQueens = function(n) {
    let res = 0;
    let cols = new Set();
    let pies = new Set();
    let nas = new Set();

    var recursion = function(row) {
        // 终止条件
        if (row >= n) {
            // 由于queens在reverse会被修改，所以这里克隆一份
            res++;
            return;
        }

        // 遍历列
        for (var col = 0; col < n; col++) {
            // 判断是否在攻击范围内，如果是continue
            if (cols.has(col) || pies.has(col + row) || nas.has(col - row)) {
                continue;
            }

            cols.add(col);
            pies.add(col + row);
            nas.add(col - row);

            // dills down
            recursion(row + 1);

            // reverse status
            cols.delete(col);
            pies.delete(col + row);
            nas.delete(col - row);
        }
    }

    recursion(0);
    return res;
};

/**
 *  方法二：位运算
 *  1. DFS
 *  2. 当前列， 左写对角线， 右对角线
 *  3. 二进制为1代表不可放置， 0相反
 *  4. x&-x: 得到最低位的1
 *  5. x&(x-1): 清零最低位的1
 *  6. x&((1<<n)-1): 将x最高位至第n位（含）清零
 *  
 */
var totalNQueens = function(n) {
    var res = 0;

    var dfs = function(n, row, cols, pie, na) {
        // 终止条件
        if (row >= n) {
            res++;
            return;
        }

        // 得到当前所有的空位
        let bits = (~(cols | pie | na)) & ((1 << n) - 1);
        while (bits) {
            // 取最低位的1
            let  p = bits & -bits;
            // 把p位置上放入皇后
            bits = bits & (bits - 1);
            dfs(n, row + 1, cols | p, (pie | p) << 1, (na | p) >> 1);
        }
    }

    dfs(n, 0, 0, 0, 0);
    return res;
};