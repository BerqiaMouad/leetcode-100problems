/*
 * @lc app=leetcode id=1941 lang=typescript
 *
 * [1941] Check if All Characters Have Equal Number of Occurrences
 */

// @lc code=start
function areOccurrencesEqual(s: string): boolean {
    let m = new Map<string, number>();
    if(s.length == 1)return true;
    for(let i of s){
        if(m.has(i)){
            m.set(i, m.get(i)! + 1);
        }
        else m.set(i, 1);
    }
    s = s.split("").sort().join("");
    for(let i = 1; i < s.length; i++){
        if(m.get(s[i]) != m.get(s[i-1]))return false;
    }
    return true;
};
// @lc code=end

