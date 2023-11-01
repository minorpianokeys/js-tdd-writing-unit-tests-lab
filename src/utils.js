// Your code here
export function isPalindrome(word) {
    // Convert the word to lowercase to ignore case sensitivity
    word = word.toLowerCase();
  
    // Remove spaces from the word
    word = word.replace(/\s/g, '');
  
    // Check if the word is equal to its reverse
    return word === word.split('').reverse().join('');
  }