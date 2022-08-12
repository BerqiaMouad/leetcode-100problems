/*
 * @lc app=leetcode id=804 lang=typescript
 *
 * [804] Unique Morse Code Words
 */

// @lc code=start
function uniqueMorseRepresentations(words: string[]): number {
    let m = new Map<String, number>();
    let trans = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."]
    for(let i = 0; i < words.length; i++){
        let s = "";
        for(let j of words[i]){
            let temp = j.charCodeAt(0) - 97;
            s += trans[temp];
        }
        if(!m.has(s)){
            m.set(s, 1);
        }
    }
    return m.size;
};
// @lc code=end

