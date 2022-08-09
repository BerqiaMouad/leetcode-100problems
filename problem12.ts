// https://leetcode.com/problems/number-of-good-pairs/

function numIdenticalPairs(nums: number[]): number {
    let cnt: number[] = new Array(101).fill(0);

    let n = nums.length;

    for (let i = 0; i < n; i++) {
        cnt[nums[i]]++;
    }

    let result: number = 0;

    for (let i = 0; i < 101; i++) {
        result += (cnt[i] === 0 ? 0 : Math.floor((cnt[i] - 1) * cnt[i] / 2));
    }
    return result;
};