/*
 * @lc app=leetcode id=728 lang=typescript
 *
 * [728] Self Dividing Numbers
 */

// @lc code=start

function selfdiv(n: number): boolean {
    let t = n;
    while(n > 0){
        if(t % (n % 10) != 0)
            return false;
        n = Math.floor(n / 10);
    }
    return true;
}

function selfDividingNumbers(left: number, right: number): number[] {
    let res: number[] = new Array;
    for(let i = left; i <= right; i++){
        if(selfdiv(i))res.push(i);
    }
    return res;
};
// @lc code=end

