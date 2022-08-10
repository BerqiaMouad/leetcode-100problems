// https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer/

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function getDecimalValue(head: ListNode | null): number {
    let res = 0;
    let n = 0;
    let temp: ListNode = head;
    while (temp != null) {
        temp = temp.next;
        n++;
    }
    temp = head;
    while (temp != null) {
        res += (temp.val * (1 << (n - 1)));
        temp = temp.next;
        n--;
    }
    return res;
};