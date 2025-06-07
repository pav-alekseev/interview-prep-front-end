/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const hash = {};

    let start = 0;
    let result = 0;

    for (let i = 0; i < s.length; i++) {
        while (s[i] in hash) {
            delete hash[s[start]];
            start += 1;
        }

        hash[s[i]] = 1;
        result = Math.max(i - start + 1, result);
    }

    return result;
};
