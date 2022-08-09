// https://leetcode.com/problems/defanging-an-ip-address

function defangIPaddr(address: string): string {
    let res: string = "";
    for (let i = 0; i < address.length; i++) {
        if (address[i] === '.') {
            res += "[.]";
        }
        else res += address[i];
    }
    return res;
};