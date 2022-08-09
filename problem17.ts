// https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/

function subtractProductAndSum(n: number): number {
    let s = 0, p = 1;

    while (n > 0) {
        s += n % 10;
        p *= n % 10;
        n = Math.floor(n / 10);
    }
    return p - s;
};