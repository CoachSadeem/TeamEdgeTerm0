// go over functions and later scope
// we will make a function called multiply 
// that takes in two numbers and returns their product

let product;
let test = 32;
const multiply = (num1, num2) => {
    let product = num1 * num2;
    let test = 5;
    console.log(test);
    return product;
}
// console.log(`Before ${product}`);
product = multiply(3,4);
// console.log(`After ${product}`);
console.log(test);


























// let product;
// console.log(product);
// const multiply = (num1, num2) => {
//     let product = num1 * num2;
//     return product;
// };
// product = multiply(3,4);
// console.log(product);
