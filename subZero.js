const subZero = arr => {
    const hasSubZero = (from, sum = 0) => {
        if (sum + arr[from] === 0) {
            return true;
        }
        if (from === arr.length - 1) {
            return false;
        }
        return hasSubZero(from + 1, sum + arr[from])
    };

    for (let i = 0; i <= arr.length - 1; i++) {
        if (hasSubZero(i)) {
            return true;
        }
    }
    return false;
};


console.log(subZero([2, 8, -9, 1]));
console.log(subZero([2, 9, -100000, 123123]));
