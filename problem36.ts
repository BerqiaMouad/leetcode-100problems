// https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses/

// faster than 100% hihi 

function maxDepth(s: string): number {
    let res = 0;
    let open = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] == '(') open++;
        if (s[i] == ')') {
            res = (res < open ? open : res);
            open--;
        }
    }
    return res;
};