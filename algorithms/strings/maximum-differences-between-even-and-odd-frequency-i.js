/**
 * @param {string} s
 * @return {number}
 */
var maxDifference = function(s) {
    const letters = new Array(27).fill(0);

    for (let i = 0; i < s.length; i++) {
        const indexOfLetters = s[i].charCodeAt(0) - 'a'.charCodeAt(0);

        letters[indexOfLetters] += 1;
    }

    let maxOdd = 0;
    let minEven = Infinity;

    for (let i = 0; i < letters.length; i++) {
        if (letters[i] === 0) {
            continue;
        }

        if (letters[i] % 2 === 0) {
            minEven = Math.min(letters[i], minEven);
        } else {
            maxOdd = Math.max(letters[i], maxOdd);
        }
    }

    return maxOdd - minEven;
};
