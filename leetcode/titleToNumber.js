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
