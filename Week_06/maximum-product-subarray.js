/**
 * @param {number[]} nums
 * @return {number}
 */
/**
 * 方法一
 *  动态规划
 *  遍历数组时计算当前最大值，并不断的更新
 * 令imax为当前最大值，则当前最大值为 imax = max(imax * nums[i], nums[i])
 * 由于存在负数，那么会导致最大的变最小的，最小的变最大的。因此还需要维护当前最小值imin，imin = min(imin * nums[i], nums[i])
 * 当负数出现时则imax与imin进行交换再进行下一步计算
 * 
 * 时间复杂度：O(n)
 * 空间复杂度为： O(1)
 */
var maxProduct = function(nums) {
    let max = nums[0];

    for(var i = 1, imax = max, imin = max; i < nums.length; i++) {
        // 当遇见负数时，最小值变最大值，最大值变最小值，所以进行交换
        if(nums[i] < 0) {
            [imax, imin] = [imin, imax];
            // swap(imax, imin);
        }

        // 记录每次循环的最大值和最小值
        imax = Math.max(imax * nums[i], nums[i]);
        imin = Math.min(imin * nums[i], nums[i]);

        // 存储最大值
        max = Math.max(max, imax);
    }

    return max;
};