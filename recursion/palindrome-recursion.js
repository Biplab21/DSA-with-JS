// Check a number is palindrome or not
// Input -> 121 => Output: true
// Input -> 123 => Output: false


function isPalindrome(number, left = 0, right = number.toString().length - 1) {
    // Convert the number to a string
    const str = number.toString();

    // Base case: if the left index is greater than or equal to the right index
    if (left >= right) {
        return true;
    }

    // If the characters at the left and right indices are not the same, it's not a palindrome
    if (str[left] !== str[right]) {
        return false;
    }

    // Move towards the center and check the next pair of characters
    return isPalindrome(number, left + 1, right - 1);
}


console.log(isPalindrome(121));  