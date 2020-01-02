
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (node, me = null) {
    if (!node) {
        return me
    }
    const temp = node.next;
    node.next = me;
    return reverseList(temp, node)
};

// console.log(reverseList({
//     val: 1,
//     next: {val: 2, next: {val: 3, next: null}}
// }));