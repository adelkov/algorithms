var moveZeroes = function (nums) {
    let count = 0;
    nums.forEach((num, idx) => {
        if (num === 0) {
            count++;
        } else {
            const temp = nums[idx];
            nums[idx] = nums[idx - count];
            nums[idx - count] = temp;
        }
    });
    return nums
};

// console.log(moveZeroes([0, 1, 0, 3, 12]));