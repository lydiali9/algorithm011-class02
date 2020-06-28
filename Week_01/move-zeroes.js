/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
/**
 * 1. 统计0的个数，全部放在后面
 * 2. 开一个新数组，遍历非0直接放在数组前面，0往后面放，内存空间有点大
 * 3. 在数组中直接进行index的操作
 * 4. 双指针替补零
 * 时间复杂度为：O(n)
 * 空间复杂度为：O(n)
 */
var moveZeroes = function(nums) {
    if(nums.length == 0) return [];
    var j = 0; // 记录非零元素的位置
    for(var i = 0; i < nums.length; i++) {
        if(nums[i] != 0) {
            nums[j] = nums[i];// 如果是非0元素就挪动到j的位置去
            // 非0元素挪动到前面j的位置了，那么i的位置就补上0
            if(i != j) {
                nums[i] = 0;
            }
            j++;
        }
    }
};