/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
    return nums.reduce((acc, item, idx) => {
        return acc + idx - item
    }, 0) + nums.length
};

console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]))
console.log(missingNumber([3, 0, 2]))

