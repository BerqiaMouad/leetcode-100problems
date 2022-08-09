// https://leetcode.com/problems/shuffle-string/

function restoreString(s: string, indices: number[]): string {
    let n: number = s.length;
    let temp: string[] = new Array(n);

    for (let i = 0; i < n; i++) {
        temp[indices[i]] = s[i];
    }

    return temp.toString().replace(/,/g, '');
};