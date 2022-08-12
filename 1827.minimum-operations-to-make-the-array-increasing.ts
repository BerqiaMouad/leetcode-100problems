/*
 * @lc app=leetcode id=1827 lang=typescript
 *
 * [1827] Minimum Operations to Make the Array Increasing
 */

// @lc code=start
function minOperations(nums: number[]): number {
    let res = 0;
    if(nums.length == 1) return 0;
    for(let i= 1; i < nums.length; i++){
        if(nums[i] <= nums[i - 1]){
            res += nums[i - 1] + 1 - nums[i];
            nums[i] = nums[i - 1] + 1;
        }
    }
    return res;
};
// @lc code=end

