// https://leetcode.com/problems/minimum-flips-to-make-a-or-b-equal-to-c

function minFlips(a: number, b: number, c: number): number {
    let cnt = 0;
    for (let i = 0; i <= 30; i++) {
        if ((c >> (i - 1)) & 1) {
            if (!((a >> (i - 1)) & 1) && !((b >> (i - 1)) & 1)) {
                cnt++;
            }
        }
        else {
            if (((a >> (i - 1)) & 1) && ((b >> (i - 1)) & 1)) {
                cnt += 2
            }
            else if (((a >> (i - 1)) & 1) || ((b >> (i - 1)) & 1)) {
                cnt++;
            }
        }
    }
    return cnt;
};