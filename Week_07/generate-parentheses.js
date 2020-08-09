/**
 * @param {number} n
 * @return {string[]}
 */

/**
 * 显得出2n个括号的组合，再添加条件过滤；
 * 时间复杂度为O(n^2)
 */
// var generateParenthesis = function(n) {
//     generate(0, 2 * n, '');
//     return null;
// };

// var generate = function(level, max, str) {
//     // 递归终结条件
//     if(level >= max) {
//         // 验证str的合法性
//         // left可以随时加，只要不超标，right必须之前有左括号，且左括号>右括号
//         console.log('----str----', str);
//         return;
//     }
//     // 处理当前层逻辑 
//     // current logic: left or right
//     var str1 = str + '(';
//     var str2 = str + ')';

//     // 下探到下一层
//     generate(level + 1, max, str1); // 左括号
//     generate(level + 1, max, str2); // 右括号

//     // 清理当前层
// }

/**
 * 解题思路： 深度优先搜索
 */
var generateParenthesis = function(n) {
    var res = [];
    
    var generate = function(left, right, n, str) {
        if(left === n && right === n) {
            console.log(str);
            res.push(str);
            return;
        }
        // 剪枝
        if(left < n) {
            generate(left + 1, right, n, str + '(');
        }

        if(right < n && left > right) {
            generate(left, right + 1, n, str + ')');
        }
    }

    generate(0, 0, n, '');
    return res;
};