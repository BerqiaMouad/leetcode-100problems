/*
 * @lc app=leetcode id=1863 lang=typescript
 *
 * [1863] Sum of All Subset XOR Totals
 */

// @lc code=start
function subsetXORSum(nums: number[]): number {
    let o = 0;
    for(let i of nums)
        o |= i;
    return o * (1 << (nums.length - 1));
};
// @lc code=end

