class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        for (let num of nums) {
            let idx = Math.abs(num) - 1;
            if (nums[idx] < 0) {
                return Math.abs(num);
            }
            nums[idx] *= -1;
        }
        return -1;
    }
    /* O(1) space
    
     Since every value is between 1 and n, each number corresponds to an index in the array (num - 1).
We can use the array itself as a marking tool:

When we see a number, we go to its corresponding index and flip the sign of the value there.
If we ever visit an index that is already negative, it means we've visited this number before → it's the duplicate.
This method avoids extra memory and uses the input array as a tracking structure. */
}