/*
 * @lc app=leetcode id=231 lang=typescript
 *
 * [231] Power of Two
 */

// @lc code=start
function isPowerOfTwo(n: number): boolean {
    if(n <= 0){
        return false;
    }
    while(n > 0){
        if(n == 1 || n % 2 == 0){
            if(n == 1)n=0;
            else n /= 2;
        }
        else return false;
    }
    return true;
};
// @lc code=end

