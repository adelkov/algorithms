

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