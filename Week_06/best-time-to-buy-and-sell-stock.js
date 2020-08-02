/**
 * @param {number[]} prices
 * @return {number}
 */
/**
 * 方法一： 贪心算法
 *  最小价钱购买，最大价钱时卖出为最大利润
 */
var maxProfit = function(prices) {
    if (prices.length == 0) return 0;

    let minPrice = prices[0];
    let maxPro = 0;

    for(var i = 0; i < prices.length; i++) {
        minPrice = Math.min(minPrice, prices[i]);
        maxPro = Math.max(maxPro, prices[i] - minPrice);
    }

    return maxPro;
};