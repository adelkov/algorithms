function sockMerchant(n, ar) {
    const socks = ar.reduce((acc, sock) => {
        if (acc[sock]) {
            acc[sock] = 0;
            acc.pairs += 1;
        } else {
            acc[sock] = 1
        }
        return acc
    }, {pairs: 0});
    return socks.pairs
}

console.log(sockMerchant(7, [1, 1, 2, 1, 2, 1, 2, 3]));