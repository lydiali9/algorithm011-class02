/**
 * @param {string} s
 * @return {boolean}
 */
/**
 * 1. 双指针法
 *      s[left] != s[right]
 *          s[left+1, right] || s[left, right-1]
 *          有一个为真，则表示删除一个字母是回文
 */
var validPalindrome = function(s) {
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        if (s[left] != s[right]) {
            return idValid(s.slice(left, right)) || idValid(s.slice(left + 1, right + 1));
        }

        left++;
        right--;
    }

    return true;
}; 

var idValid = function (s) {
    for(let i = 0; i < s.length / 2; i++) {
        if(s[i] !== s[s.length - 1 - i]) {
            return false;
        }
    }

    return true;
}