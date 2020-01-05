/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
const coinChange = function (coins, amount) {
    let localMins = [0];
    for (let i = 1; i <= amount; i++) {
        localMins[i] = localMins[i] || amount + 1;
        for (let coin of coins) {
            if (i - coin >= 0) {
                const stepsWithCurrentCoin = localMins[i-coin] + 1;
                localMins[i] = Math.min(stepsWithCurrentCoin, localMins[i])
            }
        }
    }
    return localMins[amount]
};


console.log(coinChange([2], 3)); // 3