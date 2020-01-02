
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    let digits = {};
    for (let i = 0; i < nums.length; i++) {
        if (digits[nums[i]]) {
            return true
        } else {
            digits[nums[i]] = true
        }
    }
    return false
};

// console.log(containsDuplicate([2,2]))