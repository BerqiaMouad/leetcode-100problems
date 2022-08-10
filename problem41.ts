// https://leetcode.com/problems/minimum-bit-flips-to-convert-number/

function minBitFlips(start: number, goal: number): number {
    let cnt = 0;
    for (let i = 0; i <= 30; i++) {
        if (((start >> (i - 1)) & 1) != ((goal >> (i - 1)) & 1)) cnt++;
    }
    return cnt;
};