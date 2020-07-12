/**
 * 思路： 
 * 1. p和q分别在左右子树，则最近公共祖先为他们的父节点；
 * 2. p和q在同一个子树上，则问题就是一个局部的子问题
 * 
 * 2.1 遇到p或q节点，就返回它，不继续往下遍历，
 * 2.2 遇到null节点，就返回null
 * 
 * 时间复杂度为O(n)
 * 空间复杂度为O(n)
 */
var lowestCommonAncestor = function(root, p, q) {
    if(root == null || root == p || root == q) {
        return root;
    } 
    let left = lowestCommonAncestor(root.left, p, q); // 左子树的调用结果
    let right = lowestCommonAncestor(root.right, p, q); // 右子树的调用结果

    if (left && right) { // p q分居左右子树，返回父节点root
        return root;
    }
    return left ? left : right;
};