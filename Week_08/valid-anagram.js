/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
/**
 * 方法一：
 *  遍历s，看每个字母是否在t中
 *  时间复杂度为O(n)
 *  空间复杂度为O(1)
 */
// var isAnagram = function(s, t) {
//     s = Array.from(s);
//     t = Array.from(t);

//     for(var i = 0; i < s.length; i++) {
//         let letter = s[i];
//         if(t.includes(letter)) {
//             t.splice(t.indexOf(letter), 1);
//         } else {
//             return false;
//         }
//     }

//     return !t.length;
// };

/**
 * 方法二：
 *  字符串转数组，然后字母排序，在比较两者是否相同
 *  sort的时间复杂度为O(NlogN)
 *  空间复杂度为O(1)
 */
var isAnagram = function(s, t) {
    return s.split('').sort().join('') == t.split('').sort().join('');
};

/**
 * 快排
 */