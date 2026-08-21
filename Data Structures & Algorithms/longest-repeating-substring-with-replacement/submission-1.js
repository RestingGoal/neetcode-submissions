class Solution {
/* You know that Length of window (len) - maxF <= k. So in order to maximise the length of the window, maxF + k needs to be the most, so maxF needs to be the most */
    characterReplacement(s, k) {
        let count = new Map();
        let res = 0;

        let l = 0,
            maxf = 0;
        for (let r = 0; r < s.length; r++) {
            count.set(s[r], (count.get(s[r]) || 0) + 1);
            maxf = Math.max(maxf, count.get(s[r]));

            /* If more than k replacements in the window, decrease the window from the left */
            while (r - l + 1 - maxf > k) {/* if or while both work */
                count.set(s[l], count.get(s[l]) - 1);
                l++;
            }
            res = Math.max(res, r - l + 1);
        }

        return res;
    }
}