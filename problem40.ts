// https://leetcode.com/problems/count-the-number-of-consistent-strings/

function countConsistentStrings(allowed: string, words: string[]): number {
    let cnt = 0;
    for (let s of words) {
        let ok = true;
        for (let t of s) {
            ok &&= (allowed.includes(t));
        }
        cnt += (ok ? 1 : 0);
    }
    return cnt;
};