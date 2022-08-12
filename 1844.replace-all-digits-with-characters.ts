/*
 * @lc app=leetcode id=1844 lang=typescript
 *
 * [1844] Replace All Digits with Characters
 */

// @lc code=start
function replaceDigits(s: string): string {
    let al = "abcdefghijklmnopqrstuvwxyz";
    let res = "";
    for(let i = 0; i < s.length; i++){
        if(i % 2 == 1){
            let c = s[i-1].charCodeAt(0) - 97;
            let shift = s[i].charCodeAt(0) - 48;
            res += al[c + shift];
        }
        else res += s[i];
    }
    return res;
};
// @lc code=end

