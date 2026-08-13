class Solution {
 /* Logic: 1. The max value of k will be the maximum value within the piles array because in that case, if we finish the biggest pile in 1 hr, we can finish the rest of the piles in 1 hr too. hence the k array will be from [1-max(piles)]
        
        2. Hence the complexity will be O(max(piles) * len(piles)), since we still have to iterate through the entire piles array.
        
        
        3. To improve this to O(log(max(piles)) * len(piles)), we can apply binary search to the k-array, to check if the middle element's k value gives a time larger or smaller than the 'h'. If its larger than 'h', meaning the k value wasnt enough and we need to search in the right subarray, otherwise the left subarray*/

minEatingSpeed(piles, h) {
        let l = 1;
        let r = Math.max(...piles);
        let res = r;

        while (l <= r) {
            const k = Math.floor((l + r) / 2);

            let totalTime = 0;
            for (const p of piles) {
                totalTime += Math.ceil(p / k);
            }
            if (totalTime <= h) {
                res = k;
                r = k - 1;
            } else {
                l = k + 1;
            }
        }
        return res;
    }
}
