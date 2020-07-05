/**
 * 1. 暴力方法
 *      sort, sorted_str 相等
 *  时间复杂度为O(NlogN) N为字符串的长度
 * 
 * 
 * 2. hash map -> 统计每个字母的频次
 * 3. 转换成数组，遍历每个元素，是否在另一个数组中，在的话删除；最后返回长度是否为0，是的话true；
 */
 // 方法一 遍历其中一个数组，删除遍历的每个元素在另一个数组中，最后等于‘’return true;否则是false
var isAnagram = function(s, t) {
    if(s.length != t.length) return false;
    let sArr = s.split('');
    let tArr = t.split('');

    tArr.map((item, index) => {
        if(sArr.indexOf(item) > -1) {
            sArr.splice(sArr.indexOf(item), 1);
        }
    })

    return !sArr.length;

};

var isAnagram = function(s, t) {
    if(s.length != t.length) return false;
    return  s.split('').sort().join('') == t.split('').sort().join('');
};

/**
 *  * 2. hash map -> 统计每个字母的频次
 */
var isAnagram = function(s, t) {
    if(s.length != t.length) return false;
    const obj = {};

    for(var i = 0; i < s.length; i++) {
        obj[s[i]] ? obj[s[i]]++ : (obj[s[i]] = 1);
        obj[t[i]] ? obj[t[i]]-- : (obj[t[i]] = -1);
    }

    return Object.keys(obj).every(item => obj[item] === 0);
};