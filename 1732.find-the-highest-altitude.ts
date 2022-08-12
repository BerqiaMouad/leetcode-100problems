/*
 * @lc app=leetcode id=1732 lang=typescript
 *
 * [1732] Find the Highest Altitude
 */

// @lc code=start
function largestAltitude(gain: number[]): number {
    let pref = new Array(gain.length + 1);
    pref[0] = 0;
    let res = pref[0];
    for(let i= 0; i < gain.length; i++){
        pref[i+1] = pref[i] + gain[i];
        res = Math.max(res, pref[i+1]);
    }
    return res;

};
// @lc code=end

