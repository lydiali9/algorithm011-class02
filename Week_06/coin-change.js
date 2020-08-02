/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */

/*
f(n) = f(n-1) + f(n-2)
steps
f(n) = sum(f(n - steps[i])) for i in steps

f(n) = min(f(n - coins[i])) for i in coins + 1

leetcode: 题71
类似：每次走一步 两部 五步，上到11级台阶，你有多少种不同的走法
时间复杂度：
空间复杂度： 
*/
// var coinChange = function(coins, amount) {
//     if(amount == 0) return 0;
//     var num = Infinity;
//     for(var i = 0; i < coins.length; i++) {
//         // 金额不可达
//         if(coins[i] > amount) continue;
//         // 总金额减去当前的金额后的解，转换为子问题
//         var subAmout = coinChange(coins, amount - coins[i]);
//         // 子问题无解
//         if(subAmout == -1) continue;
//         num = Math.min(num, subAmout + 1);
//     }
//     return num == Infinity ? -1 : num;
// };
// 方法2: 动态规划 利用缓存，从而提高效率
// var coinChange = function(coins, amount) {
//     var dp = new Array(amount + 1).fill(Infinity);
//     dp[0] = 0;
//     for(let i = 1; i < dp.length; i++) {
//         for(let coin of coins) {
//             // 总额要大于循环到的当前币种的面额
//             if(coin <= i) {
//                 dp[i] = Math.min(dp[i], dp[i - coin] + 1);
//             }
//         }
//     }
//     return dp[amount] === Infinity ? -1 : dp[amount];
// }


/**
 * 1. 暴力法，每次取值的和为为11， 递归 时间复杂度为：指数级
 * 2. BFS， 第一次遇到为0的层级就是步骤数；
 * 3. DP
 *  a. subProblem
 *  b. DP array f(n) = f(n-1) + f(n-2) + f(n-3)
 *      f(n) = min(f(n-k) , for k in [1, 2, 5]) + 1
 *  c. DP 方程
 */
var coinChange = function(coins, amount) {
    var dp = new Array(amount + 1).fill(Infinity);
    dp[0] = 0;
    for(let i = 1; i < dp.length; i++) {
        for(let coin of coins) {
            // 总额要大于循环到的当前币种的面额
            if(coin <= i) {
                dp[i] = Math.min(dp[i], dp[i - coin] + 1);
            }
        }
    }
    return dp[amount] === Infinity ? -1 : dp[amount];
}

// 方法3: 贪心算法
// var coinChange = function(coins, amount) {
//     coins.sort((a, b) => a - b);
//     let count = Infinity;

//     var helper = function(curAmount, coinsNum, index) {
//         if (curAmount === 0) {
//             if (coinsNum < count) count = coinsNum;
//             return;
//         }
//         if(index >= coins.length) return;
//         if (index >= coins.length) return;
//         for (let k = Math.floor(curAmount / coins[index]); k >= 0 && k + coinsNum < count; k--) {
//             helper(curAmount - k * coins[index], coinsNum + k, index + 1);
//         }
//     }
//     helper(amount, 0, 0);
//     return count == Infinity ? -1 : count;
// }