/*
 * @lc app=leetcode id=228 lang=typescript
 *
 * [228] Summary Ranges
 */

// @lc code=start
function summaryRanges(nums: number[]): string[] {
    if(nums.length == 0)
        return [];
    if(nums.length == 1){
        return [nums[0].toString()];
    }
    let result = new Array();
    let i = 0; 
    while(i < nums.length){
        let st = nums[i];
        while(i < nums.length-1 && nums[i] == nums[i+1] - 1){
            i++;
        }
        if(i == nums.length-1){
            if(st == nums[i]){
                result.push(st.toString());
            }
            else {
                result.push(st.toString() + "->" + nums[i].toString());
            }
        }
        else{
            if (st == nums[i]) {
                result.push(st.toString());
            }
            else {
                result.push(st.toString() + "->" + nums[i].toString());
            }
        }
        i++;
    }
    return result;
};
// @lc code=end

