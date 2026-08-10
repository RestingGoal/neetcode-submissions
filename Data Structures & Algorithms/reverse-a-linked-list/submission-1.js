class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {
        let cur = head;
        let prev = null;

        while (cur) {
            let save = cur.next;
            cur.next = prev;
            prev = cur;
            cur = save;
        }

        return prev;
    }
}