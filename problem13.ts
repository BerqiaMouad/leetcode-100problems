// https://leetcode.com/problems/jewels-and-stones/

function numJewelsInStones(jewels: string, stones: string): number {
    let result = 0;
    let n = stones.length;

    for (let i = 0; i < n; i++) {
        if (jewels.includes(stones[i])) {
            result++;
        }
    }
    return result;
};