/*
 * @lc app=leetcode id=1967 lang=typescript
 *
 * [1967] Number of Strings That Appear as Substrings in Word
 */

// @lc code=start
function numOfStrings(patterns: string[], word: string): number {
    let cnt = 0;
    for(let i of patterns){
        if(word.includes(i))
            cnt++;
    }
    return cnt;
};
// @lc code=end

