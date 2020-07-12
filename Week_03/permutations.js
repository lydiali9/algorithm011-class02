var permute = function(nums) {
    let res = [];
    helper(res, [], nums);
    return res;
};

var helper = function(res, list, nums) {
    // 终止条件
    if (list.length == nums.length) {
        res.push(list.slice(0));
    } else {
        for (var i = 0; i < nums.length; i++) {
            // 如果存在就进行下一轮循环
            if (list.includes(nums[i])) {
                continue;
            }
            list.push(nums[i]);
            helper(res, list, nums);
            list.pop();
        }
    } 
}