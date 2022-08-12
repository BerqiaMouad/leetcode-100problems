/*
 * @lc app=leetcode id=2000 lang=typescript
 *
 * [2000] Reverse Prefix of Word
 */

// @lc code=start
function reversePrefix(word: string, ch: string): string {
    let res = "";
    let ok = false;
    for(let i of word){
        if(i == ch && ok == false){
            res += i;
            res = res.split("").reverse().join("");
            ok = true;
        }
        else res += i;
    }
    return res;
};
// @lc code=end

