/*
 * @lc app=leetcode id=1295 lang=typescript
 *
 * [1295] Find Numbers with Even Number of Digits
 */

// @lc code=start
function findNumbers(nums: number[]): number {
    let cnt = 0; 
    for(let i of nums){
        if(i.toString().length % 2 == 0)
            cnt++;
    }
    return cnt;
};
// @lc code=end

