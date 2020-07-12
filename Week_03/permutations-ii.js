var permuteUnique = function(nums) {
    let res = [];
    var map = new Map();
    nums = nums.sort((a, b) => a - b);
    helper(res, [], map, nums);
    return res;
};

var helper = function(res, list, map, nums) {
    if(list.length == nums.length) {
        res.push(list.slice(0));
    } else {
        for(var i = 0; i < nums.length; i++) {
            if(map.get(i)) continue;
            if(i > 0 && nums[i - 1] == nums[i] && !map.get(i - 1)) continue;

            map.set(i, true);
            list.push(nums[i]);
            helper(res, list, map, nums);
            list.pop();
            map.set(i, false);
        }
    }
}