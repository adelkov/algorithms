/**
 * Function to return how meany distinct way a staircase can be climbed, given that only 1 or 2 steps can be taken at a time.
 * https://leetcode.com/problems/climbing-stairs/
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n, a = 1, b = 2) {
    if (n === 1) return a;
    if (n === 2) return b;
    return climbStairs(n - 1, b, a + b)
};

console.log(climbStairs(3))