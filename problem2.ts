// https://leetcode.com/problems/build-array-from-permutation/

function buildArray(nums: number[]): number[] {
    let n: number = nums.length;
    let result: number[] = new Array(n);
    for (let i = 0; i < n; i++) {
        result[i] = nums[nums[i]];
    }
    return result;
};