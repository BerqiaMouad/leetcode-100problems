/*
 * @lc app=leetcode id=557 lang=typescript
 *
 * [557] Reverse Words in a String III
 */

// @lc code=start
function reverseWords(s: string): string {
    let res = "";
    let temp = "";
    for(let i of s){
        if(i != " ")
            temp += i;
        else{
            res += temp.split("").reverse().join("") + " ";
            temp = "";
        }
    }
    res += temp.split("").reverse().join("");
    return res;
};
// @lc code=end

