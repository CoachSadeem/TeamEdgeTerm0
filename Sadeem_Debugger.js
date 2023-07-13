const READLINE = require("readline-sync");
// Make a function where you get the 
// sum of the square of num1 and the square of num 2
// coolMath(2, 5) -> 29
// coolMath(1, 1) -> 2
// coolMath(3, 4) -> 25
const coolMath = (num1, num2) => {
    let answer = (num1 * num1) + (num2 * num2);
    return answer;
};

console.log("Lets do some cool math!!! Please give me two numbers: ");
let num1 = parseInt(READLINE.question("First Number: "));
let num2 = Number(READLINE.question("Second Number: "));


console.log(coolMath(num1, num2));
console.log(`${coolMath(2, 5)} -> 29`);
console.log(`${coolMath(1, 1)} -> 2`);
console.log(`${coolMath(3, 4)} -> 25`);





















/**
 * Things That need to be fixed
 * turn string into int
 * have a working return
 * forgetting readline
 * number1 should be num1
 */




/**
 * console.log(coolMath("num1", "5"));
 */

// Fixed Version
// const READLINE = require("readline-sync");

// const coolMath = (num1, num2) => {
//     let answer = (num1 * num1) + (num2 * num2);
//     return answer;
// }

// console.log("Lets do some cool math!!! Please give me two numbers: ");


// num1 = parseInt(READLINE.question("First Number: "));
// num2 = parseInt(READLINE.question("Second Number: "));


// console.log(coolMath(2, 5));
// console.log(coolMath(1, 1));
// console.log(coolMath(3, 4));
// console.log(coolMath(num1, num2));