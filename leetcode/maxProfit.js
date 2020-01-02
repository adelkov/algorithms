

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    return prices.reduce((profit, spot, idx) => {
        const isLow = (prices[idx - 1] === undefined && prices[idx + 1] > spot) || (prices[idx - 1] >= spot && prices[idx + 1] > spot);
        const isPeak = (prices[idx + 1] === undefined && prices[idx - 1] < spot) || (prices[idx - 1] < spot && prices[idx + 1] <= spot);
        if (isLow) {
            return profit - spot
        }
        if (isPeak) {
            return profit + spot
        }
        return profit;
    }, 0)
};

// console.log(maxProfit([3, 3])); // 4