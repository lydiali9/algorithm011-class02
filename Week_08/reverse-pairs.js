/**
 * @param {number[]} nums
 * @return {number}
 */
/**
 * 1. 暴力法两个嵌套循环 O(n^2)
 * 2. merge-sort
 * 3. 树状数组
 */
let res;
var reversePairs = function(nums) {
    if (nums.length == 0) return 0;
    res = 0;
    mergeSort(nums, 0, nums.length - 1);

    return res;
};

var mergeSort = function (nums, start, end) {
    if (start >= end) return;

    let middle = start + (end - start) / 2;
    mergeSort(nums, start, middle);
    mergeSort(nums, middle + 1, end);

    let count = 0;
    for (var i = start, j = middle + 1; i <= middle;) {
        if (j > end || nums[i] > nums[j] * 2) {
            i++;
            res += count; 
        } else {
            j++;
            count++;
        }
    }
    // Arrays.sort(nums, start, end + 1);
}