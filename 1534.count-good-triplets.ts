/*
 * @lc app=leetcode id=1534 lang=typescript
 *
 * [1534] Count Good Triplets
 */

// @lc code=start
function countGoodTriplets(arr: number[], a: number, b: number, c: number): number {
    let cnt = 0;
    for(let i = 0 ; i < arr.length; i++){
        for(let j = i+1; j < arr.length; j++){
            for(let k = j+1; k < arr.length; k++){
                if (Math.abs(arr[i] - arr[j]) <= a &&
                    Math.abs(arr[j] - arr[k]) <= b &&
                    Math.abs(arr[i] - arr[k]) <= c)
                        cnt++;
            }
        }
    }
    return cnt;
};
// @lc code=end

