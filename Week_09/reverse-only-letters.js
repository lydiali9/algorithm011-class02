/**
 * @param {string} S
 * @return {string}
 */

/**
 * 
 * 1. ASCII
 * [A, Z] = [65, 90]
 * [a, z] = [97, 122]
 *  双指针法
 */
var reverseOnlyLetters = function(S) {
    if (S.length == 0) return S;

    let arr = S.split('');

    for (var i = 0, j = arr.length - 1; i < j;) {
        var codeI = S.charCodeAt(i);
        var codeJ = S.charCodeAt(j);

        if (codeI < 65 || (codeI > 90 && codeI < 97) || codeI > 122) {
            i++;
        } else {
            if (codeJ < 65 || (codeJ > 90 && codeJ < 97) || codeJ > 122) {
                j--;
            } else {
                [arr[i], arr[j]] = [arr[j], arr[i]];
                i++;
                j--;
            }
        }
    }

    return arr.join('');
};