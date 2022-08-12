/*
 * @lc app=leetcode id=1725 lang=typescript
 *
 * [1725] Number Of Rectangles That Can Form The Largest Square
 */

// @lc code=start
function countGoodRectangles(rectangles: number[][]): number {
    let res = 0;
    let mx = 0;
    for(let [i, j] of rectangles)
        mx = Math.max(mx, Math.min(i, j));
    for(let [i, j] of rectangles)
        if(mx == Math.min(i, j)) res++;
    return res;
};
// @lc code=end

