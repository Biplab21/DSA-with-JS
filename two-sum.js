// Ques 4 - Two Sum
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Input: nums = [3,2,4], target = 6
// Output: [1,2]


// ======== Bruteforce approach ========
// [3,2,4] = 3+2, 3+4, 2+4
// const twoSum = ( nums, target )=>{
//     for(let i= 0; i<nums.length; i++){
//         for(let j= i+1; j<nums.length; j++){
//             if(nums[i]+nums[j] === target) return [i,j]
//         }
//     }
// }


// ========== Object Approach ==========
// nums=[2,7,11,15], target= 26
//  {
//     2: 0 // 26-2 = 24
//     7: 1 // 26-7= 19
//     11: 2 // 26-11 = 15
//     15: //26-15=11  => [obj[11], 3] => [2, 3]
//  }
const twoSum = ( nums, target )=>{
    let obj={}
    
    for(let i= 0; i<nums.length; i++){
       let n = nums[i]
       let val= obj[target - n]

        if(obj[target - n] >= 0){
            return [obj[target - n], i]
        }else{
            obj[n] = i
        }
    }
}

console.log(twoSum([3,2,4], 6));