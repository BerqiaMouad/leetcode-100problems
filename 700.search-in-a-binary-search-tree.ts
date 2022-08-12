/*
 * @lc app=leetcode id=700 lang=typescript
 *
 * [700] Search in a Binary Search Tree
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

function searchBST(root: TreeNode | null, val: number): TreeNode | null {
    if(root == null)
        return null;
    if(val > root.val)
        return searchBST(root.right, val);
    else if(val < root.val)
        return searchBST(root.left, val);
    else return root;
};
// @lc code=end

