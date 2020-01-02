

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const maxDepth = root => {
    let max = 0;
    const iter = (node, level) => {
        if (!node) {
            if (level > max) {
                max = level
            }
            return
        }
        iter(node.left, level + 1);
        iter(node.right, level + 1);
    };
    iter(root, 0);
    return max
};


// console.log((maxDepth({
//     val: 1,
//     right: null,
//     left: {val: 2, right: {val: 4, left: null, right: null}, left: {val: 5, right: null, left: null}}
// })));