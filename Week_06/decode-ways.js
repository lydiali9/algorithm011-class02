/**
 * @param {string} s
 * @return {number}
 */
// 如下方法不对， 还是用动态规划
var numDecodings = function(s) {
    if(!s) return 1;
    var cnt = 0;
    if(s[0] !== '0') {
        let b = s.slice(1);
        console.log(b);
        console.log(s);
        cnt += numDecodings(b);
    }
console.log(s);
    if(s.length >= 2 && s[0] === '1' || (s[0] === '2' && s[1] >= 0 && s[1] <= 6)) {
        console.log(s);
        cnt += numDecodings(s.slice(2));
    }    
    return cnt;
};