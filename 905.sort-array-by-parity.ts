/*
 * @lc app=leetcode id=905 lang=typescript
 *
 * [905] Sort Array By Parity
 */

// @lc code=start
function sortArrayByParity(nums: number[]): number[] {
    let res = new Array;
    for(let i of nums)
        if(i % 2 == 0)res.push(i);
    for(let i of nums)
        if(i % 2 ==1)res.push(i);
    return res;
};
// @lc code=end

