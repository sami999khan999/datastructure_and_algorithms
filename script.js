"use strict";

//============================================================================================================================================//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//============================================================================================================================================//

// Algorithms -

// Time complexity -

// space complexity -

// asymptotic notation -

// Big O notation, Omega notaion and Theta notaion -

// calculating the time complexity -

//  time complixity for object -

// time complexity for array -

// fibonacci serise -

// factorial -

// prime number -

// power of 2 -

// unit step -

// unit ramp -

// unit impuls -

// recursion {
// recurstve fibonacci -
// recursive factorial -
// }

// searching algorithm {
// linear search -
// binaty search -
// }

//============================================================================================================================================//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//============================================================================================================================================//

// // algorithms

// // Algorithms are step-by-step procedures or sets of rules for solving specific problems or performing specific tasks. They are fundamental to computer science and programming and are used to solve a wide range of problems efficiently and systematically. Algorithms can be expressed in various ways, such as natural language, pseudocode, flowcharts, or programming languages. //

//============================================================================================================================================//

// // Whay you should learn algorithms?

// // 1. Critical thinking and abstraction.
// // 2. Problem solving.
// // 3. Computer science.
// // 4. Career advancment.
// // 5. Understanding new techs.

//============================================================================================================================================//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//============================================================================================================================================//

// // Time complexity

// // Time complexity is a measure used in computer science to analyze the efficiency of an algorithm. It quantifies the amount of time an algorithm takes to run as a function of the input size. In other words, time complexity describes how the runtime of an algorithm grows with respect to the size of the input. Commonly denoted using Big O notation, time complexity provides an upper bound on the growth rate of an algorithm's runtime. It helps us understand how the algorithm's performance scales as the input size increases. //

//============================================================================================================================================//

// // O(1) - Constant Time Complexity: The algorithm's runtime is constant, regardless of the input size. It means the algorithm takes the same amount of time to execute, regardless of how large the input is. //

// // O(log n) - Logarithmic Time Complexity: The algorithm's runtime grows logarithmically with the input size. As the input size increases, the algorithm's runtime grows at a slower rate. Examples of algorithms with logarithmic time complexity include binary search and some divide-and-conquer algorithms. //

// // O(n) - Linear Time Complexity: The algorithm's runtime grows linearly with the input size. If the input size doubles, the algorithm's runtime also doubles. Examples of linear time complexity algorithms include iterating over an array or a linked list. //

// // O(n log n) - Linearithmic Time Complexity: The algorithm's runtime grows in a rate that is a product of the input size and its logarithm. Common examples are efficient sorting algorithms like merge sort and heap sort.  //

// // O(n^2) - Quadratic Time Complexity: The algorithm's runtime grows quadratically with the input size. If the input size doubles, the algorithm's runtime increases four times. Examples include nested loops iterating over the input. //

// // O(2^n) - Exponential Time Complexity: The algorithm's runtime grows exponentially with the input size. It is typically associated with brute-force algorithms that try every possible combination. These algorithms quickly become impractical for larger input sizes. //

// // O(n!) - Factorial Time Complexity: The algorithm's runtime grows factorially with the input size. It is the slowest time complexity and is typically associated with algorithms that try every possible permutation or combination of the input. //

//============================================================================================================================================//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//============================================================================================================================================//

// // space complexity

// // Space complexity is a measure used in computer science to analyze the amount of memory or space required by an algorithm to solve a problem. It quantifies the maximum amount of memory an algorithm needs as a function of the input size. Similar to time complexity, space complexity is commonly denoted using Big O notation. It provides an upper bound on the growth rate of an algorithm's memory usage as the input size increases. //

//============================================================================================================================================//

// // O(1) - Constant Space Complexity: The algorithm uses a fixed amount of memory that does not depend on the input size. It means the algorithm requires a constant amount of space, regardless of how large the input is. //

// // O(n) - Linear Space Complexity: The algorithm's memory usage grows linearly with the input size. If the input size doubles, the algorithm's memory usage also doubles. Examples include algorithms that store the input elements in an array or a linked list. //

// // O(n^2) - Quadratic Space Complexity: The algorithm's memory usage grows quadratically with the input size. If the input size doubles, the algorithm's memory usage increases four times. Examples include algorithms that use a two-dimensional matrix or nested data structures. //

// // O(log n) - Logarithmic Space Complexity: The algorithm's memory usage grows logarithmically with the input size. As the input size increases, the algorithm's memory usage grows at a slower rate. Examples include algorithms that use divide-and-conquer techniques, where the memory usage is determined by the recursion depth. //

// // O(n log n) - Linearithmic Space Complexity: The algorithm's memory usage grows in a rate that is a product of the input size and its logarithm. Common examples are efficient sorting algorithms like merge sort and heap sort. //

// // O(2^n) - Exponential Space Complexity: The algorithm's memory usage grows exponentially with the input size. It is typically associated with brute-force algorithms that generate all possible combinations. These algorithms require a significant amount of memory and quickly become impractical for larger input sizes. //

// // O(n!) - Factorial Space Complexity: The algorithm's memory usage grows factorially with the input size. It is the most demanding space complexity and is typically associated with algorithms that generate all possible permutations or combinations of the input. //

//============================================================================================================================================//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//============================================================================================================================================//

// // asymptotic notation

// // Asymptotic notation, also known as Big O notation, is a mathematical notation used in computer science to describe the behavior and growth rate of algorithms. It provides a way to analyze the time complexity and space complexity of algorithms as the input size approaches infinity. Big O notation describes the upper bound or worst-case scenario of an algorithm's performance. It expresses the limiting behavior of a function as the input size grows larger without considering constant factors or lower-order terms. The notation is represented as O(f(n)), where "f(n)" represents the function that describes the growth rate of the algorithm's time or space usage in terms of the input size "n". The "O" denotes the order of growth. //

//============================================================================================================================================//

// // O(1) - Constant Time Complexity: The algorithm's runtime or space usage is constant, regardless of the input size. It means the algorithm takes the same amount of time or requires the same amount of space, regardless of how large the input is. //

// // O(log n) - Logarithmic Time Complexity: The algorithm's runtime or space usage grows logarithmically with the input size. As the input size increases, the algorithm's time or space usage grows at a slower rate. //

// // O(n) - Linear Time Complexity: The algorithm's runtime or space usage grows linearly with the input size. If the input size doubles, the algorithm's time or space usage also doubles. //

// // O(n log n) - Linearithmic Time Complexity: The algorithm's runtime or space usage grows in a rate that is a product of the input size and its logarithm. Common examples are efficient sorting algorithms like merge sort and heap sort. //

// // O(n^2) - Quadratic Time Complexity: The algorithm's runtime or space usage grows quadratically with the input size. If the input size doubles, the algorithm's time or space usage increases four times. //

// // O(2^n) - Exponential Time Complexity: The algorithm's runtime or space usage grows exponentially with the input size. It is typically associated with brute-force algorithms that try every possible combination. These algorithms quickly become impractical for larger input sizes. //

// // O(n!) - Factorial Time Complexity: The algorithm's runtime or space usage grows factorially with the input size. It is the slowest growth rate and is typically associated with algorithms that try every possible permutation or combination of the input. //

//============================================================================================================================================//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//============================================================================================================================================//

// // Big O notation, Omega notaion and Theta notaion

// // Big O notation, Omega notation, and Theta notation are all forms of asymptotic notation used to describe the growth rate of functions and the complexity of algorithms. They provide different types of bounds on the performance of an algorithm. //

//============================================================================================================================================//

// // Big O Notation (O): Big O notation provides an upper bound on the growth rate of a function or algorithm. It describes the worst-case scenario or the maximum amount of resources (time or space) required by the algorithm. In Big O notation, we use the notation O(f(n)) to denote that the function or algorithm grows no faster than the function f(n) as the input size approaches infinity. For example, if an algorithm has a time complexity of O(n^2), it means that the algorithm's runtime grows no faster than the square of the input size. //

// // Omega Notation (Ω): Omega notation provides a lower bound on the growth rate of a function or algorithm. It represents the best-case scenario or the minimum amount of resources required by the algorithm. In Omega notation, we use the notation Ω(g(n)) to denote that the function or algorithm grows at least as fast as the function g(n) as the input size approaches infinity. For example, if an algorithm has a time complexity of Ω(n), it means that the algorithm's runtime grows at least as fast as the input size itself. //

// // Theta Notation (Θ): Theta notation provides both an upper bound and a lower bound on the growth rate of a function or algorithm. It represents a tight bound and indicates that the growth rate of the function is neither faster nor slower than a given function. In Theta notation, we use the notation Θ(h(n)) to denote that the function or algorithm grows at the same rate as the function h(n) as the input size approaches infinity. For example, if an algorithm has a time complexity of Θ(n), it means that the algorithm's runtime grows at the same rate as the input size. //

//============================================================================================================================================//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//============================================================================================================================================//

// // calculating the time complexity

// // Time complexity is a measure used in computer science to analyze the efficiency of an algorithm. It quantifies the amount of time an algorithm takes to run as a function of the input size. In other words, time complexity describes how the runtime of an algorithm grows with respect to the size of the input. Commonly denoted using Big O notation, time complexity provides an upper bound on the growth rate of an algorithm's runtime. It helps us understand how the algorithm's performance scales as the input size increases. //

//============================================================================================================================================//

const arrSum = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};

console.log(arrSum([2, 6, 1, 5, 8, 4])); // time complexity O(n)

// // The time complexity of the code is O(n), where n is the size of the input array. The code has a linear time complexity because the number of operations performed is directly proportional to the size of the input.In this case, the loop executes once for each element in the array, resulting in a time complexity that scales linearly with the input size. So, if the array doubles in size, the number of iterations and operations also double, causing the runtime to increase proportionally. //

//--------------------------------------------------------------------------------------------------------------------------------------------//

const sum = function (num1, num2) {
  return num1 + num2;
};

console.log(sum(4, 2)); // time complexity O(1)

// // The given code has a constant time complexity, denoted as O(1). The time it takes to execute the code remains constant regardless of the size of the inputs. It directly returns the sum of the two numbers without any iteration or dependence on the input size. In this case, no matter how large the numbers are or how many times you execute the function, the runtime will be the same. The code performs a single addition operation and returns the result immediately, resulting in a fixed and constant time complexity. //

//--------------------------------------------------------------------------------------------------------------------------------------------//

let n = 10;

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n; j++) {
    console.log(i, j);
  }
} // (quadratic) time complexity O(n^2)

// // The time complexity of the code is O(n^2), where n represents the value of the variable n. The code has a quadratic time complexity because the number of iterations and operations grows quadratically with the input size. In this case, if the value of n doubles, the number of iterations and operations will increase by a factor of four (2^2) because it involves nested loops. The runtime of the code grows proportionally to the square of the input size. //

//============================================================================================================================================//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//============================================================================================================================================//

// // time complixity for object

// // When referring to the time complexity of an object in the context of data structures and algorithms, we typically consider the operations performed on the object. The time complexity of various operations on objects can vary depending on the specific implementation. //

//============================================================================================================================================//

// // Insertion: The time complexity for inserting a new key-value pair into an object is typically O(1) on average. However, in certain cases, such as when collisions occur in a hash table-based implementation, the time complexity may degrade to O(n) in the worst case. //

// // Access: The time complexity for accessing the value associated with a given key in an object is typically O(1) on average. Similar to insertion, in hash table-based implementations, collisions may occur, resulting in a worst-case time complexity of O(n). //

// // Deletion: The time complexity for deleting a key-value pair from an object is typically O(1) on average. In hash table-based implementations, the worst-case time complexity can be O(n) if there are collisions. //

// // Search: Searching for a specific value within an object is not a typical operation directly supported by objects. Instead, you would typically iterate over the key-value pairs in the object to find a specific value. The time complexity for searching would depend on the number of key-value pairs in the object and can be O(n) in the worst case if you need to check every pair. //

//--------------------------------------------------------------------------------------------------------------------------------------------//

// //  Object.keys() - O(n)
// //  Object.volues() - O(n)
// // Obejct.entries() - O(n).

//============================================================================================================================================//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//============================================================================================================================================//

// // time complexity for array

// // The time complexity of array operations depends on the specific operation being performed. //

//============================================================================================================================================//

// // Accessing an element by index: O(1)
// // Accessing a specific element in an array by its index can be done in constant time because arrays provide direct access to elements based on their index. //

// // Searching for an element: O(n)
// // If you need to search for a specific element in an array, you typically need to iterate over each element in the worst case. This results in a linear time complexity, as the time required increases linearly with the size of the array. //

// // Inserting an element at the end: O(1)
// // Inserting an element at the end of an array can be done in constant time, assuming there is enough space in the array. This operation involves adding the element to the next available position. //

// // Inserting an element at a specific index: O(n)
// // If you want to insert an element at a specific index in an array, you may need to shift all subsequent elements to make room for the new element. This requires iterating over the elements after the insertion point and shifting them, resulting in a linear time complexity. //

// // Deleting an element by index: O(n)
// // Similar to inserting an element, deleting an element at a specific index may require shifting all subsequent elements to fill the gap left by the deleted element. This operation also has a linear time complexity as it involves iterating over the elements after the deletion point and shifting them. //

// // Appending two arrays: O(m + n)
// // If you want to concatenate two arrays, the time complexity depends on the sizes of the arrays being concatenated. The time required is proportional to the sum of the lengths of the two arrays. //

//--------------------------------------------------------------------------------------------------------------------------------------------//

// // push/pop: O(1)
// // shift/unshift: O(n)
// // splice: O(n)
// // concat: O(m + n)
// // slice: O(n)
// // indexOf/lastIndexOf: O(n)
// // sort: O(n log n) or O(n)
// // forEach()/map(): O(n)

//============================================================================================================================================//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//============================================================================================================================================//

// // fibonacci serise

// // The Fibonacci series is a sequence of numbers where each number is the sum of the two preceding ones, usually starting with 0 and 1. //

//============================================================================================================================================//

// // example

// febonacci(2) ---> [0,1]
// febonacci(3) ---> [0,1,1]
// febonacci(4) ---> [0,1,1,2]
// febonacci(5) ---> [0,1,1,2,3]
// febonacci(6) ---> [0,1,1,2,3,5]
// febonacci(7) ---> [0,1,1,2,3,5,8]
// febonacci(8) ---> [0,1,1,2,3,5,8,13]
// febonacci(9) ---> [0,1,1,2,3,5,8,13,21]

//============================================================================================================================================//

const fibonacci = function (num) {
  const fibo = [0, 1];

  for (let i = 2; i < num; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];
  }
  return fibo;
};

console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(4));
console.log(fibonacci(5)); // time complexity O(n)

// // The time complexity of the given fibonacci function is O(n), where n is the input number representing the number of terms in the Fibonacci series to generate. In the function, the for loop iterates num - 2 times to generate the subsequent numbers of the series. Therefore, the time complexity is directly proportional to the value of num. Since the loop performs a constant amount of work in each iteration (calculating the sum of two preceding numbers and assigning it to the current index), the time complexity can be simplified to O(n). //

//============================================================================================================================================//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//============================================================================================================================================//

// // factorial

// // Factorial is a mathematical function that calculates the product of an integer and all the positive integers below it. It is denoted by the exclamation mark (!). //

//============================================================================================================================================//

// // example

// 1! ---> 1
// 2! ---> 2 * 1
// 3! ---> 3 * 2 * 1
// 4! ---> 4 * 3 * 2 * 1
// 5! ---> 5 * 4 * 3 * 2 * 1

// n! = n * (n-1)!

//============================================================================================================================================//

const factorial = function (num) {
  let fact = 1;

  for (let i = 2; i <= num; i++) {
    fact = fact * i;
  }
  return fact;
};

console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(4)); // time complexity O(n)

// // The time complexity of the given factorial function is O(n), where n is the input number for which we want to calculate the factorial. In the function, a for loop iterates from 2 to num, multiplying fact with the current value of i in each iteration. The loop runs num - 1 times, as it starts from 2 and goes up to num. Therefore, the time complexity is directly proportional to the value of num. Since the loop performs a constant amount of work in each iteration (multiplying fact with i), the time complexity can be simplified to O(n). //

//============================================================================================================================================//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//============================================================================================================================================//

// // prime number

// // A prime number is a positive integer greater than 1 that has no positive divisors other than 1 and itself. In other words, a prime number is a number that is divisible only by 1 and itself, with no other factors. //

//============================================================================================================================================//

// // example

// 3 ---> (3/1) % 0 , (3/3) % 0
// 4 ---> (4/1) % 0 , (4/4) % 0 , (4/2) % 0

//============================================================================================================================================//

const prime = function (num) {
  if (num < 2) return "Not Prime!";

  for (let i = 2; i < num; i++) {
    if (num % i === 0) return "Not Prime!";
  }
  return "Prime!";
};

console.log(prime(1));
console.log(prime(2));
console.log(prime(3));
console.log(prime(4)); // time complexity O(n)

// // The time complexity of the given prime function is O(n), where n is the input number for which we want to determine primality. In the function, the for loop iterates from 2 to num - 1, checking if num is divisible by any integer within that range. If num is divisible by any number within that range, it is not prime, and the function returns "Not Prime!". The loop runs num - 2 times since it starts from 2 and goes up to num - 1. Therefore, the time complexity is directly proportional to the value of num. In the worst case scenario, where num is a prime number, the loop will run num - 2 times. However, if num is not prime and has a divisor before num - 1, the loop will terminate early. Thus, the average time complexity will be less than O(n). //

//============================================================================================================================================//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//============================================================================================================================================//

// // power of 2

// // The power of 2 refers to raising the number 2 to a certain exponent. In other words, it is the result of multiplying 2 by itself a certain number of times. //

//============================================================================================================================================//

// // example

// 1 ---> 2^0
// 2 ---> 2^1
// 4 ---> 2^2
// 8 ---> 2^3
// 16 ---> 2^4

//============================================================================================================================================//

const powerOfTwo = function (num) {
  if (num < 1) return false;

  for (let i = 1; i < num; i++) {
    if (num % 2 !== 0) return false;
    num = num / 2;
  }
  return true;
};

console.log(powerOfTwo(2));
console.log(powerOfTwo(3));
console.log(powerOfTwo(4));
console.log(powerOfTwo(5));
console.log(powerOfTwo(6));
console.log(powerOfTwo(16)); // time complexity O(logn)

// // The time complexity of this function is O(log n), where n is the input number. The function repeatedly divides the number by 2 until it becomes 1, which requires log base 2 of n iterations in the worst case. //

//============================================================================================================================================//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//============================================================================================================================================//

// // unit step

// // The "unit step" function, also known as the Heaviside step function or the unit step function, is a mathematical function denoted as u(t) or θ(t). In other words, the unit step function is a function that returns 0 for negative input values and 1 for non-negative input values. //

//============================================================================================================================================//

// // example

// x = n
//  y = [1,1,1,1,1,1,1,1......n]

//============================================================================================================================================//

const unitStep = function (num) {
  const y = [];

  for (let i = 0; i < num; i++) {
    y.push(1);
  }
  return y;
};

console.log(unitStep(10)); // time complexity O(n)

//============================================================================================================================================//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//============================================================================================================================================//

// // unit ramp

// // The "unit ramp" function, also known as the unit slope function, is a mathematical function denoted as r(t) or tθ(t), where t is the independent variable and θ(t) is the unit step function. In other words, the unit ramp function is a linear function that starts at 0 for negative input values and increases linearly with the input value for non-negative input values. //

//============================================================================================================================================//

// // example

// x = n
// y = [1,2,3,4,5...n]

//============================================================================================================================================//

const unitRamp = function (num) {
  let y = [];

  for (let i = 0; i < num; i++) {
    y.push(i);
  }
  return y;
};

console.log(unitRamp(10)); // time complexity O(n)

//============================================================================================================================================//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//============================================================================================================================================//

// // unit impuls

// // The "unit impulse" function, also known as the Dirac delta function, is a mathematical function that is usually denoted as δ(t). In other words, the unit impulse function has a value of 0 for all values of t except at t = 0, where it is considered to be infinite. However, the Dirac delta function is not a conventional function in the traditional sense, as it is a generalized function or distribution. //

//============================================================================================================================================//

// // example

// x = 0
// y = 1
// y =[1,0,0,0,0,0...n]

//============================================================================================================================================//

const unitImpuls = function (num) {
  const y = [];

  for (let i = 0; i < num; i++) {
    if (i === 0) y.push("Infinity");
    else y.push(0);
  }
  return y;
};

console.log(unitImpuls(10)); // time complexity O(n)

//============================================================================================================================================//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//============================================================================================================================================//

// // recursion

// // Recursion is a programming technique where a function calls itself to solve a smaller version of the problem. It is a powerful concept used in many algorithms and can be particularly useful when dealing with problems that have a recursive structure or can be broken down into smaller subproblems. //

//============================================================================================================================================//

// // recurstve fibonacci

function recursiveFibonacci(n) {
  if (n < 2) return n;

  return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
}

console.log(recursiveFibonacci(6)); // time complexity O(2^n)

// // The time complexity of the recursive Fibonacci algorithm is O(2^n). The reason for this is that the algorithm recursively calls itself twice for each input value, reducing the problem size by 1 each time. As a result, the number of function calls grows exponentially with the input value n. //

//============================================================================================================================================//

// // recursive factorial

const recursiveFactorial = function (n) {
  if (n < 1) return 1;

  return n * recursiveFactorial(n - 1);
};

console.log(recursiveFactorial(3)); // time complexity O(2^n)
console.log(recursiveFactorial(5));
console.log(recursiveFactorial(6));
console.log(recursiveFactorial(8));

// // The time complexity of the recursiveFactorial function you provided is O(n), where n is the input number. In the base case, when n is less than 1, the function immediately returns 1. This operation takes constant time, O(1).  In the recursive case, when n is greater than or equal to 1, the function recursively calls itself with n - 1 as the argument. Each recursive call reduces the problem size by 1. Therefore, the number of recursive calls will be equal to the value of n. //

//============================================================================================================================================//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//============================================================================================================================================//

// // searching algorithm

// // There are various searching algorithms that can be used to find a specific element or value within a collection of data. Here are three commonly used searching algorithms: 1. Linear Search, 2. Binary Search. //

//============================================================================================================================================//

// // linear search

// // Linear search is a simple algorithm that checks each element in a collection one by one until it finds the desired value or reaches the end of the collection. It is suitable for small collections or unsorted data. //

const linearSearch = function (arr, target) {
  for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i] === target) return target;
  }
  return -1;
};

console.log(linearSearch([2, 6, 7, 8, 1, 9], 6)); // time complexity O(n)

//============================================================================================================================================//

// // binaty search

// // Binary search is an efficient algorithm that requires the data to be sorted in ascending or descending order. It works by repeatedly dividing the search space in half and comparing the middle element with the target value. Based on the comparison, it continues the search in the left or right half until the target value is found or the search space is exhausted. //

const binarySearch = function (arr, target) {
  let left = 0;
  let right = arr.length - 1;

  for (let i = 0; i <= arr.length - 1; i++) {
    let middle = Math.floor((left + right) / 2);

    console.log(middle);
    console.log(left);
    console.log(right);

    if (target === arr[middle]) return middle;
    if (target > arr[middle]) left = middle + 1;
    else right = middle - 1;
  }
  return -1;
};

console.log(binarySearch([3, 5, 9, 11, 17, 22, 77], 77)); // time complexity O(log n)
