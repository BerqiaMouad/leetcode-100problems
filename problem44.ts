// https://leetcode.com/problems/truncate-sentence/

function truncateSentence(s: string, k: number): string {
    let result = ""
    let countspace = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] == " ") {
            countspace++;
            if (countspace == k) break;
        }
        result += s[i];
    }
    return result;
};