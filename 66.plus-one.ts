/*
 * @lc app=leetcode id=66 lang=typescript
 *
 * [66] Plus One
 */

// @lc code=start
function plusOne(digits: number[]): number[] {
    digits = digits.reverse();
    let result: number[] = new Array(digits.length);
    let carry = 0, add = 1;
    for(let i  = 0; i < digits.length; i++){
        if(digits[i] + carry + add> 9){
            result[i] = (digits[i] + carry + add) % 10;
            carry = Math.floor((digits[i] + carry + add) / 10);
        }
        else {
            result[i] = digits[i] + carry + add;
            carry = 0;
        }
        if(i == 0)add = 0;
    }
    if(carry > 0){
        result.push(carry);
    }
    return result.reverse();
};
// @lc code=end

