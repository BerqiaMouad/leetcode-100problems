/*
 * @lc app=leetcode id=2351 lang=typescript
 *
 * [2351] First Letter to Appear Twice
 */

// @lc code=start
function repeatedCharacter(s: string): string {
    let m = new Map<string, number>();
    for(let i of s){
        if(m.has(i)){
            return i;
        }
        m.set(i, 1);
    }
};
// @lc code=end

