/*
 * @lc app=leetcode id=217 lang=typescript
 *
 * [217] Contains Duplicate
 */

// @lc code=start
function containsDuplicate(nums: number[]): boolean {
    let m = new Map<number, number>();
    for(let i of nums){
        if(m.has(i)){
            return true;
        }
        m.set(i, 1);
    }
    return false;
};
// @lc code=end

