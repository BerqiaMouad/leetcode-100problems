// https://leetcode.com/problems/find-center-of-star-graph/


function findCenter(edges: number[][]): number {
    let n = 0;
    for (let i of edges) {
        n = Math.max(n, i[0], i[1]);
    }
    let findit: number[] = new Array(n + 1).fill(0);
    for (let i of edges) {
        findit[i[0]]++;
        findit[i[1]]++;
    }
    for (let i = 1; i <= n; i++) {
        if (findit[i] == n - 1) return i;
    }
};