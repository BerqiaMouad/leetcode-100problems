// https://leetcode.com/problems/split-a-string-in-balanced-strings/

function balancedStringSplit(s: string): number {
    let n = s.length;
    let result = 0;
    let cnt = 0;
    for (let i = 0; i < n; i++) {
        if (s[i] === 'L') cnt--;
        if (s[i] === 'R') cnt++;
        if (cnt === 0) result++;
    }
    return result;
};