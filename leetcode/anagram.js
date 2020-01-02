
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
