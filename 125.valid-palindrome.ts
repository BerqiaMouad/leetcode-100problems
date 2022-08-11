/*
 * @lc app=leetcode id=125 lang=typescript
 *
 * [125] Valid Palindrome
 */

// @lc code=start
function isPalindrome(s: string): boolean {
    let i = 0, j = s.length - 1;
    s = s.toLowerCase();
    while(i < j){
        if (((s[i] >= 'a' && s[i] <= 'z') || (s[i] >= '0' && s[i] <= '9')) && ((s[j] >= 'a' && s[j] <= 'z') || (s[j] >= '0' && s[j] <= '9'))){
            if(s[i] != s[j]){
                return false;
            }
            i++, j--;
        }
        else{
            if((s[i] < 'a' || s[i] > 'z') && (s[i] <'0' || s[i] >'9'))
                i++;
            if ((s[j] < 'a' || s[j] > 'z') && (s[j] < '0' || s[j] > '9'))
                j--;
        }
    }
    return true;
};
// @lc code=end

