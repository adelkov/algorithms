const findTargetSum = (arr, target) => {
    const finder = (i, j) => {
        let tempSum = arr[i] + arr[j];
        if (tempSum === target) {
            return [i, j]
        }
        if (tempSum < target) {
            return finder(i + 1, j)
        }
        if (tempSum > target) {
            return finder(i, j - 1)
        }
    };
    return finder(0, arr.length - 1)
};


console.log(findTargetSum([1, 2, 3, 7, 9], 9)); // [1, 3]