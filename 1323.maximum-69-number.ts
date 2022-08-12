/*
 * @lc app=leetcode id=1323 lang=typescript
 *
 * [1323] Maximum 69 Number
 */

// @lc code=start
function maximum69Number (num: number): number {
    let s = num.toString();
    s = s.replace('6', '9');
    return Number(s);
};
// @lc code=end

