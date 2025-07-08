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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        if (!list1) {
            return list2;
        }

        if (!list2) {
            return list1;
        }

        let newHead = {val: -1, next: null};

        let curr1 = list1;
        let curr2 = list2;
        let curr = newHead;

        while (curr1 && curr2) {
            if (curr1.val > curr2.val) {
                curr.next = curr2;
                curr2 = curr2.next;
            } else {
                curr.next = curr1;
                curr1 = curr1.next;
            }
            curr = curr.next;
        }

        if (curr1) {
            curr.next = curr1;
        }

        if (curr2) {
            curr.next = curr2;
        }

        return newHead.next;
    }
}
