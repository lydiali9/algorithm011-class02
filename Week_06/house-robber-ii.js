/**
 * @param {number[]} nums
 * @return {number}
 */
/**
 * 方法一： 动态规划
 *  此题和198的很像，只是房屋都围成一圈
 *  a. 子问题
 *  b. 状态定义
 *  c. DP方程
 * 
 *  所以此题可以分为两种情况
 *  偷第一家，不能偷最后一家
 *  不偷第一家，能偷最后一家 
 */
var rob = function(nums) {
    if (nums == null || nums.length == 0) return 0;
    if (nums.length == 1) return nums[0];

    return Math.max(helper(nums, 0, nums.length - 2), helper(nums, 1, nums.length - 1));
};

var helper = function(nums, start, end) {
    var pre = 0;
    var pre2 = 0;
    var cur = 0;

    for(var i = start; i <= end; i++) {
        cur = Math.max(pre2 + nums[i], pre);
        pre2 = pre;
        pre = cur;
    }

    return cur;
}