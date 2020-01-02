function sumIntervals(intervals) {
    let nums = new Set();
    let counter = 0;
    intervals.forEach(interval => {
        const arr = Array.from(nums).sort((a, b) => a - b);
        if (interval[0] - arr.pop() === 1 ||arr[0] - interval[interval.length-1] === 1) {
            counter += 1
        }
        for (let i = interval[0]; i <= interval[1]; i++) {
            nums.add(i)
        }
    });
    const arr = Array.from(nums).sort((a, b) => a - b);
    const result = arr.reduce((acc, num, idx) => {
        if (num - arr[idx - 1] === 1) {
            return acc + 1;
        } else {
            return acc
        }
    }, 0);
    return result - counter
}

var test2 = [[1,5],[6,10]];

console.log(sumIntervals(test2)); // 8
