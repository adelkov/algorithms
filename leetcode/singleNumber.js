
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    const res = nums.reduce((acc, item, idx) => {
        if (acc[item]) {
            delete acc[item]
        } else {
            acc[item] = true;
        }
        return acc
    }, {});
    return +Object.keys(res)[0]
};

// console.log(singleNumber([4, 1, 2, 1, 2]));
