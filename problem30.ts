// https://leetcode.com/problems/decode-the-message/

function decodeMessage(key: string, message: string): string {
    let s: string = "abcdefghijklmnopqrstuvwxyz";
    let mymap = new Map<string, string>();
    let n = key.length;
    let ind = 0;
    for (let i = 0; i < n; i++) {
        if (key[i] === " " || mymap.has(key[i])) continue;
        mymap.set(key[i], s[ind]);
        ind++;
    }
    let result = "";
    n = message.length;
    for (let i = 0; i < n; i++) {
        if (message[i] === " ") result += " ";
        else result += mymap.get(message[i])!;
    }
    return result;
};