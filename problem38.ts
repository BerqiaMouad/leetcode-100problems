// https://leetcode.com/problems/count-number-of-pairs-with-absolute-difference-k/

function countKDifference(nums: number[], k: number): number {
    let res = 0;
    let n = nums.length;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            res += (Math.abs(nums[i] - nums[j]) == k ? 1 : 0);
        }
    }
    return res;
};
