/**
 * @param {number[]} nums
 * @return {number}
 */
 // 时间复杂度为O(n)
 // 空间复杂度也为O(n)
var removeDuplicates = function(nums) {
    if(nums.length == 0) return 0;
    let index = 0;
    for(var i = 0; i < nums.length; i++) {
        if(nums[i] != nums[i + 1]) {
            nums[index] = nums[i];
            index++;
        }
    }

    return index;
};