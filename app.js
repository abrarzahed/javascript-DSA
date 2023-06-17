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

/****************************************** 
COMMENT: tower of hanoi   
******************************************/
/*
function solveTowerOfHanoi(n, fromRoad, toRoad, byRoad) {
  if (n === 1) {
    console.log(`Move disk 1 from ${fromRoad} to ${toRoad}`);
    return;
  }
  solveTowerOfHanoi(n - 1, fromRoad, byRoad, toRoad);
  console.log(`Move disk ${n} from ${fromRoad} to ${toRoad}`);

  solveTowerOfHanoi(n - 1, byRoad, toRoad, fromRoad);
}
solveTowerOfHanoi(3, "A", "C", "B");
*/

/****************************************** 
COMMENT: data structure   
******************************************/
/*
const arr = [1, 2, 34, "Abrar"];
arr.push(5);
arr.unshift(0);
for (const item of arr) {
  console.log(item);
}
*/

/*
const obj = {
  name: "abrar",
  age: 28,
};
function swapKeyValue(obj) {
  for (const [keys, values] of Object.entries(obj)) {
    for (let i = 0; i < keys.length; i++) {
      obj[keys[i + 1]] = values[i];
      obj[keys[i]] = values[i + 1];
      console.log(obj);
      return;
    }
  }
}
swapKeyValue(obj);
*/

/****************************************** 
COMMENT: stack implementation   
******************************************/
/*
class Stack {
  constructor() {
    this.items = [];
  }
  push(item) {
    this.items.push(item);
  }
  pop() {
    return this.items.pop();
  }
  peak() {
    return this.items[this.items.length - 1];
  }
  isEmpty() {
    return this.items.length === 0;
  }
  size() {
    return this.items.length;
  }
  print() {
    console.log(this.items.toString());
  }
}

const stack1 = new Stack();
console.log(stack1.isEmpty());
stack1.push(10);
stack1.push(30);
console.log(stack1.size());
console.log(stack1.peak());
console.log(stack1.print());
*/

/****************************************** 
COMMENT: queue implementation part 1
******************************************/
/*
class Queue {
  constructor() {
    this.items = [];
  }
  enqueue(element) {
    this.items.push(element);
  }
  dequeue() {
    return this.items.shift();
  }
  isEmpty() {
    return this.items.length === 0;
  }
  peak() {
    if (!this.isEmpty()) {
      return this.items[0];
    }
    return null;
  }
  size() {
    return this.items.length;
  }
  print() {
    console.log(this.items.toString());
  }
}


// Big-O = O(n)
const queue1 = new Queue();
console.log(queue1.isEmpty());
queue1.enqueue(10);
queue1.enqueue(20);
queue1.enqueue(30);
console.log(queue1.size());
queue1.print();
console.log(queue1.dequeue());
console.log(queue1.peak());
queue1.print();
*/

/****************************************** 
COMMENT: queue implementation part 2 using object
******************************************/
/*
class QueueObj {
  constructor() {
    this.items = {};
    this.rear = 0;
    this.front = 0;
  }
  enqueue(element) {
    this.items[this.rear] = element;
    this.rear++;
  }
  dequeue() {
    const item = this.items[this.front];
    delete this.items[this.front];
    this.front++;
    return item;
  }
  isEmpty() {
    return this.rear - this.front === 0;
  }
  peak() {
    return this.items[this.front];
  }
  size() {
    return this.rear - this.front;
  }
  print() {
    console.log(this.items);
  }
}

const queue2 = new QueueObj();
queue2.enqueue(10);
queue2.enqueue(20);
queue2.enqueue(30);
console.log(queue2.size());
queue2.dequeue();
queue2.print();
console.log(queue2.peak());
*/
