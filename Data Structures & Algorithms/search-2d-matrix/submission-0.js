class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let sub = [];

        for (let i = 0; i < matrix.length; i++) {
            if (target < matrix[i][0]) {
                if (i === 0) return false;/* In case its in the last row */
                sub = matrix[i - 1];
                break;
            }

            sub = matrix[i]; /* In case its in the last row */
        }

        let left = 0;
        let right = sub.length - 1;

        while (left <= right) {
            let middle = left + Math.floor((right - left) / 2);

            if (sub[middle] === target)
                return true;
            else if (target > sub[middle])
                left = middle + 1;
            else
                right = middle - 1;
        }

        return false;
    }
}