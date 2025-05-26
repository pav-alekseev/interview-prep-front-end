var longestPalindrome = function(words) {
    const map = {};

    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        
        map[word] = (map[word] || 0) + 1;
    }

    const keys = Object.keys(map);
    let result = 0;
    let hasFreeDoubleLetters = false;

    for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        const reverseKey = `${key[1]}${key[0]}`;

        if (key === reverseKey) {
            if (map[key] % 2 === 0) {
                result += map[key] * 2;
                map[key] = 0;
            } else {
                result += (map[key] - 1)  * 2;
                map[key] = 1;
            }
            
            continue;
        }

        const minValue = Math.min(map[key], map[reverseKey] || 0);

        result += minValue * 4;
        map[key] -= minValue;
        map[reverseKey] -= minValue;
    }

    for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        const value = map[key];

        if (value && key[0] === key[1]) {
            result += 2;
            break;
        }
    }

    return result;
};
