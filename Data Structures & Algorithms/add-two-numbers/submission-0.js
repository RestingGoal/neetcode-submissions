/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
    let cur1 = l1;
    let cur2 = l2;
    let borrow = 0;

    let newList = new ListNode();
    let cur = newList;

    while (cur1 || cur2 || borrow) {
        let add =
            (cur1 ? cur1.val : 0) +
            (cur2 ? cur2.val : 0) +
            borrow;

        cur.val = add % 10;
        borrow = Math.floor(add / 10);

        cur1 = cur1 ? cur1.next : null;
        cur2 = cur2 ? cur2.next : null;

        if (cur1 || cur2 || borrow) {
            cur.next = new ListNode();
            cur = cur.next;
        }
    }

    return newList;
}
    
}

