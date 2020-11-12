/*
7. Factorial

Write a recursive function that finds the factorial of a given number. The factorial of a number can be found by multiplying that number by each number between itself and 1. For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.
*/

// RECURSIVE ALGORITHM - O(n)

function factorialR(n) {
  if (n===1) return 1;
  return n*factorialR(n-1);
}

console.log(factorialR(5));

// ITERATIVE ALGORITHM - O(n)

function factorialI(n) {
  let returnValue = 1;
  for (i=1; i <= n; i++) {
    returnValue *= i;
  }
  return returnValue;
}

console.log(factorialI(5));