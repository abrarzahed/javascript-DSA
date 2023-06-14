/****************************************** 
COMMENT:  Math algorithm
******************************************/
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
/*
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
*/

/* 
  COMMENT: is power of two
*/
/*
function isPowerOfTwo(n) {
  if (n < 1) {
    return false;
  }
  while (n > 1) {
    if (n % 2 !== 0) {
      return false;
    }
    n = n / 2;
  }
  return true;
}
// Big-O = O(logn)
console.log(isPowerOfTwo(5));
console.log(isPowerOfTwo(1));
*/

/* 
  COMMENT: recursive factorial
*/
/*
function recursiveFactorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * recursiveFactorial(n - 1);
}
console.log(recursiveFactorial(5));
*/

/****************************************** 
COMMENT: Search algorithm   
******************************************/
/* 
  COMMENT: linear search
*/
/*
function doLinearSearch(arr, n) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === n) {
      return i;
    }
  }
  return -1;
}
// Big-o = O(n)
console.log(doLinearSearch([1, 2, 3, 4, 5], 5));
*/

/* 
  COMMENT: binary search
*/
/*
function doBinarySearch(arr, target) {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;

  while (leftIndex <= rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    if (target === arr[middleIndex]) {
      return middleIndex;
    } else if (target < arr[middleIndex]) {
      rightIndex = middleIndex - 1;
    } else if (target > arr[middleIndex]) {
      leftIndex = middleIndex + 1;
    }
  }
}
// Big-o = O(logn)
console.log(doBinarySearch([1, 2, 3, 4, 5, 6], 2));
*/

/****************************************** 
COMMENT: sorting algorithm 
******************************************/
/*
function doBubbleSort(arr) {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
  return arr;
}
// Big-o = O(n^2)
console.log(doBubbleSort([2, 1 - 2, 5, 3, -5]));
*/
/****************************************** 
COMMENT: cartesian product    
******************************************/
/*
function cartesianArray(arr1, arr2) {
  const result = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      result.push([arr1[i], arr2[j]]);
    }
  }
  return result;
}
// Big-n = O(mn)
console.log(cartesianArray([1, 2], [3, 4, 5, 6]));
*/

/****************************************** 
COMMENT: Climbing staircase   
******************************************/
/*
function climbingStaircase(n) {
  const numOfWays = [1, 2];
  for (let i = 2; i <= n; i++) {
    numOfWays[i] = numOfWays[i - 1] + numOfWays[i - 2];
  }
  return numOfWays[n - 1];
}
// Big-o = O(n)
console.log(climbingStaircase(4));
*/
