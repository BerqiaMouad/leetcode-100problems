/*
 * @lc app=leetcode id=2108 lang=typescript
 *
 * [2108] Find First Palindromic String in the Array
 */

// @lc code=start

function checkPalindrome(string: String): boolean {
    let len = string.length;
    for (let i = 0; i < len / 2; i++) {
        if (string[i] !== string[len - 1 - i]) {
            return false;
        }
    }
    return true;
}


function firstPalindrome(words: string[]): string {
    for(let i of words){
        if(checkPalindrome(i)){
            return i;
        }
    }
    return "";
};
// @lc code=end

