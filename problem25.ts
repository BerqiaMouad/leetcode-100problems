// https://leetcode.com/problems/create-target-array-in-the-given-order/

function createTargetArray(nums: number[], index: number[]): number[] {
    let n: number = nums.length;
    let result: number[] = new Array;

    for (let i = 0; i < n; i++) {
        if (index[i] == result.length) {
            result.push(nums[i]);
        }
        else {
            result.push(0);
            for (let j = result.length - 1; j > index[i]; j--) {
                result[j] = result[j - 1];
            }
            result[index[i]] = nums[i];
        }
    }
    return result;
};