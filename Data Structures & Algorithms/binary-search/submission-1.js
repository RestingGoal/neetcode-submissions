class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let left = 0, right = nums.length-1, middle = 0;
        while(left<= right){
            middle= left+ Math.floor((right - left) / 2);
            if(nums[middle] == target) return middle;
            else if(target> nums[middle]) left = middle+1;
            else right = middle-1
        }
        return -1;
    }
}
