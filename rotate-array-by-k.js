// Ques 1: Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.\

// Example 1:

// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]


// =========First Approach==============
var rotate = function(nums, k) {
    let size = nums.length;
    
    if(k > size){
        k = k % size;
    }
    
    const rotated = nums.splice(size - k, size); //[5,6,7] //O(n)
    nums.unshift(...rotated) //O(n)

    return nums
};

// Time complexity -> O(n)



// =========Second Approach==============
var rotateOptimized = function(nums, k) {
    let size = nums.length;
    
    if(k > size){
        k = k % size;
    }
    
    reverse(nums, 0, nums.length - 1) //O(n)
    reverse(nums, 0, k - 1) //O(k)
    reverse(nums, k, nums.length - 1) //O(n-k)

    return nums;
};

function reverse(nums, left, right){
    while(left < right){
        let temp = nums[left]
        nums[left] = nums[right]
        nums[right]= temp

        left++
        right--
    }
}

// Time Complexity -> //O(n)
// Space Complexity -> //O(1)



console.log(rotateOptimized([1,2,3,4,5,6,7], 3));