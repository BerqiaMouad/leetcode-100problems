/*
 * @lc app=leetcode id=344 lang=typescript
 *
 * [344] Reverse String
 */

// @lc code=start
/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(s: string[]): void {
    let st = 0, ed = s.length - 1;
    while(st < ed){
        let temp = s[st];
        s[st] = s[ed];
        s[ed] = temp;
        st++, ed--;
    }
};
// @lc code=end

