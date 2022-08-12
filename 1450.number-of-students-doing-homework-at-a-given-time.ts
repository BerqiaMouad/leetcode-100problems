/*
 * @lc app=leetcode id=1450 lang=typescript
 *
 * [1450] Number of Students Doing Homework at a Given Time
 */

// @lc code=start
function busyStudent(startTime: number[], endTime: number[], queryTime: number): number {
    let res = 0;
    for(let i = 0; i < startTime.length; i++){
        if(startTime[i] <= queryTime && endTime[i] >= queryTime)
            res++;
    }
    return res;
};
// @lc code=end

