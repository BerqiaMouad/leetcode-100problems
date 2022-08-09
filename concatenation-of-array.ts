// https://leetcode.com/problems/concatenation-of-array/

function getConcatenation(nums: number[]): number[] {
    let n: number = nums.length;
    for (let i: number = 0; i < n; i++) {
        nums[n + i] = nums[i];
    }
    return nums;
};