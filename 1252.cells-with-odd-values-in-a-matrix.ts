/*
 * @lc app=leetcode id=1252 lang=typescript
 *
 * [1252] Cells with Odd Values in a Matrix
 */

// @lc code=start
function oddCells(m: number, n: number, indices: number[][]): number {
    let res: number[][] = new Array(m).fill(0).map(() => new Array(n).fill(0));
    for(let [r,c] of indices){
        for(let j = 0; j < n; j++){
            res[r][j]++;
        }
        for(let i = 0; i < m; i++){
            res[i][c]++;
        }
    }
    let cnt = 0;
    for(let i of res){
        for(let j of i){
            if(j % 2 == 1)cnt++;
        }
    }
    return cnt;
};
// @lc code=end

