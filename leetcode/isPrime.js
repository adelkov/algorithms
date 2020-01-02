
/**
 * @param {number} num
 * @return {boolean}
 */
const isPrime = num => {
    for (let i = 2; i < Math.floor(num / 2); i++) {
        if (num % i === 0) return false
    }
    return true
}

console.log(isPrime(97)) // true
