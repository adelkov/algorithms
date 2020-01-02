// bubble sort

const arr = [3, 5, 1, 8, 2];

const bubble = arr => {
    let result = [...arr];
    let iterate = true;
    while (iterate) {
        iterate = false;
        for (let i = 0; i < result.length - 1; i++) {
            if (result[i] > result[i + 1]) {
                const temp = result[i + 1];
                result[i + 1] = result[i];
                result[i] = temp;
                iterate = true
            }
        }
    }
    return result
};

// console.log(bubble(arr));

const selectionSort = arr => {
    let res = [...arr];
    for (let i = 0; i < res.length; i++) {
        const min = Math.min(...res.slice(i, res.length));
        const minIndex = res.indexOf(min)
        const temp = res[i];
        res[i] = min;
        res[minIndex] = temp;
    }
    return res
};


const insertionSort = arr => {
    let unsorted = arr.slice(1, arr.length);

    let sorted = [arr[0]];
    for (let i = 0; i < unsorted.length; i++) {
        let inserted = false;
        for (let j = 0; j < sorted.length; j++) {
            if (unsorted[i] < sorted[j]) {
                sorted.splice(j, 0, unsorted[i]);
                inserted = true;
                unsorted.shift();
                console.log(sorted)
            }
        }
    }
    return sorted
};

// console.log(insertionSort(arr));

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function mergeSort(array) {
    if (array.length === 1) {
        return array
    }
    // Split Array in into right and left
    const half = Math.floor((array.length) / 2);
    let right = array.splice(0, half);
    let left = [...array];


    return merge(
        mergeSort(left),
        mergeSort(right)
    )
}

function merge(left, right) {
    const result = [];
    let leftIndex = 0;
    let rightIndex = 0;
    while(leftIndex < left.length &&
    rightIndex < right.length){
        if(left[leftIndex] < right[rightIndex]){
            result.push(left[leftIndex]);
            leftIndex++;
        } else{
            result.push(right[rightIndex]);
            rightIndex++
        }
    }
    // console.log(left, right)
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}


const answer = mergeSort(numbers);
console.log(answer);