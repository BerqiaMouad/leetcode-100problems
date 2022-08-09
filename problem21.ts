// https://leetcode.com/problems/decode-xored-array/

function decode(encoded: number[], first: number): number[] {
    let x: number = first;
    let n: number = encoded.length + 1;
    let result: number[] = new Array(n);
    result[0] = first;
    for (let i: number = 0; i < n - 1; i++) {
        first ^= encoded[i];
        result[i + 1] = first;
    }
    return result;
};