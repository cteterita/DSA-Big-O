/*
2. Power Calculator

Write a function called powerCalculator() that takes two parameters, an integer as a base, and another integer as an exponent. The function returns the value of the base raised to the power of the exponent. Use only exponents greater than or equal to 0 (positive numbers)
*/

// RECURSIVE ALGORITHM - O(n)

function powerCalculatorR(n, i) {
  if (i === 0) {
    return 1;
  } else if (i < 0) {
    console.log('exponent should be >= 0');
    return false;
  }
  return n*powerCalculatorR(n, i-1);
}

console.log(powerCalculatorR(3,4));

// ITERATIVE ALGORITHM - O(n)

function powerCalculatorI(n, i) {
  if (i < 0) {
    console.log('exponent should be >= 0');
    return false;
  }

  let returnValue = 1;
  for (let j=1; j <= i; j++) {
    returnValue *= n;
  }
  return returnValue;
}

console.log(powerCalculatorI(3,4));