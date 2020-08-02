/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
    if(a.length == 0) return 0;
    let m = a.length, n = a[0].length, result = 0;
    let b = Array.from(new Array(m+1), () => new Array(n+1));
    for (let i = 1 ; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if(a[i-1][j-1] == '1') {
                b[i][j] = Math.min(Math.min(b[i][j-1] , b[i-1][j-1]), b[i-1][j]) + 1;
                result = Math.max(b[i][j], result); // update result
            }
        }
    }
    return result*result;
}