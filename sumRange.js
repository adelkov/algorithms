const sumRange = n => {
    if (n === 1) return 1;
    return sumRange(n - 1) + n
};


const power = (base, exponent) => {
    if (exponent === 0) return 1;
    return power(base, exponent - 1) * base
};


function factorial(n) {
    let res = 1;
    for (let i = 1; i <= n; i++) {
        res = res * i
    }
    return res.toString()
}

console.log(factorial(9));