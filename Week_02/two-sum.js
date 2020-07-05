/**
 * 方法三：hash 
 * a + b = target, target -> for each a, check (target - a) exists in this array
 * map.has(num)
 * 
 * 
 */
var twoSum = function(nums, target) {
    var map = new Map();
    var res = [];
    for(var i = 0; i < nums.length; i++) {
        let num = target - nums[i];
        if(map.has(num)) {
            res.push(i, map.get(num))
            return res;
        }
        map.set(nums[i], i);
    }
    return res;
};