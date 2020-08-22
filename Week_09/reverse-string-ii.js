/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
/**
 * 用JS的库函数
 */
var reverseStr = function(s, k) {
    if (s.length <= k) return s.split('').reverse().join('');  // 如果剩余字符少于 k 个，则将剩余字符全部反转。

    var res = [];
    s = s.split('');

    while(s.length > k) {
        res.push(...(s.splice(0, k).reverse())); // 截取2反转后加入res
        res = res.concat(s.splice(0, k)); // 不需要反转的直接截取放入res中
    }

    res.push(...(s.reverse())); // s剩下的长度 <= k
    return res.join('');
};