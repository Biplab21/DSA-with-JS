// Q 1 - Palindrome Number
// An integer is a palindrome when it reads the same forward and backward.

// Input: x = 121 ----> Output: true
// Input x = 10 ------> Output: false


const isPalindrome = (x)=>{
    // return x < 0 ? false : x === Number(x.toString().split("").reverse().join(""));
    if (x === 0){ 
        return true
    }else if(x < 0){
        return false
    }else{
        return x === Number(x.toString().split("").reverse().join(""));
    }
}


console.log(isPalindrome(10));


