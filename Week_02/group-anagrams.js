/**
 * 时间复杂度：O(NKlogK)，其中 N 是 strs 的长度，而 K 是 strs 中字符串的最大长度。当我们遍历每个字符串时，外部循环具有的复杂度为 O(N)。然后，我们在 O(KlogK) 的时间内对每个字符串排序。
 */
var groupAnagrams = function(strs) {
    var hash = new Map();

    for(var i = 0; i < strs.length; i++) {
        var str = strs[i].split("").sort().join('');

        if(hash.has(str)) {
            let temp = hash.get(str);
            temp.push(strs[i]);
            hash.set(str, temp)
        } else {
            hash.set(str, [strs[i]]);
        }
    }
    return [...hash.values()]
};