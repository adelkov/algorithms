/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
const reverseStringTwoPointers = s => {
    let i = 0, j = s.length - 1;
    while (i < j) {
        const temp = s[i];
        s[i++] = s[j];
        s[j--] = temp;
    }
};


// console.log(reverseStringTwoPointers('alma fa'));
// console.log(reverseStringTwoPointers(''));
// console.log(reverseStringTwoPointers('a'));
// console.log(reverseStringTwoPointers('A i REEE'));

/**
 * @param {number} n
 * @return {string[]}
 */
const fizzBuzz = function (n) {
    return new Array(n).fill().map((num, idx) => {
        const fizz = ++idx % 3 === 0 ? 'Fizz' : '';
        const buzz = idx % 5 === 0 ? 'Buzz' : '';
        const number = (fizz + buzz).length === 0 ? idx : '';
        return fizz + buzz + number
    });
};

// console.log(fizzBuzz(15));

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


var moveZeroes = function (nums) {
    let count = 0;
    nums.forEach((num, idx) => {
        if (num === 0) {
            count++;
        } else {
            const temp = nums[idx];
            nums[idx] = nums[idx - count];
            nums[idx - count] = temp;
        }
    });
    return nums
};

// console.log(moveZeroes([0, 1, 0, 3, 12]));
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (node, me = null) {
    if (!node) {
        return me
    }
    const temp = node.next;
    node.next = me;
    return reverseList(temp, node)
};

// console.log(reverseList({
//     val: 1,
//     next: {val: 2, next: {val: 3, next: null}}
// }));

/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function (s) {
    const caps = [...Array(26)].map((val, i) => String.fromCharCode(i + 65));
    const digits = s.split('').map(char => caps.indexOf(char) + 1);
    return digits.reduce((acc, digit, idx) => {
        acc += digit * Math.pow(26, digits.length - 1 - idx);
        return acc;
    }, 0)
};

//
// console.log(titleToNumber("A")); // 1
// console.log(titleToNumber("AB")); // 28
// console.log(titleToNumber("ZY")); // 701

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

/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */
/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
    let deepCopy = {}
    const iter = node => {
        if (!node) return;

        iter(node.next)
    };
    iter(head)
};

// console.log(copyRandomList({
//     val: 7,
//     next:
//         {
//             val: 13,
//             next: {val: 11, next: null, random: null},
//             random: null
//         },
//     random: null
// }));

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    return prices.reduce((profit, spot, idx) => {
        const isLow = (prices[idx - 1] === undefined && prices[idx + 1] > spot) || (prices[idx - 1] >= spot && prices[idx + 1] > spot);
        const isPeak = (prices[idx + 1] === undefined && prices[idx - 1] < spot) || (prices[idx - 1] < spot && prices[idx + 1] <= spot);
        if (isLow) {
            return profit - spot
        }
        if (isPeak) {
            return profit + spot
        }
        return profit;
    }, 0)
};

// console.log(maxProfit([3, 3])); // 4

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = function (s, t) {
    s = s.split('');
    s.sort();
    t = t.split('')
    t.sort()
    return s.toString() === t.toString()
};

// console.log(isAnagram('ana', 'aan'));

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

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
    if (s.length === 1) return s;
    s = s.split('');
    let letters = {};
    for (let i = 0; i < s.length; i++) {
        if (letters[s[i]]) {
            letters[s[i]] += 1
        } else {
            letters[s[i]] = 1
        }
    }
    for (let letter of Object.keys(letters)) {
       if (letters[letter] === 1) return s.indexOf(letter)
    }
    return -1
};

console.log(firstUniqChar('eee')); // k