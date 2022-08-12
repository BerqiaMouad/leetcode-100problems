/*
 * @lc app=leetcode id=1304 lang=typescript
 *
 * [1304] Find N Unique Integers Sum up to Zero
 */

// @lc code=start
function sumZero(n: number): number[] {
    let res = new Array;
    if(n % 2 == 0){
        for(let i = - n / 2; i <= -1; i++)
            res.push(i);
        for(let i = 1; i <= n / 2 ; i++)
            res.push(i);
    }
    else{
        for (let i = - Math.floor(n / 2); i <= -1; i++)
            res.push(i);
        res.push(0);
        for (let i = 1; i <= Math.floor(n / 2); i++)
            res.push(i);
    }
    return res;
};
// @lc code=end

