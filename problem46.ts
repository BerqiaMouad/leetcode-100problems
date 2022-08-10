// https://leetcode.com/problems/rings-and-rods/

function countPoints(rings: string): number {
    let count: string[] = new Array(10).fill("");
    let res = 0;
    for (let i = 0; i < rings.length; i += 2) {
        if (!count[parseInt(rings[i + 1])].includes(rings[i])) {
            count[parseInt(rings[i + 1])] += rings[i];
            if (count[parseInt(rings[i + 1])].length == 3) res++;
        }
    }
    return res;
};