/**
 * 丑数：对于只含有质因子2,3,5的数，我们称这样的数为丑数
 * 时间复杂度为O(n)
 * 空间复杂度为O(n)
 */
var nthUglyNumber = function(n) {
    var dp = new Array(n);
    dp[0] = 1;
    var a = 0, b = 0, c = 0; // a*2 b*3 c*5

    for(var i = 1; i < n; i++) {
        dp[i] = Math.min(dp[a] * 2, dp[b] * 3, dp[c] * 5);
        // 说明前a个丑数*2也不可能产生比i更大的丑数了
        // 所以移动a
        if(dp[i] === dp[a] * 2) {
            a++;
        }
        if(dp[i] === dp[b] * 3) {
            b++;
        }
        if(dp[i] === dp[c] * 5) {
            c++;
        }
    }
    return dp[n-1];
};