/**
 * @param {number} n
 * @param {number} limit
 * @return {number}
 */
var distributeCandies = function(n, limit) {
    let answer = 0;

    for (let i = 0; i <= Math.min(n, limit); i++) {
        const candiesLeft = n - i;

        if (candiesLeft < 0) {
            return answer;
        }

        const minCandies2 = Math.max(0, candiesLeft - limit);
        const maxCandies2 = Math.min(limit, candiesLeft);

        if (maxCandies2 >= minCandies2) {
            answer += (maxCandies2 - minCandies2 + 1);
        }
    }

    return answer;
};
