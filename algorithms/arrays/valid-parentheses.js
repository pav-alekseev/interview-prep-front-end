class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];
        const bracketPairs = {
            ')': '(',
            '}': '{',
            ']': '[',
        }
        
        for (let i = 0; i < s.length; i++) {
            if (bracketPairs[s[i]]) {
                if (!stack.length || stack.pop() !== bracketPairs[s[i]]) {
                    return false;
                }
            } else {
                stack.push(s[i]);
            }
        }

        return stack.length === 0;
    }
}
