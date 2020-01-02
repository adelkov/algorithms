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