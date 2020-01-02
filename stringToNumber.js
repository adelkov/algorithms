const TO_19 = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen"
];

const TENS = [
    "",
    "ten",
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety"
];

const parseInt = (str) => {
    if (str.split(' ').length === 1) {
        return parseOneWord(str)
    }

    const delims = str.split(' ').filter(word => word === 'million' || word === "thousand").map(word => word === 'thousand' ? 1000 : 1000000)
    const groups = str.split(/million|thousand/g).map(word => word.split(' ').filter(word => word !== 'and' && word !== '')).filter(group => group.length !== 0);

    return groups.reduce((acc, group, idx) => {
        return acc +  parseGroup(group) * (delims[idx] || 1)
    },0)

};


const parseGroup = arr => {
    if (arr.length === 1) {
        return parseOneWord(arr[0])
    }
    let res = 0;
    if (arr.indexOf('hundred') !== -1) {
        res = +parseOneWord(arr[0]) * 100
    }
    if (arr[2]) {
        res += parseOneWord(arr[2])
    }
    return res
};

const parseOneWord = str => {
    if (TO_19.indexOf(str) !== -1) {
        return TO_19.indexOf(str)
    }
    if (TENS.indexOf(str) !== -1) {
        return TENS.indexOf(str).toString() + '0'
    }
    const words = str.split('-');
    return TENS.indexOf(words[0]) * 10 + TO_19.indexOf(words[1])
};

console.log(parseInt('two million five'));
