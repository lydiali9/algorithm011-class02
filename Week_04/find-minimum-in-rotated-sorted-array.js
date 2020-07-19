/**
 * @param {number[]} nums
 * @return {number}
 */
/**
 * 思路分析： 二分查找
 */
var findMin = function(nums) {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        let mid = (left + right) >>> 1;

        if (nums[mid] > nums[right]) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    return nums[left];
};