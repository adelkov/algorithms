// [TASK] https://leetcode.com/problems/merge-two-sorted-lists/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (node1, node2) {
    if (!node1) return node2;
    if (!node2) return node1;

    let node;
    if (node1.val > node2.val) {
        node = {val: node2.val}
        node.next = mergeTwoLists(node1, node2.next)
    } else {
        node = {val: node1.val}
        node.next = mergeTwoLists(node2, node1.next)
    }
    return node;
};

let node = {
    val: 1,
    next: {val: 2, next: {val: 4, next: null}}
};
let node2 = {
    val: 1,
    next: {val: 3, next: {val: 4, next: null}}
}

const resultNode = (mergeTwoLists(node, node2))
const printLinkedList = head => {
    let node = head;
    while (node) {
        console.log(node.val)
        node = node.next
    }
}
printLinkedList(resultNode)

