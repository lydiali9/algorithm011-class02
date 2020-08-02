/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
    let m = text1.length;
    // if(m == 0) return 0;

    let n = text2.length;
    // if(n == 0) return 0;

    // let dp = new Array(m+1).fill(new Array(n+1).fill(0));
    let dp = Array.from(new Array(m+1),() => new Array(n+1).fill(0))

    for(var i = 1; i <= m; i++) {
        for(var j = 1; j <= n; j++) {
            if (text1[i-1] == text2[j-1]){
                dp[i][j] = dp[i-1][j-1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i][j-1],dp[i-1][j]);
            }
        }
    }
    return dp[m][n];
};