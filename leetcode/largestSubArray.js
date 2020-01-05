/**
 * Return the largest sum sub-array
 * https://leetcode.com/problems/maximum-subarray/
 * @param {number[]} arr
 * @return {number}
 */
const maxSubArray = function (arr) {
    let localMax = arr[0];
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        console.log(arr[i] + localMax, arr[i]);
        if (arr[i] + localMax >= arr[i]) {
            localMax += arr[i];
        } else {
            localMax = arr[i];
        }
        if (localMax > max) {
            max = localMax;
        }
    }
    return Math.max(max, localMax)
};

console.log(maxSubArray([-1, -2]));
