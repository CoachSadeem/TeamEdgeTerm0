const READLINE = require("readline-sync");

// // I want a function that takes in a number and doubles it
// // I Also want a while loop that will keep doubling my number till i say no

// const doubleIt = (num) => {
//     return Math.pow(num,2)
// }

// let Number = parseInt(READLINE.question("What would you like your starting number to be? "));
// let doTheLoop = "y"


// while (doTheLoop == "y") {
//     // console.log(Number);
//     Number = doubleIt(Number);

//     for(let i = 0; i <= 5; i++){
//         console.log(doubleIt(i));
//     }

//     doTheLoop = READLINE.question("Would you like to double it again? (y/n) ");
// }
// // 2
// // y
// // y
// // n





















// // const READLINE = require("readline-sync");

// // const doubleIt = (num) => {
// //     return Math.pow(num, 2);
// // };

// // let Number = parseInt(READLINE.question("What would you like your starting number to be? "));
// // let doTheLoop = "y";

// // while (doTheLoop == 'y') {
// //     console.log(Number);
// //     Number = doubleIt(Number);
// //     doTheLoop = READLINE.question("Do you want to double the number? (y/n) ")
// // }



// for(let i = 0; i <= 5; i++){
//     for(let j = 0; j <= 5; j++){
//         console.log(`i: ${i} | j: ${j}`);
//     }
// }

let classArray = [];

let doTheLoop = 'y';

while(doTheLoop == 'y'){
    let element = READLINE.question("What would you like to add to the array? ");
    classArray.push(element);
    doTheLoop = READLINE.question("Would you like to add more? (y/n) ");
    console.log(classArray);
}

console.log(classArray);
