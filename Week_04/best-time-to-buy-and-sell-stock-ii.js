/**
 * @param {number[]} prices
 * @return {number}
 */
/**
 * 思路分析：贪心算法
 * 趋向于最短长度匹配
 *  明天比今天价格高，今天买入明天就卖出
 *  以后的每一天都是如此重复不留到第三天
 * 时间复杂度为O(n)
 * 空间复杂度为O(1)
 */
var maxProfit = function(prices) {
    let sum = 0;
    for(var i = 0; i < prices.length; i++) {
        if(prices[i + 1] > prices[i]) {
            sum += prices[i + 1] - prices[i];
        }
    }
    return sum;
};