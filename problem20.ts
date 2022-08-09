// https://leetcode.com/problems/goal-parser-interpretation/

function interpret(command: string): string {
    let res = ""
    let n = command.length;

    for (let i = 0; i < n; i++) {
        if (command[i] == '(' && command[i + 1] == ')') {
            res += 'o';
            i++;
        }
        else if (command[i] == '(') {
            res += "al";
            i += 3;
        }
        else res += command[i];
    }
    return res;
};