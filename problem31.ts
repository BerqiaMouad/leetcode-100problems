// https://leetcode.com/problems/xor-operation-in-an-array/

function xorOperation(n: number, start: number): number {
    let result = 0;
    for (let i = 0; i < n; i++) {
        result ^= (2 * i + start);
    }
    return result;
};