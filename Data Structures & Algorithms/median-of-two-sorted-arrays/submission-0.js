class Solution {

    findMedianSortedArrays(nums1, nums2) {
        const array = this.merge(nums1, nums2);
        if(array.length % 2 != 0) return array[(array.length - 1)/2]
        else return (array[array.length/2] + array[array.length/2 - 1])/2;
    }
    merge(arr1, arr2){
    let results = [];
    let i = 0;
    let j = 0;
    while(i < arr1.length && j < arr2.length){
        if(arr2[j] > arr1[i]){
            results.push(arr1[i]);
            i++;
        } else {
            results.push(arr2[j])
            j++;
        }
    }
    while(i < arr1.length) {
        results.push(arr1[i])
        i++;
    }
    while(j < arr2.length) {
        results.push(arr2[j])
        j++;
    }
    return results;
}
}
