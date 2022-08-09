// https://leetcode.com/problems/richest-customer-wealth/


function maximumWealth(accounts: number[][]): number {
    let result: number = 0;
    let n = accounts.length;
    for (let i = 0; i < n; i++) {
        let s = 0;
        for (let j = 0; j < accounts[i].length; j++) {
            s += accounts[i][j];
        }
        result = (s > result ? s : result);
    }
    return result;

};