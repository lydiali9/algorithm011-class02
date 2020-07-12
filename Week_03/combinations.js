var combine = function(n, k) {
    let res = [];
    helper(res, n, k, [], 1);
    return res;
};

var helper = function(res, n, k, list, index) {
    // 终止条件
    if (list.length === k) {
        res.push(list.slice(0));
        return;
    }

    for(let i = index; i <= n; i++){
        list.push(i);
        helper(res, n, k, list, i+1);
        list.pop();
    }
}