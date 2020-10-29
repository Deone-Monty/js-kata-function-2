console.log("Hi There!");

// 1. Add (1 point)
// Write a function named "add" which takes two arguments (as input variables) and returns their sum.

// You may use built-in operators in order to finish this kata.

// For example, calling add(2, 4) should return a result of 6.

function add(x, y) {
    return x + y;
}

console.log(add(2, 4));
let a = add(2, 4);
console.log(a)

// 2. Multiply (2 points)
// Write a function named "multiply" which takes two arguments (as input variables) and returns their product.

// You may not use built-in math operators or functions (such as the * multiplication operator). Instead, you will use a WHILE loop which calls your add function from the first kata.

// For example, calling multiply(6, 4) should return a result of 24, which could be expressed by adding 6 to itself 4 times:

// 6 + 6 + 6 + 6 = 24





function add(a, b) {
    return a + b
}

function multiply(a, b) {

    let result = 0;
    let count = 0;

    while(count < b) {
        result = add(a, result)
        count += 1;
        // console.log(result)
    }
    return result;
    
}
// 6 * 4
// multiply (6, 4)
// console.log(multiply(6, 4));
// let tempAnswer = 3 * 5
// console.log(tempAnswer)
// tempAnswer = multiply(3, 5)
// console.log(tempAnswer)

// 3. Power/Exponentiation (2 points)
// Write a function named "power" which takes two arguments ( x and n) and returns the the result of raising x to the nth power.

// You may not use built-in math operators or functions (such as the * multiplication operator), or the ** operator for power/exponentiation). Instead, you will re-use functions you wrote in earlier katas to write this function.

// For example, if we called power(2, 8), we should return 256 by multiplying 2 by itself 8 times:

// 2 * 2 * 2 * 2 * 2 * 2 * 2 * 2 = 256
// And to achieve the correct result for power(3, 4), we would want to multiply 3 by itself 4 times:

// 3 * 3 * 3 * 3 = 81
// See this Wikipedia article for more details on exponentiation.



function Power(x, n) {

    let result = 1;
    let count = 0;

    while(count < n) {
        result = multiply(x,  result);
        count += 1;
        console.log(result)
    }
    return result;
    
}

console.log(Power(2, 8));

console.log(Power(3, 4));


// 4. Factorial (2 points)
// Write a function named "factorial" which takes a single argument and returns the factorial of that value.

// You may not use built-in math operators or functions (such as the * multiplication operator). Instead, you will re-use functions you wrote in earlier katas to write this function.

// A factorial multiplies a given number by every number below it. For example, "5 factorial" (usually symbolized by 5! in Mathematics) would be:

// 5 * 4 * 3 * 2 * 1 = 120
// For example, calling factorial(4) should return a result of 24.

// function factorial(num) {
//     if (num < 0) 
//           return -1;
//     else if (num == 0) 
//         return 1;
//     else {
//         return multiply(num,  factorial(num - 1));
//     }
//   }
//   console.log(factorial(5));

function factorial(count) {
   
    let result = count;
        
     
    while (count > 1) { 
      count--; // decrementation by 1 
      result = multiply(result, count); 
      console.log(result);

    }
     
    
    return result; // 120
  }
  console.log(factorial(5));



