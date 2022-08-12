/*
 * @lc app=leetcode id=1436 lang=typescript
 *
 * [1436] Destination City
 */

// @lc code=start
function destCity(paths: string[][]): string {
    let m = new Map<string, number>();
    for(let [i, j] of paths){
        if(m.has(i)){
            m.set(i, m.get(i)! + 1);
        }
        else m.set(i, 1);
        if(!m.has(j)){
            m.set(j, 0);
        }
    }
    for(let [i, j] of m){
        if(j == 0)return i;
    }
};
// @lc code=end

