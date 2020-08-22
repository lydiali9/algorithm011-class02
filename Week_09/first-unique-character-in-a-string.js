/**
 * @param {string} s
 * @return {number}
 */
/**
 * 1. 暴力法， 双重遍历
 * 2. map（hashmap O(1)， treemap（二叉搜索树 O(logn)））
 * 3. hash table 统计字母出现的个数
 * 4. 遍历一个字符的indexOf==lastIndexOf，就返回
 */
var firstUniqChar = function(s) {
    for (var i = 0; i < s.length; i++) {
        if (s.indexOf(s[i]) == s.lastIndexOf(s[i])) {
            return i;
        }
    }

    return -1;
};

// 方法二
var firstUniqChar = function(s) {
    var map = new Map();

    for (var i = 0; i < s.length; i++) {
        if (map.has(s[i])) {
            map.set(s[i], map.get(s[i]) + 1);
        } else {
            map.set(s[i], 1);
        }
    }
    for (var [key, value] of map) {
        if (value === 1) {
            return s.indexOf(key);
        }
    }

    return -1;
};