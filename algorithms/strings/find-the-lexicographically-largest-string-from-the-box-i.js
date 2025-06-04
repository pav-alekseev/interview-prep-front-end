/**
 * @param {string} word
 * @param {number} numFriends
 * @return {string}
 */
var answerString = function(word, numFriends) {
    if (numFriends === 1) {
        return word;
    }

    let largestLetter = 'a';

    for (const letter of word) {
        if (letter > largestLetter) {
            largestLetter = letter;
        }
    }

    let result = largestLetter;

    for (let i = 0; i < word.length; i++) {
        const letter = word[i];

        if (letter === largestLetter) {
            const box = word.slice(i, word.length - numFriends + i + 1);

            if (box > result) {
                result = box;
            }
        }
    }

    return result;
};
