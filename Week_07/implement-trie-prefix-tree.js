/**
 * Initialize your data structure here.
 */

/**
 * 思路分析： 
 * Trie，又叫前缀树或字典树，是一种有序树基本性质
 * 根节点不包含字符，除根节点以外每个节点只包含一个字符
 * 从根节点到某一个节点，路径上经过的字符连接起来，为该节点对应的字符串
 * 每个节点的所有子节点包含的字符串不相同
 */
class TreeNode {
    constructor() {
        this.root = {};
        this.endOfWord = '$';
    }
}
let trie = null;

var Trie = function() {
    trie = new TreeNode();
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let node = trie.root;
    for(let ch of word) {
        node[ch] = node[ch] || {};
        node = node[ch];
    }
    node[trie.endOfWord] = trie.endOfWord;
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let node = trie.root;
    for(let ch of word) {
        if(!node[ch]) return false;
        node = node[ch];
    }
    return node[trie.endOfWord] === trie.endOfWord;
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let node = trie.root;
    for(let ch of prefix) {
        if(!node[ch]) return false;
        node = node[ch];
    }

    return true;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */