/*
 * @lc app=leetcode id=897 lang=typescript
 *
 * [897] Increasing Order Search Tree
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */


let curr: TreeNode;

function inorder(root: TreeNode | null): void{
    if(root == null)return;
    inorder(root.left);
    root.left = null;
    curr.right = root;
    curr = root;
    inorder(root.right);
}

function increasingBST(root: TreeNode | null): TreeNode | null {
    let temp: TreeNode = new TreeNode;
    curr = temp;
    inorder(root);
    return temp.right;
};
// @lc code=end

