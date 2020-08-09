/**
 * @param {string} start
 * @param {string} end
 * @param {string[]} bank
 * @return {number}
 */
/**
 * 题目类似雨127: 单词接龙
 * 
 * 思路分析： 又一个字母不同，表示之间有边，一次类推，相当于求无向图无项边的最短路径
 * 解决方法一： BFS
 */
var minMutation = function(start, end, bank) {
    if (bank.indexOf(end) === -1) return -1;
    let queue = [];
    let visitedObj = {
        start: true
    };
    queue.push({ word: start, level: 0 });

    while (queue.length) {
        let { word, level } = queue.shift();
        if (visitedObj[word]) continue;

        for (var i = 0; i < bank.length; i++) {
            let isDiffOneWord = ifDiffOneWord(word, bank[i]);

            if (isDiffOneWord) {
                if(bank[i] === end) {
                    return level + 1;
                }
                queue.push({ word: bank[i], level: level + 1 });
                visitedObj[word] = true;
            }
        }
    }

    return -1;
};

var ifDiffOneWord = function(word, compareWord) {
    if(word.length != compareWord.length) return false;

    let diffWordCount = 0;
    for (var i = 0; i < word.length; i++) {
        if (word[i] != compareWord[i]) {
            diffWordCount++;
        }

        if (diffWordCount > 1) return false;
    }

    if (diffWordCount == 1) {
        return true
    } else {
        return false;
    }
}