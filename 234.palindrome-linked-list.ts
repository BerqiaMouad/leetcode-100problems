/*
 * @lc app=leetcode id=234 lang=typescript
 *
 * [234] Palindrome Linked List
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

function isPalindrome(head: ListNode | null): boolean {
    let slow = head, fast = head, prev:ListNode, temp: ListNode;
    while(fast != null && fast.next != null){
        slow = slow.next, fast = fast.next.next;
    }
    prev = slow, slow = slow.next, prev.next = null;
    while(slow != null){
        temp = slow.next, slow.next = prev, prev = slow, slow = temp;
    }
    fast = head, slow = prev;
    while(slow != null){
        if(fast.val != slow.val)
            return false;
        fast = fast.next, slow = slow.next;
    }
    return true;
};
// @lc code=end

