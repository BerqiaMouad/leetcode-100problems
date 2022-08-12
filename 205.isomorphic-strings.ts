/*
 * @lc app=leetcode id=205 lang=typescript
 *
 * [205] Isomorphic Strings
 */

// @lc code=start
function isIsomorphic(s: string, t: string): boolean {
    let m = new Map<String, String>();
    let mm = new Map<String, String>();

    for(let i = 0; i < s.length; i++){
        if(m.has(s[i])){
            if(m.get(s[i])! != t[i])
                return false;
        }
        else{
            m.set(s[i], t[i]);
        }
        if(mm.has(t[i])){
            if(mm.get(t[i])! != s[i]){
                return false;
            }
        }
        else{
            mm.set(t[i], s[i]);
        }
    }
    return true;
};
// @lc code=end

