/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
/**
 * 思路分析： 你的算法时间复杂度必须是 O(log n) 级别，用二分法
 * 方法一： 暴力： 还原（O(logn)） -> 升序 -> 二分
 * 方法二： 二分查找
 */
var search = function(nums, target) {
    if (nums.length == 0) return -1;

    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let mid = (left + right) >>> 1;
        if(nums[mid] == target) return mid;
        // 如果中间的数小于最右边的数，则右半段是有序递增的
        // 若中间数大于最左边的数，则左半段是有序递增的
        if (nums[mid] < nums[right]) {
            // 有序的半段里用首尾两个数组来判断目标值是否在这一区域内，
            // 这样就可以确定保留哪半边了
            if (nums[mid] < target && nums[right] >= target) {
                left = mid + 1
            } else {
                right = mid - 1;
            }
        } else {
            if(nums[mid] > target && nums[left] <= target) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
    }

    return -1;
};