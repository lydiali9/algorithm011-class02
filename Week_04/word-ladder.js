/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
/**
 * 思路分析： 比如 beginWord 字母 hit 可以转化变形为 xit、hxt、hix 三种形式字母, 如果此时转化
 *          存在与 endWord 相等的字母, 则返回寻找到的 level。
 * 
 * 最终转换成了图的最短路径问题，图最短路径运用到了队列的思想;
 * 
 * 方案： 广度优先搜索BFS
 */
var ladderLength = function(beginWord, endWord, wordList) {
    if (wordList.indexOf(endWord) === -1) return 0;

    let queue = [];
    let visitedObj = {
        beginWord: true
    };
    queue.push({ word: beginWord, level: 1 });
    while(queue.length) {
        let { word, level } = queue.shift();

        if (visitedObj[word]) continue;
        for (let i = 0; i < wordList.length; i++) {
            var isDiffOneWord = ifDiffOneWord(word, wordList[i]);

            if (isDiffOneWord) {
                if (wordList[i] == endWord) {
                    return level + 1;
                }
                queue.push({ word: wordList[i], level: level + 1 });
                visitedObj[word] = true;
            }
        }
    }
    return 0;
};

// judge if the targerWord has one word form the compareWord
function ifDiffOneWord(word, compareWord) {
    if (word.length != compareWord.length) return false;
    let diffWordsCount = 0;
    for (var i = 0; i < word.length; i++) {
        if (word[i] != compareWord[i]) {
            diffWordsCount++;
        }
        if (diffWordsCount > 1) return false;
    }

    if (diffWordsCount == 1) {
        return true;
    } else {
        return false;
    }
}