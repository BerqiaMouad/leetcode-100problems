// https://leetcode.com/problems/minimum-sum-of-four-digit-number-after-splitting-digits/

function minimumSum(num: number): number {
    let digits: number[] = new Array;

    while (num > 0) {
        digits.push(num % 10);
        num = Math.floor(num / 10);
    }

    digits.sort();

    let x = 0, y = 0;
    for (let i = 0, j = 1; j < digits.length; j += 2, i += 2) {
        x = x * 10 + digits[i];
        y = y * 10 + digits[j];
    }
    return x + y;
};