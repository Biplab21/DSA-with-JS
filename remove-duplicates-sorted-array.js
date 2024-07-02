// Ques: Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

// Input: nums = [1,1,2] , Output: 2
// Input: nums = [0,0,1,1,1,2,2,3,3,4], Output: 5

// =========First Approach==============
var removeDuplicates = function(nums) {
    for(let i=0; i< nums.length - 1; i++){
        if(nums[i]== nums[i+1]){
            nums.splice(i+1, 1);
            i--
        }
    }

    return nums.length
};
// Time Complexity -> //O(n)
// Space Complexity -> //O(1)


// =========Second Approach==============
var removeDuplicatesOptimised = function(nums) {
    if(nums.length === 0) return 0;

    let i = 0;
    for(let j = 1; j < nums.length; j++){
        if(nums[i] !== nums[j]){
            i++
            nums[i] = nums[j]
        }
    }

    return i+1
};


console.log(removeDuplicatesOptimised([0,0,1,1,1,2,2,3,3,4]))