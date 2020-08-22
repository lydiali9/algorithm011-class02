/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    if (s.length == 0) return s;
    let res = [];

    s.split(" ").forEach(word => {
        if (word) {
            res.push(word.split('').reverse().join(''))
        }
    })

    return res.join(' ');
};