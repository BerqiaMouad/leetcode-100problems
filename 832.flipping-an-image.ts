/*
 * @lc app=leetcode id=832 lang=typescript
 *
 * [832] Flipping an Image
 */

// @lc code=start
function flipAndInvertImage(image: number[][]): number[][] {
    for(let i of image){
        i.reverse();
    }
    let res: number[][] = new Array(image.length);
    for(let i of image){
        for(let j = 0; j < i.length; j++){
            i[j] = (i[j] == 1 ? 0: 1);
        }
    }
    return image;
};
// @lc code=end

