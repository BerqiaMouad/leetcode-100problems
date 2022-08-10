// https://leetcode.com/problems/count-items-matching-a-rule/

function countMatches(items: string[][], ruleKey: string, ruleValue: string): number {
    let result = 0;
    let n = items.length;

    for (let i = 0; i < n; i++) {
        if ((ruleKey == "type" && ruleValue == items[i][0]) || 
            (ruleKey == "color" && ruleValue == items[i][1]) || 
            (ruleKey == "name" && ruleValue == items[i][2])) 
                result++;
    }
    return result;
};