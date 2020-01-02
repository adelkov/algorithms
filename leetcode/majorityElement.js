/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    if (nums.length === 1) return nums[0];
    let book = {};
    for (let i = 0; i < nums.length; i++) {
        if (!book[nums[i]]) {
            book[nums[i]] = 1;
        } else {
            book[nums[i]] += 1;
            if (book[nums[i]] > nums.length / 2) {
                return nums[i]
            }
        }
    }
};

// console.log(majorityElement([2]))