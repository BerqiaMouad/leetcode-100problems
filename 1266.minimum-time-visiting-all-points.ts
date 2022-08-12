/*
 * @lc app=leetcode id=1266 lang=typescript
 *
 * [1266] Minimum Time Visiting All Points
 */

// @lc code=start
function minTimeToVisitAllPoints(points: number[][]): number {
    let res = 0;
    for(let i = 0; i < points.length - 1; i++){
        res += Math.max(Math.abs(points[i][0] - points[i+1][0]), Math.abs(points[i][1] - points[i+1][1]));
    }
    return res;
};
// @lc code=end

