// https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/

function smallerNumbersThanCurrent(nums: number[]): number[] {
    let n = nums.length;
    let result: number[] = new Array(n);
    for (let i = 0; i < n; i++) {
        let cnt = 0;
        for (let j = 0; j < n; j++) {
            if (j != i && nums[j] < nums[i]) cnt++;
        }
        result[i] = cnt;
    }
    return result;
};