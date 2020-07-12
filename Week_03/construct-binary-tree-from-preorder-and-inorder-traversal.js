/**
 * 分析思路：
 *  由前序遍历可知preorder数组中第一个数一定是root并弹出，
 *  根据root值在inorder所在位置可将inorder划分为左子树、右子树两部分。
 *  按照相同的思路左右子树的根结点继续在preorder里面查找（队列先进先出）
 * 
 * 时间复杂度为O(n)
 * 空间复杂度为O(n)
 */
var buildTree = function(preorder, inorder) {
    if(preorder.length === 0) return null;
    let root = new TreeNode(preorder[0]);
    let index = inorder.indexOf(preorder[0]);
    
    root.left=buildTree(preorder.slice(1,index+1),inorder.slice(0,index));
    root.right=buildTree(preorder.slice(index+1),inorder.slice(index+1));
    return root;
};