const num = 56.5678;

// You should look up Math functions for this exercise https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math

// Create a variable called wholeNumberPart and assign to it an expression that evaluates to 56 ( the whole number part of num )
const wholeNumberPart = Math.trunc(num)
console.log(wholeNumberPart) // Output: 56

// Create a variable called decimalPart and assign to it an expression that evaluates to 0.5678 ( the decimal part of num )
const decimalPart = num - Math.floor(num);
console.log(decimalPart); // Output: 0.5678

// Create a variable called roundedNum and assign to it an expression that evaluates to 57 ( num rounded to the nearest whole number )
const roundedNum = Math.ceil(num)
console.log(roundedNum) // Output: 57


// Log your variables to the console to check your answers









