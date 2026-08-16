class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let l = 0, r = 0;
        let curr = "";
        let longest = "";

        while (r < s.length) {

            while (curr.includes(s[r])) {
                curr = curr.slice(1);
                l++;
            } /* You need to keep removing similarly occurring characters from the window, unless all of the similar characters are gone. If you use if, only 1 character will be gone */

            curr += s[r];
            r++;

            if (curr.length > longest.length) {
                longest = curr;
            }
        }

        return longest.length;
    }
}