/*
3. Reverse String

Write a function that reverses a string. Take a string as input, reverse the string, and return the new string.
*/

// RECURSIVE FUNCTION - O(n)

function reverseR(string) {
  if (string.length === 1) {
    return string;
  }
  return reverseR(string.slice(1)) + string[0];
}

console.log(reverseR('palindrome'));

// ITERATIVE FUNCTION - O(n)

function reverseI(string) {
  let returnString = '';
  for (let i = string.length-1; i > -1; i--) {
    returnString += string[i];
  }
  return returnString;
}

console.log(reverseI('palindrome'));
