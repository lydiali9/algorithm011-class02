/**
 * @param {character[][]} board
 * @return {boolean}
 */
/**
 * 思路分析
 *  1. 行：当前行9个数字不能有重复数字
 *  2. 列：当前列9个数字不能有重复数字
 *  3. 九宫格： 前子数独内没有重复数字
 *             9*9的数独划分为9个小的子数独
 *             boxIndex = Math.floor(row/3) * 3 + Math.floor(columns/3)
 * 
 *      0 1 2
 *      3 4 5
 *      6 7 8
 */
var isValidSudoku = function(board) {
    let n = board.length;
    if (n === 0) return false;

    // 三个方向上判重
    // let rows = new Array(n).fill({});
    // let cols = new Array(n).fill({});
    // let boxes = new Array(n).fill({});

    const boxes = [{}, {}, {}, {}, {}, {}, {}, {}, {}];
    const cols = [{}, {}, {}, {}, {}, {}, {}, {}, {}]; 
    const rows = [{}, {}, {}, {}, {}, {}, {}, {}, {}]; 
    // console.log(rows);
    // console.log(cols);
    // console.log(boxes);

    // 遍历数独
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < n; j++) {
            let digit = board[i][j];

            if (digit != '.') {
                const k = Math.floor(j / 3) +  (Math.floor(i / 3) * 3);

                if (boxes[k][digit] || cols[j][digit] || rows[i][digit]) {
                    return false;
                }

                boxes[k][digit] = cols[j][digit] = rows[i][digit] = true;
            }
        }
    }

    return true;
};