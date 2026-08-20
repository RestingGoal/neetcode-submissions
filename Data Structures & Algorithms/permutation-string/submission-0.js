class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if (s1.length > s2.length) return false;

        let map1 = new Map();
        let map2 = new Map();

        for (let char of s1) {
            map1.set(char, (map1.get(char) || 0) + 1);
        }

        let l = 0;

        for (let r = 0; r < s2.length; r++) {

            map2.set(s2[r], (map2.get(s2[r]) || 0) + 1);

            // Keep window size equal to s1.length
            if (r - l + 1 > s1.length) {
                map2.set(s2[l], map2.get(s2[l]) - 1);

                if (map2.get(s2[l]) === 0) {
                    map2.delete(s2[l]);
                }

                l++;
            }

            if (r - l + 1 === s1.length) {
                if (this.areMapsEqual(map1, map2)) {
                    return true;
                }
            }
        }

        return false;
    }

    areMapsEqual(map1, map2) {
        if (map1.size !== map2.size) return false;

        for (const [key, value] of map1) {
            if (map2.get(key) !== value) {
                return false;
            }
        }

        return true;
    }
}