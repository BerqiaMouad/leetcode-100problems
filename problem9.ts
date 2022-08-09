// https://leetcode.com/problems/shuffle-the-array/

function shuffle(nums: number[], n: number): number[] {
    let result: number[] = new Array;
    let i = 0, j = n;
    while (i < n) {
        result.push(nums[i]);
        result.push(nums[j]);
        i++, j++;
    }
    return result;
};