/**
 * 时间复杂度为O(n)
 * 空间复杂度为O(n),最好的情况下为O(logn)
 */
var preorderTraversal = function(root) {
    var res = [];
    var preorder = function(root) {
        if(root == null) return '';
        res.push(root.val);
        preorder(root.left);
        preorder(root.right);
    }
    preorder(root);
    return res;
};