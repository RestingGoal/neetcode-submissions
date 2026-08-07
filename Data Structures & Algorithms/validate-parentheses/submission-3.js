class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = [];

        for (let ch of s) {
            if (ch === '(' || ch === '{' || ch === '[') {
                stack.push(ch);
            } else if (ch === ')') {
                if (stack.length === 0 || stack.pop() !== '(')
                    return false;
            } else if (ch === '}') {
                if (stack.length === 0 || stack.pop() !== '{')
                    return false;
            } else if (ch === ']') {
                if (stack.length === 0 || stack.pop() !== '[')
                    return false;
            } else {
                return false;
            }
        }

        return stack.length === 0;
    }
}
