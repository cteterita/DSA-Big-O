/*
6. Fibonacci

Write a recursive function that prints the Fibonacci sequence of a given number. The Fibonacci sequence is a series of numbers in which each number is the sum of the 2 preceding numbers. For example, the 7th Fibonacci number in a Fibonacci sequence is 13. The sequence looks as follows: 1, 1, 2, 3, 5, 8, 13.
*/

// RECURSIVE FUNCTION - O(n)

function fibonnacciR(n) {
  if (n === 1 || n === 2) return 1;
  return fibonnacciR(n-2) + fibonnacciR(n-1);
}

function printSequenceR(n) {
  if (n === 1) return '1';
  return `${printSequenceR(n-1)}, ${fibonnacciR(n)}`;
}

console.log(printSequenceR(7));

// ITERATIVE FUNCTION - 0(n)

function fibonnacciI(n) {
  let returnArray = [];
  if (n >= 1) returnArray.push(1);
  if (n >= 2) returnArray.push(1);
  if (n >= 3) {
    for(i = 2; i < n; i++) {
      returnArray.push(returnArray[i-2]+returnArray[i-1]);
    }
  }
  return returnArray;
}

console.log(fibonnacciI(7));