/*
 * @lc app=leetcode id=1748 lang=typescript
 *
 * [1748] Sum of Unique Elements
 */

// @lc code=start
function sumOfUnique(nums: number[]): number {
    let m = new Map<number, number>();
    for(let i of nums){
        if(!m.has(i)){
            m.set(i, 1);
        }
        else m.set(i, m.get(i)!+1);
    }
    let sum = 0;
    for(let [i, j] of m){
        if(j == 1) sum += i;
    }
    return sum;
};
// @lc code=end

