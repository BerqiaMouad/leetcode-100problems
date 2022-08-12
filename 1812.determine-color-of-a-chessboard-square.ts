/*
 * @lc app=leetcode id=1812 lang=typescript
 *
 * [1812] Determine Color of a Chessboard Square
 */

// @lc code=start
function squareIsWhite(coordinates: string): boolean {
    let c = coordinates[0].charCodeAt(0) - 97;
    let cc = coordinates[1].charCodeAt(0) - 49;
    if(c % 2 == 0 && cc % 2 == 0){
        return false;
    }
    else if(c % 2 == 0 && cc % 2 == 1){
        return true;
    }
    else if(c % 2 == 1 && cc % 2 == 1){
        return false;
    }
    else return true;
};
// @lc code=end

