/**
 * @param {number[]} nums
 * @return {number}
 */
/**
 * 思路分析：
 *  动态规划
 *      1. 状态定义
 *          dp[i]: 表示以nums[i]为当前最长递增子序列尾元素的长度
 *      2. 转移方程
 *          2.1 当nums[i] > nums[j]时，
 *              nums[i]可以作为前一个是最长的递增子序列dp[i]新的尾元素，dp[i] = dp[j] + 1
 *              即方程式为： dp[i] = Math.max(dp[i], dp[j] + 1);
 *          2.2 当nums[i] <= nums[j]时，是下降的，不满足上升，跳过继续遍历下一个
 *  时间复杂度为O(n^2)
 *  空间复杂度为O(n)
 */
// 方法一
var lengthOfLIS = function(nums) {
    if (nums.length == 0) return 0;

    let dp = new Array(nums.length).fill(1);
    let max = 0;

    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[j] < nums[i]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
        max = Math.max(max, dp[i]);
    }

    return max;
};

// 方法二
var lengthOfLIS = function(nums) {
    let n = nums.length;
    if (n <= 1) return n;

    let dp = new Array(n);
    let end = 0;

    for (let i = 0; i < n; i++) {
        let left = 0;
        let right = end;

        while (left < right) {
            let middle = (left + right) >> 1;

            if (dp[middle] < nums[i]) {
                left = middle + 1;
            } else {
                right = middle;
            }
        }
        dp[left] = nums[i];
        end == right && end++;
    }
    return end;
};