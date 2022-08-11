/*
 * @lc app=leetcode id=100 lang=typescript
 *
 * [100] Same Tree
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

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    if(p == null && q != null)
        return false;
    if(p != null && q == null){
        return false;
    }
    if(p == null && q == null)
        return true;
    if(p.val != q.val)
        return false;
    
    if(p.left == null && p.right == null && q.left == null && q.right == null)
        return true;
    
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};
// @lc code=end
