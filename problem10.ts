// https://leetcode.com/problems/maximum-number-of-words-found-in-sentences/

function mostWordsFound(sentences: string[]): number {
    let result = 0;
    let n = sentences.length;
    for (let i = 0; i < n; i++) {
        let num_of_words = sentences[i].split(" ").length;
        result = (result < num_of_words ? num_of_words : result);
    }
    return result;
};