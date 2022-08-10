// https://leetcode.com/problems/sorting-the-sentence/

function sortSentence(s: string): string {
    let List = s.split(" ");
    let n = List.length;
    let temporary: string[] = new Array(n);

    for (let i = 0; i < n; i++) {
        let temp = parseInt(List[i][List[i].length - 1]);
        temp--;
        temporary[temp] = List[i].slice(0, -1);
    }

    let result = ""

    for (let i = 0; i < n; i++) {
        result += temporary[i];
        if (i < n - 1) result += " ";
    }
    return result;

};