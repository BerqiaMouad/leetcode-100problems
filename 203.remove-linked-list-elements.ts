/*
 * @lc app=leetcode id=203 lang=typescript
 *
 * [203] Remove Linked List Elements
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

function removeElements(head: ListNode | null, val: number): ListNode | null {
    if(head == null)
        return null;
    if(head.val == val && head.next == null)
        return null;

    let temp = head;
    let prev = temp;
    while(temp != null && temp.val == val){
        temp = temp.next;
    }
    head = temp;
    prev = temp;
    temp = (temp != null ? temp.next: null);
    while(temp != null){
        if(temp.val == val){
            prev.next = temp.next;
            temp.next = null;
            temp = prev.next;
        }
        else{
            prev = temp;
            temp = temp.next;
        }
    }

    return head;
};
// @lc code=end

