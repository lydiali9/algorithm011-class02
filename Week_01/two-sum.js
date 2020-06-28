/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
/**
 * 暴力法
 * 时间复杂度为O(n^2)
 */
var twoSum = function(nums, target) {
    let res = []
    for(var i = 0; i < nums.length; i++) {
        for(var j = i + 1; j < nums.length; j++) {
            if(nums[i] + nums[j] == target) {
                res.push(i, j);
            }
        }
    }
    return res;
};


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
/**
 * 目标值减去遍历的元素，然后差在数组中，且不重复；
 * 时间复杂度为O(n)
 */
var twoSum = function(nums, target) {
    var arr = [];
    for(var i = 0; i < nums.length; i++) {
        let index = nums.indexOf(target - nums[i]);
        if(index != -1 && arr.indexOf(index) == -1 && i != index) {
            arr.push(i, index);
        }
    }

    return arr;
};