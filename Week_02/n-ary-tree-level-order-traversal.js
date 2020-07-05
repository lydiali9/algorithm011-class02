/**
 *  时间复杂度为O(n)
 *  空间复杂度为O(n)
 */
var levelOrder = function(root) {
    var res = [];
    var search = function(root, k) {
        if(root == null) return;
        // [[]]
        if(res[k] == undefined) {
            res[k] = [];
        }
        res[k].push(root.val);

        for(var i = 0; i < root.children.length; i++) {
            search(root.children[i], k + 1);
        }
    }
    search(root, 0)
    return res;
};