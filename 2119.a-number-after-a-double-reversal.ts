/*
 * @lc app=leetcode id=2119 lang=typescript
 *
 * [2119] A Number After a Double Reversal
 */

// @lc code=start
function isSameAfterReversals(num: number): boolean {
    let rev1 = num.toString().split("").reverse().join("");
    let rev2 = Number(rev1).toString().split("").reverse().join("");
    return (Number(rev2) == num);
};
// @lc code=end

