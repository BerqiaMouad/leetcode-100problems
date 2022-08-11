/*
 * @lc app=leetcode id=50 lang=typescript
 *
 * [50] Pow(x, n)
 */

// @lc code=start
function myPow(x: number, n: number): number {
    if(n == 0)
        return 1;
    let res = myPow((n> 0 ? x: 1 / x), Math.floor(Math.abs(n) / 2));
    if(Math.abs(n) % 2 == 1){
        return res * res * (n > 0 ? x: 1/ x);
    }
    else return res * res;
};
// @lc code=end

