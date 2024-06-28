// Ques 1 - Second Largest Number
// Give an array of size N, print second largest distinct element from an array.

//Input: [12, 35, 1, 10, 34, 1] -------> Output: 34
//Input: [10, 5, 10] -------> Output: 5

// ============== First Approach =======================
const secondLargest = (nums) => {
    const uniqueArr = Array.from(new Set(nums)) // O(n)

    const sortedArr = uniqueArr.sort((a, b) => { //O(nlogn)
        return b - a
    })
    if (sortedArr.length >= 2)
    {
        return sortedArr[ 1 ]
    } else
    {
        return -1
    }
}

console.log(secondLargest([ 12, 35, 1, 10, 34, 1, 35 ]));
//Time Complexity: O(nlogn)


// ============== Second Approach =======================
const secondLargestOptimized = (nums) => {
    let largest = Number.NEGATIVE_INFINITY
    let secondLargest = Number.NEGATIVE_INFINITY

    for (let i = 0; i < nums.length; i++)
    {
        if (nums[ i ] > largest)
        {
            secondLargest = largest
            largest = nums[ i ]
        } else if (nums[ i ] !== largest && nums[ i ] > secondLargest)
        {
            secondLargest = nums[ i ]
        }
    }

    return secondLargest
}

//Time Complexity: O(n)

console.log(secondLargestOptimized([ 12, 35, 1, 10, 34, 1, 35 ])); 