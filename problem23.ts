// https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/

function numberOfSteps(num: number): number {
    if (num === 0) return 0;
    let result = 0;
    while (num > 0) {
        result += (num & 1 ? 2 : 1);
        num >>= 1;
    }
    return result - 1;
};