class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        let Set1 = new Set();
        for(let i of nums){
            if(!Set1.has(i)) Set1.add(i);
            else return i;
        }
    }
}
