/*
 * @lc app=leetcode id=206 lang=typescript
 *
 * [206] Reverse Linked List
 */

// @lc code=start
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

function reverseList(head: ListNode | null): ListNode | null {
    if(head == null)
        return null;
    if(head.next == null)
        return head;
    let temp = head;
    let prev = temp;
    temp = temp.next;
    while(temp != null){
        let tp = temp.next;
        temp.next = prev;
        prev = temp;
        temp = tp;
    }
    head.next = null;
    return prev;
};
// @lc code=end

