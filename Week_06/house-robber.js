/**
 * @param {number[]} nums
 * @return {number}
 */
/**
 * DP:
 *  a. 子问题
 *  b. 状态定义
 *  c. DP方程
 *  a[i]: 0到i能偷到最大值
 *  a[i] = a[i-1] + nums[i]
 *  
 * a[i][0,1] 0:第i个房子没偷， 1:第i个房子偷了
 * 
 * a[i][0] = Max(a[i-1][0], a[i-1][1])
 * a[i][1] = Max(a[i-1][0], 0) + a[i]
 */
// var rob = function(nums) {
//     if(nums.length == 0) return 0;

//     // let a = new Array(nums.length).fill(new Array(2).fill(0));
//     let a = Array.from(new Array(nums.length), () => new Array(2));

//     a[0][0] = 0;
//     a[0][1] = nums[0];

//     for(var i = 1; i < nums.length; i++) {
//         a[i][0] = Math.max(a[i-1][0], a[i-1][1]);
//         a[i][1] = a[i-1][0] + nums[i];
//     }

//     return Math.max(a[nums.length-1][0], a[nums.length-1][1]);
// };

/**
 * 方法二
 *  a[i]: 0到i能偷到最大值 max(a)
 *  a[i]: 0到i天，且nums[i]必偷的最大值
 *  
 *  a[i] = Max(a[i-1], a[i-2] + nums[i]);
 */
// var rob = function(nums) {
//     if(nums.length == 0) return 0;
//     if(nums.length == 1) return nums[0];

//     let a = new Array(nums.length);

//     a[0] = nums[0];
//     a[1] = Math.max(nums[0], nums[1]);

//     let res = Math.max(a[0], a[1]);

//     for(let i = 2; i < nums.length; i++) {
//         a[i] = Math.max(a[i-1], a[i-2] + nums[i]);
//         res = Math.max(a[i], res);
//     }
//     return res;
// };

/**
 * 方法三：
 *  时间复杂度为O(n)
 *  空间复杂度为O(1)
 */
var rob = function(nums) {
    let preMax = 0;
    let curMax = 0;

    for(let num of nums) {
        let temp = curMax;
        curMax = Math.max(preMax + num, curMax);
        preMax = temp;
    }
    return curMax;
};