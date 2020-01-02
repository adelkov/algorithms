/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
    const countItems = arr => arr.reduce((acc, item) => {
        acc[item] = acc[item] ? acc[item] + 1 : 1
        return acc;
    }, {})
    const stock1 = countItems(nums1);
    const stock2 = countItems(nums2);
    let result = [];
    Array.from(new Set(nums1), num => {
        new Array(Math.min(stock1[num] || 0, stock2[num] || 0)).fill().forEach(i => {
            result.push(num)
        })
    })
    return result
};

nums1 = [4, 9, 5], nums2 = [9, 4, 9, 8, 4]
console.log(intersect(nums1, nums2))