// https://leetcode.com/problems/decompress-run-length-encoded-list/

function decompressRLElist(nums: number[]): number[] {
    let result: number[] = new Array;
    let n = nums.length;
    let sizeofresult = 0;

    for (let i: number = 0; i < n; i += 2) {
        sizeofresult += nums[i];
    }

    let ind: number = 0;
    for (let i: number = 0; i < n; i += 2) {
        for (let j: number = 0; j < nums[i]; j++) {
            result[ind] = nums[i + 1];
            ind++;
        }
    }
    return result;
};