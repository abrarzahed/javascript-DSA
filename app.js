/*
const summation = (n) => {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  return sum;
};
console.log(summation(4));
*/

/* 
  COMMENT: Fibonacci sequence
*/
/*
const fibonacci = (n) => {
  const fib = [0, 1];
  for (let i = 2; i < n; i++) {
    console.log(fib);
    fib[i] = fib[i - 1] + fib[i - 2];
    console.log(fib[i]);
    console.log(fib);
  }
  return fib;
};
// Big-O =  O(n)
console.log(fibonacci(5));
*/

/* 
  COMMENT: Factorial of the number
*/
/*
const factorial = (n) => {
  let factorialNumber = 1;
  for (let i = n; i > 0; i--) {
    factorialNumber *= i;
  }
  return factorialNumber;
};
// Big-O = O(n)
console.log(factorial(5));
console.log(factorial(1));
*/

/* 
  COMMENT: Prime Number
*/
const primeNumber = (n) => {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};
// Big-O = O(n)
console.log(primeNumber(5));
