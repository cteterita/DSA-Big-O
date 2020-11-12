/*
4. nth Triangular Number

Calculate the nth triangular number. A triangular number counts the objects that can form an equilateral triangle. The nth triangular number is the number of dots composing a triangle with n dots on a side, and is equal to the sum of the n natural numbers from 1 to n. This is the Triangular Number Sequence: 1, 3, 6, 10, 15, 21, 28, 36, 45.
*/

// RECURSIVE ALGORITHM - O(n)

function triangularR(n) {
  if (n === 1) {
    return 1;
  }
  return triangularR(n-1)+n;
}

console.log(triangularR(9));

// ITERATIVE ALGORITHM - O(n)

function triangularI(n) {
  let returnValue = 0;
  for (let i = 1; i <= n; i++) {
    returnValue += i;
  }
  return returnValue;
}

console.log(triangularI(9));
