/*
 * @lc app=leetcode id=58 lang=typescript
 *
 * [58] Length of Last Word
 */

// @lc code=start
function lengthOfLastWord(s: string): number {
    let res: number = 0;
    let i = s.length - 1;
    while(i >= 0 && s[i] == ' '){
        i--;
    }
    while(i >= 0 && s[i] != ' '){
        res++;
        i--;
    }
    return res;
};
// @lc code=end

