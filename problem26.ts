// https://leetcode.com/problems/range-sum-of-bst/

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

function rangeSumBST(root: TreeNode | null, low: number, high: number): number {
    if (root === null)
        return null;

    return (root.val >= low && root.val <= high ? root.val : 0) + rangeSumBST(root.left, low, high) + rangeSumBST(root.right, low, high);
};