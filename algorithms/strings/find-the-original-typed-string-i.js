/**
 * @param {string} word
 * @return {number}
 */
var possibleStringCount = function(word) {
    let result = 0;

    let currentLetter = word[0];
    let currentNumber = 0;

    for (let i = 1; i < word.length; i++) {
        if (word[i] === currentLetter) {
            currentNumber += 1;
            continue;
        }

        currentLetter = word[i];
        result += currentNumber;
        currentNumber = 0;
    }

    return result + currentNumber + 1;  
};
