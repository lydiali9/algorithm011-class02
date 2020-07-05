/**
 * 时间复杂度为O(n)
 * 空间复杂度为O(n)
 */

function Node(val, children) {
    this.val = val;
    this.children = children;
}

var preorder = function(root) {
    var res = [];
    var preorder2 = function(root) {
        if(root == null) return '';
        res.push(root.val);

        for(var i = 0; i < root.children.length; i++) {
            preorder2(root.children[i]);
        }
    }

    preorder2(root);
    return res;
};