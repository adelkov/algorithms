function nextSmaller(n) {
    const digits = n.toString().split('');
    let i1 = 0;
    let tmp;
    let flag = false;

    // find rightmost digit that has smaller digit on its right
    for (let i = 0; i < digits.length - 1; i++) {
        if (digits[i] > digits[i + 1]) {
            i1 = i;
            flag = true;
        }
    }
    // if not found return -1
    if (flag === false) return -1;

    for (let i = digits.length - 1; i > 0; i--) {
        if (i === i1) i--;
        if (digits[i] < digits[i1]) {
            tmp = digits[i];
            digits[i] = digits[i1];
            digits[i1] = tmp;
            break;
        }
    }
    if (digits[0] == 0) return -1;
    return parseInt(digits.slice(0, i1 + 1).concat(digits.slice(i1 + 1).sort((a, b) => b - a)).join(''))
}

// console.log(nextSmaller(21) === 12) //, 12)
console.log(nextSmaller(907) === 790) //, 790)
// console.log(nextSmaller(531) === 513) //, 513)
// console.log(nextSmaller(135) === -1) //, -1)
// console.log(nextSmaller(2071) === 2017) //, 2017)
// console.log(nextSmaller(1027) === -1) //, -1)
// console.log(nextSmaller(414) === 144) //, 144)

