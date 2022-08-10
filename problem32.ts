// https://leetcode.com/problems/sum-of-all-odd-length-subarrays


function sumOddLengthSubarrays(arr: number[]): number {
    let pref: number[] = new Array(arr.length);
    pref[0] = arr[0];
    for (let i = 1; i < arr.length; i++) {
        pref[i] = pref[i - 1] + arr[i];
    }
    let res = 0;
    let j = 0;
    while (j < arr.length) {
        let oldj = j;
        for (let i = 0; j < arr.length; i++, j++) {
            res += (pref[j] - pref[i] + arr[i]);
        }
        j = oldj + 2;
    }
    return res;
};