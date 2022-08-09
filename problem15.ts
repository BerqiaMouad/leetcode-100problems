// https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/

function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
    let n = candies.length;
    let result: boolean[] = new Array(n);
    let mx = Math.max(...candies);

    for (let i = 0; i < n; i++) {
        result[i] = (candies[i] + extraCandies >= mx);
    }

    return result;
};