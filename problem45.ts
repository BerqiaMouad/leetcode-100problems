// https://leetcode.com/problems/count-asterisks/

function countAsterisks(s: string): number {
    let bars = 0;
    let cnt = 0;
    for (let i of s) {
        if (i == "*" && bars == 0) cnt++;
        if (i == "|" && bars == 0) bars++;
        else if (i == "|" && bars == 1) bars--;
    }
    return cnt;
};