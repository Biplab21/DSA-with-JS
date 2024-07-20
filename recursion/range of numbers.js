// Create an array with range of numbers
// Input: start = 1, end = 5 -------> Output: [1,2,3,4,5]

function rangeOfNumbers (startNum, endNum) {
    if (startNum > endNum)
    {
        return []
    } else
    {
        const numbers = rangeOfNumbers(startNum, endNum - 1)
        numbers.push(endNum)
        return numbers
    }

}

console.log(rangeOfNumbers(1, 5))