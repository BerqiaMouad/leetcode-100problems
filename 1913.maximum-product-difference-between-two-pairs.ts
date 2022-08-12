/*
 * @lc app=leetcode id=1913 lang=typescript
 *
 * [1913] Maximum Product Difference Between Two Pairs
 */

// @lc code=start
function maxProductDifference(nums: number[]): number {
    nums.sort((n1, n2) => n1 - n2);
    return nums[nums.length - 1] * nums[nums.length - 2] - nums[1] * nums[0];
};
// @lc code=end

