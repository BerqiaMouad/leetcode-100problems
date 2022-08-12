/*
 * @lc app=leetcode id=1572 lang=typescript
 *
 * [1572] Matrix Diagonal Sum
 */

// @lc code=start
function diagonalSum(mat: number[][]): number {
    let sum = 0;
    let j = mat.length - 1;
    for(let i = 0; i < mat.length; i++){
        if(i != j - i) sum += mat[i][i] + mat[i][j - i];
        else sum += mat[i][i];
    }
    return sum;
};
// @lc code=end

