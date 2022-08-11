/*
 * @lc app=leetcode id=83 lang=typescript
 *
 * [83] Remove Duplicates from Sorted List
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

function deleteDuplicates(head: ListNode | null): ListNode | null {
    let temp: ListNode = head;
    if(temp == null || temp.next == null)
        return head;
    let prev = temp;
    temp = temp.next;
    while(temp != null){
        if(temp.val == prev.val){
            prev.next = temp.next;
            temp = prev.next;
        }
        else {
            prev = temp;
            temp = temp.next;
        }
    }
    return head;
};
// @lc code=end

