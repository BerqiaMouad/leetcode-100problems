// https://leetcode.com/problems/check-if-the-sentence-is-pangram/

function checkIfPangram(sentence: string): boolean {
    let stuff: number[] = new Array(26).fill(0);
    for (let i of sentence) {
        let j = i.charCodeAt(0) - 97;
        stuff[j]++;
    }
    for (let i = 0; i < 26; i++) {
        if (stuff[i] == 0) return false;
    }
    return true;
};