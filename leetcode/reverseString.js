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