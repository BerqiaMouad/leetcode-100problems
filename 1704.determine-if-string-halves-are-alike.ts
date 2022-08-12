/*
 * @lc app=leetcode id=1704 lang=typescript
 *
 * [1704] Determine if String Halves Are Alike
 */

// @lc code=start
function halvesAreAlike(s: string): boolean {
    let vo = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let cnt =0;
    for(let i = 0; i < s.length / 2 ; i++){
        if(vo.includes(s[i]))cnt++;
    }
    for(let i = s.length / 2 ; i < s.length; i++){
        if(vo.includes(s[i]))cnt--;
    }
    return (cnt == 0);
};
// @lc code=end

