/**
 * 时间复杂度为O(n)
 * 空间复杂度为O(n),好的情况下O(logn)
 */
function TreeNode(va) {
    this.val = val;
    this.left = null;
    this.right = null;
}

var inorderTraversal = function(root) {
    let res = [];
    var inorder = function(root) {
        if(root == null) return '';
        inorder(root.left);
        res.push(root.val);
        inorder(root.right);
    }

    inorder(root);
    return res;
};