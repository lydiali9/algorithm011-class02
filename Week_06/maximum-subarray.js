/**
 * @param {number[]} nums
 * @return {number}
 */
/**
 * 方法三： 暴力求解： 枚举所有的起点和终点 时间复杂度为O(n^2)
 *         起点的话从正数开始，终点也是从正数开始
 * 方法一：
 *  贪心算法：若当前指针所指的元素之和小于0，就丢弃当前之前的数列
 *  时间复杂度为O(n)
 *  空间复杂度为O(1)
 */
// var maxSubArray = function(nums) {
//     let sum = 0;
//     let ans = nums[0];

//     for(num of nums) {
//         if (sum > 0) {
//             sum += num;
//         } else {
//             sum = num;
//         }
//         ans = Math.max(ans, sum);
//     }

//     return ans;
// };

/**
 * 方法二1：
 *  动态规划
 *  a. 分治（子问题） max_sum(i) = Max(max_sub(i-1), 0) + a[i]
 *  b. 状态数组i定义 f[i] 
 *  c. DP方程 f[i] = Max(f[i-1], 0) + a[i]
 *  若前一个元素大于0，则将其加到当前元素上
 *  时间复杂度为O(n), 只遍历了一次数组
 *  空间复杂度为O(1), 只是用了常数空间
 */
// var maxSubArray = function(nums) {
//     let sum = 0;
//     for(let i = 1; i < nums.length; i++) {
//         if(nums[i - 1] > 0) {
//             nums[i] += nums[i - 1];
//         }
//     }
//     return Math.max(...nums);
// };

/**
 * 方法二2：
 *  *  动态规划
 *  a. 分治（子问题） max_sum(i) = Max(max_sub(i-1), 0) + a[i]
 *  b. 状态数组i定义 f[i] 
 *  c. DP方程 f[i] = Max(f[i-1], 0) + a[i]
 * 
 *  1. dp[i] = Max(nums[i], nums[i] + nums[i-1]);
 *  2. 最大子序和 = 当前元素自身最大，或者包含之前后最大
 */
// var maxSubArray = function(nums) {
//     let dp = nums;
//     for(let i = 1; i < nums.length; i++) {
//         dp[i] = Math.max(nums[i], nums[i] + dp[i-1]);
//     }
//     return Math.max(...dp);
// };

/**
 * 方法二3：
 *  *  动态规划
 *  a. 分治（子问题） max_sum(i) = Max(max_sub(i-1), 0) + a[i]
 *  b. 状态数组i定义 f[i] 
 *  c. DP方程 f[i] = Max(f[i-1], 0) + a[i]
 * 
 *  1. dp[i] = Max(nums[i], nums[i] + nums[i-1]);
 *  2. 最大子序和 = 当前元素自身最大，或者包含之前后最大
 */
var maxSubArray = function(nums) {
    for(let i = 1; i < nums.length; i++) {
        nums[i] = Math.max(nums[i - 1], 0) + nums[i];
    }
    return Math.max(...nums);
};