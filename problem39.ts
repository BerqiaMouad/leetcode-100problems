// https://leetcode.com/problems/check-if-two-string-arrays-are-equivalent/

function arrayStringsAreEqual(word1: string[], word2: string[]): boolean {
    let s1 = word1.join("");
    let s2 = word2.join("");

    return (s1 === s2);
};