/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    const addTwoDigits = (d1, d2, increase = 0) => {
        if (!d1 && !d2) {
            if (increase) {
                return new ListNode(increase);
            }

            return undefined;
        }

        const [val1, next1] = d1 ? [d1.val, d1.next] : [0, null];
        const [val2, next2] = d2 ? [d2.val, d2.next] : [0, null];

        const currentVal = val1 + val2 + increase;

        if (currentVal > 9) {
            return new ListNode(currentVal - 10, addTwoDigits(next1, next2, 1));;
        }

        return new ListNode(currentVal, addTwoDigits(next1, next2));
    }

    return addTwoDigits(l1, l2);
};
