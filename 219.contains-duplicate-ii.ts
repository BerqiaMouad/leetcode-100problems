/*
 * @lc app=leetcode id=219 lang=typescript
 *
 * [219] Contains Duplicate II
 */

// @lc code=start
function containsNearbyDuplicate(nums: number[], k: number): boolean {
    let m = new Map<number, Array<number>>();
    for(let i = 0; i < nums.length; i++){
        if(m.has(nums[i])){
            m.get(nums[i])!.push(i);
        }
        else{
            let a = new Array;
            a.push(i);
            m.set(nums[i], a);
        }
    }
    for(let [key, value] of m){
        for(let i = 1; i < value.length; i++){
            if(value[i] - value[i-1] <= k){
                return true;
            }
        }
    }
    return false;
};
// @lc code=end

