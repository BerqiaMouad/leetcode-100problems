/*
 * @lc app=leetcode id=1021 lang=typescript
 *
 * [1021] Remove Outermost Parentheses
 */

// @lc code=start
function removeOuterParentheses(s: string): string {
    let res = "";
    let open = 0;
    for(let i of s){
        if(i == "(" && open++ > 0) res += i;
        if(i == ")" && open-- > 1) res += i;
    }
    return res;
};
// @lc code=end

