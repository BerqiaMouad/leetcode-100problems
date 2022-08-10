// https://leetcode.com/problems/count-of-matches-in-tournament/

function numberOfMatches(n: number): number {
    let result = 0;
    while (n > 1) {
        result += Math.floor(n / 2);
        n = n - Math.floor(n / 2);
    }
    return result;
};