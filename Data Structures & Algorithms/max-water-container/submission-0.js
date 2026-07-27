class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let l = 0, r = heights.length-1;
        let res = 0;
        while(l<r){
            res = Math.max(res, (r-l)*Math.min(heights[l],heights[r]));
            if(heights[r]>=heights[l]) l++;
            else r--;
        }
        return res;
    }
}
