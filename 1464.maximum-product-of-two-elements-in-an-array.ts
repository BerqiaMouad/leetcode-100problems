/*
 * @lc app=leetcode id=1464 lang=typescript
 *
 * [1464] Maximum Product of Two Elements in an Array
 */

// @lc code=start
function maxProduct(nums: number[]): number {
    nums.sort((n1, n2) => n1 - n2);
    return --nums[nums.length - 1] * --nums[nums.length - 2];
};
// @lc code=end

