/*
 * @lc app=leetcode id=2169 lang=typescript
 *
 * [2169] Count Operations to Obtain Zero
 */

// @lc code=start
function countOperations(num1: number, num2: number): number {
    let cnt = 0;
    while(num1 > 0 && num2 > 0){
        if(num1 >= num2)
            num1 -= num2;
        else num2 -= num1;
        cnt++;
    }
    return cnt;
};
// @lc code=end

