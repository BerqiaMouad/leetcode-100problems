// https://leetcode.com/problems/running-sum-of-1d-array/


function runningSum(nums: number[]): number[] {
    let n = nums.length;
    let pref: number[] = new Array(n);
    pref[0] = nums[0];
    for (let i = 1; i < n; i++) {
        pref[i] = nums[i] + pref[i - 1];
    }
    return pref;
};