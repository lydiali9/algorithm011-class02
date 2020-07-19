/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */
var findLadders = function(beginWord, endWord, wordList) {
    if (wordList.indexOf(endWord) === -1) return [];

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
    return [];
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