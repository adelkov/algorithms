// Definition for a binary tree node.
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
    if (nums.length === 0) return null;
    if (nums.length === 1) return new TreeNode(nums[0])
    const middleIndex = Math.ceil(nums.length / 2);
    const node = new TreeNode(nums[middleIndex]);
    node.left = sortedArrayToBST(nums.slice(0, middleIndex));
    node.right = sortedArrayToBST(nums.slice(middleIndex + 1, nums.length));
    return node;
};

console.log(sortedArrayToBST([-10, -3, 0, 5, 9, 10]))
//        0
//       / \
//    -3   9
//    /   /  \
// -10  5    10