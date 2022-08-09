// https://leetcode.com/problems/final-value-of-variable-after-performing-operations/

function finalValueAfterOperations(operations: string[]): number {
    let x: number = 0;
    let n: number = operations.length;
    for (let i = 0; i < n; i++) {
        if (operations[i][1] === '-') x--;
        else x++;
    }
    return x;
};