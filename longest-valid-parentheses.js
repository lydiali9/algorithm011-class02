/**
 * @param {string} s
 * @return {number}
 */
/**
 * 思路分析：
 * 1. 栈 + 遍历
 *     时间复杂度为O(n)
 *     空间复杂度为O(n)
 * 2. 动态规划
 *     时间复杂度为O(n)
 *     空间复杂度为O(n) 
 */
var longestValidParentheses = function(s) {
    var maxLen = 0;
    var stack = [-1]; // 参照物， pop时可以用

    for (var i = 0; i < s.length; i++) {
        if (s[i] == '(') { // 索引时左括号就入栈
            stack.push(i);
        } else { // 左括号就弹出栈
            stack.pop();
            if (stack.length == 0) { // 栈变空了， 右括号就匹配不了了
                stack.push(i); // 重新设置参照物
            } else { // 右括号找到匹配了，计算有效的连续长度，
                maxLen = Math.max(maxLen, i - stack[stack.length - 1])
            }
        }
    }

    return maxLen;
};