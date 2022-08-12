/*
 * @lc app=leetcode id=1374 lang=typescript
 *
 * [1374] Generate a String With Characters That Have Odd Counts
 */

// @lc code=start
function generateTheString(n: number): string {
    let s = "";
    if(n % 2 == 0){
        for(let i = 0; i < n-1; i++){
            s += 'a';
        }
        s += 'b';
    }
    else {
        if(n == 1){
            s = "a"; return s;
        }
        for(let i= 0; i < n - 2; i++){
            s += 'a';
        }
        s += 'b'; s += 'c';
    }
    return s;
};
// @lc code=end

