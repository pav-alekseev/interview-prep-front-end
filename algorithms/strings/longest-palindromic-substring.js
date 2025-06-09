/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    const expand = (i, j) => {
        while (i >= 0 && j < s.length && s[i] === s[j]) {
            i -= 1;
            j += 1;
        }

        return s.slice(i + 1, j);
    }

    let result = '';

    for (let i = 0; i < s.length; i++) {
        let odd = expand(i, i);
        result = result.length > odd.length ? result : odd;

        let even = expand(i, i + 1);
        result = result.length > even.length ? result : even;
    }

    return result;
};
