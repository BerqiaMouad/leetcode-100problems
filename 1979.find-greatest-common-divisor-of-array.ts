/*
 * @lc app=leetcode id=1979 lang=typescript
 *
 * [1979] Find Greatest Common Divisor of Array
 */

// @lc code=start

function pgcd(n:number, m: number): number {
    if(!m)
        return n;
    return pgcd(m, n % m);
}

function findGCD(nums: number[]): number {
    let mx = 0, mn = 1001;
    for(let i of nums){
        mx = Math.max(mx, i); 
        mn = Math.min(mn, i);
    }
    return pgcd(mx, mn); 
};
// @lc code=end

