/**
 * @param {string} s
 * @return {string}
 */
/**
 * 1. split reverse join
 * 2. reverse整个str，然后reverse每个单词
 * 3. 
 */
var reverseWords = function(s) {
    let res = [];

    s.trim().split(' ').forEach(word => {
        if (word) {
            res.push(word);
        }
    })

    return res.reverse().join(' ');
};