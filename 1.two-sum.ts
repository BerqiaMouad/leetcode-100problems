/*
 * @lc app=leetcode id=1 lang=typescript
 *
 * [1] Two Sum
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
    let m = new Map<number, number>();
    for(let i = 0; i < nums.length; i++){
        if(m.has(target - nums[i])){
            return [m.get(target - nums[i])!, i];
        }
        m.set(nums[i], i);
    }
    return []
};
// @lc code=end

